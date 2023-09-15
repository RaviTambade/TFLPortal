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
insert into employees(userid,department,position,hiredate,directorid,managerid)values(12,'Development Team','Backend Developer','2021-02-02',1,4);   
insert into employees(userid,department,position,hiredate,directorid,managerid)values(13,'Development Team','Frontend Developer','2021-10-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(14,'Development Team','Database Engineer','2021-05-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(15,'QA','QA Leads','2021-02-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(16,'QA','Tester','2021-02-12',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(17,'QA','Automation Tester','2021-05-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(18,'QA','Selenium Tester','2021-02-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(19,'Business Analyst','Senior Analyst','2021-02-12',1,4);
insert into employees(userid,department,position,hiredate,directorid,managerid)values(20,'Business Analyst','Data Analyst','2021-05-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(21,'Business Analyst','Domain-specific Analyst','2021-02-02',1,4); 
insert into employees(userid,department,position,hiredate,directorid,managerid)values(22,'Business Analyst','Requirements Analyst','2021-02-12',1,4); 

INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2021-02-02','2024-02-02','Project Management System App',4,'In-Progress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2021-02-02','2024-02-02','Krushi Product Management',4,'In-Progress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2021-02-02','2022-02-02','Agri Produst Supplying App',4,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2022-02-02','2024-02-02','Store Management App',4,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2023-10-10','2025-02-02','Ticket booking Management App',4,'Pending');

INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,2);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,3);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,4);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,5);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,6);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,11);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,15);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,16);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,17);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,18);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,19);

INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,2);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,3);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,4);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,5);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,6);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,11);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,15);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,16);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,17);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,18);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,19);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,2);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,3);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,4);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,5);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,6);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,11);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,15);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,16);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,17);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,18);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,19);

INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,2);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,3);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,4);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,5);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,6);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,11);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,15);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,16);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,17);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,18);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(4,19);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,2);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,3);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,4);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,5);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,6);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,7);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,8);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,9);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,10);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,11);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,12);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,13);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,14);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,15);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,16);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,17);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,18);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(5,19);
INSERT INTO tasks (title, projectid, description, date, status, fromtime, totime) VALUES
('Develop User Registration Feature', 1, 'Implement user registration functionality with email verification.', '2021-02-21', 'Pending', '2021-02-21 09:00:00', '2021-02-21 11:00:00'),
('Design User Profile Page', 1, 'Create the user profile page layout and components.', '2021-02-22', 'In-Progress', '2021-02-22 10:00:00', '2021-02-22 12:00:00'),
('Implement Password Reset', 1, 'Develop password reset functionality with email notifications.', '2021-02-23', 'Completed', '2021-02-23 11:00:00', '2021-02-23 13:00:00'),
('Test User Authentication', 1, 'Perform unit and integration tests for user authentication.', '2021-02-24', 'Pending', '2021-02-24 14:00:00', '2021-02-24 16:00:00'),
('Optimize Database Queries', 1, 'Improve database query performance for user-related data.', '2021-02-25', 'In-Progress', '2021-02-25 15:00:00', '2021-02-25 17:00:00'),
('Create User Dashboard', 1, 'Design a dashboard for users to manage their accounts.', '2021-02-26', 'Pending', '2021-02-26 09:00:00', '2021-02-26 11:00:00'),
('Implement User Notifications', 1, 'Develop a notification system for user-related events.', '2021-02-27', 'In-Progress', '2021-02-27 10:00:00', '2021-02-27 12:00:00'),
('Write User Registration API', 1, 'Create API endpoints for user registration and verification.', '2021-02-28', 'Completed', '2021-02-28 11:00:00', '2021-02-28 13:00:00'),
('Test User Dashboard Functionality', 1, 'Conduct UI and functionality tests for the user dashboard.', '2021-03-01', 'Pending', '2021-03-01 14:00:00', '2021-03-01 16:00:00'),
('Optimize User Profile Page', 1, 'Optimize the loading speed of the user profile page.', '2021-03-02', 'In-Progress', '2021-03-02 15:00:00', '2021-03-02 17:00:00'),
('Implement User Roles', 1, 'Define user roles and permissions within the application.', '2021-03-03', 'Pending', '2021-03-03 09:00:00', '2021-03-03 11:00:00'),
('Test Email Notifications', 1, 'Test email notifications for user account activities.', '2021-03-04', 'In-Progress', '2021-03-04 10:00:00', '2021-03-04 12:00:00'),
('Create User Profile Editing', 1, 'Allow users to edit their profile information.', '2021-03-05', 'Completed', '2021-03-05 11:00:00', '2021-03-05 13:00:00'),
('Implement Two-Factor Authentication', 1, 'Add two-factor authentication for enhanced security.', '2021-03-06', 'Pending', '2021-03-06 14:00:00', '2021-03-06 16:00:00'),
('Test Password Reset Workflow', 1, 'Test the end-to-end workflow of the password reset feature.', '2021-03-07', 'In-Progress', '2021-03-07 15:00:00', '2021-03-07 17:00:00'),
('Create User Documentation', 1, 'Prepare user documentation and guides.', '2021-03-08', 'Pending', '2021-03-08 09:00:00', '2021-03-08 11:00:00'),
('Test User Authentication API', 1, 'Conduct API testing for user authentication endpoints.', '2021-03-09', 'In-Progress', '2021-03-09 10:00:00', '2021-03-09 12:00:00'),
('Optimize Email Sending', 1, 'Optimize the email sending process for efficiency.', '2021-03-10', 'Completed', '2021-03-10 11:00:00', '2021-03-10 13:00:00'),
('Implement User Feedback System', 1, 'Add a feedback system for user suggestions and issues.', '2021-03-11', 'Pending', '2021-03-11 14:00:00', '2021-03-11 16:00:00'),
('Test User Feedback System', 1, 'Conduct testing for the user feedback and support system.', '2021-03-12', 'In-Progress', '2021-03-12 15:00:00', '2021-03-12 17:00:00'),
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
('Implement Task Management Module', 3, 'Develop a module for managing tasks and assignments.', '2021-04-02', 'Pending', '2021-04-02 09:00:00', '2021-04-02 11:00:00'),
('Design User Permissions', 3, 'Define user access permissions and roles within the system.', '2021-04-03', 'In-Progress', '2021-04-03 10:00:00', '2021-04-03 12:00:00'),
('Test Workflow Automation', 3, 'Test automated workflows for task assignments and notifications.', '2021-04-04', 'Completed', '2021-04-04 11:00:00', '2021-04-04 13:00:00'),
('Optimize Database Indexing', 3, 'Improve database indexing for faster task queries.', '2021-04-05', 'Pending', '2021-04-05 14:00:00', '2021-04-05 16:00:00'),
('Create Reporting Dashboard', 3, 'Design a reporting dashboard for task analytics and insights.', '2021-04-06', 'In-Progress', '2021-04-06 15:00:00', '2021-04-06 17:00:00'),
('Implement Task Assignment', 3, 'Enable task assignment to team members with notifications.', '2021-04-07', 'Pending', '2021-04-07 09:00:00', '2021-04-07 11:00:00'),
('Test Task Creation Workflow', 3, 'Test the workflow for creating and assigning tasks.', '2021-04-08', 'In-Progress', '2021-04-08 10:00:00', '2021-04-08 12:00:00'),
('Write Task Management API', 3, 'Create API endpoints for task management and reporting.', '2021-04-09', 'Completed', '2021-04-09 11:00:00', '2021-04-09 13:00:00'),
('Optimize Task Search', 3, 'Optimize the task search feature for quick access to tasks.', '2021-04-10', 'Pending', '2021-04-10 14:00:00', '2021-04-10 16:00:00'),
('Implement Task Priority', 3, 'Add support for setting task priorities and deadlines.', '2021-04-11', 'In-Progress', '2021-04-11 15:00:00', '2021-04-11 17:00:00'),
('Design Task Dashboard', 3, 'Design a dashboard for users to view their assigned tasks.', '2021-04-12', 'Pending', '2021-04-12 09:00:00', '2021-04-12 11:00:00'),
('Test Task Assignment Notifications', 3, 'Test notifications for task assignments and updates.', '2021-04-13', 'In-Progress', '2021-04-13 10:00:00', '2021-04-13 12:00:00'),
('Implement Task Statuses', 3, 'Define different task statuses such as "To-Do," "In Progress," and "Completed."', '2021-04-14', 'Completed', '2021-04-14 11:00:00', '2021-04-14 13:00:00'),
('Optimize Task Analytics', 3, 'Optimize the performance of task analytics and reporting.', '2021-04-15', 'Pending', '2021-04-15 14:00:00', '2021-04-15 16:00:00'),
('Implement Task Comments', 3, 'Allow users to add comments and notes to tasks.', '2021-04-16', 'In-Progress', '2021-04-16 15:00:00', '2021-04-16 17:00:00'),
('Test Task Management API', 3, 'Conduct API testing for task management endpoints.', '2021-04-17', 'Pending', '2021-04-17 09:00:00', '2021-04-17 11:00:00'),
('Design Task Notifications', 3, 'Design email and in-app notifications for task updates.', '2021-04-18', 'In-Progress', '2021-04-18 10:00:00', '2021-04-18 12:00:00'),
('Implement Task History', 3, 'Create a history log for tracking changes to tasks.', '2021-04-19', 'Completed', '2021-04-19 11:00:00', '2021-04-19 13:00:00'),
('Test Task Reporting', 3, 'Test the reporting functionality for task progress and metrics.', '2021-04-20', 'Pending', '2021-04-20 14:00:00', '2021-04-20 16:00:00'),
('Optimize Task Assignment Workflow', 3, 'Optimize the workflow for task assignment and delegation.', '2021-04-21', 'In-Progress', '2021-04-21 15:00:00', '2021-04-21 17:00:00'),
('Implement Real-Time Chat', 4, 'Integrate real-time chat functionality for team communication.', '2021-04-22', 'Pending', '2021-04-22 09:00:00', '2021-04-22 11:00:00'),
('Design Notification System', 4, 'Create a notification system for task updates and reminders.', '2021-04-23', 'In-Progress', '2021-04-23 10:00:00', '2021-04-23 12:00:00'),
('Test Chat Security', 4, 'Conduct security testing of the real-time chat system.', '2021-04-24', 'Completed', '2021-04-24 11:00:00', '2021-04-24 13:00:00'),
('Optimize Chat Server', 4, 'Optimize the chat server for high concurrency and reliability.', '2021-04-25', 'Pending', '2021-04-25 14:00:00', '2021-04-25 16:00:00'),
('Create Emoji Support', 4, 'Add support for emojis and reactions in chat messages.', '2021-04-26', 'In-Progress', '2021-04-26 15:00:00', '2021-04-26 17:00:00'),
('Implement Group Chat', 4, 'Allow users to create and participate in group chat rooms.', '2021-04-27', 'Pending', '2021-04-27 09:00:00', '2021-04-27 11:00:00'),
('Test Message Delivery', 4, 'Test the reliable and real-time delivery of chat messages.', '2021-04-28', 'In-Progress', '2021-04-28 10:00:00', '2021-04-28 12:00:00'),
('Write Chat API', 4, 'Create API endpoints for real-time chat functionality.', '2021-04-29', 'Completed', '2021-04-29 11:00:00', '2021-04-29 13:00:00'),
('Optimize Chat User Experience', 4, 'Optimize the user interface and experience of the chat system.', '2021-04-30', 'Pending', '2021-04-30 14:00:00', '2021-04-30 16:00:00'),
('Implement Chat Archiving', 4, 'Implement chat message archiving and search functionality.', '2021-05-01', 'In-Progress', '2021-05-01 15:00:00', '2021-05-01 17:00:00'),
('Design Chat Notifications', 4, 'Design notifications for new chat messages and mentions.', '2021-05-02', 'Pending', '2021-05-02 09:00:00', '2021-05-02 11:00:00'),
('Test Chat Integration with Tasks', 4, 'Test integration of chat with task management modules.', '2021-05-03', 'In-Progress', '2021-05-03 10:00:00', '2021-05-03 12:00:00'),
('Implement Video Conferencing', 4, 'Integrate video conferencing for team meetings and collaboration.', '2021-05-04', 'Completed', '2021-05-04 11:00:00', '2021-05-04 13:00:00'),
('Design Meeting Scheduling', 4, 'Create a system for scheduling and managing video meetings.', '2021-05-05', 'Pending', '2021-05-05 14:00:00', '2021-05-05 16:00:00'),
('Test Video Quality and Performance', 4, 'Test video and audio quality in various network conditions.', '2021-05-06', 'In-Progress', '2021-05-06 15:00:00', '2021-05-06 17:00:00'),
('Optimize Video Conferencing Servers', 4, 'Optimize servers for scalable video conferencing.', '2021-05-07', 'Pending', '2021-05-07 09:00:00', '2021-05-07 11:00:00'),
('Create Meeting Recording', 4, 'Add recording and playback functionality for meetings.', '2021-05-08', 'In-Progress', '2021-05-08 10:00:00', '2021-05-08 12:00:00'),
('Implement Screen Sharing', 4, 'Enable screen sharing during video conferences for presentations.', '2021-05-09', 'Completed', '2021-05-09 11:00:00', '2021-05-09 13:00:00'),
('Test Meeting Scheduling API', 4, 'Conduct API testing for meeting scheduling and management.', '2021-05-10', 'Pending', '2021-05-10 14:00:00', '2021-05-10 16:00:00'),
('Design Meeting Notifications', 4, 'Design notifications for meeting invitations and reminders.', '2021-05-11', 'In-Progress', '2021-05-11 15:00:00', '2021-05-11 17:00:00'),
('Optimize Video Meeting UI', 5, 'Optimize the user interface of video conferencing for simplicity.', '2021-05-12', 'Pending', '2021-05-12 09:00:00', '2021-05-12 11:00:00'),
('Implement Meeting Transcripts',5, 'Generate transcripts for recorded meetings for reference.', '2021-05-13', 'In-Progress', '2021-05-13 10:00:00', '2021-05-13 12:00:00'),
('Test Meeting Security', 5, 'Conduct security testing of video conferencing for privacy.', '2021-05-14', 'Completed', '2021-05-14 11:00:00', '2021-05-14 13:00:00'),
('Optimize Video Conferencing Analytics', 5, 'Optimize analytics for tracking meeting statistics.', '2021-05-15', 'Pending', '2021-05-15 14:00:00', '2021-05-15 16:00:00'),
('Implement Feedback Surveys', 5, 'Create feedback surveys for gathering user feedback.', '2021-05-16', 'In-Progress', '2021-05-16 15:00:00', '2021-05-16 17:00:00'),
('Design Survey Templates', 5, 'Design templates for various types of feedback and surveys.', '2021-05-17', 'Pending', '2021-05-17 09:00:00', '2021-05-17 11:00:00'),
('Test Survey Creation', 5, 'Test the creation and distribution of feedback surveys.', '2021-05-18', 'In-Progress', '2021-05-18 10:00:00', '2021-05-18 12:00:00'),
('Optimize Survey Reporting', 5, 'Optimize reporting and analytics for survey responses.', '2021-05-19', 'Completed', '2021-05-19 11:00:00', '2021-05-19 13:00:00'),
('Implement User Feedback Analysis', 5, 'Implement tools for analyzing and acting on user feedback.', '2021-05-20', 'Pending', '2021-05-20 14:00:00', '2021-05-20 16:00:00'),
('Design Feedback Notifications', 5, 'Design notifications for feedback submissions and analysis results.', '2021-05-21', 'In-Progress', '2021-05-21 15:00:00', '2021-05-21 17:00:00'),
('Test Feedback Surveys with Users', 5, 'Conduct user testing of feedback surveys and collection methods.', '2021-05-22', 'Pending', '2021-05-22 09:00:00', '2021-05-22 11:00:00'),
('Implement Feedback Trends Dashboard', 5, 'Create a dashboard for tracking feedback trends and insights.', '2021-05-23', 'In-Progress', '2021-05-23 10:00:00', '2021-05-23 12:00:00'),
('Optimize Survey Distribution',5, 'Optimize the distribution channels for feedback surveys.', '2021-05-24', 'Pending', '2021-05-24 11:00:00', '2021-05-24 13:00:00'),
('Implement AI-Powered Feedback Analysis', 5, 'Implement AI and machine learning for advanced feedback analysis.', '2021-05-25', 'In-Progress', '2021-05-25 14:00:00', '2021-05-25 16:00:00'),
('Design Feedback Export', 5, 'Design tools for exporting feedback data for further analysis.', '2021-05-26', 'Completed', '2021-05-26 15:00:00', '2021-05-26 17:00:00'),
('Test Feedback Analytics', 5, 'Test the analytics and insights generated from feedback data.', '2021-05-27', 'Pending', '2021-05-27 09:00:00', '2021-05-27 11:00:00'),
('Implement Feedback Action Planning', 5, 'Create tools for action planning based on feedback analysis.', '2021-05-28', 'In-Progress', '2021-05-28 10:00:00', '2021-05-28 12:00:00'),
('Design Feedback Loop', 5, 'Design a feedback loop for continuous improvement based on user feedback.', '2021-05-29', 'Pending', '2021-05-29 11:00:00', '2021-05-29 13:00:00'),
('Test Feedback-Driven Development', 5, 'Test the integration of user feedback into product development.', '2021-05-30', 'In-Progress', '2021-05-30 14:00:00', '2021-05-30 16:00:00'),
('Implement Knowledge Base', 5, 'Create a knowledge base for product documentation and help resources.', '2021-05-31', 'Completed', '2021-05-31 15:00:00', '2021-05-31 17:00:00'),
('Design Knowledge Base Structure', 5, 'Design the structure and categories of the knowledge base.', '2021-06-01', 'Pending', '2021-06-01 09:00:00', '2021-06-01 11:00:00'),
('Test Knowledge Base Search', 5, 'Test the search functionality of the knowledge base.', '2021-06-02', 'In-Progress', '2021-06-02 10:00:00', '2021-06-02 12:00:00'),
('Optimize Knowledge Base Perfomance', 5, 'Optimize the performance and loading speed of the knowledge base.', '2021-06-03', 'Pending', '2021-06-03 11:00:00', '2021-06-03 13:00:00'),
('Implement Multilingual Support', 5, 'Add support for multiple languages in the knowledge base.', '2021-06-04', 'In-Progress', '2021-06-04 14:00:00', '2021-06-04 16:00:00'),
('Design Knowledge Base User Interface', 5, 'Design the user interface of the knowledge base for easy navigation.', '2021-06-05', 'Pending', '2021-06-05 15:00:00', '2021-06-05 17:00:00'),
('Test Knowledge Base Accessibility', 5, 'Conduct accessibility testing for the knowledge base.', '2021-06-06', 'In-Progress', '2021-06-06 09:00:00', '2021-06-06 11:00:00'),
('Implement Knowledge Base Analytics', 5, 'Add analytics to track knowledge base usage and popular articles.', '2021-06-07', 'Pending', '2021-06-07 10:00:00', '2021-06-07 12:00:00'),
('Design Knowledge Base Article Templates',5, 'Design templates for creating consistent knowledge base articles.', '2021-06-08', 'In-Progress', '2021-06-08 11:00:00', '2021-06-08 13:00:00'),
('Test Knowledge Base User Experience', 5, 'Test the overall user experience and usability of the knowledge base.', '2021-06-09', 'Completed', '2021-06-09 14:00:00', '2021-06-09 16:00:00'),
('Optimize Knowledge Base SEO', 5, 'Optimize the knowledge base for search engine visibility.', '2021-06-10', 'Pending', '2021-06-10 15:00:00', '2021-06-10 17:00:00'),
('Implement Knowledge Base User Feedback', 5, 'Add user feedback mechanisms to improve knowledge base articles.', '2021-06-11', 'In-Progress', '2021-06-11 09:00:00', '2021-06-11 11:00:00'),
('Design Knowledge Base Mobile App', 5, 'Design a mobile app for accessing the knowledge base on the go.', '2021-06-12', 'Pending', '2021-06-12 10:00:00', '2021-06-12 12:00:00'),
('Test Knowledge Base Mobile App', 5, 'Test the mobile app for knowledge base access and usability.', '2021-06-13', 'In-Progress', '2021-06-13 11:00:00', '2021-06-13 13:00:00'),
('Implement Integration with Support System', 5, 'Integrate the knowledge base with the customer support system.', '2021-06-14', 'Completed', '2021-06-14 14:00:00', '2021-06-14 16:00:00'),
('Design Customer Support Chatbot', 5, 'Design a chatbot for providing instant support to customers.', '2021-06-15', 'Pending', '2021-06-15 15:00:00', '2021-06-15 17:00:00'),
('Test Chatbot Integration', 5, 'Test the integration of the chatbot with the support system and knowledge base.', '2021-06-16', 'In-Progress', '2021-06-16 09:00:00', '2021-06-16 11:00:00'),
('Optimize Support Ticketing', 5, 'Optimize the support ticketing system for efficient issue resolution.', '2021-06-17', 'Pending', '2021-06-17 10:00:00', '2021-06-17 12:00:00'),
('Implement Customer Support Analytics', 5, 'Add analytics to track support ticket trends and response times.', '2021-06-18', 'In-Progress', '2021-06-18 11:00:00', '2021-06-18 13:00:00'),
('Design Support Ticket UI', 5, 'Design the user interface for creating and managing support tickets.', '2021-06-19', 'Pending', '2021-06-19 14:00:00', '2021-06-19 16:00:00'),
('Test Support Chatbot AI', 5, 'Test the chatbots AI capabilities for understanding and resolving issues.', '2021-06-20', 'In-Progress', '2021-06-20 15:00:00', '2021-06-20 17:00:00'),
('Implement Knowledge Base Integration with Chatbot', 1, 'Integrate the knowledge base with the chatbot for providing answers.', '2021-06-21', 'Pending', '2021-06-21 09:00:00', '2021-06-21 11:00:00'),
('Design Chatbot User Experience', 1, 'Design the chatbots user experience for natural and helpful interactions.', '2021-06-22', 'In-Progress', '2021-06-22 10:00:00', '2021-06-22 12:00:00'),
('Test Support Ticket Workflow', 1, 'Test the workflow for creating, assigning, and resolving support tickets.', '2021-06-23', 'Completed', '2021-06-23 11:00:00', '2021-06-23 13:00:00'),
('Optimize Support Ticket Notifications', 1, 'Optimize notifications for support ticket updates and resolutions.', '2021-06-24', 'Pending', '2021-06-24 14:00:00', '2021-06-24 16:00:00'),
('Implement Support Knowledge Base', 1, 'Create a dedicated knowledge base for customer support articles.', '2021-06-25', 'In-Progress', '2021-06-25 15:00:00', '2021-06-25 17:00:00'),
('Design Support Ticket Reporting', 1, 'Design reports and dashboards for tracking support ticket metrics.', '2021-06-26', 'Pending', '2021-06-26 09:00:00', '2021-06-26 11:00:00'),
('Test Support Knowledge Base Accessibility', 1, 'Conduct accessibility testing for the support knowledge base.', '2021-06-27', 'In-Progress', '2021-06-27 10:00:00', '2021-06-27 12:00:00'),
('Implement Support Ticket Escalation', 1, 'Implement escalation procedures for complex support issues.', '2021-06-28', 'Pending', '2021-06-28 11:00:00', '2021-06-28 13:00:00'),
('Design Support Chatbot Personality',1, 'Design the chatbots personality to align with the brand and user expectations.', '2021-06-29', 'In-Progress', '2021-06-29 14:00:00', '2021-06-29 16:00:00'),
('Test Support Knowledge Base Integration', 1, 'Test the integration of support knowledge base articles with chatbot responses.', '2021-06-30', 'Completed', '2021-06-30 15:00:00', '2021-06-30 17:00:00');

