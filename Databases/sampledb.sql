-- Active: 1694968636816@@127.0.0.1@3306@pms

-- director
INSERT INTO employees(userid,hiredate,reportingid) VALUES (1,'2013-01-01',1);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (2,'2013-11-03',1);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (3,'2013-08-11',1);
-- HR Manager
INSERT INTO employees(userid,hiredate,reportingid) VALUES (4,'2013-10-06',1);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (5,'2014-09-07',2);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (6,'2014-11-01',3);

-- Team Manager
INSERT INTO employees(userid,hiredate,reportingid) VALUES (7,'2013-11-01',4);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (8,'2013-04-14',5);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (9,'2015-12-01',6);

-- Team MEMBER 

INSERT INTO employees(userid,hiredate,reportingid) VALUES (10,'2013-03-17',7);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (11,'2014-02-12',7);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (12,'2014-05-21',7);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (13,'2014-05-21',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (14,'2015-11-11',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (15,'2015-09-15',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (16,'2015-07-16',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (17,'2015-04-23',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (18,'2015-05-13',9);



INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2023-11-02','2024-02-02','Project Management System App',7,'NotStarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2023-11-03','2024-02-02','Krushi Product Management',8,'NotStarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2023-11-13','2022-02-02','Agri Produst Supplying App',9,'NotStarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2017-02-02','2024-02-02','Store Management App',7,'InProgress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2017-10-10','2025-02-02','Ticket booking Management App',8,'InProgress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HMApp','2017-10-10','2025-02-02','Hospital Management App',9,'InProgress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('TMS','2016-02-02','2023-02-02','Travel Management System',7,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HRM','2016-10-10','2023-02-02','Human Resource Management',8,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('CLMS','2016-10-10','2022-02-02','Contarct Labour Management System',9,'Completed');

INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2023-11-02',1,4);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2023-11-03',2,5);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2023-11-13',3,6);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2017-02-02',4,4);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2017-10-10',5,5);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2017-10-10',6,6);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2016-02-02',7,4);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2016-10-10',8,5);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2016-10-10',9,6);

INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2023-11-02',1,7);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2023-11-03',2,8);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2023-11-13',3,9);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2017-02-02',4,7);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2017-10-10',5,8);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2017-10-10',6,9);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2016-02-02',7,7);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2016-10-10',8,8);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2016-10-10',9,9);

INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2023-11-02',1,10);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2023-11-03',2,11);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2023-11-13',3,12);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2017-02-02',4,13);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2017-10-10',5,14);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2017-10-10',6,15);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2016-02-02',7,16);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2016-10-10',8,17);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Developer','2016-10-10',9,18);


-- Task 1
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Complete Feature X', 'Implement and test Feature X according to specifications', '2023-11-23', '2023-11-24', '2023-12-01', 19, 9, 1, 'NotStarted');

-- Task 2
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Review Project Proposal', 'Review the project proposal document and provide feedback', '2023-11-24', '2023-11-25', '2023-12-02', 20, 10, 2, 'InProgress');

-- Task 3
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('QA Testing for Module Y', 'Conduct QA testing for Module Y and document any issues found', '2023-11-25', '2023-11-26', '2023-12-03', 21, 11, 3, 'Completed');

-- Task 4
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Update User Interface', 'Modify the user interface to improve user experience', '2023-11-26', '2023-11-27', '2023-12-04', 22, 12, 4, 'NotStarted');

-- Task 5
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Bug Fixing in Module Z', 'Identify and fix bugs in Module Z reported by QA', '2023-11-27', '2023-11-28', '2023-12-05', 23, 13, 5, 'InProgress');

-- Task 6
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Documentation for API', 'Create comprehensive documentation for the new API', '2023-11-28', '2023-11-29', '2023-12-06', 24, 14, 6, 'Completed');

-- Task 7
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Sprint Planning Meeting', 'Participate in the sprint planning meeting to discuss upcoming tasks', '2023-11-29', '2023-11-30', '2023-12-07', 19, 15, 1, 'NotStarted');

-- Task 8
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Code Review for Module W', 'Perform code review for the implementation of Module W', '2023-11-30', '2023-12-01', '2023-12-08', 26, 16, 2, 'InProgress');

-- Task 9
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('User Feedback Analysis', 'Analyze user feedback and propose improvements for the next release', '2023-12-01', '2023-12-02', '2023-12-09', 27, 17, 3, 'Completed');

-- Task 10
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Database restructuring', 'improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 26, 18, 4, 'NotStarted');

-- Task 11
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Database Optimization', 'Optimize database queries for improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 3, 1, 3, 'NotStarted');

-- Task 12
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Remove unnecessary variable', 'improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 3, 2, 3, 'NotStarted');

-- Task 13
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('API crude operation', 'Create comprehensive crude operations for the API', '2023-12-02', '2023-12-03', '2023-12-10', 3, 1, 3, 'NotStarted');

-- Task 14
INSERT INTO tasks (title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status)
VALUES ('Database Optimization', 'Optimize database queries for improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 3, 2, 3, 'NotStarted');


SELECT * from projects where  teammanagerid=7;