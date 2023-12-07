-- Active: 1696576841746@@127.0.0.1@3306@pms
SELECT * from activities;
SELECT * from timesheetEntries;
SELECT * FROM employees;
show tables;
DROP PROCEDURE if exists getorcreatetimesheet;
CREATE PROCEDURE getorcreatetimesheet(IN timesheetdate date,IN empid INT,OUT timesheetid INT)
BEGIN
DECLARE tid INT;
 SELECT id into tid from timesheets  where timesheets.date =timesheetdate and timesheets.employeeid=empid;
 IF tid IS NULL THEN
 INSERT INTO timesheets(date,employeeid) VALUES (timesheetdate,empid);
 SET timesheetid=LAST_INSERT_ID();
ELSE
 SET timesheetid=tid;
END IF;
END;

 SELECT  timesheetentries.*,activities.title,activities.activitytype  from timesheetentries join activities on timesheetentries.activityid=activities.id WHERE timesheetid= (select id from timesheets WHERE timesheetdate='2023-12-02'and employeeid=10 );


SELECT  COUNT(*), ((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime)))/60)/60) as time_in_hour,workcategory  from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.employeeid=10  
GROUP BY timesheetentries.workcategory ; 


SELECT  COUNT(*), CAST(((SUM(TIME_TO_SEC(TIMEDIFF(totime,fromtime))))/3600)AS DECIMAL(10,2)) as time_in_hour,workcategory  from timesheetentries   
INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
WHERE timesheets.employeeid=10  and timesheets.timesheetdate >= '2023-12-04' and timesheets.timesheetdate<= '2023-12-05'
GROUP BY timesheetentries.workcategory ;







SELECT totime,fromtime, SUM((TIME_TO_SEC(TIMEDIFF(totime,fromtime)))/3600)  FROM timesheetentries INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id WHERE timesheetid in (4,5);
SELECT totime,fromtime, TIME_TO_SEC(TIMEDIFF(totime,fromtime)) from timesheetentries;

 

select timesheetentries.*,activities.title,activities.activitytype  from timesheetentries join activities on timesheetentries.activityid=activities.id WHERE timesheetid=1;
SELECT * FROM timesheets;


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


