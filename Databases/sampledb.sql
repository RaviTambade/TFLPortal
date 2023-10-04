INSERT INTO roles(name)VALUES('Director');
INSERT INTO roles(name)VALUES('HR Manager');
INSERT INTO roles(name)VALUES('Team Manager');
INSERT INTO roles(name)VALUES('Team Member');

INSERT INTO userroles(userid,roleid) VALUES (1,1);
INSERT INTO userroles(userid,roleid) VALUES (2,1);
INSERT INTO userroles(userid,roleid) VALUES (3,1);
INSERT INTO userroles(userid,roleid) VALUES (4,2);
INSERT INTO userroles(userid,roleid) VALUES (5,2);
INSERT INTO userroles(userid,roleid) VALUES (6,2);
INSERT INTO userroles(userid,roleid) VALUES (7,3);
INSERT INTO userroles(userid,roleid) VALUES (8,3);
INSERT INTO userroles(userid,roleid) VALUES (9,3);
INSERT INTO userroles(userid,roleid) VALUES (10,4);
INSERT INTO userroles(userid,roleid) VALUES (11,4);
INSERT INTO userroles(userid,roleid) VALUES (12,4);
INSERT INTO userroles(userid,roleid) VALUES (13,4);
INSERT INTO userroles(userid,roleid) VALUES (14,4);
INSERT INTO userroles(userid,roleid) VALUES (15,4);
INSERT INTO userroles(userid,roleid) VALUES (16,4);
INSERT INTO userroles(userid,roleid) VALUES (17,4);
INSERT INTO userroles(userid,roleid) VALUES (18,4);
INSERT INTO userroles(userid,roleid) VALUES (19,4);
INSERT INTO userroles(userid,roleid) VALUES (20,4);
INSERT INTO userroles(userid,roleid) VALUES (21,4);
INSERT INTO userroles(userid,roleid) VALUES (22,4);

insert into directors(corporateid,userid)values(1,1);
insert into directors(corporateid,userid)values(2,2);
insert into directors(corporateid,userid)values(3,3);
 
insert into employees(userid,department,position,hiredate,directorid)values(4,'HR','HR Manager','2019-02-02',1);   
insert into employees(userid,department,position,hiredate,directorid)values(5,'HR','HR Manager','2019-10-02',1); 
insert into employees(userid,department,position,hiredate,directorid)values(6,'HR','HR Manager','2019-05-02',1); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(7,'Supervisor','Team Manager','2020-02-02',1,1); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(8,'Supervisor','Team Manager','2020-02-12',1,1); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(9,'Supervisor','Team Manager','2020-05-02',1,1); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(10,'Development Team','Software Developer','2021-02-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(11,'Development Team','Software Architect','2021-02-12',1,4);
insert into employees(userid,department,position,hiredate,directorid,managerid)values(12,'Development Team','Backend Developer','2021-02-02',1,5);   
insert into employees(userid,department,position,hiredate,directorid,managerid)values(13,'Development Team','Frontend Developer','2021-10-02',1,5); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(14,'Development Team','Database Engineer','2021-05-02',1,6); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(15,'QA','QA Leads','2021-02-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(16,'QA','Tester','2021-02-12',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(17,'QA','Automation Tester','2021-05-02',1,5); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(18,'QA','Selenium Tester','2021-02-02',1,6); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(19,'Business Analyst','Senior Analyst','2021-02-12',1,4);
insert into employees(userid,department,position,hiredate,directorid,managerid)values(20,'Business Analyst','Data Analyst','2021-05-02',1,5); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(21,'Business Analyst','Domain-specific Analyst','2021-02-02',1,6); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(22,'Business Analyst','Requirements Analyst','2021-02-12',1,6); 

INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2021-02-02','2024-02-02','Project Management System App',4,'In-Progress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2021-02-02','2024-02-02','Krushi Product Management',5,'In-Progress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2021-02-02','2022-02-02','Agri Produst Supplying App',6,'In-Progress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2021-02-02','2024-02-02','Store Management App',4,'Pending');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2021-10-10','2025-02-02','Ticket booking Management App',4,'Pending');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HMApp','2021-10-10','2025-02-02','Hospital Management App',4,'Pending');


INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,16);

INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,17);

INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,11);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,15);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,18);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,19);

INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,16);

INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,17);

