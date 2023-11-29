-- Active: 1696576841746@@127.0.0.1@3306@pms

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

INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("Code Refactoring", "task", "Review and refactor existing code", "09:00:00", "10:30:00", 1),
  ("Client Meeting", "meeting", "Discuss project updates with the client", "10:30:00", "12:00:00", 1),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 1),
  ("Feature Implementation", "userstory", "Implement new features in the project", "13:00:00", "14:30:00", 1),
  ("Client Call", "meeting", "Call with New Client", "14:30:00", "15:15:00", 1),
  ("Project Wrap-up", "task", "Finalize and document project tasks", "15:15:00", "16:45:00", 1);
INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("Bug Fixing", "bug", "Identify and fix bugs in the system", "09:00:00", "10:30:00", 2),
  ("Team Meeting", "meeting", "Team Collaboration and Project Updates", "10:30:00", "12:00:00", 2),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 2),
  ("Data Analysis", "task", "Analyze project data and metrics", "13:00:00", "14:30:00", 2),
  ("Team Discussion", "meeting", "Discuss future project planning", "14:30:00", "15:15:00", 2),
  ("Coding Tasks", "task", "Code new functionalities", "15:15:00", "16:45:00", 2);

INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("UI Design", "task", "Designing User Interface for new features", "09:00:00", "10:30:00", 3),
  ("Stakeholder Meeting", "meeting", "Meeting with Stakeholders for Project A", "10:30:00", "12:00:00", 3),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 3),
  ("Backend Coding", "task", "Coding Backend functionalities", "13:00:00", "14:30:00", 3),
  ("Testing Session", "task", "Testing New Features and Functionality", "14:30:00", "15:15:00", 3),
  ("Project Review", "meeting", "Reviewing Project Progress", "15:15:00", "16:45:00", 3);

INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("Research and Analysis", "task", "Research and Analyze market trends", "09:00:00", "10:30:00", 4),
  ("Weekly Team Meeting", "meeting", "Discussing Project Updates", "10:30:00", "12:00:00", 4),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 4),
  ("Report Writing", "task", "Writing Reports and Documentation", "13:00:00", "14:30:00", 4),
  ("Client Presentation", "meeting", "Preparing for Client Presentation", "14:30:00", "15:15:00", 4),
  ("Documentation", "task", "Documenting Project Tasks", "15:15:00", "16:45:00", 4);


INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("Requirements Analysis", "task", "Analyzing client requirements for Project A", "09:00:00", "10:30:00", 5),
  ("Team Collaboration", "meeting", "Weekly team collaboration meeting", "10:30:00", "12:00:00", 5),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 5),
  ("Software Development", "task", "Coding and developing new features", "13:00:00", "14:30:00", 5),
  ("Client Meeting", "meeting", "Meeting with the client for Project A", "14:30:00", "15:15:00", 5),
  ("Testing and QA", "task", "Quality assurance and testing", "15:15:00", "16:45:00", 5);

INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("Market Research", "task", "Conducting market research for Project B", "09:00:00", "10:30:00", 6),
  ("Team Sync-up", "meeting", "Weekly team synchronization meeting", "10:30:00", "12:00:00", 6),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 6),
  ("Software Development", "userstory", "Coding and programming tasks", "13:00:00", "14:30:00", 6),
  ("Client Demo Preparation", "meeting", "Preparing for client demo", "14:30:00", "15:15:00", 6),
  ("Documentation", "task", "Documenting project tasks and updates", "15:15:00", "16:45:00", 6);

INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("Project Planning", "meeting", "Planning the next project sprint", "09:00:00", "10:30:00", 7),
  ("Client Requirements Discussion", "meeting", "Discussing client requirements", "10:30:00", "12:00:00", 7),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 7),
  ("Software Development", "userstory", "Coding and development tasks", "13:00:00", "14:30:00", 7),
  ("Quality Assurance", "task", "Testing and quality assurance", "14:30:00", "15:15:00", 7),
  ("Project Status Review", "meeting", "Reviewing project status and progress", "15:15:00", "16:45:00", 7);

INSERT INTO timesheetentries(title, activitytype, description, fromtime, totime, timesheetid)
VALUES
  ("UI Design", "task", "Designing User Interface for new features", "09:00:00", "10:30:00", 8),
  ("Stakeholder Meeting", "meeting", "Meeting with Stakeholders for Project A", "10:30:00", "12:00:00", 8),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 8),
  ("Backend Coding", "task", "Coding Backend functionalities", "13:00:00", "14:30:00", 8),
  ("Testing Session", "task", "Testing New Features and Functionality", "14:30:00", "15:15:00", 8),
  ("Project Review", "meeting", "Reviewing Project Progress", "15:15:00", "16:45:00", 8);



INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("User Registration","As a new user, I want to be able to register for an account so that I can access the platform.",1,1,3,'2023-10-30',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Login Functionality","As a forgetful user, I want to be able to reset my password via email verification.",2,1,3,'2023-10-30',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",2,3,4,'2023-10-30',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Language Preferences","As a user, I want to choose my preferred language for the platform.",3,7,3,'2023-10-30',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",4,6,3,'2023-10-30',"Completed");



INSERT INTO userstories (title, description, projectid, assignedto, assignedby, createddate, status)
VALUES
('Resource Allocation', 'As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability', 1, 2, 3, '2023-10-30', 'Todo'),