INSERT INTO assignedtasks (taskid, teammemberid)
VALUES
    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
    (6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
    (11, 11), (12, 12), (13, 13), (14, 14), (15, 15),
    (16, 16), (17, 17), (18, 18), (19, 19), (20, 1),
    (21, 2), (22, 3), (23, 4), (24, 5), (25, 6),
    (26, 7), (27, 8), (28, 9), (29, 10), (30, 11),
    (31, 12), (32, 13), (33, 14), (34, 15), (35, 16),
    (36, 17), (37, 18), (38, 19), (39, 1), (40, 2),
    (41, 3), (42, 4), (43, 5), (44, 6), (45, 7),
    (46, 8), (47, 9), (48, 10), (49, 11), (50, 12),
    (51, 13), (52, 14), (53, 15), (54, 16), (55, 17),
    (56, 18), (57, 19), (58, 1), (59, 2), (60, 3),
    (61, 4), (62, 5), (63, 6), (64, 7), (65, 8),
    (66, 9), (67, 10), (68, 11), (69, 12), (70, 13),
    (71, 14), (72, 15), (73, 16), (74, 17), (75, 18),
    (76, 19), (77, 1), (78, 2), (79, 3), (80, 4),
    (81, 5), (82, 6), (83, 7), (84, 8), (85, 9),
    (86, 10), (87, 11), (88, 12), (89, 13), (90, 14),
    (91, 15), (92, 16), (93, 17), (94, 18), (95, 19),
    (96, 1), (97, 2), (98, 3), (99, 4), (100, 5);

INSERT INTO timesheets (date, fromtime, totime, employeeid, taskid, status)
VALUES
('2023-06-01', '09:00:00', '10:00:00', 1, 1, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 2, 2, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 3, 3, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 4, 4, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 5, 5, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 6, 6, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 7, 7, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 8, 8, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 9, 9, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 10, 10, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 11, 11, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 12, 12, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 13, 13, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 14, 14, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 15, 15, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 16, 16, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 17, 17, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 18, 18, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 19, 19, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 1, 20, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 2, 21, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 3, 22, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 4, 23, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 5, 24, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 6, 25, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 7, 26, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 8, 27, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 9, 28, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 10, 29, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 11, 30, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 12, 31, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 13, 32, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 14, 33, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 15, 34, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 16, 35, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 17, 36, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 18, 37, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 19, 38, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 1, 39, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 2, 40, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 3, 41, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 4, 42, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 5, 43, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 6, 44, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 7, 45, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 8, 46, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 9, 47, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 10, 48, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 11, 49, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 12, 50, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 13, 51, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 14, 52, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 15, 53, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 16, 54, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 17, 55, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 18, 56, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 19, 57, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 1, 58, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 2, 59, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 3, 60, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 4, 61, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 5, 62, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 6, 63, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 7, 64, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 8, 65, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 9, 66, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 10, 67, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 11, 68, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 12, 69, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 13, 70, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 14, 71, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 15, 72, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 16, 73, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 17, 74, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 18, 75, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 19, 76, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 1, 77, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 2, 78, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 3, 79, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 4, 80, 'Pending'),
('2023-06-01', '09:00:00', '10:00:00', 5, 81, 'Pending'),
('2023-06-02', '10:30:00', '11:30:00', 6, 82, 'In-Progress'),
('2023-06-03', '07:00:00', '09:00:00', 7, 83, 'Completed'),
('2023-06-04', '09:00:00', '11:00:00', 8, 84, 'Pending'),
('2023-06-05', '08:00:00', '10:00:00', 9, 85, 'In-Progress'),
('2023-06-06', '11:00:00', '12:00:00', 10, 86, 'Completed'),
('2023-06-07', '05:00:00', '07:00:00', 11, 87, 'Pending'),
('2023-06-08', '14:00:00', '16:00:00', 12, 88, 'In-Progress'),
('2023-06-09', '10:00:00', '12:00:00', 13, 89, 'Completed'),
('2023-06-10', '13:00:00', '15:00:00', 14, 90, 'Pending'),
('2023-06-11', '11:30:00', '12:30:00', 15, 91, 'In-Progress'),
('2023-06-12', '08:00:00', '09:30:00', 16, 92, 'Completed'),
('2023-06-13', '10:00:00', '11:30:00', 17, 93, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 18, 94, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 19, 95, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 1, 96, 'Pending'),
('2023-06-13', '10:00:00', '11:30:00', 2, 97, 'Pending'),
('2023-06-14', '09:30:00', '11:30:00', 3, 98, 'In-Progress'),
('2023-06-15', '07:00:00', '08:30:00', 4, 99, 'Completed'),
('2023-06-16', '08:30:00', '10:00:00', 5, 100, 'Pending');


-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-01 ','3:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-02 ','5:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-03 ','6:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-04 ','8:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-05 ','4:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-06 ','6:00',1);                          
-- INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-07 ','4:00',1);                          


-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('PMSAPP','2023-02-02','2024-02-02','Project Management System App','In-Progress');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('OTBMApp','2023-05-10','2024-05-10','Online Ticket Booking management System App','Completed');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('IMSApp','2023-02-02','2024-03-03','Inventry Management System App','Pending');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EKSApp','2023-02-02','2024-03-03','E Krushi Seva App','Error');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EAApp','2023-05-10','2024-05-13','E Auto App','Completed');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('BSApp','2023-02-02','2024-03-03',' Banking System App','Error');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('TAPApp','2023-02-02','2024-03-03','Transflower Acceleration Program App','In-Progress');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('NDApp','2023-05-10','2024-05-13','Naukari Details App','Completed');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('HCApp','2023-02-02','2024-03-03',' Health Care App','Error');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EcommApp','2023-02-02','2024-03-03','ECommerce App','Completed');

