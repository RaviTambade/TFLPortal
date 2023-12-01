-- Active: 1694968636816@@127.0.0.1@3306@pms

-- director
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (1,'2013-01-01',1,80000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (2,'2013-11-03',1,80000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (3,'2013-08-11',1,80000);
-- HR Manager
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (4,'2013-10-06',1,70000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (5,'2014-09-07',2,70000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (6,'2014-11-01',3,70000);

-- Team Manager
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (7,'2013-11-01',4,60000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (8,'2013-04-14',5,60000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (9,'2015-12-01',6,60000);

-- Team MEMBER 

INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (10,'2013-03-17',7,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (11,'2014-02-12',7,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (12,'2014-05-21',7,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (13,'2014-05-21',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (14,'2015-11-11',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (15,'2015-09-15',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (16,'2015-07-16',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (17,'2015-04-23',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (18,'2015-05-13',9,40000);



INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2023-11-02','2024-02-02','Project Management System App',7,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2023-11-03','2024-02-02','Krushi Product Management',8,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2023-11-13','2025-02-02','Agri Produst Supplying App',9,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2017-02-02','2024-02-02','Store Management App',7,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2017-10-10','2025-02-02','Ticket booking Management App',8,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HMApp','2017-10-10','2025-02-02','Hospital Management App',9,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('TMS','2016-02-02','2023-02-02','Travel Management System',7,'completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HRM','2016-10-10','2023-02-02','Human Resource Management',8,'completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('CLMS','2016-10-10','2022-02-02','Contarct Labour Management System',9,'completed');

INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2023-11-02',1,4);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2023-11-03',2,5);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2023-11-13',3,6);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2017-02-02',4,4);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2017-10-10',5,5);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2017-10-10',6,6);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2016-02-02',7,4);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2016-10-10',8,5);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('HR Manager','2016-10-10',9,6);

INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2022-11-02',1,7);
INSERT INTO members(membership,membershipdate,projectid,employeeid) VALUES ('Manager','2022-11-03',2,8);
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


INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Manager','2017-10-10','yes',5,8);
INSERT INTO projectallocations(membership,assigndate,releasedate,status,projectid,employeeid) VALUES ('Manager','2017-10-10','2017-10-10','no',6,9);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Manager','2016-02-02','yes',7,7);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Manager','2016-10-10','yes',8,8);
INSERT INTO projectallocations(membership,assigndate,releasedate,status,projectid,employeeid) VALUES ('Manager','2016-10-10','2017-10-10','no',9,9);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2023-11-02','yes',1,10);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2023-11-03','yes',2,11);
INSERT INTO projectallocations(membership,assigndate,releasedate,status,projectid,employeeid) VALUES ('Developer','2023-11-13','2017-10-10','no',3,12);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2017-02-02','yes',4,13);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',5,14);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',6,15);
INSERT INTO projectallocations(membership,assigndate,releasedate,status,projectid,employeeid) VALUES ('Developer','2016-02-02','2017-10-10','no',7,16);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',8,17);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',9,18);

-- Task 1
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Complete Feature X', 'Implement and test Feature X according to specifications', '2023-11-23', '2023-11-24', '2023-12-01', 19, 9, 1, 'todo','2023-11-23');

-- Task 2
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Review Project Proposal', 'Review the project proposal document and provide feedback', '2023-11-24', '2023-11-25', '2023-12-02', 20, 10, 2, 'todo','2023-11-23');

-- Task 3
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','QA Testing for Module Y', 'Conduct QA testing for Module Y and document any issues found', '2023-11-25', '2023-11-26', '2023-12-03', 21, 11, 3, 'completed','2023-11-24');

-- Task 4
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Update User Interface', 'Modify the user interface to improve user experience', '2023-11-26', '2023-11-27', '2023-12-04', 22, 12, 4, 'todo','2023-11-25');

-- Task 5
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Bug Fixing in Module Z', 'Identify and fix bugs in Module Z reported by QA', '2023-11-27', '2023-11-28', '2023-12-05', 23, 13, 5, 'inprogress','2023-11-26');

-- Task 6
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Documentation for API', 'Create comprehensive documentation for the new API', '2023-11-28', '2023-11-29', '2023-12-06', 24, 14, 6, 'completed','2023-11-27');

-- Task 7
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Sprint Planning Meeting', 'Participate in the sprint planning meeting to discuss upcoming tasks', '2023-11-29', '2023-11-30', '2023-12-07', 19, 15, 1, 'todo','2023-11-28');

-- Task 8
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Code Review for Module W', 'Perform code review for the implementation of Module W', '2023-11-30', '2023-12-01', '2023-12-08', 26, 16, 2, 'todo','2023-11-29');

-- Task 9
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','User Feedback Analysis', 'Analyze user feedback and propose improvements for the next release', '2023-12-01', '2023-12-02', '2023-12-09', 27, 17, 3, 'completed','2023-11-30');

-- Task 10
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Database restructuring', 'improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 26, 18, 4, 'todo','2023-12-01');

-- Task 11
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Database Optimization', 'Optimize database queries for improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 3, 1, 3, 'todo','2023-12-02');

-- Task 12
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Remove unnecessary variable', 'improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 3, 2, 3, 'todo','2023-12-02');

-- Task 13
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','API crude operation', 'Create comprehensive crude operations for the API', '2023-12-04', '2023-12-05', '2023-12-10', 3, 1, 3, 'todo','2023-12-03');

-- Task 14
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Database Optimization', 'Optimize database queries for improved performance', '2023-12-05', '2023-12-06', '2023-12-10', 3, 2, 3, 'todo','2023-12-04');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","User Registration","As a new user, I want to be able to register for an account so that I can access the platform.",'2023-10-29','2023-10-30','2023-11-04',19,10,1,'todo','2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","Login Functionality","As a forgetful user, I want to be able to reset my password via email verification.",'2023-10-29','2023-10-30','2023-11-04',19,10,1,"todo",'2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",'2023-10-29','2023-10-30','2023-11-04',19,10,1,"completed",'2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","Language Preferences","As a user, I want to choose my preferred language for the platform.",'2023-10-29','2023-10-30','2023-11-04',20,11,2,"todo",'2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",'2023-10-29','2023-10-30','2023-11-04',20,11,2,"completed",'2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES("userstory",'Resource Allocation', 'As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability','2023-10-29','2023-11-02','2023-11-05',20, 11, 2,'todo','2023-10-30');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory",'Communication Platform', 'As a stakeholder, I want a communication platform that facilitates discussions and updates among project team members.','2023-11-06','2023-11-07','2023-11-08', 2, 3, 1, 'todo','2023-11-06 09:15:00'),
("userstory",'Budget Tracking and Alerts', 'As a project manager, I want a budget tracking feature that monitors expenses and alerts me if the project is at risk of exceeding the budget.','2023-11-06','2023-11-07','2023-11-09', 3, 4, 5, 'todo','2023-11-06 09:30:00'),
("userstory",'Build and Deployment Streamlining', 'As a developer, I want an integrated build and deployment system to streamline the process of releasing new features.','2023-11-06','2023-11-07','2023-11-12', 4, 5, 1, 'todo','2023-11-06 09:45:00'),
("userstory",'Feedback Mechanism', 'As a team member, I want a feedback mechanism within the project management tool to provide input on the teams collaboration and processes.','2023-11-06','2023-11-07','2023-11-11', 5, 6, 7,'todo', '2023-11-06 10:00:00'),
("userstory",'Client Deliverable Feedback', 'As a client, I want a feature that allows me to provide feedback on project deliverables and request revisions if necessary.','2023-11-06','2023-11-07','2023-11-09', 3, 4, 2, 'todo','2023-11-06 10:15:00'),
("userstory",'Retrospective Tool', 'As a project manager, I want a retrospective tool to conduct post-project evaluations and gather insights for continuous improvement.','2023-11-06','2023-11-07','2023-11-10', 4, 4, 3, 'todo','2023-11-06 10:30:00');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory",'User Acceptance Testing', 'As a product owner, I want a feature that allows me to conduct user acceptance testing within the project management platform.','2023-11-13','2023-11-13','2023-11-14', 5, 7, 1,  'todo','2023-11-13 10:45:00'),
("userstory",'Velocity Tracking', 'As a Scrum Master, I want a velocity tracking tool to monitor the teams progress and adjust future sprint planning accordingly.','2023-11-13','2023-11-14','2023-11-14', 1, 1, 2,  'todo','2023-11-13 11:00:00'),
("userstory",'Gantt Chart Visualization', 'As a team member, I want a visual representation of the projects progress using a Gantt chart for better understanding and planning.','2023-11-13','2023-11-13','2023-11-14', 2, 1, 3, 'todo', '2023-11-13 11:15:00'),
("userstory",'Onboarding Facilitation', 'As a project coordinator, I want a tool that facilitates the onboarding process for new team members, providing them with necessary resources.','2023-11-13','2023-11-13','2023-11-17', 3, 2, 3,  'todo','2023-11-13 11:30:00'),
("userstory",'Integrated Collaboration', 'As a stakeholder, I want a project management tool that supports multiple integrations with other productivity tools for seamless collaboration.','2023-11-13','2023-11-13','2023-11-16', 1, 3, 4, 'todo', '2023-11-13 11:45:00'),
("userstory",'Risk Register Management', 'As a project manager, I want a risk register that captures and prioritizes identified risks along with proposed mitigation strategies.','2023-11-13','2023-11-15','2023-11-17', 2, 4, 5,  'todo','2023-11-13 12:00:00');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory",'Automated Testing Framework', 'As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.','2023-11-20','2023-11-21','2023-11-22', 3, 5, 3,'todo', '2023-11-20 12:15:00' ),
("userstory",'Retrospective Documentation', 'As a project manager, I want a retrospective tool to capture both positive and negative aspects of the project for future reference.','2023-11-20','2023-11-22','2023-11-24', 3, 4, 1, 'todo', '2023-11-20 12:30:00'),
("userstory",'Knowledge Base Access', 'As a team member, I want a knowledge base within the project management platform to access documentation and guidelines.','2023-11-20','2023-11-22','2023-11-25', 2, 3, 1, 'todo','2023-11-20 12:45:00'),
("userstory",'Milestone Tracking for Clients', 'As a client, I want a feature that allows me to track project milestones and receive notifications when key deliverables are achieved.','2023-11-20','2023-11-21','2023-11-23', 3, 2, 1, 'todo','2023-11-20 13:00:00'),
("userstory",'External Stakeholder Visibility', 'As a project manager, I want a feature that facilitates the creation and sharing of project timelines with external stakeholders for visibility.','2023-11-20','2023-11-21','2023-11-25', 2, 3, 2, 'todo','2023-11-20 13:15:00'),
("userstory","Password Reset:","As a new user, I want to be able to register for an account so that I can access the platform.",'2023-11-20','2023-11-21','2023-11-21',3,3,3,'todo','2023-11-20');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory","Profile Creation","As a new user, As a user, I want to create and edit my profile with personal information and preferences",'2023-11-27','2023-11-28','2023-11-29',4,3,2,"todo",'2023-11-27'),
("userstory","Project Timeline Visualization","As a project manager, I want to create and customize project timelines with milestones to visualize project progress.",'2023-11-27','2023-11-27','2023-11-30',5,5,1,"todo",'2023-11-27'),
("userstory","Automated Notifications"," As a team member, I want to receive automatic notifications for upcoming meetings and deadlines to stay organized.",'2023-11-27','2023-11-28','2023-12-01',6,4,3,"todo",'2023-11-27'),
("userstory","Resource Allocation","As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability.",'2023-11-27','2023-11-27','2023-12-03',7,4,3,"todo",'2023-11-27'),
("userstory","Feedback Mechanism","As a team member, I want a feedback mechanism within the project management tool to provide input on the team's collaboration and processes.",'2023-11-27','2023-11-27','2023-11-04',8,3,3,"todo",'2023-11-27'),
("userstory","Gantt Chart Visualization","As a team member, I want a visual representation of the project's progress using a Gantt chart for better understanding and planning.",'2023-11-27','2023-11-28','2023-11-04',9,6,3,"todo",'2023-11-27');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory","Automated Testing Framework","As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.",'2023-12-04','2023-12-05','2023-12-06',2,3,4,"todo",'2023-12-04'),
("userstory","User Survey Participation","As a user, I want the opportunity to participate in surveys to provide feedback and improve the platform.",'2023-12-04','2023-12-04','2023-12-06',3,7,3,"todo",'2023-12-04'),
("userstory","Privacy Settings","As a user, I want to control my privacy settings and data sharing preferences.",'2023-12-04','2023-12-07','2023-12-08',4,6,3,"todo",'2023-12-04'),
("userstory","Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",'2023-12-04','2023-12-04','2023-12-07',2,3,4,"todo",'2023-12-04'),
("userstory","Language Preferences","As a user, I want to choose my preferred language for the platform.",'2023-12-04','2023-12-05','2023-12-06',3,7,3,"todo",'2023-12-04'),
("userstory","Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",'2023-12-04','2023-12-04','2023-12-08',4,6,3,"todo",'2023-12-04');


INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-01','Rejected',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-02','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-03','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-04','Rejected',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-01','Approved',11);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-02','Approved',11);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-03','Approved',11);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-11-04','Approved',11);

INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-21','Approved',13);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-11','Approved',14);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-09','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-01','Approved',16);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-04-01','Approved',17);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-06-01','Approved',18);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-11','Approved',1);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-21','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-02-01','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-03-01','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-05-01','Approved',3);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-01','Approved',17);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-22','Approved',18);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-23','Approved',1);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-02-24','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-04-25','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-05-26','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-27','Approved',3);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-16','Approved',17);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-15','Approved',18);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-14','Approved',1);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-13','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-19','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-20','Approved',2);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-01-21','Approved',3);