('Communication Platform', 'As a stakeholder, I want a communication platform that facilitates discussions and updates among project team members.
', 2, 3, 1, '2023-11-06 09:15:00', 'Todo'),

('Budget Tracking and Alerts', 'As a project manager, I want a budget tracking feature that monitors expenses and alerts me if the project is at risk of exceeding the budget.
', 3, 4, 5, '2023-11-06 09:30:00', 'Todo'),

('Build and Deployment Streamlining', 'As a developer, I want an integrated build and deployment system to streamline the process of releasing new features.
', 4, 5, 1, '2023-11-06 09:45:00', 'Todo'),

('Feedback Mechanism', 'As a team member, I want a feedback mechanism within the project management tool to provide input on the teams collaboration and processes.', 5, 6, 7, '2023-11-06 10:00:00', 'Todo'),

('Client Deliverable Feedback', 'As a client, I want a feature that allows me to provide feedback on project deliverables and request revisions if necessary.
', 3, 4, 2, '2023-11-06 10:15:00', 'Todo'),

('Retrospective Tool', 'As a project manager, I want a retrospective tool to conduct post-project evaluations and gather insights for continuous improvement.
', 4, 4, 3, '2023-11-06 10:30:00', 'Todo'),

('User Acceptance Testing', 'As a product owner, I want a feature that allows me to conduct user acceptance testing within the project management platform.
', 5, 7, 1, '2023-11-13 10:45:00', 'Todo'),

('Velocity Tracking', 'As a Scrum Master, I want a velocity tracking tool to monitor the teams progress and adjust future sprint planning accordingly.
', 1, 1, 2, '2023-11-13 11:00:00', 'Todo'),

('Gantt Chart Visualization', 'As a team member, I want a visual representation of the projects progress using a Gantt chart for better understanding and planning.
', 2, 1, 13, '2023-11-13 11:15:00', 'Todo'),

('Onboarding Facilitation', 'As a project coordinator, I want a tool that facilitates the onboarding process for new team members, providing them with necessary resources.
', 3, 2, 3, '2023-11-13 11:30:00', 'Todo'),

('Integrated Collaboration', 'As a stakeholder, I want a project management tool that supports multiple integrations with other productivity tools for seamless collaboration.
', 1, 3, 4, '2023-11-13 11:45:00', 'Todo'),

('Risk Register Management', 'As a project manager, I want a risk register that captures and prioritizes identified risks along with proposed mitigation strategies.
', 2, 4, 5, '2023-11-13 12:00:00', 'Todo'),

('Automated Testing Framework', 'As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.
', 3, 5, 3, '2023-11-20 12:15:00', 'Todo'),

('Retrospective Documentation', 'As a project manager, I want a retrospective tool to capture both positive and negative aspects of the project for future reference.
', 3, 4, 1, '2023-11-20 12:30:00', 'Todo'),

('Knowledge Base Access', 'As a team member, I want a knowledge base within the project management platform to access documentation and guidelines.


', 2, 3, 1, '2023-11-20 12:45:00', 'Todo'),

('Milestone Tracking for Clients', 'As a client, I want a feature that allows me to track project milestones and receive notifications when key deliverables are achieved.
', 3, 2, 1, '2023-11-20 13:00:00', 'Todo'),

('External Stakeholder Visibility', 'As a project manager, I want a feature that facilitates the creation and sharing of project timelines with external stakeholders for visibility.', 2, 3, 2, '2023-11-20 13:15:00', 'Todo');


INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Password Reset:","As a new user, I want to be able to register for an account so that I can access the platform.",3,3,3,'2023-11-20',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Profile Creation","As a new user, As a user, I want to create and edit my profile with personal information and preferences",4,3,2,'2023-11-27',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Project Timeline Visualization","As a project manager, I want to create and customize project timelines with milestones to visualize project progress.",5,5,1,'2023-11-27',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Automated Notifications"," As a team member, I want to receive automatic notifications for upcoming meetings and deadlines to stay organized.",6,4,3,'2023-11-27',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Resource Allocation","As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability.",7,4,3,'2023-11-27',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Feedback Mechanism","As a team member, I want a feedback mechanism within the project management tool to provide input on the team's collaboration and processes.",8,3,3,'2023-11-27',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Gantt Chart Visualization","As a team member, I want a visual representation of the project's progress using a Gantt chart for better understanding and planning.",9,6,3,'2023-11-27',"InProgress");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Automated Testing Framework","As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.",2,3,4,'2023-12-04',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("User Survey Participation","As a user, I want the opportunity to participate in surveys to provide feedback and improve the platform.",3,7,3,'2023-12-04',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Privacy Settings","As a user, I want to control my privacy settings and data sharing preferences.",4,6,3,'2023-12-04',"Completed");

INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",2,3,4,'2023-12-04',"Completed");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Language Preferences","As a user, I want to choose my preferred language for the platform.",3,7,3,'2023-12-04',"Todo");
INSERT INTO userstories(title,description, projectid, assignedto, assignedby,createddate,status)VALUES ("Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",4,6,3,'2023-12-04',"Completed");


INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 1',"2023-10-30","2023-11-04","Resolve critical and high-priority bugs");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 2',"2023-11-06","2023-11-11","Enhance system performance by optimizing database queries");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 3',"2023-11-13","2023-11-18","Refactor codebase");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 4',"2023-11-20","2023-11-25","Improve project documentation");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 5',"2023-11-27","2023-12-02","Integration Testing");
INSERT INTO sprints(title,startdate,enddate,goal) VALUES ('sprint 6',"2023-12-04","2023-12-09","Integration Testing");

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
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (6,31);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (6,32);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (6,33);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (6,34);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (6,35);
INSERT INTO sprintuserstories(sprintid,userstoryid) VALUES (6,36);






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

