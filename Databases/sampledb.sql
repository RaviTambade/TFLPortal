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

INSERT INTO tasks (title, projectid, description, date, status, fromtime, totime) VALUES
('Develop User Registration Feature', 1, 'Implement user registration functionality with email verification.', '2023-09-27', 'Pending', '2023-09-14 09:00:00', '2023-09-14 11:00:00'),
('Design User Profile Page', 1, 'Create the user profile page layout and components.', '2023-09-27', 'In-Progress', '2023-09-19 10:00:00', '2023-09-15 12:00:00'),
('Implement Password Reset', 1, 'Develop password reset functionality with email notifications.', '2023-09-26', 'Completed', '2023-09-16 11:00:00', '2023-09-16 13:00:00'),
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-09-25', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-09-22', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-09-16', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-09-20', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-10-29', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-09-27', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-09-25', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-09-12', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-09-15', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-08-16', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
('Implement Two-Factor Authentication', 1, 'Add two-factor authentication for enhanced security.', '2023-09-14', 'Pending', '2023-09-27 14:00:00', '2023-09-27 16:00:00'),
('Test Password Reset Workflow', 1, 'Test the end-to-end workflow of the password reset feature.', '2023-09-15', 'In-Progress', '2023-09-28 15:00:00', '2023-09-28 17:00:00'),
('Create User Documentation', 1, 'Prepare user documentation and guides.', '2023-09-29', 'Pending', '2023-08-29 09:00:00', '2023-09-29 11:00:00'),
('Test User Authentication API', 1, 'Conduct API testing for user authentication endpoints.', '2023-08-30', 'In-Progress', '2023-09-30 10:00:00', '2023-09-30 12:00:00'),
('Optimize Email Sending', 1, 'Optimize the email sending process for efficiency.', '2023-08-21', 'Completed', '2023-10-01 11:00:00', '2023-10-01 13:00:00'),
('Implement User Feedback System', 1, 'Add a feedback system for user suggestions and issues.', '2023-08-22', 'Pending', '2023-10-02 14:00:00', '2023-10-02 16:00:00'),
('Test User Feedback System', 1, 'Conduct testing for the user feedback and support system.', '2023-08-23', 'In-Progress', '2023-10-03 15:00:00', '2023-10-03 17:00:00'),
('Implement Payment Gateway', 2, 'Integrate a secure payment gateway for online transactions.', '2021-03-13', 'Pending', '2021-03-13 09:00:00', '2021-03-13 11:00:00'),
('Design Shopping Cart', 2, 'Create the shopping cart UI and functionality.', '2021-03-14', 'In-Progress', '2021-03-14 10:00:00', '2021-03-14 12:00:00'),
('Test Order Processing', 2, 'Perform end-to-end testing of the order processing system.', '2021-03-15', 'Completed', '2021-03-15 11:00:00', '2021-03-15 13:00:00'),
('Optimize Database Schema', 2, 'Refactor the database schema for improved performance.', '2021-03-16', 'Pending', '2021-03-16 14:00:00', '2021-03-16 16:00:00'),
('Create Product Catalog', 2, 'Build a catalog of products with descriptions and pricing.', '2021-03-17', 'In-Progress', '2021-03-17 15:00:00', '2021-03-17 17:00:00'),
('Implement Product Search', 2, 'Add search functionality to the product catalog.', '2021-03-18', 'Pending', '2021-03-18 09:00:00', '2021-03-18 11:00:00'),
('Test Payment Processing', 2, 'Test payment processing with different payment methods.', '2021-03-19', 'In-Progress', '2021-03-19 10:00:00', '2021-03-19 12:00:00'),
('Write Order Management API', 2, 'Create API endpoints for managing customer orders.', '2021-03-20', 'Completed', '2021-03-20 11:00:00', '2021-03-20 13:00:00'),
('Optimize Shopping Cart Performance', 2, 'Optimize the performance of the shopping cart functionality.', '2021-03-21', 'Pending', '2021-03-21 14:00:00', '2021-03-21 16:00:00'),
('Implement Product Reviews', 2, 'Allow customers to write reviews for products.', '2021-03-22', 'In-Progress', '2021-03-22 15:00:00', '2021-03-22 17:00:00'),
('Design Checkout Process', 2, 'Design the checkout process for a smooth user experience.', '2021-03-23', 'Pending', '2021-03-23 09:00:00', '2021-03-23 11:00:00'),
('Test Payment Gateway Integration', 2, 'Test the integration of the payment gateway with the application.', '2021-03-24', 'In-Progress', '2021-03-24 10:00:00', '2021-03-24 12:00:00'),
('Implement Discount Codes', 2, 'Add support for discount codes during checkout.', '2021-03-25', 'Completed', '2021-03-25 11:00:00', '2021-03-25 13:00:00'),

