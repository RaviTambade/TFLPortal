
-- Active: 1694968636816@@127.0.0.1@3306@tflportal
DROP PROCEDURE IF EXISTS getWorkUtilization;
-- get task type wise work hours of an employee 

-- from date todate
CREATE PROCEDURE getWorkUtilization(IN empId INT,IN interval_type VARCHAR (20),IN projectId INT)
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


CALL getTaskWorkHoursOfEmployee(10,'month',0);

DROP PROCEDURE IF EXISTS getHoursWorkedForEachProject;
-- get project wise time spent by an employee
CREATE procedure getHoursWorkedForEachProject(IN employee_id INT,IN from_date VARCHAR (20),IN to_date VARCHAR (20))
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

CALL getHoursWorkedForEachProject(10,'2024-01-01','2024-01-12');




--Personalized data




-- get available leaves of employee
DELIMITER $$
CREATE PROCEDURE getLeavesAvailable
(IN pempId INT,IN proleId INT,IN pyear INT,OUT psick INT,OUT pcasual INT, OUT ppaid INT,OUT punpaid INT)
BEGIN

DECLARE usedSick INT DEFAULT 0;
DECLARE usedCasual INT DEFAULT 0;
DECLARE usedPaid INT DEFAULT 0;
DECLARE usedUnpaid INT DEFAULT 0;
DECLARE sanctionedSick INT;
DECLARE sanctionedCasual INT;
DECLARE sanctionedPaid INT;
DECLARE sanctionedUnpaid INT ;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedSick  
FROM leaveapplications 
WHERE employeeId=pempId AND leavetype="sick" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedCasual  
FROM leaveapplications 
WHERE employeeId=pempId AND leavetype="casual" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedPaid  
FROM leaveapplications 
WHERE employeeId=pempId AND leavetype="paid" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedUnpaid  
FROM leaveapplications 
WHERE employeeId=pempId AND leavetype="unpaid" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT sick,casual,paid,unpaid INTO sanctionedSick,sanctionedCasual,sanctionedPaid,sanctionedUnpaid 
FROM leaveallocations 
WHERE roleid=proleId ;

SET psick=sanctionedSick-usedSick;
SET pcasual=sanctionedCasual-usedCasual;
SET ppaid=sanctionedPaid-usedPaid;
SET punpaid=sanctionedUnpaid-usedUnpaid;
END $$
DELIMITER ;

-- get consumed leaves of employee
DELIMITER $$
CREATE PROCEDURE getConsumedLeaves
(IN pempId INT,IN pyear INT,OUT psick INT,OUT pcasual INT, OUT ppaid INT,OUT punpaid INT)
BEGIN
DECLARE usedSick INT DEFAULT 0;
DECLARE usedCasual INT DEFAULT 0;
DECLARE usedPaid INT DEFAULT 0;
DECLARE usedUnpaid INT DEFAULT 0;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedCasual 
FROM leaveapplications
WHERE employeeId=pempId AND leavetype="casual" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedSick  
FROM leaveapplications
WHERE employeeId=pempId AND leavetype="sick" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedPaid
FROM leaveapplications 
WHERE employeeId=pempId AND leavetype="paid" AND status="sanctioned" AND year(fromdate)=pyear;

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO usedUnpaid  
FROM leaveapplications 
WHERE employeeId=pempId AND leavetype="unpaid" AND status="sanctioned" AND year(fromdate)=pyear;

SET psick=usedSick;
SET pcasual= usedCasual;
SET ppaid=usedPaid;
SET punpaid=usedUnpaid;
END $$
DELIMITER ;


-- calculate month salary
-- calculate month salary
DELIMITER $$
CREATE PROCEDURE calculatesalary(IN pempId INT ,IN pmonth INT,IN pyear INT)
BEGIN

DECLARE workingdays INT DEFAULT 0;
DECLARE consumedpaidleaves INT DEFAULT 0;
DECLARE monthlybasicsalary DOUBLE;
DECLARE monthlyhra DOUBLE;
DECLARE dailyallowance DOUBLE;
DECLARE variablepayamount DOUBLE DEFAULT 0;
DECLARE leaveTravelallowance DOUBLE;
DECLARE totalamount DOUBLE;
DECLARE deduction DOUBLE;
DECLARE Pf DOUBLE DEFAULT 500;
DECLARE tax DOUBLE DEFAULT 1000;

SELECT  COUNT(*) INTO workingdays FROM timesheets
WHERE createdby =pempId AND MONTH(createdon)=pmonth AND YEAR(createdon)=pyear AND status="approved";

SELECT coalesce(sum(datediff(todate,fromdate)+1),0) INTO consumedpaidleaves FROM leaveapplications
WHERE employeeid = pempId
AND MONTH(fromdate)=pmonth AND YEAR(fromdate)=pyear AND status="sanctioned"
AND leavetype<>"unpaid" GROUP BY employeeid;

SELECT da,lta,variablepay,basicsalary,hra INTO dailyallowance,leaveTravelallowance,
variablepayamount,monthlybasicsalary,monthlyhra FROM salarystructures WHERE employeeid=pempId;

SET deduction=pf+tax;
SET totalamount = ((dailyallowance*(workingdays+consumedpaidleaves))+monthlybasicsalary+monthlyhra+leaveTravelallowance+variablepayamount)-(deduction);
SELECT totalamount,monthlybasicsalary,variablepayamount,monthlyhra,dailyallowance,leaveTravelallowance,pf,tax,deduction,workingdays,consumedpaidleaves;
END $$
DELIMITER ;