INSERT INTO timesheetentries(activityid,fromtime, totime, timesheetid)
VALUES
  (15, "09:00:00", "10:30:00", 1),
  (16, "10:30:00", "12:00:00", 1),
  (17,"12:00:00", "13:00:00", 1);

  
INSERT INTO timesheetentries(activityid, fromtime, totime, timesheetid)
VALUES
  (15,"09:00:00", "10:30:00", 2),
  (16, "13:00:00", "14:30:00", 2),
  (17, "14:30:00", "15:15:00", 2);

INSERT INTO timesheetentries(activityid, fromtime, totime, timesheetid)
VALUES
  (15,"10:30:00", "12:00:00", 3),
  (16, "13:00:00", "14:30:00", 3),
  (17, "14:30:00", "15:15:00", 3);

INSERT INTO timesheetentries(activityid, fromtime, totime, timesheetid)
VALUES
  (15, "09:00:00", "10:30:00", 4),
  (16,"10:30:00", "12:00:00", 4),
  (17, "15:15:00", "16:45:00", 4);

INSERT INTO timesheetentries(activityid, fromtime, totime, timesheetid)
VALUES
  (18, "09:00:00", "10:30:00", 5),
  (19, "10:30:00", "12:00:00", 5),
  (20, "13:00:00", "16:45:00", 5);
  
