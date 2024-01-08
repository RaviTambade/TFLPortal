-- Active: 1694968636816@@127.0.0.1@3306@tflportal
DROP PROCEDURE IF EXISTS getemployeeworkhoursbyactivity;
CREATE PROCEDURE getemployeeworkhoursbyactivity(IN employee_id INT,IN interval_type VARCHAR (20),IN project_id INT)
BEGIN
  SET project_id = CASE WHEN project_id = 0 THEN NULL ELSE project_id END;

    IF interval_type='year' THEN 
    SELECT MONTHNAME(timesheets.timesheetdate) as label,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetdetails
    INNER JOIN timesheets ON timesheetdetails.timesheetid=timesheets.id
    INNER JOIN employeework ON  timesheetdetails.employeeworkid=employeework.id
    WHERE timesheets.employeeid=employee_id AND YEAR(timesheets.timesheetdate)=YEAR(CURDATE()) AND employeework.projectid=COALESCE(project_id,employeework.projectid)
    GROUP BY MONTH(timesheets.timesheetdate);
 ELSEIF interval_type='month' THEN 
    SELECT
    DATE_ADD(timesheets.timesheetdate, INTERVAL(1-DAYOFWEEK(timesheets.timesheetdate)) DAY) as label,
    DATE_ADD(timesheets.timesheetdate, INTERVAL(7-DAYOFWEEK(timesheets.timesheetdate)) DAY) as end_of_week,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetdetails
    INNER JOIN timesheets ON timesheetdetails.timesheetid=timesheets.id
    INNER JOIN employeework ON  timesheetdetails.employeeworkid=employeework.id
    WHERE  timesheets.employeeid=employee_id AND MONTH(timesheets.timesheetdate)=MONTH(CURDATE()) AND YEAR (timesheets.timesheetdate)=YEAR(CURDATE()) AND employeework.projectid=COALESCE(project_id,employeework.projectid)
    GROUP BY WEEK(timesheets.timesheetdate);

 ELSEIF interval_type='week' THEN 
 SELECT timesheets.timesheetdate as label,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  employeework.projectworktype="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetdetails
    INNER JOIN timesheets ON timesheetdetails.timesheetid=timesheets.id
    INNER JOIN employeework ON  timesheetdetails.employeeworkid=employeework.id
    WHERE  timesheets.employeeid=employee_id AND timesheets.timesheetdate >= DATE_ADD(CURDATE(), INTERVAL(1-DAYOFWEEK(CURDATE())) DAY) AND 
    timesheets.timesheetdate<= DATE_ADD(CURDATE(), INTERVAL(7-DAYOFWEEK(CURDATE())) DAY)  AND employeework.projectid=COALESCE(project_id,employeework.projectid)
    GROUP BY timesheets.timesheetdate;
  END IF;
END;


 


CALL getemployeeworkhoursbyactivity(10,'year',0);

DROP PROCEDURE IF EXISTS getprojectwiseemployeeworkhours;

CREATE procedure getprojectwiseemployeeworkhours(IN employee_id INT,IN from_date VARCHAR (20),IN to_date VARCHAR (20))
 BEGIN
    SELECT projects.title AS projectname,
    CAST(((SUM( TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ))/3600)AS DECIMAL(10,2)) AS hours 
    FROM timesheetdetails
    INNER JOIN timesheets on timesheetdetails.timesheetid=timesheets.id
    INNER JOIN employeework on timesheetdetails.employeeworkid=employeework.id
    INNER JOIN projects on employeework.projectid=projects.id
    WHERE  timesheets.employeeid=employee_id  AND timesheets.timesheetdate>= from_date AND timesheets.timesheetdate<= to_date
    GROUP BY projects.id;
END;

CALL getprojectwiseemployeeworkhours(10,'2024-01-01','2024-01-01');


 

CREATE PROCEDURE getActivityCounts(OUT  todo INT,OUT inprogress INT,OUT completed INT)
BEGIN
    SELECT COUNT(*) INTO todo FROM activities WHERE status = 'todo';
    SELECT COUNT(*) INTO inprogress FROM activities WHERE status = 'inprogress';
    SELECT COUNT(*) INTO completed FROM activities WHERE status = 'completed';
END;




-- get available leaves of employee
DELIMITER $$
CREATE PROCEDURE getAvailableLeavesOfEmployee
(In employee_Id int,In role_id int,In year int,out remainingSickLeaves int,out remainingCasualleaves int, out remainingPaidLeaves int,out remainingUnpaidLeaves int)
BEGIN
Declare consumedSickLeaves int default 0;
Declare consumedCasualLeaves int default 0;
Declare consumedPaidLeaves int default 0;
Declare consumedUnpaidLeaves int default 0;
Declare sanctionedSickLeaves int;
Declare sanctionedCasualLeaves int;
Declare sanctionedPaidLeaves int;
Declare sanctionedUnpaidLeaves int ;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedCasualLeaves  from employeeleaves where employeeId=employee_Id and leavetype="casual" and status="sanctioned" and year(fromdate)=year;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedSickLeaves  from employeeleaves where employeeId=employee_Id and leavetype="sick" and status="sanctioned" and year(fromdate)=year;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedPaidLeaves  from employeeleaves where employeeId=employee_Id and leavetype="paid" and status="sanctioned" and year(fromdate)=year;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedUnpaidLeaves  from employeeleaves where employeeId=employee_Id and leavetype="unpaid" and status="sanctioned" and year(fromdate)=year;
select sick,casual,paid,unpaid Into sanctionedSickLeaves,sanctionedCasualLeaves,sanctionedPaidLeaves,sanctionedUnpaidLeaves from rolebasedleaves where roleid=role_id ;
set remainingSickLeaves=sanctionedSickLeaves-consumedSickLeaves;
set remainingcasualLeaves=sanctionedCasualLeaves-consumedCasualLeaves;
set remainingPaidLeaves=sanctionedPaidLeaves-consumedPaidLeaves;
set remainingUnpaidLeaves=sanctionedUnpaidLeaves-consumedUnpaidLeaves;
END $$
DELIMITER ;


