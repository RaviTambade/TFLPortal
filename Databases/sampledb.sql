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
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2023-11-13','2025-02-02','Agri Produst Supplying App',9,'NotStarted');
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


INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-01','Rejected',10);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-02','Approved',10);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-03','Approved',10);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-04','Approved',10);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-05','Approved',10);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-06','Approved',10);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-02','Approved',11);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-13','Approved',12);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-21','Approved',13);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-11','Approved',14);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-09','Approved',15);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-01','Approved',16);

INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-04-01','Approved',17);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-06-01','Approved',18);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-11','Approved',1);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-21','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-02-01','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-03-01','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-05-01','Approved',3);

INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-01','Approved',17);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-22','Approved',18);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-23','Approved',1);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2023-02-24','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2023-04-25','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2023-05-26','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-27','Approved',3);

INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-16','Approved',17);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-15','Approved',18);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-14','Approved',1);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-13','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-19','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-20','Approved',2);
INSERT INTO timesheets(date,status,employeeid) VALUES ('2013-01-21','Approved',3);

INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Meeting With Client","00:07:55","11:00:56",1);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Research","10:07:55","12:20:56",2);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Development","12:07:55","01:30:56",3);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Testing","01:07:55","02:33:56",4);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Sprint Meeting","04:07:55","06:08:56",5);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Code Review","06:07:55","07:09:56",6);


INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Meeting With Client","00:07:55","11:00:56",1);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Research","10:07:55","12:20:56",1);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Development","12:07:55","01:30:56",1);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Testing","01:07:55","02:33:56",1);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Sprint Meeting","04:07:55","06:08:56",1);
INSERT INTO timesheetentries(description,fromtime,totime,timesheetid) VALUES ("Code Review","06:07:55","07:09:56",1);



INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Project Planning", "09:00:00", "10:30:00", 2);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Client Meeting", "10:45:00", "12:00:00", 2);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Lunch Break", "12:00:00", "13:00:00", 2);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Coding", "13:00:00", "15:30:00", 2);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Testing and Debugging", "15:45:00", "17:00:00", 2);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Documentation", "17:15:00", "18:30:00", 2);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Project Planning", "09:00:00", "10:30:00", 3);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Client Meeting", "10:45:00", "12:00:00", 3);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Lunch Break", "12:00:00", "13:00:00", 3);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Coding", "13:00:00", "15:30:00", 4);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Testing and Debugging", "15:45:00", "17:00:00", 4);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Documentation", "17:15:00", "18:30:00", 4);
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Project Planning", "09:00:00", "10:30:00", 5);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Client Meeting", "10:45:00", "12:00:00", 5);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Lunch Break", "12:00:00", "13:00:00", 5);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Coding", "13:00:00", "15:30:00", 5);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Testing and Debugging", "15:45:00", "17:00:00", 5);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Documentation", "17:15:00", "18:30:00", 5);


INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Project Planning", "09:00:00", "10:30:00", 6);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Client Meeting", "10:45:00", "12:00:00", 6);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Lunch Break", "12:00:00", "13:00:00", 6);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Coding", "13:00:00", "15:30:00", 6);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Testing and Debugging", "15:45:00", "17:00:00", 6);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Documentation", "17:15:00", "18:30:00", 6);


INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Project Planning", "09:00:00", "10:30:00", 7);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Sprint Meeting", "10:45:00", "12:00:00", 7);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Lunch Break", "12:00:00", "13:00:00", 7);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Coding", "13:00:00", "15:30:00", 7);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Testing and Debugging", "15:45:00", "17:00:00", 7);
 
INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Documentation", "17:15:00", "18:30:00", 7);

INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Development", "17:15:00", "18:30:00", 7);

INSERT INTO timesheetentries(description, fromtime, totime, timesheetid)VALUES ("Code Review ", "17:15:00", "18:30:00", 7);




INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("User Registration","As a new user, I want to be able to register for an account so that I can access the platform.",1,1,3,'2023-11-02',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Login Functionality","As a forgetful user, I want to be able to reset my password via email verification.",2,1,3,'2023-11-10',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status,)VALUES ("Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",2,3,4,'2023-11-11',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status,)VALUES ("Language Preferences","As a user, I want to choose my preferred language for the platform.",3,7,3,'2023-11-30',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status,)VALUES ("Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",4,6,3,'2023-11-29',"Completed");



-- Assume members table has id, name, and other fields
-- Assume projects table has id, project_name, and other fields

-- Inserting user stories
INSERT INTO userstories (title, description, projectid, assignedto, assignedby, createddate, status)
VALUES
('Resource Allocation', 'As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability', 1, 2, 3, '2023-11-29', 'Todo'),

('Communication Platform', 'As a stakeholder, I want a communication platform that facilitates discussions and updates among project team members.
', 2, 3, 1, '2023-11-29 09:15:00', 'Todo'),

('Budget Tracking and Alerts', 'As a project manager, I want a budget tracking feature that monitors expenses and alerts me if the project is at risk of exceeding the budget.
', 3, 4, 5, '2023-11-29 09:30:00', 'Todo'),

('Build and Deployment Streamlining', 'As a developer, I want an integrated build and deployment system to streamline the process of releasing new features.
', 4, 5, 1, '2023-11-29 09:45:00', 'Todo'),

('Feedback Mechanism', 'As a team member, I want a feedback mechanism within the project management tool to provide input on the teams collaboration and processes.', 5, 6, 7, '2023-11-29 10:00:00', 'Todo'),

('Client Deliverable Feedback', 'As a client, I want a feature that allows me to provide feedback on project deliverables and request revisions if necessary.
', 3, 4, 2, '2023-11-29 10:15:00', 'Todo'),

('Retrospective Tool', 'As a project manager, I want a retrospective tool to conduct post-project evaluations and gather insights for continuous improvement.
', 4, 4, 3, '2023-11-29 10:30:00', 'Todo'),

('User Acceptance Testing', 'As a product owner, I want a feature that allows me to conduct user acceptance testing within the project management platform.
', 5, 7, 1, '2023-11-29 10:45:00', 'Todo'),

('Velocity Tracking', 'As a Scrum Master, I want a velocity tracking tool to monitor the teams progress and adjust future sprint planning accordingly.
', 1, 1, 2, '2023-11-29 11:00:00', 'Todo'),

('Gantt Chart Visualization', 'As a team member, I want a visual representation of the projects progress using a Gantt chart for better understanding and planning.
', 2, 1, 13, '2023-11-29 11:15:00', 'Todo'),

('Onboarding Facilitation', 'As a project coordinator, I want a tool that facilitates the onboarding process for new team members, providing them with necessary resources.
', 3, 2, 3, '2023-11-29 11:30:00', 'Todo'),

('Integrated Collaboration', 'As a stakeholder, I want a project management tool that supports multiple integrations with other productivity tools for seamless collaboration.
', 1, 3, 4, '2023-11-29 11:45:00', 'Todo'),

('Risk Register Management', 'As a project manager, I want a risk register that captures and prioritizes identified risks along with proposed mitigation strategies.
', 2, 4, 5, '2023-11-29 12:00:00', 'Todo'),

('Automated Testing Framework', 'As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.
', 3, 5, 3, '2023-11-29 12:15:00', 'Todo'),

('Retrospective Documentation', 'As a project manager, I want a retrospective tool to capture both positive and negative aspects of the project for future reference.
', 3, 4, 1, '2023-11-29 12:30:00', 'Todo'),

('Knowledge Base Access', 'As a team member, I want a knowledge base within the project management platform to access documentation and guidelines.


', 2, 3, 1, '2023-11-29 12:45:00', 'Todo'),

('Milestone Tracking for Clients', 'As a client, I want a feature that allows me to track project milestones and receive notifications when key deliverables are achieved.
', 3, 2, 1, '2023-11-29 13:00:00', 'Todo'),

('External Stakeholder Visibility', 'As a project manager, I want a feature that facilitates the creation and sharing of project timelines with external stakeholders for visibility.', 2, 3, 2, '2023-11-29 13:15:00', 'Todo');


INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Password Reset:","As a new user, I want to be able to register for an account so that I can access the platform.",3,3,3,'2023-11-24',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Profile Creation","As a new user, As a user, I want to create and edit my profile with personal information and preferences",4,3,2,'2023-11-30',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Project Timeline Visualization","As a project manager, I want to create and customize project timelines with milestones to visualize project progress.",5,5,1,'2023-11-08',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Automated Notifications"," As a team member, I want to receive automatic notifications for upcoming meetings and deadlines to stay organized.",6,4,3,'2023-11-09',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Resource Allocation","As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability.",7,4,3,'2023-11-05',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Feedback Mechanism","As a team member, I want a feedback mechanism within the project management tool to provide input on the team's collaboration and processes.",8,3,3,'2023-11-06',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Gantt Chart Visualization","As a team member, I want a visual representation of the project's progress using a Gantt chart for better understanding and planning.",9,6,3,'2023-11-10',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Automated Testing Framework","As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.",2,3,4,'2023-11-11',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("User Survey Participation","As a user, I want the opportunity to participate in surveys to provide feedback and improve the platform.",3,7,3,'2023-11-19',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Privacy Settings","As a user, I want to control my privacy settings and data sharing preferences.",4,6,3,'2023-11-20',"Completed");

INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",2,3,4,'2023-11-11',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Language Preferences","As a user, I want to choose my preferred language for the platform.",3,7,3,'2023-11-30',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",4,6,3,'2023-11-29',"Completed");

