-- Active: 1696576841746@@127.0.0.1@3306@tflportal


-- LeaveManagement

-- get all leaveapplications
SELECT * from leaveapplications;

-- get leaveapplication details
SELECT * from leaveapplications where id=10;

-- get sanctioned leaves
SELECT * from leaveapplications where status="sanctioned";

-- get leaves of  an employee;
SELECT * from leaveapplications where employeeid =10;

-- get all leave applications which are applied of employee
SELECT * from leaveapplications where employeeid =15 and status="applied";

-- get leave application in between .
SELECT * from leaveapplications where status="sanctioned" and fromdate<="2024-01-14" and todate>="2024-01-15";

-- get all leaveallocations
SELECT * from leaveallocations;

-- get leaveallocations of particular role
SELECT * from leaveallocations where roleid =1;

-- get leaves allocated of role
SELECT sick,casual,paid,unpaid from leaveallocations where roleid=2 and financialyear=2023;

-- get monthly leave count of an employeeid= 4 , month=4  and year 2023 by leavetype

SELECT leavetype,coalesce(sum(datediff(todate,fromdate)+1),0) as leavecount From leaveapplications
WHERE employeeid = 10 AND MONTH(fromdate)=1 AND YEAR(fromdate)=2024 AND status="sanctioned" group by leavetype;

-- get employee leaveapplication details for year 2024 group by month
SELECT leavetype,COALESCE(SUM(DATEDIFF(todate, fromdate) + 1), 0) AS consumedleaves,MONTH(fromdate) AS month FROM leaveapplications
WHERE employeeId = 10 AND status = "sanctioned" AND YEAR(fromdate) = 2024 GROUP BY leavetype,MONTH(fromdate);


-- get sanctioned leaveapplication details of an employee of belong to project 1
SELECT projectallocations.employeeid,leaveapplications.status,leaveapplications.leavetype,
leaveapplications.createdon,leaveapplications.fromdate,leaveapplications.todate from projects
inner join projectallocations on projects.id=projectallocations.projectid
inner join leaveapplications on leaveapplications.employeeid=projectallocations.employeeid 
inner join employees on leaveapplications.employeeid=employees.id where projects.id=1 
and leaveapplications.status="sanctioned";



-- get consumed leaves of employee
call getConsumedLeavesOfEmployee(12,4,2023,@SickLeaves,@Casualleaves,@PaidLeaves,@UnpaidLeaves);
-- get available leaves of employee
call getAvailableLeavesOfEmployee(12,4,2023,@SickLeaves,@Casualleaves,@PaidLeaves,@UnpaidLeaves);


-- PayrollManagement

-- get all salary slips of employee
SELECT * from salaryslips where employeeid=11;

-- get salary slip details 
SELECT * from salaryslips where id=1;

-- get employees who have not been paid in month 4 for year 2024
SELECT employees.* FROM employees 
LEFT JOIN salaryslips ON employees.id = salaryslips.employeeid
AND MONTH(salaryslips.paydate) = 1 AND YEAR(salaryslips.paydate) = 2024
WHERE  salaryslips.employeeid IS NULL;


-- get all salaryslips  which have been processed  in month=4 and year 2024
SELECT * from salaryslips where MONTH(paydate)=1 and YEAR(paydate)=2024;

-- get leaveallocations details of employee
SELECT * from salarystructures where employeeid=1;


-- HRManagement

-- get employeedetails 
SELECT * from employees where id=1;



--Project  Management Queries

-- All assigned employees
SELECT employees.* from employees
INNER JOIN  projectallocations on employees.id = projectallocations.employeeid 
where  projectallocations.status="yes";

-- get employee working on project with projectid=4
SELECT employees.* from employees
INNER JOIN  projectallocations on employees.id = projectallocations.employeeid 
where projectallocations.projectid=4  and projectallocations.status="yes";

-- get member details inforamtion about project assigned for particular project
Select * from projectallocations where projectid=1 and status="yes";

--  give me  projects of particular empoloyee.
SELECT * from projectallocations where employeeid=15;

