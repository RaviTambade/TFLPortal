-- Active: 1678339848098@@127.0.0.1@3306@pms
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
('Develop User Registration Feature', 1, 'Implement user registration functionality with email verification.', '2023-09-14', 'Pending', '2023-09-14 09:00:00', '2023-09-14 11:00:00'),
('Design User Profile Page', 1, 'Create the user profile page layout and components.', '2023-09-15', 'In-Progress', '2023-09-15 10:00:00', '2023-09-15 12:00:00'),
('Implement Password Reset', 1, 'Develop password reset functionality with email notifications.', '2023-09-16', 'Completed', '2023-09-16 11:00:00', '2023-09-16 13:00:00'),
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2023-09-17', 'Pending', '2023-09-17 14:00:00', '2023-09-17 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2023-09-18', 'In-Progress', '2023-09-18 15:00:00', '2023-09-18 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2023-09-19', 'Pending', '2023-09-19 09:00:00', '2023-09-19 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2023-09-20', 'In-Progress', '2023-09-20 10:00:00', '2023-09-20 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2023-09-21', 'Completed', '2023-09-21 11:00:00', '2023-09-21 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2023-09-22', 'Pending', '2023-09-22 14:00:00', '2023-09-22 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2023-09-23', 'In-Progress', '2023-09-23 15:00:00', '2023-09-23 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2023-09-24', 'Pending', '2023-09-24 09:00:00', '2023-09-24 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2023-09-25', 'In-Progress', '2023-09-25 10:00:00', '2023-09-25 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2023-09-26', 'Completed', '2023-09-26 11:00:00', '2023-09-26 13:00:00'),
('Implement Two-Factor Authentication', 1, 'Add two-factor authentication for enhanced security.', '2023-09-27', 'Pending', '2023-09-27 14:00:00', '2023-09-27 16:00:00'),
('Test Password Reset Workflow', 1, 'Test the end-to-end workflow of the password reset feature.', '2023-09-28', 'In-Progress', '2023-09-28 15:00:00', '2023-09-28 17:00:00'),
('Create User Documentation', 1, 'Prepare user documentation and guides.', '2023-09-29', 'Pending', '2023-09-29 09:00:00', '2023-09-29 11:00:00'),
('Test User Authentication API', 1, 'Conduct API testing for user authentication endpoints.', '2023-09-30', 'In-Progress', '2023-09-30 10:00:00', '2023-09-30 12:00:00'),
('Optimize Email Sending', 1, 'Optimize the email sending process for efficiency.', '2023-10-01', 'Completed', '2023-10-01 11:00:00', '2023-10-01 13:00:00'),
('Implement User Feedback System', 1, 'Add a feedback system for user suggestions and issues.', '2023-10-02', 'Pending', '2023-10-02 14:00:00', '2023-10-02 16:00:00'),
('Test User Feedback System', 1, 'Conduct testing for the user feedback and support system.', '2023-10-03', 'In-Progress', '2023-10-03 15:00:00', '2023-10-03 17:00:00'),
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
('Implement Knowledge Base', 5, 'Create a knowledge base for product documentation and help resources.', '2021-05-31', 'Pending', '2021-05-31 15:00:00', '2021-05-31 17:00:00');
INSERT INTO assignedtasks (taskid, teammemberid)
VALUES
    (1, 7), (2, 7), (3, 7), (4, 7), (5, 8),
    (6, 8), (7, 8), (8, 8), (9, 12), (10, 12),
    (11, 12), (12, 12), (13, 13), (14, 13), (15, 13),
    (16, 13), (17, 16), (18, 16), (19, 16), (20, 16),
    (21, 9), (22, 9), (23, 9), (24, 9), (25, 9),
    (26,10), (27, 10), (28, 10), (29, 10), (30, 10),
    (31, 14), (32, 14), (33, 14), (34, 14), (35, 14),
    (36, 17), (37, 17), (38, 17), (39, 17), (40, 17),
    (41, 11), (42, 11), (43, 11), (44, 11), (45, 11),
    (46, 15), (47, 15), (48, 15), (49, 15), (50, 15),
    (51, 18), (52, 18), (53, 18), (54, 18), (55, 18),
    (56, 19), (57, 19), (58, 19), (59, 19), (60, 19),
    (61, 7), (62, 7), (63, 7), (64, 7), (65, 8),
    (66, 8), (67, 8), (68, 8), (69, 12), (70, 12),
    (71, 12), (72, 12), (73, 13), (74, 13), (75, 13),
    (76, 13), (77, 16), (78, 16), (79, 16), (80, 16),
    (81, 9), (82, 9), (83, 9), (84, 9), (85, 9),
    (86, 10), (87, 10), (88, 10), (89, 10), (90, 10),
    (91, 14), (92, 14), (93, 14), (94, 14), (95, 14),
    (96, 17), (97, 17), (98, 17), (99, 17), (100, 17);

