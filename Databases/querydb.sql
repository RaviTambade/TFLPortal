-- Active: 1694968636816@@127.0.0.1@3306@pms
SELECT * from projectallocations;
SELECT * from timesheetEntries;
SELECT * FROM userstories;
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



select timesheetentries.*,activities.title,activities.activitytype  from timesheetentries join activities on timesheetentries.activityid=activities.id WHERE timesheetid=1;
SELECT * FROM activities;