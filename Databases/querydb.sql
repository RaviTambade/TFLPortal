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


INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 1',"2023-10-30","2023-11-04","Resolve critical and high-priority bugs");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 2',"2023-11-06","2023-11-11","Enhance system performance by optimizing database queries");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 3',"2023-11-13","2023-11-18","Refactor codebase");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 4',"2023-11-20","2023-11-25","Improve project documentation");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 5',"2023-11-27","2023-12-02","Integration Testing");

INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (1,1);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (1,2);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (1,3);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (1,4);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (1,5);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (1,6);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (2,7);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (2,8);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (2,9);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (2,10);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (2,11);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (2,12);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (3,13);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (3,14);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (3,15);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (3,16);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (3,17);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (3,18);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (4,19);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (4,20);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (4,21);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (4,22);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (4,23);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (4,24);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (5,25);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (5,26);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (5,27);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (5,28);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (5,29);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (5,30);