INSERT INTO timesheets (date, fromtime, totime, employeeid, taskid, status)
VALUES
('2023-06-01', '09:00:00', '10:00:00', 7, 1, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 7, 2, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 7, 3, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 7, 4, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 8, 5, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 8, 6, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 8, 7, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 8, 8, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 12, 9, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 12, 10, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 12, 11, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 12, 12, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 13, 13, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 13, 14, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 13, 15, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 13, 16, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 16, 17, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 16, 18, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 16, 19, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 16, 20, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 9, 21, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 9, 22, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 9, 23, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 9, 24, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 9, 25, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 10, 26, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 10, 27, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 10, 28, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 10, 29, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 10, 30, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 14, 31, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 14, 32, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 14, 33, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 14, 34, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 14, 35, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 17, 36, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 17, 37, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 17, 38, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 17, 39, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 17, 40, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 11, 41, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 11, 42, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 11, 43, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 11, 44, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 11, 45, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 15, 46, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 15, 47, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 15, 48, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 15, 49, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 15, 50, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 18, 51, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 18, 52, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 18, 53, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 18, 54, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 18, 55, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 19, 56, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 19, 57, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 19, 58, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 19, 59, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 19, 60, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 7, 61, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 7, 62, 'Pending'),
('2023-06-15', '07:00:00', '08:30:00', 7, 63, 'Pending'),
('2023-06-16', '08:30:00', '10:00:00', 7, 64, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 8, 65, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 8, 66, 'Pending'),
('2023-06-03', '07:00:00', '09:00:00', 8, 67, 'Pending'),
('2023-06-04', '09:00:00', '11:00:00', 8, 68, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 12, 69, 'Pending'),
('2023-06-06', '11:00:00', '12:00:00', 12, 70, 'Pending'),
('2023-06-07', '05:00:00', '07:00:00', 12, 71, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 12, 72, 'Pending'),
('2023-06-09', '10:00:00', '12:00:00', 13, 73, 'Pending'),
('2023-06-10', '13:00:00', '15:00:00', 13, 74, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 13, 75, 'Pending'),
('2023-06-12', '08:00:00', '09:30:00', 13, 76, 'Pending'),
('2023-06-13', '10:00:00', '11:30:00', 16, 77, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 16, 78, 'Pending'),
('2023-06-15', '07:00:00', '08:30:00', 16, 79, 'Pending'),
('2023-06-16', '08:30:00', '10:00:00', 16, 80, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 9, 81, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 9, 82, 'Pending'),
('2023-06-03', '07:00:00', '09:00:00', 9, 83, 'Pending'),
('2023-06-04', '09:00:00', '11:00:00', 9, 84, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 9, 85, 'Pending'),
('2023-06-06', '11:00:00', '12:00:00', 10, 86, 'Pending'),
('2023-06-07', '05:00:00', '07:00:00', 10, 87, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 10, 88, 'Pending'),
('2023-06-09', '10:00:00', '12:00:00', 10, 89, 'Pending'),
('2023-06-10', '13:00:00', '15:00:00', 10, 90, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 14, 91, 'Pending'),
('2023-06-12', '08:00:00', '09:30:00', 14, 92, 'Pending'),
('2023-06-13', '10:00:00', '11:30:00', 14, 93, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 14, 94, 'Pending'),
('2023-06-15', '07:00:00', '08:30:00', 14, 95, 'Pending'),
('2023-06-16', '08:30:00', '10:00:00', 17, 96, 'Pending'),
('2023-06-13', '10:00:00', '11:30:00', 17, 97, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 17, 98, 'Pending'),
('2023-06-15', '07:00:00', '08:30:00', 17, 99, 'Pending'),
('2023-06-16', '08:30:00', '10:00:00', 17, 100, 'Pending');


-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-01 ','3:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-02 ','5:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-03 ','6:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-04 ','8:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-05 ','4:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-06 ','6:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-07 ','4:00',1);                          

