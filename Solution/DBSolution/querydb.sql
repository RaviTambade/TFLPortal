-- Active: 1694968636816@@127.0.0.1@3306@tflportal


-- LeaveManagement

-- get all leaveapplications
select * from leaveapplications;

-- get all leavesallocated
select * from roleleaveallocations;

-- get monthly leave count of employee by leavetype
SELECT leavetype,coalesce(sum(datediff(todate,fromdate)+1),0) as leavecount From leaveapplications
WHERE employeeid = 10 AND MONTH(fromdate)=4 AND YEAR(fromdate)=@year AND status="sanctioned" group by leavetype;

-- get leaves of employee;
select * from leaveapplications where employeeid =1;

-- get all appliedleaves of employee
select * from leaveapplications where employeeid =1 and status="applied";

-- get leave of particular date.
select * from leaveapplications where status="sanctioned" and fromdate<="2024-01-26" and todate>="2024-04-26";

-- get leavesallocated of particular role
select * from leavesallocated where id =1;

-- get leaveapplication details
select * from leaveapplications where id=1;

-- get sanctioned leaves
select * from leaveapplications where status="sanctioned";

-- get leaveapplication details of employees of particular project
select projectmembers.employeeid,leaveapplications.status,leaveapplications.leavetype,
                leaveapplications.createdon,leaveapplications.fromdate,leaveapplications.todate from projects
                inner join projectmembers on projects.id=projectmembers.projectid
                inner join leaveapplications on leaveapplications.employeeid=projectmembers.employeeid 
                inner join employees on leaveapplications.employeeid=employees.id where projects.id=1 
                and leaveapplications.status="sanctioned";


-- get employee leaveapplication of particular month
SELECT leavetype,COALESCE(SUM(DATEDIFF(todate, fromdate) + 1), 0) AS consumedleaves,MONTH(fromdate) AS month FROM leaveapplications
 WHERE employeeId = 10 AND status = "sanctioned" AND YEAR(fromdate) = 2024 GROUP BY leavetype,MONTH(fromdate);


-- get leaves allocated of role
select sick,casual,paid,unpaid from leavesallocated where roleid=2 and financialyear=2024;

-- get consumed leaves of employee
call getConsumedLeavesOfEmployee(12,4,2023,@SickLeaves,@Casualleaves,@PaidLeaves,@UnpaidLeaves);

-- get available leaves of employee
call getAvailableLeavesOfEmployee(12,4,2023,@SickLeaves,@Casualleaves,@PaidLeaves,@UnpaidLeaves);



-- ProjectMember

-- get all employees on bench
SELECT * FROM employees
 WHERE id not in (SELECT employeeid FROM projectmembers GROUP BY employeeid HAVING COUNT(CASE WHEN status = 'yes' THEN 1 END) > 0)


-- get members of project
Select * from projectmembers where projectid=1 and status="yes";

-- PayrollManagement

-- get all salary slips of employee
select * from salaryslips where employeeid=1;

-- get salary slip details 
select * from salaryslips where id=1;

-- get userids of unpaid employees in month
SELECT employees.userid FROM employees LEFT JOIN salaries ON employees.id = salaries.employeeid
AND MONTH(salaries.paydate) = 4 AND YEAR(salaries.paydate) = 2024 WHERE salaries.employeeid IS NULL


-- get salaryslips of paid employees in month
select * from salaryslips where MONTH(paydate)=4 and YEAR(paydate)=2024;

-- get leavesallocated details of employee
select * from salarystructures where employeeid=1;


-- HRManagement

-- get employeedetails 
select * from employees where id=1;

-- get details of user
select * from employees where userid=5;


-- get timesheets of employee between dates
SELECT timesheets.* , COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour from timesheets
LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
WHERE  createdby =10  AND createdon BETWEEN '2024-01-01' AND '2024-01-09' 
GROUP BY createdon;

-- get timesheets for approval
SELECT timesheets.* ,SUM(timesheetentries.durationinhours) AS time_in_hour  FROM timesheets
INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
INNER JOIN employees ON timesheets.createdby =employees.id
WHERE  status ="submitted" AND  createdon BETWEEN '2024-01-01' AND '2024-01-13' AND  timesheets.createdby IN (
SELECT projectmembers.employeeid from projectmembers
INNER JOIN projects on projectmembers.projectid=projects.id
WHERE projects.managerid=7 AND projectmembers.status='yes'
)GROUP BY createdon;


-- get timesheet of employee by date
SELECT *, COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour
FROM timesheets
LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id    
WHERE timesheets.createdon = '2024-01-12' AND timesheets.createdby = 10;