-- INSERT INTO projectmembers(projectid,empid)VALUES(1,1);
-- INSERT INTO projectmembers(projectid,empid)VALUES(1,2);
-- INSERT INTO projectmembers(projectid,empid)VALUES(1,3);
-- INSERT INTO projectmembers(projectid,empid)VALUES(1,4);
-- INSERT INTO projectmembers(projectid,empid)VALUES(2,5);
-- INSERT INTO projectmembers(projectid,empid)VALUES(2,6);
-- INSERT INTO projectmembers(projectid,empid)VALUES(3,1);
-- INSERT INTO projectmembers(projectid,empid)VALUES(3,5);

-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop feature login for Project PMS App',1,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Troubleshoot and fix bugs in module timesheet',2,'please arrange the meeting sheduling prosess quickly','2023-02-01','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Check data validation for Form adding timesheet',3,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Optimize performance of Database PMS',3,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Write unit tests for Module Timerecord',4,'please arrange the meeting sheduling prosess quickly','2023-02-02','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Refactor code for better maintainability',2,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for project PMSApp',5,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop RESTful API for EKSApp',1,'please arrange the meeting sheduling prosess quickly','2023-02-03','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for EKSApp ',4,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('SRS Document preparing',5,'please arrange the meeting sheduling prosess quickly','2023-02-04','11:00:00', '01:30:00');