('Optimize Product Catalog Loading', 2, 'Optimize the loading speed of the product catalog.', '2021-03-26', 'Pending', '2021-03-26 14:00:00', '2021-03-26 16:00:00'),
('Implement Product Categories', 2, 'Organize products into categories for easy browsing.', '2021-03-27', 'In-Progress', '2021-03-27 15:00:00', '2021-03-27 17:00:00'),
('Test Order Confirmation Emails', 2, 'Test the sending of order confirmation emails to customers.', '2021-03-28', 'Pending', '2021-03-28 09:00:00', '2021-03-28 11:00:00'),
('Design Product Detail Pages', 2, 'Create detailed product pages with images and specifications.', '2021-03-29', 'In-Progress', '2021-03-29 10:00:00', '2021-03-29 12:00:00'),
('Implement Inventory Management', 2, 'Add inventory management features for product availability.', '2021-03-30', 'Completed', '2021-03-30 11:00:00', '2021-03-30 13:00:00'),
('Test Product Search Functionality', 2, 'Conduct testing for the product search feature.', '2021-03-31', 'Pending', '2021-03-31 14:00:00', '2021-03-31 16:00:00'),
('Optimize Order Processing', 2, 'Optimize the order processing workflow for efficiency.', '2021-04-01', 'In-Progress', '2021-04-01 15:00:00', '2021-04-01 17:00:00'),
('Implement Task Management Module', 3, 'Develop a module for managing tasks and assignments.', '2023-10-24', 'Pending', '2023-10-24 09:00:00', '2023-10-24 11:00:00'),
('Design User Permissions', 3, 'Define user access permissions and roles within the system.', '2023-10-25', 'In-Progress', '2023-10-25 10:00:00', '2023-10-25 12:00:00'),
('Test Workflow Automation', 3, 'Test automated workflows for task assignments and notifications.', '2023-10-26', 'Completed', '2023-10-26 11:00:00', '2023-10-26 13:00:00'),
('Optimize Database Indexing', 3, 'Improve database indexing for faster task queries.', '2023-10-27', 'Pending', '2023-10-27 14:00:00', '2023-10-27 16:00:00'),
('Create Reporting Dashboard', 3, 'Design a reporting dashboard for task analytics and insights.', '2023-10-28', 'In-Progress', '2023-10-28 15:00:00', '2023-10-28 17:00:00'),
('Implement Task Assignment', 3, 'Enable task assignment to team members with notifications.', '2023-10-29', 'Pending', '2023-10-29 09:00:00', '2023-10-29 11:00:00'),
('Test Task Creation Workflow', 3, 'Test the workflow for creating and assigning tasks.', '2023-10-30', 'In-Progress', '2023-10-30 10:00:00', '2023-10-30 12:00:00'),
('Write Task Management API', 3, 'Create API endpoints for task management and reporting.', '2023-10-31', 'Completed', '2023-10-31 11:00:00', '2023-10-31 13:00:00'),
('Optimize Task Search', 3, 'Optimize the task search feature for quick access to tasks.', '2023-11-01', 'Pending', '2023-11-01 14:00:00', '2023-11-01 16:00:00'),
('Implement Task Priority', 3, 'Add support for setting task priorities and deadlines.', '2023-11-02', 'In-Progress', '2023-11-02 15:00:00', '2023-11-02 17:00:00'),
('Design Task Dashboard', 3, 'Design a dashboard for users to view their assigned tasks.', '2023-11-03', 'Pending', '2023-11-03 09:00:00', '2023-11-03 11:00:00'),
('Test Task Assignment Notifications', 3, 'Test notifications for task assignments and updates.', '2023-11-04', 'In-Progress', '2023-11-04 10:00:00', '2023-11-04 12:00:00'),
('Implement Task Statuses', 3, 'Define different task statuses such as "To-Do," "In Progress," and "Completed."', '2023-11-05', 'Completed', '2023-11-05 11:00:00', '2023-11-05 13:00:00'),
('Optimize Task Analytics', 3, 'Optimize the performance of task analytics and reporting.', '2023-11-06', 'Pending', '2023-11-06 14:00:00', '2023-11-06 16:00:00'),
('Implement Task Comments', 3, 'Allow users to add comments and notes to tasks.', '2023-11-07', 'In-Progress', '2023-11-07 15:00:00', '2023-11-07 17:00:00'),
('Design Task Dashboard', 3, 'Design a dashboard for users to view their assigned tasks.', '2023-11-03', 'Pending', '2023-11-03 09:00:00', '2023-11-03 11:00:00'),
('Test Task Assignment Notifications', 3, 'Test notifications for task assignments and updates.', '2023-11-04', 'In-Progress', '2023-11-04 10:00:00', '2023-11-04 12:00:00'),
('Implement Task Statuses', 3, 'Define different task statuses such as "To-Do," "In Progress," and "Completed."', '2023-11-05', 'Completed', '2023-11-05 11:00:00', '2023-11-05 13:00:00'),
('Optimize Task Analytics', 3, 'Optimize the performance of task analytics and reporting.', '2023-11-06', 'Pending', '2023-11-06 14:00:00', '2023-11-06 16:00:00'),
('Implement Task Comments', 3, 'Allow users to add comments and notes to tasks.', '2023-11-07', 'In-Progress', '2023-11-07 15:00:00', '2023-11-07 17:00:00'),
('Design Project Management Module', 4, 'Design a module for managing projects, timelines, and resources.', '2023-11-08', 'Pending', '2023-11-08 09:00:00', '2023-11-08 11:00:00'),
('Define Project Roles', 4, 'Define project roles and responsibilities within the system.', '2023-11-09', 'Pending', '2023-11-09 10:00:00', '2023-11-09 12:00:00'),
('Test Project Timeline Tracking', 4, 'Test the tracking of project timelines and milestones.', '2023-11-10', 'Pending', '2023-11-10 11:00:00', '2023-11-10 13:00:00'),
('Optimize Resource Allocation', 4, 'Optimize resource allocation for efficient project management.', '2023-11-11', 'Pending', '2023-11-11 14:00:00', '2023-11-11 16:00:00'),
('Create Gantt Chart View', 4, 'Create a Gantt chart view for visualizing project schedules.', '2023-11-12', 'Pending', '2023-11-12 15:00:00', '2023-11-12 17:00:00'),
('Implement Project Budgeting', 4, 'Add budgeting and cost tracking features for projects.', '2023-11-13', 'Pending', '2023-11-13 09:00:00', '2023-11-13 11:00:00'),
('Test Project Resource Management', 4, 'Test resource allocation and utilization in projects.', '2023-11-14', 'Pending', '2023-11-14 10:00:00', '2023-11-14 12:00:00'),
('Write Project Management API', 4, 'Create API endpoints for project management and reporting.', '2023-11-15', 'Pending', '2023-11-15 11:00:00', '2023-11-15 13:00:00'),
('Optimize Chat User Experience', 4, 'Optimize the user interface and experience of the chat system.', '2021-04-30', 'Pending', '2021-04-30 14:00:00', '2021-04-30 16:00:00'),
('Implement Chat Archiving', 4, 'Implement chat message archiving and search functionality.', '2021-05-01', 'Pending', '2021-05-01 15:00:00', '2021-05-01 17:00:00'),
('Design Chat Notifications', 4, 'Design notifications for new chat messages and mentions.', '2021-05-02', 'Pending', '2021-05-02 09:00:00', '2021-05-02 11:00:00'),
('Test Chat Integration with Tasks', 4, 'Test integration of chat with task management modules.', '2021-05-03', 'Pending', '2021-05-03 10:00:00', '2021-05-03 12:00:00'),
('Implement Video Conferencing', 4, 'Integrate video conferencing for team meetings and collaboration.', '2021-05-04', 'Pending', '2021-05-04 11:00:00', '2021-05-04 13:00:00'),
('Design Meeting Scheduling', 4, 'Create a system for scheduling and managing video meetings.', '2021-05-05', 'Pending', '2021-05-05 14:00:00', '2021-05-05 16:00:00'),
('Test Video Quality and Performance', 4, 'Test video and audio quality in various network conditions.', '2021-05-06', 'Pending', '2021-05-06 15:00:00', '2021-05-06 17:00:00'),
('Optimize Video Conferencing Servers', 4, 'Optimize servers for scalable video conferencing.', '2021-05-07', 'Pending', '2021-05-07 09:00:00', '2021-05-07 11:00:00'),
('Create Meeting Recording', 4, 'Add recording and playback functionality for meetings.', '2021-05-08', 'Pending', '2021-05-08 10:00:00', '2021-05-08 12:00:00'),
('Implement Screen Sharing', 4, 'Enable screen sharing during video conferences for presentations.', '2021-05-09', 'Pending', '2021-05-09 11:00:00', '2021-05-09 13:00:00'),
('Test Meeting Scheduling API', 4, 'Conduct API testing for meeting scheduling and management.', '2021-05-10', 'Pending', '2021-05-10 14:00:00', '2021-05-10 16:00:00'),
('Design Meeting Notifications', 4, 'Design notifications for meeting invitations and reminders.', '2021-05-11', 'Pending', '2021-05-11 15:00:00', '2021-05-11 17:00:00'),
('Optimize Video Meeting UI', 5, 'Optimize the user interface of video conferencing for simplicity.', '2021-05-12', 'Pending', '2021-05-12 09:00:00', '2021-05-12 11:00:00'),
('Implement Meeting Transcripts',5, 'Generate transcripts for recorded meetings for reference.', '2021-05-13', 'Pending', '2021-05-13 10:00:00', '2021-05-13 12:00:00'),
('Test Meeting Security', 5, 'Conduct security testing of video conferencing for privacy.', '2021-05-14', 'Pending', '2021-05-14 11:00:00', '2021-05-14 13:00:00'),
('Optimize Video Conferencing Analytics', 5, 'Optimize analytics for tracking meeting statistics.', '2021-05-15', 'Pending', '2021-05-15 14:00:00', '2021-05-15 16:00:00'),
('Implement Feedback Surveys', 5, 'Create feedback surveys for gathering user feedback.', '2021-05-16', 'Pending', '2021-05-16 15:00:00', '2021-05-16 17:00:00'),
('Design Survey Templates', 5, 'Design templates for various types of feedback and surveys.', '2021-05-17', 'Pending', '2021-05-17 09:00:00', '2021-05-17 11:00:00'),
('Test Survey Creation', 5, 'Test the creation and distribution of feedback surveys.', '2021-05-18', 'Pending', '2021-05-18 10:00:00', '2021-05-18 12:00:00'),
('Optimize Survey Reporting', 5, 'Optimize reporting and analytics for survey responses.', '2021-05-19', 'Pending', '2021-05-19 11:00:00', '2021-05-19 13:00:00'),
('Implement User Feedback Analysis', 5, 'Implement tools for analyzing and acting on user feedback.', '2021-05-20', 'Pending', '2021-05-20 14:00:00', '2021-05-20 16:00:00'),
('Design Feedback Notifications', 5, 'Design notifications for feedback submissions and analysis results.', '2021-05-21', 'Pending', '2021-05-21 15:00:00', '2021-05-21 17:00:00'),
('Test Feedback Surveys with Users', 5, 'Conduct user testing of feedback surveys and collection methods.', '2021-05-22', 'Pending', '2021-05-22 09:00:00', '2021-05-22 11:00:00'),
('Implement Feedback Trends Dashboard', 5, 'Create a dashboard for tracking feedback trends and insights.', '2021-05-23', 'Pending', '2021-05-23 10:00:00', '2021-05-23 12:00:00'),
('Optimize Survey Distribution',5, 'Optimize the distribution channels for feedback surveys.', '2021-05-24', 'Pending', '2021-05-24 11:00:00', '2021-05-24 13:00:00'),
('Implement AI-Powered Feedback Analysis', 5, 'Implement AI and machine learning for advanced feedback analysis.', '2021-05-25', 'Pending', '2021-05-25 14:00:00', '2021-05-25 16:00:00'),
('Design Feedback Export', 5, 'Design tools for exporting feedback data for further analysis.', '2021-05-26', 'Pending', '2021-05-26 15:00:00', '2021-05-26 17:00:00'),
('Test Feedback Analytics', 5, 'Test the analytics and insights generated from feedback data.', '2021-05-27', 'Pending', '2021-05-27 09:00:00', '2021-05-27 11:00:00'),
('Implement Feedback Action Planning', 5, 'Create tools for action planning based on feedback analysis.', '2021-05-28', 'Pending', '2021-05-28 10:00:00', '2021-05-28 12:00:00'),
('Design Feedback Loop', 5, 'Design a feedback loop for continuous improvement based on user feedback.', '2021-05-29', 'Pending', '2021-05-29 11:00:00', '2021-05-29 13:00:00'),
('Test Feedback-Driven Development', 5, 'Test the integration of user feedback into product development.', '2021-05-30', 'Pending', '2021-05-30 14:00:00', '2021-05-30 16:00:00'),
('Implement Knowledge Base', 5, 'Create a knowledge base for product documentation and help resources.', '2021-05-31', 'Pending', '2021-05-31 15:00:00', '2021-05-31 17:00:00'),
('Design Feedback Export', 1, 'Design tools for exporting feedback data for further analysis.', '2023-09-23', 'Pending', '2023-09-23 15:00:00', '2023-09-26 17:00:00'),
('Test Feedback Analytics', 1, 'Test the analytics and insights generated from feedback data.', '2023-09-23', 'Pending', '2021-09-23 09:00:00', '2023-09-27 11:00:00'),
('Implement Feedback Action Planning', 1, 'Create tools for action planning based on feedback analysis.', '2023-09-22', 'Pending', '2023-09-28 10:00:00', '2023-09-28 12:00:00'),
('Design Feedback Loop', 1, 'Design a feedback loop for continuous improvement based on user feedback.', '2023-09-17', 'Pending', '2023-09-29 11:00:00', '2023-09-29 13:00:00'),
('Test Feedback-Driven Development', 1, 'Test the integration of user feedback into product development.', '2023-08-29', 'Pending', '2023-08-29 14:00:00', '2023-09-30 16:00:00'),
-- 10 23
('Develop User Registration Feature', 1, 'Implement user registration functionality with email verification.', '2023-10-03', 'Pending', '2023-08-14 09:00:00', '2023-08-14 11:00:00'),
('Design User Profile Page', 1, 'Create the user profile page layout and components.', '2023-10-02', 'In-Progress', '2023-08-19 10:00:00', '2023-08-15 12:00:00'),
('Implement Password Reset', 1, 'Develop password reset functionality with email notifications.', '2023-10-01', 'Completed', '2023-08-16 11:00:00', '2023-08-16 13:00:00'),
-- 9 23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-09-01', 'Pending', '2023-09-01 14:00:00', '2023-09-01 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-09-02', 'In-Progress', '2023-09-02 15:00:00', '2023-09-02 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-09-03', 'Pending', '2023-09-03 09:00:00', '2023-09-03 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-09-04', 'In-Progress', '2023-09-04 10:00:00', '2023-09-04 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-09-05', 'Completed', '2023-09-05 11:00:00', '2023-09-05 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-09-06', 'Pending', '2023-09-06 14:00:00', '2023-09-06 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-09-07', 'In-Progress', '2023-09-07 15:00:00', '2023-09-07 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-09-08', 'Pending', '2023-09-08 09:00:00', '2023-09-08 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-09-09', 'In-Progress', '2023-09-09 10:00:00', '2023-09-09 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-09-10', 'Completed', '2023-09-10 11:00:00', '2023-09-10 13:00:00'),
('Implement Two-Factor Authentication', 1, 'Add two-factor authentication for enhanced security.', '2023-09-11', 'Pending', '2023-09-11 14:00:00', '2023-09-11 16:00:00'),
('Test Password Reset Workflow', 1, 'Test the end-to-end workflow of the password reset feature.', '2023-09-12', 'In-Progress', '2023-09-12 15:00:00', '2023-09-12 17:00:00'),
('Create User Documentation', 1, 'Prepare user documentation and guides.', '2023-09-29', 'Pending', '2023-09-13 09:00:00', '2023-09-13 11:00:00'),
('Test User Authentication API', 1, 'Conduct API testing for user authentication endpoints.', '2023-09-14', 'In-Progress', '2023-09-14 10:00:00', '2023-09-14 12:00:00'),
('Optimize Email Sending', 1, 'Optimize the email sending process for efficiency.', '2023-09-15', 'Completed', '2023-10-15 11:00:00', '2023-10-15 13:00:00'),
('Implement User Feedback System', 1, 'Add a feedback system for user suggestions and issues.', '2023-09-16', 'Pending', '2023-10-16 14:00:00', '2023-10-16 16:00:00'),
('Test User Feedback System', 1, 'Conduct testing for the user feedback and support system.', '2023-09-17', 'In-Progress', '2023-10-17 15:00:00', '2023-10-17 17:00:00'),
('Implement Payment Gateway', 1, 'Integrate a secure payment gateway for online transactions.', '2023-09-18', 'Pending', '2023-09-18 09:00:00', '2023-09-18 11:00:00'),
('Design Shopping Cart', 1, 'Create the shopping cart UI and functionality.', '2023-09-19', 'In-Progress', '2023-09-19 10:00:00', '2023-09-19 12:00:00'),
('Test Order Processing', 1, 'Perform end-to-end testing of the order processing system.', '2023-09-20', 'Completed', '2023-09-20 11:00:00', '2023-09-20 13:00:00'),
('Optimize Database Schema', 1, 'Refactor the database schema for improved performance.', '2023-09-21', 'Pending', '2023-09-21 14:00:00', '2023-09-21 16:00:00'),
('Create Product Catalog', 1, 'Build a catalog of products with descriptions and pricing.', '2023-09-22', 'In-Progress', '2023-09-22 15:00:00', '2023-09-22 17:00:00'),
('Implement Product Search', 1, 'Add search functionality to the product catalog.', '2023-09-23', 'Pending', '2023-09-23 09:00:00', '2023-09-23 11:00:00'),
('Test Payment Processing', 1, 'Test payment processing with different payment methods.', '2023-09-24', 'In-Progress', '2023-09-24 10:00:00', '2023-09-24 12:00:00'),
('Write Order Management API', 1, 'Create API endpoints for managing customer orders.', '2023-09-25', 'Completed', '2023-09-25 11:00:00', '2023-09-25 13:00:00'),
('Optimize Shopping Cart Performance', 1, 'Optimize the performance of the shopping cart functionality.', '2023-09-26', 'Pending', '2023-09-26 14:00:00', '2023-09-26 16:00:00'),
('Implement Product Reviews', 1, 'Allow customers to write reviews for products.', '2023-09-27', 'In-Progress', '2023-09-27 15:00:00', '2023-09-27 17:00:00'),
('Design Checkout Process', 1, 'Design the checkout process for a smooth user experience.', '2023-09-28', 'Pending', '2023-09-28 09:00:00', '2023-09-28 11:00:00'),
('Test Payment Gateway Integration', 1, 'Test the integration of the payment gateway with the application.', '2023-09-29', 'In-Progress', '2023-09-29 10:00:00', '2023-09-29 12:00:00'),
('Implement Discount Codes', 1, 'Add support for discount codes during checkout.', '2023-09-30', 'Completed', '2023-09-30 11:00:00', '2023-09-30 13:00:00'),