-- ---------------------------------------------------------------------------------------------------------------
INSERT INTO tasks (title,description) VALUES
('Develop User Registration Feature','Implement user registration functionality with email verification.'),
('Design User Profile Page','Create the user profile page layout and components.'),
('Implement Password Reset','Develop password reset functionality with email notifications.'),
('Test User Authentication','Perform unit and integration tests for user authentication.'),
('Optimize Database Queries','Improve database query performance for user-related data.'),
('Create User Dashboard','Design a dashboard for users to manage their accounts.'),
('Implement User Notifications','Develop a notification system for user-related events.'),
('Write User Registration API','Create API endpoints for user registration and verification.'),
('Test User Dashboard Functionality','Conduct UI and functionality tests for the user dashboard.'),
('Optimize User Profile Page','Optimize the loading speed of the user profile page.'),
('Implement User Roles','Define user roles and permissions within the application.'),
('Test Email Notifications','Test email notifications for user account activities.'),
('Create User Profile Editing','Allow users to edit their profile information.'),
('Implement Two-Factor Authentication','Add two-factor authentication for enhanced security.'),
('Test Password Reset Workflow','Test the end-to-end workflow of the password reset feature.'),
('Create User Documentation','Prepare user documentation and guides.'),
('Test User Authentication API','Conduct API testing for user authentication endpoints.'),
('Optimize Email Sending','Optimize the email sending process for efficiency.'),
('Implement User Feedback System','Add a feedback system for user suggestions and issues.'),
('Test User Feedback System','Conduct testing for the user feedback and support system.'),
('Implement Payment Gateway','Integrate a secure payment gateway for online transactions.'),
('Design Shopping Cart','Create the shopping cart UI and functionality.'),
('Test Order Processing','Perform end-to-end testing of the order processing system.'),
('Optimize Database Schema','Refactor the database schema for improved performance.'),
('Create Product Catalog','Build a catalog of products with descriptions and pricing.'),
('Implement Product Search','Add search functionality to the product catalog.'),
('Test Payment Processing','Test payment processing with different payment methods.'),
('Write Order Management API','Create API endpoints for managing customer orders.'),
('Optimize Shopping Cart Performance','Optimize the performance of the shopping cart functionality.'),
('Implement Product Reviews','Allow customers to write reviews for products.'),
('Design Checkout Process','Design the checkout process for a smooth user experience.'),
('Test Payment Gateway Integration','Test the integration of the payment gateway with the application.'),
('Implement Discount Codes','Add support for discount codes during checkout.'),
('Optimize Product Catalog Loading','Optimize the loading speed of the product catalog.'),
('Implement Product Categories','Organize products into categories for easy browsing.'),
('Test Order Confirmation Emails','Test the sending of order confirmation emails to customers.'),
('Design Product Detail Pages','Create detailed product pages with images and specifications.'),
('Implement Inventory Management','Add inventory management features for product availability.'),
('Test Product Search Functionality','Conduct testing for the product search feature.'),
('Optimize Order Processing','Optimize the order processing workflow for efficiency.'),
('Implement Task Management Module','Develop a module for managing tasks and assignments.'),
('Design User Permissions','Define user access permissions and roles within the system.'),
('Test Workflow Automation','Test automated workflows for task assignments and notifications.'),
('Optimize Database Indexing','Improve database indexing for faster task queries.'),
('Create Reporting Dashboard','Design a reporting dashboard for task analytics and insights.'),
('Implement Task Assignment','Enable task assignment to team members with notifications.'),
('Test Task Creation Workflow','Test the workflow for creating and assigning tasks.'),
('Write Task Management API','Create API endpoints for task management and reporting.'),
('Optimize Task Search','Optimize the task search feature for quick access to tasks.'),
('Implement Task Priority','Add support for setting task priorities and deadlines.'),
('Design Task Dashboard','Design a dashboard for users to view their assigned tasks.'),
('Test Task Assignment Notifications','Test notifications for task assignments and updates.'),
('Implement Task Statuses','Define different task statuses such as "To-Do," "In Progress," and "Completed."'),
('Optimize Task Analytics','Optimize the performance of task analytics and reporting.'),
('Implement Task Comments','Allow users to add comments and notes to tasks.'),
('Design Task Dashboard','Design a dashboard for users to view their assigned tasks.'),
('Test Task Assignment Notifications','Test notifications for task assignments and updates.'),
('Implement Task Statuses','Define different task statuses such as "To-Do," "In Progress," and "Completed."'),
('Optimize Task Analytics','Optimize the performance of task analytics and reporting.'),
('Implement Task Comments','Allow users to add comments and notes to tasks.'),
('Design Project Management Module','Design a module for managing projects, timelines, and resources.'),
('Define Project Roles','Define project roles and responsibilities within the system.'),
('Test Project Timeline Tracking','Test the tracking of project timelines and milestones.'),
('Optimize Resource Allocation','Optimize resource allocation for efficient project management.'),
('Create Gantt Chart View','Create a Gantt chart view for visualizing project schedules.'),
('Implement Project Budgeting','Add budgeting and cost tracking features for projects.'),
('Test Project Resource Management','Test resource allocation and utilization in projects.'),
('Write Project Management API','Create API endpoints for project management and reporting.'),
('Optimize Chat User Experience','Optimize the user interface and experience of the chat system.'),
('Implement Chat Archiving','Implement chat message archiving and search functionality.'),
('Design Chat Notifications','Design notifications for new chat messages and mentions.'),
('Test Chat Integration with Tasks','Test integration of chat with task management modules.'),
('Implement Video Conferencing','Integrate video conferencing for team meetings and collaboration.'),
('Design Meeting Scheduling','Create a system for scheduling and managing video meetings.'),
('Test Video Quality and Performance','Test video and audio quality in various network conditions.'),
('Optimize Video Conferencing Servers','Optimize servers for scalable video conferencing.'),
('Create Meeting Recording','Add recording and playback functionality for meetings.'),
('Implement Screen Sharing','Enable screen sharing during video conferences for presentations.'),
('Test Meeting Scheduling API','Conduct API testing for meeting scheduling and management.'),
('Design Meeting Notifications','Design notifications for meeting invitations and reminders.'),
('Optimize Video Meeting UI','Optimize the user interface of video conferencing for simplicity.'),
('Implement Meeting Transcripts','Generate transcripts for recorded meetings for reference.'),
('Test Meeting Security','Conduct security testing of video conferencing for privacy.'),
('Optimize Video Conferencing Analytics','Optimize analytics for tracking meeting statistics.'),
('Implement Feedback Surveys','Create feedback surveys for gathering user feedback.'),
('Design Survey Templates','Design templates for various types of feedback and surveys.'),
('Test Survey Creation','Test the creation and distribution of feedback surveys.'),
('Optimize Survey Reporting','Optimize reporting and analytics for survey responses.'),
('Implement User Feedback Analysis','Implement tools for analyzing and acting on user feedback.'),
('Design Feedback Notifications','Design notifications for feedback submissions and analysis results.'),
('Test Feedback Surveys with Users','Conduct user testing of feedback surveys and collection methods.'),
('Implement Feedback Trends Dashboard','Create a dashboard for tracking feedback trends and insights.'),
('Optimize Survey Distribution', 'Optimize the distribution channels for feedback surveys.'),
('Implement AI-Powered Feedback Analysis','Implement AI and machine learning for advanced feedback analysis.'),
('Design Feedback Export','Design tools for exporting feedback data for further analysis.'),
('Test Feedback Analytics','Test the analytics and insights generated from feedback data.'),
('Implement Feedback Action Planning','Create tools for action planning based on feedback analysis.'),
('Design Feedback Loop','Design a feedback loop for continuous improvement based on user feedback.'),
('Test Feedback-Driven Development','Test the integration of user feedback into product development.'),
('Implement Knowledge Base','Create a knowledge base for product documentation and help resources.'),
('Design Feedback Export','Design tools for exporting feedback data for further analysis.'),
('Test Feedback Analytics','Test the analytics and insights generated from feedback data.'),
('Implement Feedback Action Planning','Create tools for action planning based on feedback analysis.'),
('Design Feedback Loop','Design a feedback loop for continuous improvement based on user feedback.'),
('Test Feedback-Driven Development','Test the integration of user feedback into product development.');