INSERT INTO timesheetentries(activityid,fromtime, totime, timesheetid)
VALUES
  (18, "09:00:00", "12:00:00", 6),
  (19,"13:00:00", "14:30:00", 6),
  (20, "15:15:00", "16:45:00", 6);

INSERT INTO timesheetentries(activityid,fromtime, totime, timesheetid)
VALUES
  (18, "09:00:00", "10:30:00", 7),
  (19, "10:30:00", "12:00:00", 7),
  (20, "12:00:00", "16:45:00", 7);


INSERT INTO timesheetentries(activityid, fromtime, totime, timesheetid)
VALUES
  (18, "09:00:00", "10:30:00", 8),
  (19, "10:30:00", "14:30:00", 8),
  (20, "14:30:00", "16:45:00", 8);




INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 1',"2023-10-30","2023-11-04","Resolve critical and high-priority bugs");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 2',"2023-11-06","2023-11-11","Enhance system performance by optimizing database queries");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 3',"2023-11-13","2023-11-18","Refactor codebase");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 4',"2023-11-20","2023-11-25","Improve project documentation");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 5',"2023-11-27","2023-12-02","Integration Testing");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 6',"2023-12-04","2023-12-09","Integration Testing");

INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,1);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,2);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,3);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,4);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,5);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,6);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,7);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,8);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,9);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,10);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,11);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,12);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,13);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,14);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,15);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,16);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,17);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,18);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,19);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,20);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,21);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,22);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,23);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,24);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,25);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,26);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,27);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,28);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,29);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,30);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (6,31);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (6,32);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (6,33);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (6,34);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (6,35);
INSERT INTO sprintactivities(sprintid,activityid) VALUES (6,36);






-- INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 1',"2023-10-30","2023-11-04","Resolve critical and high-priority bugs");
-- INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 2',"2023-11-06","2023-11-11","Enhance system performance by optimizing database queries");
-- INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 3',"2023-11-13","2023-11-18","Refactor codebase");
-- INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 4',"2023-11-20","2023-11-25","Improve project documentation");
-- INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 5',"2023-11-27","2023-12-02","Integration Testing");

-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,1);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,2);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,3);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,4);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,5);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (1,6);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,7);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,8);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,9);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,10);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,11);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (2,12);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,13);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,14);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,15);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,16);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,17);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (3,18);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,19);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,20);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,21);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,22);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,23);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (4,24);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,25);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,26);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,27);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,28);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,29);
-- INSERT INTO sprintactivities(sprintid,activityid) VALUES (5,30);