-- 8-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-08-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-08-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-08-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-08-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-08-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-08-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-08-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-08-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-08-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-08-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 7-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-07-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-07-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-07-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-07-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-07-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-07-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-07-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-07-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-07-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-07-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 6-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-06-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-06-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-06-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-06-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-06-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-06-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-06-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-06-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-06-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-06-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 5-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-05-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-05-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-05-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-05-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-05-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-05-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-05-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-05-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-05-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-05-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 4-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-04-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-04-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-04-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-04-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-04-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-04-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-04-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-04-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-04-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-04-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 3-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-03-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-03-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-03-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-03-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-03-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-03-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-03-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-03-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-03-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-03-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 2-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-02-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-02-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-02-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-02-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-02-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-02-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-02-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-02-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-02-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-02-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 1-23
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-01-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-01-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-01-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-01-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-01-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-01-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-01-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-01-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-01-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-01-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 12-22
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2022-12-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2022-12-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2022-12-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2022-12-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2022-12-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2022-12-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2022-12-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2022-12-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2022-12-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2022-12-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 11-22
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-11-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-11-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-11-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-11-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-11-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-11-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-11-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-11-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-11-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-11-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
-- 10-22
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-10-01', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-10-02', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-10-03', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-10-04', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-10-05', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-10-06', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-10-07', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-10-08', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-10-09', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-10-10', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00');