-- --------------------------------------------------------------------------------------------------------------


INSERT INTO projecttasks ( projectid, date, status, fromtime, totime,taskid) VALUES
(1,'2023-09-27', 'Pending', '2023-09-14 09:00:00', '2023-09-14 11:00:00',1),
(1,'2023-09-27', 'In-Progress', '2023-09-19 10:00:00', '2023-09-15 12:00:00',2),
(1,'2023-09-26', 'Completed', '2023-09-16 11:00:00', '2023-09-16 13:00:00',3),
(1,'2023-09-25', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',4),
(1,'2023-09-22', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',5),
(1,'2023-09-16', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',6),
(1,'2023-09-20', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',7),
(1,'2023-10-29', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',8),
(1,'2023-09-27', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',9),
(1,'2023-09-25', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',10),
(1,'2023-09-12', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',11),
(1,'2023-09-15', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',12),
(1,'2023-08-16', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',13),
(1,'2023-09-14', 'Pending', '2023-09-27 14:00:00', '2023-09-27 16:00:00',14),
(1,'2023-09-15', 'In-Progress', '2023-09-28 15:00:00', '2023-09-28 17:00:00',15),
(1,'2023-09-29', 'Pending', '2023-08-29 09:00:00', '2023-09-29 11:00:00',16),
(1,'2023-08-30', 'In-Progress', '2023-09-30 10:00:00', '2023-09-30 12:00:00',17),
(1,'2023-08-21', 'Completed', '2023-10-01 11:00:00', '2023-10-01 13:00:00',18),
(1,'2023-08-22', 'Pending', '2023-10-02 14:00:00', '2023-10-02 16:00:00',19),
(1,'2023-08-23', 'In-Progress', '2023-10-03 15:00:00', '2023-10-03 17:00:00',20),
(2,'2021-03-13', 'Pending', '2021-03-13 09:00:00', '2021-03-13 11:00:00',21),
(2,'2021-03-14', 'In-Progress', '2021-03-14 10:00:00', '2021-03-14 12:00:00',22),
(2,'2021-03-15', 'Completed', '2021-03-15 11:00:00', '2021-03-15 13:00:00',23),
(2,'2021-03-16', 'Pending', '2021-03-16 14:00:00', '2021-03-16 16:00:00',24),
(2,'2021-03-17', 'In-Progress', '2021-03-17 15:00:00', '2021-03-17 17:00:00',25),
(2,'2021-03-18', 'Pending', '2021-03-18 09:00:00', '2021-03-18 11:00:00',26),
(2,'2021-03-19', 'In-Progress', '2021-03-19 10:00:00', '2021-03-19 12:00:00',27),
(2,'2021-03-20', 'Completed', '2021-03-20 11:00:00', '2021-03-20 13:00:00',28),
(2,'2021-03-21', 'Pending', '2021-03-21 14:00:00', '2021-03-21 16:00:00',29),
(2,'2021-03-22', 'In-Progress', '2021-03-22 15:00:00', '2021-03-22 17:00:00',30),
(2,'2021-03-23', 'Pending', '2021-03-23 09:00:00', '2021-03-23 11:00:00',31),
(2,'2021-03-24', 'In-Progress', '2021-03-24 10:00:00', '2021-03-24 12:00:00',32),
(2,'2021-03-25', 'Completed', '2021-03-25 11:00:00', '2021-03-25 13:00:00',33),

(2,'2021-03-26', 'Pending', '2021-03-26 14:00:00', '2021-03-26 16:00:00',34),
(2,'2021-03-27', 'In-Progress', '2021-03-27 15:00:00', '2021-03-27 17:00:00',35),
(2,'2021-03-28', 'Pending', '2021-03-28 09:00:00', '2021-03-28 11:00:00',36),
(2,'2021-03-29', 'In-Progress', '2021-03-29 10:00:00', '2021-03-29 12:00:00',37),
(2,'2021-03-30', 'Completed', '2021-03-30 11:00:00', '2021-03-30 13:00:00',38),
(2,'2021-03-31', 'Pending', '2021-03-31 14:00:00', '2021-03-31 16:00:00',39),
(2,'2021-04-01', 'In-Progress', '2021-04-01 15:00:00', '2021-04-01 17:00:00',40),
(3,'2023-10-24', 'Pending', '2023-10-24 09:00:00', '2023-10-24 11:00:00',41),
(3,'2023-10-25', 'In-Progress', '2023-10-25 10:00:00', '2023-10-25 12:00:00',42),
(3,'2023-10-26', 'Completed', '2023-10-26 11:00:00', '2023-10-26 13:00:00',43),
(3,'2023-10-27', 'Pending', '2023-10-27 14:00:00', '2023-10-27 16:00:00',44),
(3,'2023-10-28', 'In-Progress', '2023-10-28 15:00:00', '2023-10-28 17:00:00',45),
(3,'2023-10-29', 'Pending', '2023-10-29 09:00:00', '2023-10-29 11:00:00',46),
(3,'2023-10-30', 'In-Progress', '2023-10-30 10:00:00', '2023-10-30 12:00:00',47),
(3,'2023-10-31', 'Completed', '2023-10-31 11:00:00', '2023-10-31 13:00:00',48),
(3,'2023-11-01', 'Pending', '2023-11-01 14:00:00', '2023-11-01 16:00:00',49),
(3,'2023-11-02', 'In-Progress', '2023-11-02 15:00:00', '2023-11-02 17:00:00',50),
(3,'2023-11-03', 'Pending', '2023-11-03 09:00:00', '2023-11-03 11:00:00',51),
(3,'2023-11-04', 'In-Progress', '2023-11-04 10:00:00', '2023-11-04 12:00:00',52),
(3,'2023-11-05', 'Completed', '2023-11-05 11:00:00', '2023-11-05 13:00:00',53),
(3,'2023-11-06', 'Pending', '2023-11-06 14:00:00', '2023-11-06 16:00:00',54),
(3,'2023-11-07', 'In-Progress', '2023-11-07 15:00:00', '2023-11-07 17:00:00',55),
(3,'2023-11-03', 'Pending', '2023-11-03 09:00:00', '2023-11-03 11:00:00',56),
(3,'2023-11-04', 'In-Progress', '2023-11-04 10:00:00', '2023-11-04 12:00:00',57),
(3,'2023-11-05', 'Completed', '2023-11-05 11:00:00', '2023-11-05 13:00:00',58),
(3,'2023-11-06', 'Pending', '2023-11-06 14:00:00', '2023-11-06 16:00:00',59),
(3,'2023-11-07', 'In-Progress', '2023-11-07 15:00:00', '2023-11-07 17:00:00',60),
(4,'2023-11-08', 'Pending', '2023-11-08 09:00:00', '2023-11-08 11:00:00',61),
(4,'2023-11-09', 'Pending', '2023-11-09 10:00:00', '2023-11-09 12:00:00',62),
(4,'2023-11-10', 'Pending', '2023-11-10 11:00:00', '2023-11-10 13:00:00',63),
(4,'2023-11-11', 'Pending', '2023-11-11 14:00:00', '2023-11-11 16:00:00',64),
(4,'2023-11-12', 'Pending', '2023-11-12 15:00:00', '2023-11-12 17:00:00',65),
(4,'2023-11-13', 'Pending', '2023-11-13 09:00:00', '2023-11-13 11:00:00',66),
(4,'2023-11-14', 'Pending', '2023-11-14 10:00:00', '2023-11-14 12:00:00',67),
(4,'2023-11-15', 'Pending', '2023-11-15 11:00:00', '2023-11-15 13:00:00',68),
(4,'2021-04-30', 'Pending', '2021-04-30 14:00:00', '2021-04-30 16:00:00',69),
(4,'2021-05-01', 'Pending', '2021-05-01 15:00:00', '2021-05-01 17:00:00',70),
(4,'2021-05-02', 'Pending', '2021-05-02 09:00:00', '2021-05-02 11:00:00',71),
(4,'2021-05-03', 'Pending', '2021-05-03 10:00:00', '2021-05-03 12:00:00',72),
(4,'2021-05-04', 'Pending', '2021-05-04 11:00:00', '2021-05-04 13:00:00',73),
(4,'2021-05-05', 'Pending', '2021-05-05 14:00:00', '2021-05-05 16:00:00',74),
(4,'2021-05-06', 'Pending', '2021-05-06 15:00:00', '2021-05-06 17:00:00',75),
(4,'2021-05-07', 'Pending', '2021-05-07 09:00:00', '2021-05-07 11:00:00',76),
(4,'2021-05-08', 'Pending', '2021-05-08 10:00:00', '2021-05-08 12:00:00',77),
(4,'2021-05-09', 'Pending', '2021-05-09 11:00:00', '2021-05-09 13:00:00',78),
(4,'2021-05-10', 'Pending', '2021-05-10 14:00:00', '2021-05-10 16:00:00',79),
(4,'2021-05-11', 'Pending', '2021-05-11 15:00:00', '2021-05-11 17:00:00',80),
(5,'2021-05-12', 'Pending', '2021-05-12 09:00:00', '2021-05-12 11:00:00',81),
(5,'2021-05-13', 'Pending', '2021-05-13 10:00:00', '2021-05-13 12:00:00',82),
(5,'2021-05-14', 'Pending', '2021-05-14 11:00:00', '2021-05-14 13:00:00',83),
(5,'2021-05-15', 'Pending', '2021-05-15 14:00:00', '2021-05-15 16:00:00',84),
(5,'2021-05-16', 'Pending', '2021-05-16 15:00:00', '2021-05-16 17:00:00',85),
(5,'2021-05-17', 'Pending', '2021-05-17 09:00:00', '2021-05-17 11:00:00',86),
(5,'2021-05-18', 'Pending', '2021-05-18 10:00:00', '2021-05-18 12:00:00',87),
(5,'2021-05-19', 'Pending', '2021-05-19 11:00:00', '2021-05-19 13:00:00',88),
(5,'2021-05-20', 'Pending', '2021-05-20 14:00:00', '2021-05-20 16:00:00',89),
(5,'2021-05-21', 'Pending', '2021-05-21 15:00:00', '2021-05-21 17:00:00',90),
(5,'2021-05-22', 'Pending', '2021-05-22 09:00:00', '2021-05-22 11:00:00',91),
(5,'2021-05-23', 'Pending', '2021-05-23 10:00:00', '2021-05-23 12:00:00',92),
(5,'2021-05-24', 'Pending', '2021-05-24 11:00:00', '2021-05-24 13:00:00',93),
(5,'2021-05-25', 'Pending', '2021-05-25 14:00:00', '2021-05-25 16:00:00',94),
(5,'2021-05-26', 'Pending', '2021-05-26 15:00:00', '2021-05-26 17:00:00',95),
(5,'2021-05-27', 'Pending', '2021-05-27 09:00:00', '2021-05-27 11:00:00',96),
(5,'2021-05-28', 'Pending', '2021-05-28 10:00:00', '2021-05-28 12:00:00',97),
(5,'2021-05-29', 'Pending', '2021-05-29 11:00:00', '2021-05-29 13:00:00',98),
(5,'2021-05-30', 'Pending', '2021-05-30 14:00:00', '2021-05-30 16:00:00',99),
(5,'2021-05-31', 'Pending', '2021-05-31 15:00:00', '2021-05-31 17:00:00',100),
(1,'2023-09-23', 'Pending', '2023-09-23 15:00:00', '2023-09-26 17:00:00',101),
(1,'2023-09-23', 'Pending', '2021-09-23 09:00:00', '2023-09-27 11:00:00',102),
(1,'2023-09-22', 'Pending', '2023-09-28 10:00:00', '2023-09-28 12:00:00',103),
(1,'2023-09-17', 'Pending', '2023-09-29 11:00:00', '2023-09-29 13:00:00',104),
(1,'2023-08-29', 'Pending', '2023-08-29 14:00:00', '2023-09-30 16:00:00',105),
-- 10 23 on project 1
(1,'2023-10-03', 'Pending', '2023-08-14 09:00:00', '2023-08-14 11:00:00',1),
(1,'2023-10-02', 'In-Progress', '2023-08-19 10:00:00', '2023-08-15 12:00:00',2),
(1,'2023-10-01', 'Completed', '2023-08-16 11:00:00', '2023-08-16 13:00:00',3),
-- 9 23
(1,'2023-09-01', 'Pending', '2023-09-01 14:00:00', '2023-09-01 16:00:00',4),
(1,'2023-09-02', 'In-Progress', '2023-09-02 15:00:00', '2023-09-02 17:00:00',5),
(1,'2023-09-03', 'Pending', '2023-09-03 09:00:00', '2023-09-03 11:00:00',6),
(1,'2023-09-04', 'In-Progress', '2023-09-04 10:00:00', '2023-09-04 12:00:00',7),
(1,'2023-09-05', 'Completed', '2023-09-05 11:00:00', '2023-09-05 13:00:00',8),
(1,'2023-09-06', 'Pending', '2023-09-06 14:00:00', '2023-09-06 16:00:00',9),
(1,'2023-09-07', 'In-Progress', '2023-09-07 15:00:00', '2023-09-07 17:00:00',10),
(1,'2023-09-08', 'Pending', '2023-09-08 09:00:00', '2023-09-08 11:00:00',11),
(1,'2023-09-09', 'In-Progress', '2023-09-09 10:00:00', '2023-09-09 12:00:00',12),
(1,'2023-09-10', 'Completed', '2023-09-10 11:00:00', '2023-09-10 13:00:00',13),
(1,'2023-09-11', 'Pending', '2023-09-11 14:00:00', '2023-09-11 16:00:00',14),
(1,'2023-09-12', 'In-Progress', '2023-09-12 15:00:00', '2023-09-12 17:00:00',15),
(1,'2023-09-29', 'Pending', '2023-09-13 09:00:00', '2023-09-13 11:00:00',16),
(1,'2023-09-14', 'In-Progress', '2023-09-14 10:00:00', '2023-09-14 12:00:00',17),
(1,'2023-09-15', 'Completed', '2023-10-15 11:00:00', '2023-10-15 13:00:00',18),
(1,'2023-09-16', 'Pending', '2023-10-16 14:00:00', '2023-10-16 16:00:00',19),
(1,'2023-09-17', 'In-Progress', '2023-10-17 15:00:00', '2023-10-17 17:00:00',20),
(1,'2023-09-18', 'Pending', '2023-09-18 09:00:00', '2023-09-18 11:00:00',21),
(1,'2023-09-19', 'In-Progress', '2023-09-19 10:00:00', '2023-09-19 12:00:00',22),
(1,'2023-09-20', 'Completed', '2023-09-20 11:00:00', '2023-09-20 13:00:00',23),
(1,'2023-09-21', 'Pending', '2023-09-21 14:00:00', '2023-09-21 16:00:00',24),
(1,'2023-09-22', 'In-Progress', '2023-09-22 15:00:00', '2023-09-22 17:00:00',25),
(1,'2023-09-23', 'Pending', '2023-09-23 09:00:00', '2023-09-23 11:00:00',26),
(1,'2023-09-24', 'In-Progress', '2023-09-24 10:00:00', '2023-09-24 12:00:00',27),
(1,'2023-09-25', 'Completed', '2023-09-25 11:00:00', '2023-09-25 13:00:00',28),
(1,'2023-09-26', 'Pending', '2023-09-26 14:00:00', '2023-09-26 16:00:00',29),
(1,'2023-09-27', 'In-Progress', '2023-09-27 15:00:00', '2023-09-27 17:00:00',30),
(1,'2023-09-28', 'Pending', '2023-09-28 09:00:00', '2023-09-28 11:00:00',31),
(1,'2023-09-29', 'In-Progress', '2023-09-29 10:00:00', '2023-09-29 12:00:00',32),
(1,'2023-09-30', 'Completed', '2023-09-30 11:00:00', '2023-09-30 13:00:00',33),
-- 8-23
(1,'2023-08-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',34),
(1,'2023-08-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',35),
(1,'2023-08-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',36),
(1,'2023-08-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',37),
(1,'2023-08-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',38),
(1,'2023-08-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',39),
(1,'2023-08-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',40),
(1,'2023-08-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',41),
(1,'2023-08-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',42),
(1,'2023-08-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',43),
-- 7-23
(1,'2023-07-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',44),
(1,'2023-07-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',45),
(1,'2023-07-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',46),
(1,'2023-07-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',47),
(1,'2023-07-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',48),
(1,'2023-07-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',49),
(1,'2023-07-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',50),
(1,'2023-07-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',51),
(1,'2023-07-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',52),
(1,'2023-07-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',53),
-- 6-23
(1,'2023-06-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',54),
(1,'2023-06-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',55),
(1,'2023-06-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',56),
(1,'2023-06-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',57),
(1,'2023-06-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',58),
(1,'2023-06-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',59),
(1,'2023-06-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',60),
(1,'2023-06-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',61),
(1,'2023-06-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',62),
(1,'2023-06-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',63),
-- 5-23
(1,'2023-05-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',64),
(1,'2023-05-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',65),
(1,'2023-05-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',66),
(1,'2023-05-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',67),
(1,'2023-05-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',68),
(1,'2023-05-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',69),
(1,'2023-05-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',70),
(1,'2023-05-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',71),
(1,'2023-05-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',72),
(1,'2023-05-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',73),
-- 4-23
(1,'2023-04-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',74),
(1,'2023-04-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',75),
(1,'2023-04-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',76),
(1,'2023-04-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',77),
(1,'2023-04-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',78),
(1,'2023-04-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',79),
(1,'2023-04-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',80),
(1,'2023-04-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',81),
(1,'2023-04-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',82),
(1,'2023-04-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',83),
-- 3-23
(1,'2023-03-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',84),
(1,'2023-03-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',85),
(1,'2023-03-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',86),
(1,'2023-03-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',87),
(1,'2023-03-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',88),
(1,'2023-03-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',89),
(1,'2023-03-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',90),
(1,'2023-03-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',91),
(1,'2023-03-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',92),
(1,'2023-03-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',93),
-- 2-23
(1,'2023-02-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',94),
(1,'2023-02-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',95),
(1,'2023-02-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',96),
(1,'2023-02-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',97),
(1,'2023-02-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',98),
(1,'2023-02-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',99),
(1,'2023-02-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',100),
(1,'2023-02-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',101),
(1,'2023-02-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',102),
(1,'2023-02-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',103),
-- 1-23
(1,'2023-01-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',1),
(1,'2023-01-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',2),
(1,'2023-01-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',3),
(1,'2023-01-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',4),
(1,'2023-01-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',5),
(1,'2023-01-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',6),
(1,'2023-01-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',7),
(1,'2023-01-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',8),
(1,'2023-01-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',9),
(1,'2023-01-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',10),
-- 12-22
(1,'2022-12-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',11),
(1,'2022-12-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',12),
(1,'2022-12-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',13),
(1,'2022-12-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',14),
(1,'2022-12-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',15),
(1,'2022-12-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',16),
(1,'2022-12-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',17),
(1,'2022-12-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',18),
(1, '2022-12-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',19),
(1,'2022-12-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',20),
-- 11-22
(1,'2023-11-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',21),
(1,'2023-11-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',22),
(1,'2023-11-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',23),
(1,'2023-11-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',24),
(1,'2023-11-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',25),
(1,'2023-11-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',26),
(1,'2023-11-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',27),
(1,'2023-11-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',28),
(1,'2023-11-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',29),
(1,'2023-11-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',30),
-- 10-22
(1,'2023-10-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00',31),
(1,'2023-10-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00',32),
(1,'2023-10-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00',33),
(1,'2023-10-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00',34),
(1,'2023-10-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00',35),
(1,'2023-10-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00',36),
(1,'2023-10-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00',37),
(1,'2023-10-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00',38),
(1,'2023-10-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00',39),
(1,'2023-10-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00',40);





INSERT INTO taskallocations (projecttaskid, teammemberid,assignedon)
VALUES
    (1, 7,'2023-09-27 00:00:00'), (2, 7,'2023-09-26 00:00:00'), (3, 7,'2023-09-22 00:00:00'), (4, 7,'2023-09-10 00:00:00'), (5, 8,'2023-08-28 00:00:00'),
    (6, 8,'2023-09-27 00:00:00'), (7, 8,'2023-09-26 00:00:00'), (8, 8,'2023-09-22 00:00:00'), (9, 12,'2023-09-18 00:00:00'), (10, 12,'2023-09-26 00:00:00'),
    (11, 12,'2023-09-27 00:00:00'), (12, 12,'2023-09-26 00:00:00'), (13, 13,'2023-09-21 00:00:00'), (14, 13,'2023-09-21 00:00:00'), (15, 13,'2023-09-26 00:00:00'),
    (16, 13,'2023-09-27 00:00:00'), (17, 16,'2023-09-26 00:00:00'), (18, 16,'2023-09-23 00:00:00'), (19, 16,'2023-09-16 00:00:00'), (20, 16,'2023-09-11 00:00:00'),
    (21, 9,'2023-09-27 00:00:00'), (22, 9,'2023-09-26 00:00:00'), (23, 9,'2023-09-21 00:00:00'), (24, 9,'2023-09-16 00:00:00'), (25, 9,'2023-09-11 00:00:00'),
    (26,10,'2023-09-27 00:00:00'), (27, 10,'2023-09-26 00:00:00'), (28, 10,'2023-09-22 00:00:00'), (29, 10,'2023-09-11 00:00:00'), (30, 10,'2023-09-01 00:00:00'),
    (31, 14,'2023-09-27 00:00:00'), (32, 14,'2023-09-26 00:00:00'), (33, 14,'2023-09-22 00:00:00'), (34, 14,'2023-09-12 00:00:00'), (35, 14,'2023-09-12 00:00:00'),
    (36, 17,'2023-09-27 00:00:00'), (37, 17,'2023-09-26 00:00:00'), (38, 17,'2023-09-22 00:00:00'), (39, 17,'2023-09-11 00:00:00'), (40, 17,'2023-09-09 00:00:00'),
    (41, 11,'2023-09-27 00:00:00'), (42, 11,'2023-09-26 00:00:00'), (43, 11,'2023-09-21 00:00:00'), (44, 11,'2023-09-11 00:00:00'), (45, 11,'2023-09-07 00:00:00'),
    (46, 15,'2023-09-27 00:00:00'), (47, 15,'2023-09-26 00:00:00'), (48, 15,'2023-09-22 00:00:00'), (49, 15,'2023-09-11 00:00:00'), (50, 15,'2023-09-06 00:00:00'),
    (51, 18,'2023-09-27 00:00:00'), (52, 18,'2023-09-26 00:00:00'), (53, 18,'2023-09-22 00:00:00'), (54, 18,'2023-09-11 00:00:00'), (55, 18,'2023-09-06 00:00:00'),
    (56, 19,'2023-09-27 00:00:00'), (57, 19,'2023-09-26 00:00:00'), (58, 19,'2023-09-22 00:00:00'), (59, 19,'2023-09-11 00:00:00'), (60, 19,'2023-09-05 00:00:00'),
    (61, 7,'2023-09-27 00:00:00'), (62, 7,'2023-09-26 00:00:00'), (63, 7,'2023-09-21 00:00:00'), (64, 7,'2023-09-11 00:00:00'), (65, 8,'2023-09-05 00:00:00'),
    (66, 8,'2023-09-27 00:00:00'), (67, 8,'2023-09-26 00:00:00'), (68, 8,'2023-09-21 00:00:00'), (69, 12,'2023-09-11 00:00:00'), (70, 12,'2023-09-12 00:00:00'),
    (71, 12,'2023-09-27 00:00:00'), (72, 12,'2023-09-26 00:00:00'), (73, 13,'2023-09-21 00:00:00'), (74, 13,'2023-09-11 00:00:00'), (75, 13,'2023-09-21 00:00:00'),
    (76, 13,'2023-09-27 00:00:00'), (77, 16,'2023-09-26 00:00:00'), (78, 16,'2023-09-21 00:00:00'), (79, 16,'2023-09-11 00:00:00'), (80, 16,'2023-09-23 00:00:00'),
    (81, 9,'2023-09-27 00:00:00'), (82, 9,'2023-09-26 00:00:00'), (83, 9,'2023-09-21 00:00:00'), (84, 9,'2023-09-21 00:00:00'), (85, 9,'2023-09-11 00:00:00'),
    (86, 10,'2023-09-27 00:00:00'), (87, 10,'2023-09-26 00:00:00'), (88, 10,'2023-09-21 00:00:00'), (89, 10,'2023-09-11 00:00:00'), (90, 10,'2023-09-15 00:00:00'),
    (91, 14,'2023-09-27 00:00:00'), (92, 14,'2023-09-26 00:00:00'), (93, 14,'2023-09-21 00:00:00'), (94, 14,'2023-09-11 00:00:00'), (95, 14,'2023-09-16 00:00:00'),
    (96, 17,'2023-09-27 00:00:00'), (97, 17,'2023-09-26 00:00:00'), (98, 17,'2023-09-21 00:00:00'), (99, 17,'2023-09-11 00:00:00'), (100, 17,'2023-09-25 00:00:00');


INSERT INTO timesheets (date, fromtime, totime, status, description, taskallocationid)
VALUES
('2023-06-01', '09:00:00', '10:00:00', 'Pending', 'Description 1', 1),
('2023-06-02', '10:30:00', '11:30:00', 'In-Progress', 'Description 2', 2),
('2023-06-03', '07:00:00', '09:00:00', 'Completed', 'Description 3', 3),
('2023-06-04', '09:00:00', '11:00:00', 'Pending', 'Description 4', 4),
('2023-06-05', '08:00:00', '10:00:00', 'In-Progress', 'Description 5', 5),
('2023-06-06', '11:00:00', '12:00:00', 'Completed', 'Description 6', 6),
('2023-06-07', '05:00:00', '07:00:00', 'Pending', 'Description 7', 7),
('2023-06-08', '14:00:00', '16:00:00', 'In-Progress', 'Description 8', 8),
('2023-06-09', '10:00:00', '12:00:00', 'Completed', 'Description 9', 9),
('2023-06-10', '13:00:00', '15:00:00', 'Pending', 'Description 10', 10),
('2023-06-11', '11:30:00', '12:30:00', 'In-Progress', 'Description 11', 11),
('2023-06-12', '08:00:00', '09:30:00', 'Completed', 'Description 12', 12),
('2023-06-13', '10:00:00', '11:30:00', 'Pending', 'Description 13', 13),
('2023-06-14', '09:30:00', '11:30:00', 'In-Progress', 'Description 14', 14),
('2023-06-15', '07:00:00', '08:30:00', 'Completed', 'Description 15', 15),
('2023-06-16', '08:30:00', '10:00:00', 'Pending', 'Description 16', 16),
('2023-06-17', '09:00:00', '10:00:00', 'Pending', 'Description 17', 17),
('2023-06-18', '10:30:00', '11:30:00', 'In-Progress', 'Description 18', 18),
('2023-06-19', '07:00:00', '09:00:00', 'Completed', 'Description 19', 19),
('2023-06-20', '09:00:00', '11:00:00', 'Pending', 'Description 20', 20),
('2023-06-21', '08:00:00', '10:00:00', 'In-Progress', 'Description 21', 21),
('2023-06-22', '11:00:00', '12:00:00', 'Completed', 'Description 22', 22),
('2023-06-23', '05:00:00', '07:00:00', 'Pending', 'Description 23', 23),
('2023-06-24', '14:00:00', '16:00:00', 'In-Progress', 'Description 24', 24),
('2023-06-25', '10:00:00', '12:00:00', 'Completed', 'Description 25', 25),
('2023-06-26', '13:00:00', '15:00:00', 'Pending', 'Description 26', 26),
('2023-06-27', '11:30:00', '12:30:00', 'In-Progress', 'Description 27', 27),
('2023-06-28', '08:00:00', '09:30:00', 'Completed', 'Description 28', 28),
('2023-06-29', '10:00:00', '11:30:00', 'Pending', 'Description 29', 29),
('2023-06-30', '09:30:00', '11:30:00', 'In-Progress', 'Description 30', 30),
('2023-07-01', '07:00:00', '08:30:00', 'Completed', 'Description 31', 31),
('2023-07-02', '08:30:00', '10:00:00', 'Pending', 'Description 32', 32),
('2023-07-03', '09:00:00', '10:00:00', 'Pending', 'Description 33', 33),
('2023-07-04', '10:30:00', '11:30:00', 'In-Progress', 'Description 34', 34),
('2023-07-05', '07:00:00', '09:00:00', 'Completed', 'Description 35', 35),
('2023-07-06', '09:00:00', '11:00:00', 'Pending', 'Description 36', 36),
('2023-07-07', '08:00:00', '10:00:00', 'In-Progress', 'Description 37', 37),
('2023-07-08', '11:00:00', '12:00:00', 'Completed', 'Description 38', 38),
('2023-07-09', '05:00:00', '07:00:00', 'Pending', 'Description 39', 39),
('2023-07-10', '14:00:00', '16:00:00', 'In-Progress', 'Description 40', 40),
('2023-07-11', '10:00:00', '12:00:00', 'Completed', 'Description 41', 41),
('2023-07-12', '13:00:00', '15:00:00', 'Pending', 'Description 42', 42),
('2023-07-13', '11:30:00', '12:30:00', 'In-Progress', 'Description 43', 43),
('2023-07-14', '08:00:00', '09:30:00', 'Completed', 'Description 44', 44),
('2023-07-15', '10:00:00', '11:30:00', 'Pending', 'Description 45', 45),
('2023-07-16', '09:30:00', '11:30:00', 'In-Progress', 'Description 46', 46),
('2023-07-17', '07:00:00', '08:30:00', 'Completed', 'Description 47', 47),
('2023-07-18', '08:30:00', '10:00:00', 'Pending', 'Description 48', 48),
('2023-07-19', '09:00:00', '10:00:00', 'Pending', 'Description 49', 49),
('2023-07-20', '10:30:00', '11:30:00', 'In-Progress', 'Description 50', 50),
('2023-07-21', '07:00:00', '09:00:00', 'Completed', 'Description 51', 51),
('2023-07-22', '09:00:00', '11:00:00', 'Pending', 'Description 52', 52),
('2023-07-23', '08:00:00', '10:00:00', 'In-Progress', 'Description 53', 53),
('2023-07-24', '11:00:00', '12:00:00', 'Completed', 'Description 54', 54),
('2023-07-25', '05:00:00', '07:00:00', 'Pending', 'Description 55', 55),
('2023-07-26', '14:00:00', '16:00:00', 'In-Progress', 'Description 56', 56),
('2023-07-27', '10:00:00', '12:00:00', 'Completed', 'Description 57', 57),
('2023-07-28', '13:00:00', '15:00:00', 'Pending', 'Description 58', 58),
('2023-07-29', '11:30:00', '12:30:00', 'In-Progress', 'Description 59', 59),
('2023-07-30', '08:00:00', '09:30:00', 'Completed', 'Description 60', 60),
('2023-08-01', '10:00:00', '11:30:00', 'Pending', 'Description 61', 61),
('2023-08-02', '09:30:00', '11:30:00', 'Pending', 'Description 62', 62),
('2023-08-03', '07:00:00', '08:30:00', 'Pending', 'Description 63', 63),
('2023-08-04', '08:30:00', '10:00:00', 'Pending', 'Description 64', 64),
('2023-08-05', '09:00:00', '10:00:00', 'Pending', 'Description 65', 65),
('2023-08-06', '10:30:00', '11:30:00', 'Pending', 'Description 66', 66),
('2023-08-07', '07:00:00', '09:00:00', 'Pending', 'Description 67', 67),
('2023-08-08', '09:00:00', '11:00:00', 'Pending', 'Description 68', 68),
('2023-08-09', '08:00:00', '10:00:00', 'Pending', 'Description 69', 69),
('2023-08-10', '11:00:00', '12:00:00', 'Pending', 'Description 70', 70),
('2023-08-11', '05:00:00', '07:00:00', 'Pending', 'Description 71', 71),
('2023-08-12', '14:00:00', '16:00:00', 'Pending', 'Description 72', 72),
('2023-08-13', '10:00:00', '12:00:00', 'Pending', 'Description 73', 73),
('2023-08-14', '13:00:00', '15:00:00', 'Pending', 'Description 74', 74),
('2023-08-15', '11:30:00', '12:30:00', 'Pending', 'Description 75', 75),
('2023-08-16', '08:00:00', '09:30:00', 'Pending', 'Description 76', 76),
('2023-08-17', '10:00:00', '11:30:00', 'Pending', 'Description 77', 77),
('2023-08-18', '09:30:00', '11:30:00', 'Pending', 'Description 78', 78),
('2023-08-19', '07:00:00', '08:30:00', 'Pending', 'Description 79', 79),
('2023-08-20', '08:30:00', '10:00:00', 'Pending', 'Description 80', 80),
('2023-08-21', '09:00:00', '10:00:00', 'Pending', 'Description 81', 81),
('2023-08-22', '10:30:00', '11:30:00', 'Pending', 'Description 82', 82),
('2023-08-23', '07:00:00', '09:00:00', 'Pending', 'Description 83', 83),
('2023-08-24', '09:00:00', '11:00:00', 'Pending', 'Description 84', 84),
('2023-08-25', '08:00:00', '10:00:00', 'Pending', 'Description 85', 85),
('2023-08-26', '11:00:00', '12:00:00', 'Pending', 'Description 86', 86),
('2023-08-27', '05:00:00', '07:00:00', 'Pending', 'Description 87', 87),
('2023-08-28', '14:00:00', '16:00:00', 'Pending', 'Description 88', 88),
('2023-08-29', '10:00:00', '12:00:00', 'Pending', 'Description 89', 89),
('2023-08-30', '13:00:00', '15:00:00', 'Pending', 'Description 90', 90),
('2023-09-01', '11:30:00', '12:30:00', 'Pending', 'Description 91', 91),
('2023-09-02', '08:00:00', '09:30:00', 'Pending', 'Description 92', 92),
('2023-09-03', '10:00:00', '11:30:00', 'Pending', 'Description 93', 93),
('2023-09-04', '09:30:00', '11:30:00', 'Pending', 'Description 94', 94),
('2023-09-05', '07:00:00', '08:30:00', 'Pending', 'Description 95', 95),
('2023-09-06', '08:30:00', '10:00:00', 'Pending', 'Description 96', 96),
('2023-09-07', '09:00:00', '10:00:00', 'Pending', 'Description 97', 97),
('2023-09-08', '10:30:00', '11:30:00', 'Pending', 'Description 98', 98),
('2023-09-09', '07:00:00', '09:00:00', 'Pending', 'Description 99', 99),
('2023-09-10', '09:00:00', '11:00:00', 'Pending', 'Description 100', 100);