-- get timesheet of employee by timesheetId
SELECT timesheets.*, COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour
FROM timesheets
INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id    
WHERE timesheets.id = 5;

-- get timesheet entries of a timesheet
SELECT * FROM timesheetentries
WHERE timesheetentries.timesheetid=4;

-- get timesheet entry by Id
SELECT * FROM timesheetentries WHERE timesheetentries.id=22;

-- get working days of employee of a month
SELECT COUNT(*) AS WorkingDays FROM timesheets WHERE createdby=10
AND status='approved' AND MONTH(createdon)=1 AND YEAR(createdon)=2024;



SELECT sprintmaster.* FROM sprintmaster where projectid=4;

SELECT id, projectid FROM tasks  ORDER BY id;
where assignedto=15 AND assigneddate='2023-12-14';

SELECT COUNT(*) AS WorkingDays FROM timesheets WHERE employeeid=10 AND status='approved' AND MONTH(timesheetdate)=12;

-- list of timesheets of employee
select * from timesheets where  employeeid =10;

-- show a  timesheet and its details by employee and  date
SELECT timesheets.id as timesheetid,timesheets.status,timesheets.statuschangeddate,timesheetentries.id as timesheetentryid,
timesheetentries.work,timesheetentries.workcategory,timesheetentries.description,timesheetentries.fromtime,timesheetentries.totime,
employees.userid
FROM timesheets  
LEFT JOIN  timesheetentries ON  timesheets.id= timesheetentries.timesheetid
INNER JOIN employees ON timesheets.employeeid =employees.id
WHERE timesheets.timesheetdate = @timesheetDate AND timesheets.employeeId = @employeeId

-- show timesheetdtials of  a timesheet.
SELECT *  from timesheetentries WHERE timesheetid=@timesheetId

-- show me the list of employees who are in the bench.
select * from projectallocations where status="no";

-- show the list of employees who are on the project.
select * from projectallocations where status="yes";
--  give me  projects of particular empoloyee.
select * from projectallocations where employeeid=1;
--  give me the projects in particular dates.
select * from projectallocations where assigndate BETWEEN "2023-11-03" AND "2023-12-01";

-- give me list of empoyees particular project
select * from projectallocations where projectid=1;
select * FROM activities;

select activities.* ,e1.userid as assignbyuserid,e2.userid as assigntouserid,projects.title
from activities 
INNER JOIN employees e1  on activities.assignedto =e1.id 
INNER JOIN employees e2   on  activities.assignedby=e2.id
INNER JOIN projects ON activities.projectid =projects.id WHERE activities.id=1;




-- show all activities for a particular project
select * from activities where assignedto=11;
-- show all activities fromdate todate
select * FROM activities where assigneddate BETWEEN '2023-10-29' AND '2023-12-02' ORDER BY assigneddate;


-- show all activities of project
SELECT * from activities where projectid=1;

-- SHOW all activities;
SELECT * from activities;

 HEAD

SELECT id
FROM employees
WHERE id not in (
    SELECT employeeid
    FROM projectallocations
    WHERE status = 'no');

-- all unassigned employee
SELECT id
FROM employees
WHERE id not in  
(SELECT DISTINCT employeeid
FROM projectallocations
GROUP BY employeeid
HAVING COUNT(CASE WHEN status = 'yes' THEN 1 END) > 0);


-- Release employee from project
Update projectallocations set releasedate="2023-03-03",status="no" where projectid=1 and employeeId=2;

-- All assigned employees
Select * from projectallocations inner join employees where projectallocations.status="yes";

-- get project allocations between "2023-02-03" and "2023-04-05"
select * from projectallocations where assigndate BETWEEN "2023-02-03" AND "2023-04-05";

-- get unassigned project of employee
select * from employees inner join projectallocations on projectallocations.employeeid=employees.id where projectallocations.status="no" and projectallocations.projectid=1;

-- get project allocations of particular employee between dates "2023-02-03" and "2023-04-05"
select * from projectallocations where employeeid=1 and assigndate BETWEEN "2023-02-03" AND "2023-04-05";


SELECT @todo,@inprogress,@completed;

-- get monthly leave count of employee by leavetype
SELECT leavetype,COALESCE(SUM(DATEDIFF(todate, fromdate) + 1), 0) AS consumedleaves,MONTH(fromdate) AS month FROM employeeleaves 
WHERE employeeId = 12 AND status = "sanctioned" AND YEAR(fromdate) = 2023 GROUP BY leavetype,MONTH(fromdate);
    