INSERT INTO assignedtasks (taskid, teammemberid,assignedon)
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
    (96, 17,'2023-09-27 00:00:00'), (97, 17,'2023-09-26 00:00:00'), (98, 17,'2023-09-21 00:00:00'), (99, 17,'2023-09-11 00:00:00'), (100, 17,'2023-09-25 00:00:00'),
--  10-23
    (106, 7,'2023-10-03 00:00:00'), (107,7,'2023-10-02 00:00:00'), (108, 7,'2023-10-01 00:00:00'), 
-- 09-23
    (109,7,'2023-09-30 00:00:00'), (110, 7,'2023-09-29 00:00:00'), (111, 7,'2023-09-28 00:00:00'), (112, 7,'2023-09-27 00:00:00'), (113, 7,'2023-09-26 00:00:00'),
    (114,7,'2023-09-25 00:00:00'), (115, 7,'2023-09-24 00:00:00'), (116, 7,'2023-09-23 00:00:00'), (117, 7,'2023-09-22 00:00:00'), (118, 7,'2023-09-21 00:00:00'),
    (119,7,'2023-09-20 00:00:00'), (120, 7,'2023-09-19 00:00:00'), (121, 7,'2023-09-18 00:00:00'), (122, 7,'2023-09-17 00:00:00'), (123, 7,'2023-09-16 00:00:00'),
    (124,7,'2023-09-15 00:00:00'), (125, 7,'2023-09-14 00:00:00'), (126, 7,'2023-09-13 00:00:00'), (127, 7,'2023-09-12 00:00:00'), (128, 7,'2023-09-11 00:00:00'),
    (129,7,'2023-09-10 00:00:00'), (130, 7,'2023-09-09 00:00:00'), (131, 7,'2023-09-08 00:00:00'), (132, 7,'2023-09-07 00:00:00'), (133, 7,'2023-09-06 00:00:00'),
    (134,7,'2023-09-05 00:00:00'), (135, 7,'2023-09-04 00:00:00'), (136, 7,'2023-09-03 00:00:00'), (137, 7,'2023-09-02 00:00:00'), (138, 7,'2023-09-01 00:00:00'),
-- 8-23
    (139,7,'2023-08-30 00:00:00'), (140, 7,'2023-08-29 00:00:00'), (141, 7,'2023-08-26 00:00:00'), (141, 7,'2023-08-24 00:00:00'), (143, 7,'2023-08-20 00:00:00'),
    (144,7,'2023-08-17 00:00:00'), (145, 7,'2023-08-14 00:00:00'), (146, 7,'2023-08-09 00:00:00'), (147, 7,'2023-08-27 00:00:00'), (148, 7,'2023-08-05 00:00:00'),
-- 7-23 
    (149,7,'2023-07-30 00:00:00'), (150, 7,'2023-07-29 00:00:00'), (151, 7,'2023-07-26 00:00:00'), (152, 7,'2023-07-24 00:00:00'), (153, 7,'2023-07-20 00:00:00'),
    (154,7,'2023-07-17 00:00:00'), (155, 7,'2023-07-14 00:00:00'), (156, 7,'2023-07-09 00:00:00'), (157, 7,'2023-07-27 00:00:00'), (158, 7,'2023-07-05 00:00:00'),
-- 6-23
    (159,7,'2023-06-30 00:00:00'), (160, 7,'2023-06-29 00:00:00'), (161, 7,'2023-06-26 00:00:00'), (162, 7,'2023-06-24 00:00:00'), (163, 7,'2023-06-20 00:00:00'),
    (164,7,'2023-06-17 00:00:00'), (165, 7,'2023-06-14 00:00:00'), (166, 7,'2023-06-09 00:00:00'), (167, 7,'2023-06-27 00:00:00'), (168, 7,'2023-06-05 00:00:00'),
-- 5-23
    (169,7,'2023-05-30 00:00:00'), (170, 7,'2023-05-29 00:00:00'), (171, 7,'2023-05-26 00:00:00'), (172, 7,'2023-05-24 00:00:00'), (173, 7,'2023-05-20 00:00:00'),
    (174,7,'2023-05-17 00:00:00'), (175, 7,'2023-05-14 00:00:00'), (176, 7,'2023-05-09 00:00:00'), (177, 7,'2023-05-27 00:00:00'), (178, 7,'2023-05-05 00:00:00'),
