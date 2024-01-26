-- Active: 1696576841746@@127.0.0.1@3306@tflportal
DROP PROCEDURE IF EXISTS getemployeeworkhoursbyactivity;
CREATE PROCEDURE getemployeeworkhoursbyactivity(IN employee_id INT,IN interval_type VARCHAR (20),IN project_id INT)
BEGIN
  SET project_id = CASE WHEN project_id = 0 THEN NULL ELSE project_id END;

    IF interval_type='year' THEN 
    SELECT MONTHNAME(timesheets.createdon) as label,
    CAST(((SUM( CASE WHEN  tasks.tasktype="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  tasks.tasktype="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  tasks.tasktype="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  tasks.tasktype="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  tasks.tasktype="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  tasks.tasktype="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  tasks.tasktype="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  tasks.tasktype="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  tasks.tasktype="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  tasks.tasktype="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetentries
    INNER JOIN timesheets ON timesheetentries.timesheetid=timesheets.id
    INNER JOIN tasks ON  timesheetentries.taskid=tasks.id
    WHERE timesheets.createdby=employee_id AND YEAR(timesheets.createdon)=YEAR(CURDATE()) AND tasks.projectid=COALESCE(project_id,tasks.projectid)
    GROUP BY MONTH(timesheets.createdon);
 ELSEIF interval_type='month' THEN 
    SELECT
    DATE_ADD(timesheets.createdon, INTERVAL(1-DAYOFWEEK(timesheets.createdon)) DAY) as label,
    DATE_ADD(timesheets.createdon, INTERVAL(7-DAYOFWEEK(timesheets.createdon)) DAY) as end_of_week,
    CAST(((SUM( CASE WHEN  tasks.tasktype="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  tasks.tasktype="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  tasks.tasktype="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  tasks.tasktype="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  tasks.tasktype="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  tasks.tasktype="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  tasks.tasktype="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  tasks.tasktype="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  tasks.tasktype="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  tasks.tasktype="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetentries
    INNER JOIN timesheets ON timesheetentries.timesheetid=timesheets.id
    INNER JOIN tasks ON  timesheetentries.taskid=tasks.id
    WHERE  timesheets.createdby=employee_id AND MONTH(timesheets.createdon)=MONTH(CURDATE()) AND YEAR (timesheets.createdon)=YEAR(CURDATE()) AND tasks.projectid=COALESCE(project_id,tasks.projectid)
    GROUP BY WEEK(timesheets.createdon);

 ELSEIF interval_type='week' THEN 
 SELECT timesheets.createdon as label,
    CAST(((SUM( CASE WHEN  tasks.tasktype="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  tasks.tasktype="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  tasks.tasktype="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  tasks.tasktype="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  tasks.tasktype="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  tasks.tasktype="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  tasks.tasktype="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  tasks.tasktype="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  tasks.tasktype="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  tasks.tasktype="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetentries
    INNER JOIN timesheets ON timesheetentries.timesheetid=timesheets.id
    INNER JOIN tasks ON  timesheetentries.taskid=tasks.id
    WHERE  timesheets.createdby=employee_id AND timesheets.createdon >= DATE_ADD(CURDATE(), INTERVAL(1-DAYOFWEEK(CURDATE())) DAY) AND 
    timesheets.createdon<= DATE_ADD(CURDATE(), INTERVAL(7-DAYOFWEEK(CURDATE())) DAY)  AND tasks.projectid=COALESCE(project_id,tasks.projectid)
    GROUP BY timesheets.createdon;
  END IF;
END;


 


CALL getemployeeworkhoursbyactivity(10,'month',0);

DROP PROCEDURE IF EXISTS getprojectwiseemployeeworkhours;

CREATE procedure getprojectwiseemployeeworkhours(IN employee_id INT,IN from_date VARCHAR (20),IN to_date VARCHAR (20))
 BEGIN
    SELECT projects.title AS projectname,projects.id as projectid,
    CAST(((SUM( TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ))/3600)AS DECIMAL(10,2)) AS hours 
    FROM timesheetentries
    INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
    INNER JOIN tasks on timesheetentries.taskid=tasks.id
    INNER JOIN projects on tasks.projectid=projects.id
    WHERE  timesheets.createdby=employee_id  AND timesheets.createdon>= from_date AND timesheets.createdon<= to_date
    GROUP BY projects.id;
END;

CALL getprojectwiseemployeeworkhours(10,'2024-01-01','2024-01-12');


 

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



-- get available leaves of employee
DELIMITER $$
CREATE PROCEDURE getConsumedLeavesOfEmployee
(In employee_Id int,In role_id int,In year int,out SickLeaves int,out Casualleaves int, out PaidLeaves int,out UnpaidLeaves int)
BEGIN
Declare consumedSickLeaves int default 0;
Declare consumedCasualLeaves int default 0;
Declare consumedPaidLeaves int default 0;
Declare consumedUnpaidLeaves int default 0;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedCasualLeaves  from employeeleaves where employeeId=employee_Id and leavetype="casual" and status="sanctioned" and year(fromdate)=year;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedSickLeaves  from employeeleaves where employeeId=employee_Id and leavetype="sick" and status="sanctioned" and year(fromdate)=year;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedPaidLeaves  from employeeleaves where employeeId=employee_Id and leavetype="paid" and status="sanctioned" and year(fromdate)=year;
select coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedUnpaidLeaves  from employeeleaves where employeeId=employee_Id and leavetype="unpaid" and status="sanctioned" and year(fromdate)=year;

set SickLeaves=consumedSickLeaves;
set casualLeaves= consumedCasualLeaves;
set PaidLeaves=consumedPaidLeaves;
set UnpaidLeaves=consumedUnpaidLeaves;
END $$
DELIMITER ;

call getConsumedLeavesOfEmployee(12,4,2023,@SickLeaves,@Casualleaves,@PaidLeaves,@UnpaidLeaves);
select @SickLeaves,@Casualleaves,@PaidLeaves,@UnpaidLeaves;


DELIMITER $$
create procedure calculatesalary(IN employee_Id INT ,IN month INT,In Year INT)
BEGIN
Declare workingdays int default 0;
Declare consumedpaidleaves int default 0;
Declare monthlybasicsalary double;
Declare monthlyhra double;
Declare dailyallowance double;
Declare variablepayamount double default 0;
Declare leaveTravelallowance double;
Declare totalamount double;
Declare deduction double;
Declare Pf double default 500;
Declare tax double default 1000;
SELECT  COUNT(*) Into workingdays from timesheets
WHERE employeeid =employee_Id AND MONTH(createdon)=month AND YEAR(createdon)=Year AND status="approved";

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) Into consumedpaidleaves From employeeleaves
WHERE employeeid = employee_Id
AND MONTH(fromdate)=month AND YEAR(fromdate)=Year AND status="sanctioned"
AND leavetype<>"unpaid" group by employeeid;

SELECT da,(lta/12),variablepay,(basicsalary/12),CAST((hra/12)as DECIMAL(10,2)) Into dailyallowance,leaveTravelallowance,
variablepayamount,monthlybasicsalary,monthlyhra FROM salarystructures WHERE employeeid=employee_Id;
set deduction=pf+tax;
set totalamount = ((dailyallowance*(workingdays+consumedpaidleaves))+monthlybasicsalary+monthlyhra+leaveTravelallowance+variablepayamount)-(deduction);

select totalamount,monthlybasicsalary,variablepayamount,monthlyhra,dailyallowance,leaveTravelallowance,pf,tax,deduction,workingdays,consumedpaidleaves;
END $$
DELIMITER ;


call calculatesalary(10,1,2024);