-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,1,1,'2023-06-01 ','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,2,1,'2023-06-01 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,3,1,'2023-06-01 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,1,'2023-06-01 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,2,'2023-06-02 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,2,'2023-06-02 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,7,2,'2023-06-02','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,8,3,'2023-06-02','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,9,3,'2023-06-02 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,10,3,'2023-06-03 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,1,3,'2023-06-03 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,2,4,'2023-06-03 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,3,4,'2023-06-03 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,4,'2023-06-04 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,5,'2023-06-04 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-06-04 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,5,'2023-06-04 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-05-04 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,1,'2023-06-05 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,2,'2023-06-05 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,1,3,'2023-06-05','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,2,4,'2023-06-06 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,3,5,'2023-06-06 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,6,'2023-06-06 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,5,6,'2023-06-06 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,6,6,'2023-06-06 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,7,7,'2023-06-07 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,8,7,'2023-06-07 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,9,7,'2023-06-07 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,10,8,'2023-06-08 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,1,8,'2023-06-08','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,2,8,'2023-06-08 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,3,9,'2023-06-09 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,4,9,'2023-06-09 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,5,9,'2023-06-09 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,6,10,'2023-06-10 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,7,10,'2023-06-10 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,10,'2023-05-10 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,5,10,'2023-06-11 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,4,1,'2023-06-11 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,1,2,'2023-06-12 ','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,2,2,'2023-06-13 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,3,3,'2023-06-13 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,3,'2023-06-14 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,3,'2023-06-14 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,4,'2023-06-15 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,7,4,'2023-06-15 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,8,4,'2023-06-16 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,9,5,'2023-06-17 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,10,5,'2023-06-18 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,1,5,'2023-06-18','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,2,6,'2023-06-18','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,3,6,'2023-06-19 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,4,6,'2023-06-20 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,5,'2023-06-21 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,5,'2023-06-21 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,7,4,'2023-06-22 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,4,'2023-05-22 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,4,'2023-06-23 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,4,'2023-06-23 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,3,'2023-05-24 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,3,'2023-06-24 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,3,'2023-06-25 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,1,3,'2023-06-25 ','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,2,3,'2023-06-26 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,3,3,'2023-06-26 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,1,'2023-06-27 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,2,'2023-06-27 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,2,'2023-06-28 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,1,'2023-06-28 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,8,2,'2023-06-28 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,9,2,'2023-06-29 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,10,2,'2023-06-29 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,1,2,'2023-06-29','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,2,2,'2023-06-29','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,3,2,'2023-06-29 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,2,'2023-06-29 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,3,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,3,'2023-06-30 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,3,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-05-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,6,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,6,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-01 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-02 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-03 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-04 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-05 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-06 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-07 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-08 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-09 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-10 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-11 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-12 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-13 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-14 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-15 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-16 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-17 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-18 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-19 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-20 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-21 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-22 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-23 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-24 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-25 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-26 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-27 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-28 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-29 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-30 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-28 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-29 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-30 ','04:10');
-- INSERT INTO assigned(taskid,empid,roleid)VALUES(1,1,1);





-- INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');
-- INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-04-22',12,'2022-05-15','2023-05-22','2022-05-16');
-- INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');         

-- INSERT INTO onproject(projectid,clientid)VALUES(1,2);