-- 4-23
    (179,7,'2023-04-30 00:00:00'), (180, 7,'2023-04-29 00:00:00'), (181, 7,'2023-04-26 00:00:00'), (182, 7,'2023-04-24 00:00:00'), (183, 7,'2023-04-20 00:00:00'),
    (184,7,'2023-04-17 00:00:00'), (185, 7,'2023-04-14 00:00:00'), (186, 7,'2023-04-09 00:00:00'), (187, 7,'2023-04-27 00:00:00'), (188, 7,'2023-04-05 00:00:00'),
-- 3-23
    (189,7,'2023-03-30 00:00:00'), (190, 7,'2023-03-29 00:00:00'), (191, 7,'2023-03-26 00:00:00'), (192, 7,'2023-03-24 00:00:00'), (193, 7,'2023-03-20 00:00:00'),
    (194,7,'2023-03-17 00:00:00'), (195, 7,'2023-03-14 00:00:00'), (196, 7,'2023-03-09 00:00:00'), (197, 7,'2023-03-27 00:00:00'), (198, 7,'2023-03-05 00:00:00'),
-- 2-23
    (199,7,'2023-02-25 00:00:00'), (200, 7,'2023-02-13 00:00:00'), (201, 7,'2023-02-26 00:00:00'), (202, 7,'2023-02-24 00:00:00'), (203, 7,'2023-02-20 00:00:00'),
    (204,7,'2023-02-17 00:00:00'), (205, 7,'2023-02-14 00:00:00'), (206, 7,'2023-02-09 00:00:00'), (207, 7,'2023-02-27 00:00:00'), (208, 7,'2023-02-05 00:00:00'),
-- 1-23
    (209,7,'2023-01-30 00:00:00'), (210, 7,'2023-01-29 00:00:00'), (211, 7,'2023-01-26 00:00:00'), (212, 7,'2023-01-24 00:00:00'), (213, 7,'2023-01-20 00:00:00'),
    (214,7,'2023-01-17 00:00:00'), (215, 7,'2023-01-14 00:00:00'), (216, 7,'2023-01-09 00:00:00'), (217, 7,'2023-01-27 00:00:00'), (218, 7,'2023-01-05 00:00:00'),
-- 12-22
    (219,7,'2022-12-30 00:00:00'), (220, 7,'2022-12-29 00:00:00'), (221, 7,'2022-12-26 00:00:00'), (222, 7,'2022-12-24 00:00:00'), (223, 7,'2022-12-20 00:00:00'),
    (224,7,'2022-12-17 00:00:00'), (225, 7,'2022-12-14 00:00:00'), (226, 7,'2022-12-09 00:00:00'), (227, 7,'2022-12-27 00:00:00'), (228, 7,'2022-12-05 00:00:00'),
-- 11-22
    (229,7,'2022-11-30 00:00:00'), (230, 7,'2022-11-29 00:00:00'), (231, 7,'2022-11-26 00:00:00'), (232, 7,'2022-11-24 00:00:00'), (233, 7,'2022-11-20 00:00:00'),
    (234,7,'2022-11-17 00:00:00'), (235, 7,'2022-11-14 00:00:00'), (236, 7,'2022-11-09 00:00:00'), (237, 7,'2022-11-27 00:00:00'), (238, 7,'2022-11-05 00:00:00'),
-- 10-22
    (239,7,'2022-10-30 00:00:00'), (240, 7,'2022-10-29 00:00:00'), (241, 7,'2022-10-26 00:00:00'), (242, 7,'2022-11-24 00:00:00'), (243, 7,'2022-10-20 00:00:00'),
    (244,7,'2022-10-17 00:00:00'), (245, 7,'2022-10-14 00:00:00'), (246, 7,'2022-10-09 00:00:00'), (247, 7,'2022-11-27 00:00:00'), (248, 7,'2022-10-05 00:00:00');


