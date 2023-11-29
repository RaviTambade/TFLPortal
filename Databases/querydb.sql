<<<<<<< HEAD

=======
<<<<<<< HEAD
-- Active: 1696576841746@@127.0.0.1@3306@pmsDROP PROCEDURE if exists getorcreatetimesheet;
=======
<<<<<<< HEAD
>>>>>>> 5e898ea863ae66396eea5c03a95312801780d666
-- Active: 1694968636816@@127.0.0.1@3306@pms
SELECT * from userstories;


-- Active: 1696576841746@@127.0.0.1@3306@pms
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
>>>>>>> 2ee57852441242e9f1b34676583da61a22432d37


