
-- Active: 1696576841746@@127.0.0.1@3306@tflportal

DROP PROCEDURE IF EXISTS getWorkUtilization;
-- get task type wise work hours of an employee 

CREATE PROCEDURE getWorkUtilization(IN pempId INT,IN pfromDate DATETIME,ptoDate DATETIME,IN pProjectId INT)
BEGIN

   IF pProjectId =0 THEN
      SELECT   tasks.tasktype , SUM(timesheetentries.hours) AS hours
      FROM timesheetentries
      INNER JOIN timesheets ON timesheetentries.timesheetid=timesheets.id
      INNER JOIN tasks ON  timesheetentries.taskid=tasks.id
      WHERE timesheets.createdby=pempId
      AND timesheets.createdon BETWEEN pfromDate AND ptoDate
      GROUP BY tasks.tasktype;

   ELSEIF  pProjectId <> 0 THEN
      SELECT  tasks.tasktype,SUM(timesheetentries.hours) AS hours
      FROM timesheetentries
      INNER JOIN timesheets ON timesheetentries.timesheetid=timesheets.id
      INNER JOIN tasks ON  timesheetentries.taskid=tasks.id
      INNER JOIN sprinttasks ON  tasks.id=sprinttasks.taskid
      INNER JOIN sprints ON  sprinttasks.sprintid=sprints.id
      WHERE timesheets.createdby=pempId  
      AND sprints.projectid=pProjectId
      AND timesheets.createdon BETWEEN pfromDate AND ptoDate
      GROUP BY tasks.tasktype ;
   END IF;
END;


CALL getWorkUtilization(10,'2024-01-01',"2024-02-21",0);


DROP PROCEDURE IF EXISTS getHoursWorkedForEachProject;
-- get project wise time spent by an employee
CREATE procedure getHoursWorkedForEachProject(IN pempId INT,IN pfromDate VARCHAR (20),IN ptoDate VARCHAR (20))
 BEGIN
   SELECT projects.title AS projectname,projects.id as projectid,
   SUM(timesheetentries.hours) AS hours 
   FROM timesheetentries
   INNER JOIN timesheets ON timesheetentries.timesheetid=timesheets.id
   INNER JOIN tasks ON  timesheetentries.taskid=tasks.id
   INNER JOIN sprinttasks ON  tasks.id=sprinttasks.taskid
   INNER JOIN sprints ON  sprinttasks.sprintid=sprints.id
   INNER JOIN projects ON  sprints.projectid=projects.id
   WHERE timesheets.createdby=pempId 
   AND timesheets.createdon BETWEEN pfromDate AND ptoDate
   GROUP BY projects.id;
END;

CALL getHoursWorkedForEachProject(10,'2024-01-01','2024-01-24');



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