INSERT INTO timesheets (date, fromtime, totime, employeeid, taskid, status, description)
VALUES
('2023-06-01', '09:00:00', '10:00:00', 7, 1, 'Pending', 'Description 1'),
('2023-06-02', '10:30:00', '11:30:00', 7, 2, 'In-Progress', 'Description 2'),
('2023-06-03', '07:00:00', '09:00:00', 7, 3, 'Completed', 'Description 3'),
('2023-06-04', '09:00:00', '11:00:00', 7, 4, 'Pending', 'Description 4'),
('2023-06-05', '08:00:00', '10:00:00', 8, 5, 'In-Progress', 'Description 5'),
('2023-06-06', '11:00:00', '12:00:00', 8, 6, 'Completed', 'Description 6'),
('2023-06-07', '05:00:00', '07:00:00', 8, 7, 'Pending', 'Description 7'),
('2023-06-08', '14:00:00', '16:00:00', 8, 8, 'In-Progress', 'Description 8'),
('2023-06-09', '10:00:00', '12:00:00', 12, 9, 'Completed', 'Description 9'),
('2023-06-10', '13:00:00', '15:00:00', 12, 10, 'Pending', 'Description 10'),
('2023-06-11', '11:30:00', '12:30:00', 12, 11, 'In-Progress', 'Description 11'),
('2023-06-12', '08:00:00', '09:30:00', 12, 12, 'Completed', 'Description 12'),
('2023-06-13', '10:00:00', '11:30:00', 13, 13, 'Pending', 'Description 13'),
('2023-06-14', '09:30:00', '11:30:00', 13, 14, 'In-Progress', 'Description 14'),
('2023-06-15', '07:00:00', '08:30:00', 13, 15, 'Completed', 'Description 15'),
('2023-06-16', '08:30:00', '10:00:00', 13, 16, 'Pending', 'Description 16'),
('2023-06-01', '09:00:00', '10:00:00', 16, 17, 'Pending', 'Description 17'),
('2023-06-02', '10:30:00', '11:30:00', 16, 18, 'In-Progress', 'Description 18'),
('2023-06-03', '07:00:00', '09:00:00', 16, 19, 'Completed', 'Description 19'),
('2023-06-04', '09:00:00', '11:00:00', 16, 20, 'Pending', 'Description 20'),
('2023-06-05', '08:00:00', '10:00:00', 9, 21, 'In-Progress', 'Description 21'),
('2023-06-06', '11:00:00', '12:00:00', 9, 22, 'Completed', 'Description 22'),
('2023-06-07', '05:00:00', '07:00:00', 9, 23, 'Pending', 'Description 23'),
('2023-06-08', '14:00:00', '16:00:00', 9, 24, 'In-Progress', 'Description 24'),
('2023-06-09', '10:00:00', '12:00:00', 9, 25, 'Completed', 'Description 25'),
('2023-06-10', '13:00:00', '15:00:00', 10, 26, 'Pending', 'Description 26'),
('2023-06-11', '11:30:00', '12:30:00', 10, 27, 'In-Progress', 'Description 27'),
('2023-06-12', '08:00:00', '09:30:00', 10, 28, 'Completed', 'Description 28'),
('2023-06-13', '10:00:00', '11:30:00', 10, 29, 'Pending', 'Description 29'),
('2023-06-14', '09:30:00', '11:30:00', 10, 30, 'In-Progress', 'Description 30'),
('2023-06-15', '07:00:00', '08:30:00', 14, 31, 'Completed', 'Description 31'),
('2023-06-16', '08:30:00', '10:00:00', 14, 32, 'Pending', 'Description 32'),
('2023-06-01', '09:00:00', '10:00:00', 14, 33, 'Pending', 'Description 33'),
('2023-06-02', '10:30:00', '11:30:00', 14, 34, 'In-Progress', 'Description 34'),
('2023-06-03', '07:00:00', '09:00:00', 14, 35, 'Completed', 'Description 35'),
('2023-06-04', '09:00:00', '11:00:00', 17, 36, 'Pending', 'Description 36'),
('2023-06-05', '08:00:00', '10:00:00', 17, 37, 'In-Progress', 'Description 37'),
('2023-06-06', '11:00:00', '12:00:00', 17, 38, 'Completed', 'Description 38'),
('2023-06-07', '05:00:00', '07:00:00', 17, 39, 'Pending', 'Description 39'),
('2023-06-08', '14:00:00', '16:00:00', 17, 40, 'In-Progress', 'Description 40'),
('2023-06-09', '10:00:00', '12:00:00', 11, 41, 'Completed', 'Description 41'),
('2023-06-10', '13:00:00', '15:00:00', 11, 42, 'Pending', 'Description 42'),
('2023-06-11', '11:30:00', '12:30:00', 11, 43, 'In-Progress', 'Description 43'),
('2023-06-12', '08:00:00', '09:30:00', 11, 44, 'Completed', 'Description 44'),
('2023-06-13', '10:00:00', '11:30:00', 11, 45, 'Pending', 'Description 45'),
('2023-06-14', '09:30:00', '11:30:00', 15, 46, 'In-Progress', 'Description 46'),
('2023-06-15', '07:00:00', '08:30:00', 15, 47, 'Completed', 'Description 47'),
('2023-06-16', '08:30:00', '10:00:00', 15, 48, 'Pending', 'Description 48'),
('2023-06-01', '09:00:00', '10:00:00', 15, 49, 'Pending', 'Description 49'),
('2023-06-02', '10:30:00', '11:30:00', 15, 50, 'In-Progress', 'Description 50'),
('2023-06-03', '07:00:00', '09:00:00', 18, 51, 'Completed', 'Description 51'),
('2023-06-04', '09:00:00', '11:00:00', 18, 52, 'Pending', 'Description 52'),
('2023-06-05', '08:00:00', '10:00:00', 18, 53, 'In-Progress', 'Description 53'),
('2023-06-06', '11:00:00', '12:00:00', 18, 54, 'Completed', 'Description 54'),
('2023-06-07', '05:00:00', '07:00:00', 18, 55, 'Pending', 'Description 55'),
('2023-06-08', '14:00:00', '16:00:00', 19, 56, 'In-Progress', 'Description 56'),
('2023-06-09', '10:00:00', '12:00:00', 19, 57, 'Completed', 'Description 57'),
('2023-06-10', '13:00:00', '15:00:00', 19, 58, 'Pending', 'Description 58'),
('2023-06-11', '11:30:00', '12:30:00', 19, 59, 'In-Progress', 'Description 59'),
('2023-06-12', '08:00:00', '09:30:00', 19, 60, 'Completed', 'Description 60'),
('2023-06-13', '10:00:00', '11:30:00', 7, 61, 'Pending', 'Description 61'),
('2023-06-14', '09:30:00', '11:30:00', 7, 62, 'Pending', 'Description 62'),
('2023-06-15', '07:00:00', '08:30:00', 7, 63, 'Pending', 'Description 63'),
('2023-06-16', '08:30:00', '10:00:00', 7, 64, 'Pending', 'Description 64'),
('2023-06-01', '09:00:00', '10:00:00', 8, 65, 'Pending', 'Description 65'),
('2023-06-02', '10:30:00', '11:30:00', 8, 66, 'Pending', 'Description 66'),
('2023-06-03', '07:00:00', '09:00:00', 8, 67, 'Pending', 'Description 67'),
('2023-06-04', '09:00:00', '11:00:00', 8, 68, 'Pending', 'Description 68'),
('2023-06-05', '08:00:00', '10:00:00', 12, 69, 'Pending', 'Description 69'),
('2023-06-06', '11:00:00', '12:00:00', 12, 70, 'Pending', 'Description 70'),
('2023-06-07', '05:00:00', '07:00:00', 12, 71, 'Pending', 'Description 71'),
('2023-06-08', '14:00:00', '16:00:00', 12, 72, 'Pending', 'Description 72'),
('2023-06-09', '10:00:00', '12:00:00', 13, 73, 'Pending', 'Description 73'),
('2023-06-10', '13:00:00', '15:00:00', 13, 74, 'Pending', 'Description 74'),
('2023-06-11', '11:30:00', '12:30:00', 13, 75, 'Pending', 'Description 75'),
('2023-06-12', '08:00:00', '09:30:00', 13, 76, 'Pending', 'Description 76'),
('2023-06-13', '10:00:00', '11:30:00', 16, 77, 'Pending', 'Description 77'),
('2023-06-14', '09:30:00', '11:30:00', 16, 78, 'Pending', 'Description 78'),
('2023-06-15', '07:00:00', '08:30:00', 16, 79, 'Pending', 'Description 79'),
('2023-06-16', '08:30:00', '10:00:00', 16, 80, 'Pending', 'Description 80'),
('2023-06-01', '09:00:00', '10:00:00', 9, 81, 'Pending', 'Description 81'),
('2023-06-02', '10:30:00', '11:30:00', 9, 82, 'Pending', 'Description 82'),
('2023-06-03', '07:00:00', '09:00:00', 9, 83, 'Pending', 'Description 83'),
('2023-06-04', '09:00:00', '11:00:00', 9, 84, 'Pending', 'Description 84'),
('2023-06-05', '08:00:00', '10:00:00', 9, 85, 'Pending', 'Description 85'),
('2023-06-06', '11:00:00', '12:00:00', 10, 86, 'Pending', 'Description 86'),
('2023-06-07', '05:00:00', '07:00:00', 10, 87, 'Pending', 'Description 87'),
('2023-06-08', '14:00:00', '16:00:00', 10, 88, 'Pending', 'Description 88'),
('2023-06-09', '10:00:00', '12:00:00', 10, 89, 'Pending', 'Description 89'),
('2023-06-10', '13:00:00', '15:00:00', 10, 90, 'Pending', 'Description 90'),
('2023-06-11', '11:30:00', '12:30:00', 14, 91, 'Pending', 'Description 91'),
('2023-06-12', '08:00:00', '09:30:00', 14, 92, 'Pending', 'Description 92'),
('2023-06-13', '10:00:00', '11:30:00', 14, 93, 'Pending', 'Description 93'),
('2023-06-14', '09:30:00', '11:30:00', 14, 94, 'Pending', 'Description 94'),
('2023-06-15', '07:00:00', '08:30:00', 14, 95, 'Pending', 'Description 95'),
('2023-06-16', '08:30:00', '10:00:00', 17, 96, 'Pending', 'Description 96'),
('2023-06-13', '10:00:00', '11:30:00', 17, 97, 'Pending', 'Description 97'),
('2023-06-14', '09:30:00', '11:30:00', 17, 98, 'Pending', 'Description 98'),
('2023-06-15', '07:00:00', '08:30:00', 17, 99, 'Pending', 'Description 99'),
('2023-06-16', '08:30:00', '10:00:00', 17, 100, 'Pending', 'Description 100'),
-- 10-23
('2023-10-01', '09:00:00', '10:00:00', 7, 106, 'Pending', 'Description 106'),
('2023-10-02', '09:00:00', '10:00:00', 7, 107, 'Pending', 'Description 107'),
('2023-10-03', '09:00:00', '10:00:00', 7, 108, 'Pending', 'Description 108'),
-- 9-23
('2023-09-01', '09:00:00', '10:00:00', 7, 109, 'Pending', 'Description 109'),
('2023-09-02', '08:00:00', '10:00:00', 7, 110, 'In-Progress', 'Description 110'),
('2023-09-03', '11:00:00', '02:00:00', 7, 111, 'Completed', 'Description 111'),
('2023-09-04', '10:00:00', '12:00:00', 7, 112, 'Pending', 'Description 112'),
('2023-09-05', '09:00:00', '10:00:00', 7, 113, 'Pending', 'Description 113'),
('2023-09-06', '10:00:00', '12:00:00', 7, 114, 'In-Progress', 'Description 114'),
('2023-09-07', '11:00:00', '02:00:00', 7, 115, 'Completed', 'Description 115'),
('2023-09-08', '12:00:00', '04:00:00', 7, 116, 'Pending', 'Description 116'),
('2023-09-09', '01:00:00', '05:00:00', 7, 117, 'In-Progress', 'Description 117'),
('2023-09-10', '05:00:00', '07:00:00', 7, 118, 'Pending', 'Description 118'),
('2023-09-11', '10:00:00', '12:00:00', 7, 119, 'Pending', 'Description 119'),
('2023-09-12', '11:00:00', '12:00:00', 7, 120, 'Completed', 'Description 120'),
('2023-09-13', '09:00:00', '10:00:00', 7, 121, 'In-Progress', 'Description 121'),
('2023-09-14', '09:00:00', '10:00:00', 7, 122, 'Pending', 'Description 122'),
('2023-09-15', '10:00:00', '12:00:00', 7, 123, 'Pending', 'Description 123'),
('2023-09-16', '09:00:00', '10:00:00', 7, 124, 'In-Progress', 'Description 124'),
('2023-09-17', '11:00:00', '01:00:00', 7, 125, 'Pending', 'Description 125'),
('2023-09-18', '11:00:00', '01:00:00', 7, 126, 'Completed', 'Description 125'),
('2023-09-19', '11:00:00', '01:00:00', 7, 127, 'Pending', 'Description 127'),
('2023-09-20', '12:00:00', '03:00:00', 7, 128, 'Pending', 'Description 128'),
('2023-09-21', '12:00:00', '04:00:00', 7, 129, 'Pending', 'Description 129'),
('2023-09-22', '08:00:00', '10:00:00', 7, 130, 'Completed', 'Description 130'),
('2023-09-23', '08:00:00', '10:00:00', 7, 131, 'In-Progress', 'Description 131'),
('2023-09-24', '08:00:00', '11:00:00', 7, 132, 'Pending', 'Description 132'),
('2023-09-25', '08:00:00', '12:00:00', 7, 133, 'Pending', 'Description 133'),
('2023-09-26', '09:00:00', '10:00:00', 7, 134, 'Completed', 'Description 134'),
('2023-09-27', '09:00:00', '10:00:00', 7, 135, 'In-Progress', 'Description 135'),
('2023-09-28', '10:00:00', '12:00:00', 7, 136, 'Pending', 'Description 136'),
('2023-09-29', '10:00:00', '12:00:00', 7, 137, 'Completed', 'Description 137'),
('2023-09-30', '09:00:00', '10:00:00', 7, 138, 'In-Progress', 'Description 138'),
-- 8-23
('2023-08-01', '12:00:00', '04:00:00', 7, 139, 'Pending', 'Description 139'),
('2023-08-07', '08:00:00', '10:00:00', 7, 140, 'Completed', 'Description 140'),
('2023-08-09', '08:00:00', '10:00:00', 7, 141, 'In-Progress', 'Description 141'),
('2023-08-13', '08:00:00', '11:00:00', 7, 142, 'Pending', 'Description 142'),
('2023-08-17', '08:00:00', '12:00:00', 7, 143, 'Pending', 'Description 143'),
('2023-08-20', '09:00:00', '10:00:00', 7, 144, 'Completed', 'Description 144'),
('2023-08-23', '09:00:00', '10:00:00', 7, 145, 'In-Progress', 'Description 145'),
('2023-08-26', '10:00:00', '12:00:00', 7, 146, 'Pending', 'Description 146'),
('2023-08-28', '10:00:00', '12:00:00', 7, 147, 'Completed', 'Description 147'),
('2023-08-30', '09:00:00', '10:00:00', 7, 148, 'In-Progress', 'Description 148'),
-- 7-23
('2023-07-01', '12:00:00', '04:00:00', 7, 149, 'Pending', 'Description 149'),
('2023-07-07', '08:00:00', '10:00:00', 7, 150, 'Completed', 'Description 150'),
('2023-07-09', '08:00:00', '10:00:00', 7, 151, 'In-Progress', 'Description 151'),
('2023-07-13', '08:00:00', '11:00:00', 7, 152, 'Pending', 'Description 152'),
('2023-07-17', '08:00:00', '12:00:00', 7, 153, 'Pending', 'Description 153'),
('2023-07-20', '09:00:00', '10:00:00', 7, 154, 'Completed', 'Description 154'),
('2023-07-23', '09:00:00', '10:00:00', 7, 155, 'In-Progress', 'Description 155'),
('2023-07-26', '10:00:00', '12:00:00', 7, 156, 'Pending', 'Description 156'),
('2023-07-28', '10:00:00', '12:00:00', 7, 157, 'Completed', 'Description 157'),
('2023-07-30', '09:00:00', '10:00:00', 7, 158, 'In-Progress', 'Description 158'),
-- 6-23
('2023-06-01', '12:00:00', '04:00:00', 7, 159, 'Pending', 'Description 159'),
('2023-06-07', '08:00:00', '10:00:00', 7, 160, 'Completed', 'Description 160'),
('2023-06-09', '08:00:00', '10:00:00', 7, 161, 'In-Progress', 'Description 161'),
('2023-06-13', '08:00:00', '11:00:00', 7, 162, 'Pending', 'Description 162'),
('2023-06-17', '08:00:00', '12:00:00', 7, 163, 'Pending', 'Description 163'),
('2023-06-20', '09:00:00', '10:00:00', 7, 164, 'Completed', 'Description 164'),
('2023-06-23', '09:00:00', '10:00:00', 7, 165, 'In-Progress', 'Description 165'),
('2023-06-26', '10:00:00', '12:00:00', 7, 166, 'Pending', 'Description 166'),
('2023-06-28', '10:00:00', '12:00:00', 7, 167, 'Completed', 'Description 167'),
('2023-06-30', '09:00:00', '10:00:00', 7, 168, 'In-Progress', 'Description 168'),
-- 5-23
('2023-05-01', '12:00:00', '04:00:00', 7, 169, 'Pending', 'Description 169'),
('2023-05-07', '08:00:00', '10:00:00', 7, 170, 'Completed', 'Description 170'),
('2023-05-09', '08:00:00', '10:00:00', 7, 171, 'In-Progress', 'Description 171'),
('2023-05-13', '08:00:00', '11:00:00', 7, 172, 'Pending', 'Description 172'),
('2023-05-17', '08:00:00', '12:00:00', 7, 173, 'Pending', 'Description 173'),
('2023-05-20', '09:00:00', '10:00:00', 7, 174, 'Completed', 'Description 174'),
('2023-05-23', '09:00:00', '10:00:00', 7, 175, 'In-Progress', 'Description 175'),
('2023-05-26', '10:00:00', '12:00:00', 7, 176, 'Pending', 'Description 176'),
('2023-05-28', '10:00:00', '12:00:00', 7, 177, 'Completed', 'Description 177'),
('2023-05-30', '09:00:00', '10:00:00', 7, 178, 'In-Progress', 'Description 178'),
-- 4-23
('2023-04-01', '12:00:00', '04:00:00', 7, 179, 'Pending', 'Description 179'),
('2023-04-07', '08:00:00', '10:00:00', 7, 180, 'Completed', 'Description 180'),
('2023-04-09', '08:00:00', '10:00:00', 7, 181, 'In-Progress', 'Description 181'),
('2023-04-13', '08:00:00', '11:00:00', 7, 182, 'Pending', 'Description 182'),
('2023-04-17', '08:00:00', '12:00:00', 7, 183, 'Pending', 'Description 183'),
('2023-04-20', '09:00:00', '10:00:00', 7, 184, 'Completed', 'Description 184'),
('2023-04-23', '09:00:00', '10:00:00', 7, 185, 'In-Progress', 'Description 185'),
('2023-04-26', '10:00:00', '12:00:00', 7, 186, 'Pending', 'Description 186'),
('2023-04-28', '10:00:00', '12:00:00', 7, 187, 'Completed', 'Description 187'),
('2023-04-30', '09:00:00', '10:00:00', 7, 188, 'In-Progress', 'Description 188'),
-- 3-23
('2023-03-01', '12:00:00', '04:00:00', 7, 189, 'Pending', 'Description 189'),
('2023-03-07', '08:00:00', '10:00:00', 7, 190, 'Completed', 'Description 190'),
('2023-03-09', '08:00:00', '10:00:00', 7, 191, 'In-Progress', 'Description 191'),
('2023-03-13', '08:00:00', '11:00:00', 7, 192, 'Pending', 'Description 192'),
('2023-03-17', '08:00:00', '12:00:00', 7, 193, 'Pending', 'Description 193'),
('2023-03-20', '09:00:00', '10:00:00', 7, 194, 'Completed', 'Description 194'),
('2023-03-23', '09:00:00', '10:00:00', 7, 195, 'In-Progress', 'Description 195'),
('2023-03-26', '10:00:00', '12:00:00', 7, 196, 'Pending', 'Description 196'),
('2023-03-28', '10:00:00', '12:00:00', 7, 197, 'Completed', 'Description 197'),
('2023-03-30', '09:00:00', '10:00:00', 7, 198, 'In-Progress', 'Description 198'),
-- 2-23
('2023-02-01', '12:00:00', '04:00:00', 7, 199, 'Pending', 'Description 199'),
('2023-02-07', '08:00:00', '10:00:00', 7, 200, 'Completed', 'Description 200'),
('2023-02-09', '08:00:00', '10:00:00', 7, 201, 'In-Progress', 'Description 201'),
('2023-02-13', '08:00:00', '11:00:00', 7, 202, 'Pending', 'Description 202'),
('2023-02-17', '08:00:00', '12:00:00', 7, 203, 'Pending', 'Description 203'),
('2023-02-20', '09:00:00', '10:00:00', 7, 204, 'Completed', 'Description 204'),
('2023-02-23', '09:00:00', '10:00:00', 7, 205, 'In-Progress', 'Description 205'),
('2023-02-24', '10:00:00', '12:00:00', 7, 206, 'Pending', 'Description 206'),
('2023-02-23', '10:00:00', '12:00:00', 7, 207, 'Completed', 'Description 207'),
('2023-02-26', '09:00:00', '10:00:00', 7, 208, 'In-Progress', 'Description 208'),
-- 1-23
('2023-01-01', '12:00:00', '04:00:00', 7, 209, 'Pending', 'Description 209'),
('2023-01-07', '08:00:00', '10:00:00', 7, 210, 'Completed', 'Description 210'),
('2023-01-09', '08:00:00', '10:00:00', 7, 211, 'In-Progress', 'Description 211'),
('2023-01-13', '08:00:00', '11:00:00', 7, 212, 'Pending', 'Description 212'),
('2023-01-17', '08:00:00', '12:00:00', 7, 213, 'Pending', 'Description 213'),
('2023-01-20', '09:00:00', '10:00:00', 7, 214, 'Completed', 'Description 214'),
('2023-01-23', '09:00:00', '10:00:00', 7, 215, 'In-Progress', 'Description 215'),
('2023-01-26', '10:00:00', '12:00:00', 7, 216, 'Pending', 'Description 216'),
('2023-01-28', '10:00:00', '12:00:00', 7, 217, 'Completed', 'Description 217'),
('2023-01-30', '09:00:00', '10:00:00', 7, 218, 'In-Progress', 'Description 218'),
-- 12-22
('2022-12-01', '12:00:00', '04:00:00', 7, 219, 'Pending', 'Description 219'),
('2022-12-07', '08:00:00', '10:00:00', 7, 220, 'Completed', 'Description 220'),
('2022-12-09', '08:00:00', '10:00:00', 7, 221, 'In-Progress', 'Description 221'),
('2022-12-13', '08:00:00', '11:00:00', 7, 222, 'Pending', 'Description 222'),
('2022-12-17', '08:00:00', '12:00:00', 7, 223, 'Pending', 'Description 223'),
('2022-12-20', '09:00:00', '10:00:00', 7, 224, 'Completed', 'Description 224'),
('2022-12-23', '09:00:00', '10:00:00', 7, 225, 'In-Progress', 'Description 225'),
('2022-12-26', '10:00:00', '12:00:00', 7, 226, 'Pending', 'Description 226'),
('2022-12-28', '10:00:00', '12:00:00', 7, 227, 'Completed', 'Description 227'),
('2022-12-30', '09:00:00', '10:00:00', 7, 228, 'In-Progress', 'Description 228'),
-- 11-22
('2022-11-01', '12:00:00', '04:00:00', 7, 229, 'Pending', 'Description 229'),
('2022-11-07', '08:00:00', '10:00:00', 7, 230, 'Completed', 'Description 230'),
('2022-11-09', '08:00:00', '10:00:00', 7, 231, 'In-Progress', 'Description 231'),
('2022-11-13', '08:00:00', '11:00:00', 7, 232, 'Pending', 'Description 232'),
('2022-11-17', '08:00:00', '12:00:00', 7, 233, 'Pending', 'Description 233'),
('2022-11-20', '09:00:00', '10:00:00', 7, 234, 'Completed', 'Description 234'),
('2022-11-23', '09:00:00', '10:00:00', 7, 235, 'In-Progress', 'Description 235'),
('2022-11-26', '10:00:00', '12:00:00', 7, 236, 'Pending', 'Description 236'),
('2022-11-28', '10:00:00', '12:00:00', 7, 237, 'Completed', 'Description 237'),
('2022-11-30', '09:00:00', '10:00:00', 7, 238, 'In-Progress', 'Description 238'),
-- 10-22
('2022-10-01', '12:00:00', '04:00:00', 7, 239, 'Pending', 'Description 239'),
('2022-10-07', '08:00:00', '10:00:00', 7, 240, 'Completed', 'Description 240'),
('2022-10-09', '08:00:00', '10:00:00', 7, 241, 'In-Progress', 'Description 241'),
('2022-10-13', '08:00:00', '11:00:00', 7, 242, 'Pending', 'Description 242'),
('2022-10-17', '08:00:00', '12:00:00', 7, 243, 'Pending', 'Description 243'),
('2022-10-20', '09:00:00', '10:00:00', 7, 244, 'Completed', 'Description 244'),
('2022-10-23', '09:00:00', '10:00:00', 7, 245, 'In-Progress', 'Description 245'),
('2022-10-26', '10:00:00', '12:00:00', 7, 246, 'Pending', 'Description 246'),
('2022-10-28', '10:00:00', '12:00:00', 7, 247, 'Completed', 'Description 247'),
('2022-10-30', '09:00:00', '10:00:00', 7, 248, 'In-Progress', 'Description 248');
