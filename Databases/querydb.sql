-- Active: 1694968636816@@127.0.0.1@3306@pms
SELECT * from timesheetEntries;

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

CALL getorcreatetimesheet('2013-01-15',10,@timesheetid);
SELECT @timesheetid;