-- this query gives us employees of project
select DISTINCT(employees.userid) from employees INNER JOIN tasks ON employees.id=tasks.assignedto
 INNER JOIN projects ON tasks.projectid=projects.id WHERE projects.id =4;


SELECT * from projects where managerid =8;

SELECT * from tasks where projectid =4;

SELECT * from projectmembership where projectid=4 and employeeid=10;


SELECT DISTINCT(employees.userid) from employees INNER JOIN  projectmembership on employees.id = projectmembership.employeeid where projectmembership.projectid=4;

-- this query gives tasks of particular sprint
SELECT * from tasks where sprintid in (SELECT id from sprintmaster where id=3);


select tasks.* , employees.userid  from tasks 
INNER join sprintmaster on tasks.sprintid=sprintmaster.id
INNER join employees ON tasks.assignedto=employees.id
WHERE sprintmaster.id=2;

SELECT employees.userid
                         FROM employees 
                         LEFT JOIN salaries ON employees.id = salaries.employeeid
                        AND MONTH(salaries.paydate) = 1
                        AND YEAR(salaries.paydate) = 2024
             WHERE salaries.employeeid IS NULL



-- task releted queries

--This query used for get all task.
select * from tasks;

--This query is used for get all task of particular project.
select * from tasks where  projectid =1;

--This query is used for get all task of project of particular tasktype.
select * from tasks where  projectid =1 and tasktype='task';

--This query is used to get all task of project of particular member.
select * from tasks where  projectid =1 and assignedto=10;


--This query is used to get all task of project with particular status and member.
select * from tasks where  projectid =1 and status="inprogress" and assignedto=10;

--This query is used to get all tasks of sprint with particular status and member.
select * from tasks where  sprintid =1 and status='inprogress' and assignedto=10;

--This query is used to get all tasks and members  data .
select tasks.* ,e1.userid as assignbyuserid,e2.userid as assigntouserid,projects.title as projectname from tasks INNER JOIN employees e1  on tasks.assignedto =e1.id INNER JOIN employees e2   on  tasks.assignedby=e2.id INNER JOIN projects ON tasks.projectid =projects.id WHERE tasks.id=1;


--This query is used to get all tasks of members.
select * from tasks where  assignedto =10;

--This query is used for get all tasks between particular dates.
select * FROM tasks where assigneddate BETWEEN '2023-01-01' AND '2024-01-01' ORDER BY assigneddate;


--This query is used for get all tasks of members between  particular dates.
select * FROM tasks where assigneddate BETWEEN '2023-01-01' AND '2023-01-01' And assignedto=10 ORDER BY assigneddate;


--This query is used to update task.
Update  tasks set startdate='2023-01-01',status='inprogress' where id =1;


--this query is used to delete task .
delete from tasks where id= 1;




-- sprint releted query


--this query is used for get all sprints of project between particular dates.
SELECT * FROM sprints WHERE projectid=1 AND sprints.startdate<='2023-01-01' AND sprints.enddate>='2023-01-01';

--This query is used for get all sprints of projects.
SELECT * FROM sprints where projectid=1;


--This query is used for all tasks,employess releted data of particular sprint.
select tasks.* , employees.userid  from tasks 
                           INNER join sprints on tasks.sprintid=sprints.id
                           INNER join employees ON tasks.assignedto=employees.id
                           WHERE sprints.id=1;

 --This query is used for insert sprint .                          
Insert into sprints(title,goal,startdate,enddate,projectid) values ('sprint','sprint','2023-01-01','2023-01-01',1);

--This query is used for delete sprint.
delete from sprints where id = 1;

--This query is used for update sprint.
Update sprints set title="sprint",startdate='2023-01-01',enddate='2023-01-01',projectid=1 where id = 6 ;


--project releted queries

--This query is used to get all projects.
select * from projects;


--This query is used for gives employees project.
SELECT * FROM projects WHERE projects.id=9 OR
                id IN( SELECT DISTINCT projectid FROM projectmembership WHERE projectmembership.employeeid=@employeeid )
                ;


--This query is used to insert project data.
Insert into projects (title,startdate,enddate,description,managerid,status) values(@title,@startdate,@enddate,@description,@managerid,@status);


--This query is used to get particular project data.
select * from projects where id =@projectId;


--This query is used for gives members projects.

select * from projects where managerid=@managerId;

--This query is used to get user id for members of project.
SELECT DISTINCT(employees.userid) as userid FROM employees INNER JOIN projectmembership ON employees.id = projectmembership.employeeid WHERE projectmembership.projectid = @projectId;