-- give me list of empoyees particular project
SELECT * from projectallocations where projectid=1;

-- get all employees which are not assigend to any project
SELECT * FROM employees
WHERE id not in (
SELECT employeeid FROM projectallocations 
GROUP BY employeeid HAVING COUNT(CASE WHEN status = 'yes' THEN 1 END) > 0)



-- task releted queries

--This query used for get all task.
SELECT * from tasks;

--This query is used for get all task of particular project.
SELECT * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=1;

--This query is used for get all task of project of particular tasktype.
SELECT * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.tasktype='task'and sprints.projectid=1;


--This query is used to get all task of project of particular member.
SELECT * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.assignedto=10 and sprints.projectid=1;


--This query is used to get all task of project with particular status and member.

SELECT tasks.* from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.status="inprogress" and sprints.projectid=1 and tasks.assignedto=10;


SELECT tasks.* from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=4 and tasks.assignedon<='2024-01-06 'and tasks.status="inprogress"OR tasks.status="todo";


--This query is used to get all tasks of sprint with particular status and member.
SELECT * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE tasks.status="inprogress" and sprints.id=1 and tasks.assignedto=10;


--This query is used to get all tasks of members.
SELECT * from tasks where  assignedto =10;

--This query is used for get all tasks between particular dates.
SELECT * FROM tasks where assignedon BETWEEN '2023-01-01' AND '2024-01-01' ORDER BY assignedon;


--This query is used for get all tasks of members between  particular dates.
SELECT * FROM tasks where assignedon BETWEEN '2023-01-01' AND '2024-01-01' And assignedto=10 ORDER BY assignedon;

--getTaskCountByStatus for project Id (IN)

--BI releted queries
SELECT 
        COUNT(CASE WHEN status = 'todo' THEN 1 END) AS todo,
        COUNT(CASE WHEN status = 'inprogress' THEN 1 END) AS inprogress,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed
    FROM tasks INNER join sprinttasks on sprinttasks.taskid=tasks.id
    INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=4;

--getTaskCountByStatus for emp Id (IN)

SELECT 
        COUNT(CASE WHEN status = 'todo' THEN 1 END) AS todo,
        COUNT(CASE WHEN status = 'inprogress' THEN 1 END) AS inprogress,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed
    FROM tasks INNER join sprinttasks on sprinttasks.taskid=tasks.id
    INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.projectid=4 AND tasks.assignedto=15;


-- sprint releted query

-- get all tasks of sprint with id=1
SELECT * from tasks INNER JOIN sprinttasks on tasks.id=sprinttasks.taskid
INNER join sprints on sprints.id=sprinttasks.sprintid WHERE sprints.id=1;


--this query is used for get all sprints of project between particular dates.
SELECT * FROM sprints WHERE projectid=1 AND sprints.startdate<='2024-01-01' AND sprints.enddate>='2024-01-07';

--This query is used for get all sprints of projects.
SELECT * FROM sprints where projectid=1;


--project releted queries


--This query is used to get particular project data.
SELECT * from projects where id =1;



-- timesheet


-- get timesheets of employee between dates
SELECT timesheets.* , COALESCE(SUM(timesheetentries.durationinhours),0) AS time_in_hour from timesheets
LEFT JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
WHERE  createdby =10  AND createdon BETWEEN '2024-01-01' AND '2024-01-09' 
GROUP BY createdon;

-- get timesheets for approval
SELECT timesheets.* ,COALESCE(SUM(timesheetentries.durationinhours),0) AS totalhours  FROM timesheets
INNER JOIN timesheetentries on timesheetentries.timesheetid=timesheets.id
WHERE  status ="submitted" AND createdon BETWEEN '2024-01-01' AND '2024-01-13'
AND  timesheets.createdby IN (
SELECT projectallocations.employeeid from projectallocations
WHERE projectallocations.status='yes'  
AND projectid IN (SELECT projectid from projectallocations WHERE employeeid=7 
AND title='manager' ))GROUP BY createdon;


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