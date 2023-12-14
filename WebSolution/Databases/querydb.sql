-- Active: 1694968636816@@127.0.0.1@3306@tflportal

SELECT * FROM activities where assignedto=15 AND assigneddate='2023-12-14';

select * from employees;
-- activitywise time spent of month 
SELECT  COUNT(*), MONTHNAME(timesheets.timesheetdate), CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)) as time_in_hour,workcategory  from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.employeeid=10  AND MONTHNAME(timesheets.timesheetdate)='November' AND YEAR(timesheets.timesheetdate)='2023'
GROUP BY timesheetentries.workcategory ;


--  activitywise time spent between two dates (can be week , or custom range or single day)
SELECT  COUNT(*), CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)) as time_in_hour,workcategory  from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.employeeid=10  AND timesheets.timesheetdate>='2023-12-04' and  timesheets.timesheetdate<='2023-12-04'
GROUP BY timesheetentries.workcategory ;

-- activitywise time spent YEAR
SELECT  COUNT(*), YEAR(timesheets.timesheetdate), CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)) as time_in_hour,workcategory  from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.employeeid=10  AND YEAR(timesheets.timesheetdate)='2023'
GROUP BY timesheetentries.workcategory ;


-- Get overall time spent between dates by specific employee
SELECT
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.employeeid=10  AND timesheets.timesheetdate>='2023-12-04' and  timesheets.timesheetdate<='2023-12-04';

-- Get overall time spent between dates by all  employees
SELECT  COUNT(*),  YEAR(timesheets.timesheetdate),
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE  timesheets.timesheetdate>='2023-12-04' and  timesheets.timesheetdate<='2023-12-04';




-- get months data of year by acticitytype
SELECT MONTHNAME(timesheets.timesheetdate),
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
FROM timesheetentries
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE YEAR(timesheets.timesheetdate)=YEAR(CURDATE())
GROUP BY MONTH(timesheets.timesheetdate);


-- get weeks data of month by acticitytype
SELECT
DATE_ADD(timesheets.timesheetdate, INTERVAL(1-DAYOFWEEK(timesheets.timesheetdate)) DAY) as start_of_week,
DATE_ADD(timesheets.timesheetdate, INTERVAL(7-DAYOFWEEK(timesheets.timesheetdate)) DAY) as end_of_week,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
FROM timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE MONTH(timesheets.timesheetdate)=MONTH(CURDATE()) and YEAR (timesheets.timesheetdate)=YEAR(CURDATE())
GROUP BY WEEK(timesheets.timesheetdate);

-- get daily data of a week  by acticitytype
SELECT timesheets.timesheetdate,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
FROM timesheetentries
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.timesheetdate >= DATE_ADD(CURDATE(), INTERVAL(1-DAYOFWEEK(CURDATE())) DAY) and 
timesheets.timesheetdate<= DATE_ADD(CURDATE(), INTERVAL(7-DAYOFWEEK(CURDATE())) DAY) 
GROUP BY timesheets.timesheetdate;



select DATE_ADD('2023-12-09', INTERVAL(1-DAYOFWEEK('2023-12-09')) DAY) as start_of_week;

-- list of timesheets of employee
select * from timesheets where  employeeid =10;

-- show a  timesheet and its details by employee and  date
SELECT timesheets.id as timesheetid,timesheets.status,timesheets.statuschangeddate,timesheetentries.id as timesheetentryid,
timesheetentries.work,timesheetentries.workcategory,timesheetentries.description,timesheetentries.fromtime,timesheetentries.totime,
employees.userid
FROM timesheets  
LEFT JOIN  timesheetentries ON  timesheets.id= timesheetentries.timesheetid
INNER JOIN employees ON timesheets.employeeid =employees.id
WHERE timesheets.timesheetdate = @timeSheetDate AND timesheets.employeeId = @employeeId

-- show timesheetdtials of  a timesheet.
SELECT *  from timesheetentries WHERE timesheetid=@timeSheetId

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



INSERT INTO projectallocations(projectid,employeeid,membership,assigndate,status) VALUES(1,2,"developer","2023-03-01","yes");

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

DROP Procedure getActivityCounts;

CREATE PROCEDURE getActivityCounts(OUT  todo INT,OUT inprogress INT,OUT completed INT)
BEGIN
    SELECT COUNT(*) INTO todo FROM activities WHERE status = 'todo';
    SELECT COUNT(*) INTO inprogress FROM activities WHERE status = 'inprogress';
    SELECT COUNT(*) INTO completed FROM activities WHERE status = 'completed';
END;

call getActivityCounts(@todo,@inprogress,@completed);
SELECT @todo,@inprogress,@completed;
