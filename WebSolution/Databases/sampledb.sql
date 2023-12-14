-- Active: 1696576841746@@127.0.0.1@3306@tflportal

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


INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (19,'2014-05-21',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (20,'2015-11-11',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (21,'2015-09-15',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (22,'2015-07-16',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (23,'2015-04-23',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (24,'2015-05-13',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (25,'2014-05-21',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (26,'2015-11-11',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (27,'2015-09-15',8,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (28,'2015-07-16',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (29,'2015-04-23',9,40000);
INSERT INTO employees(userid,hiredate,reportingid,salary) VALUES (30,'2015-05-13',9,40000);




INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2023-11-02','2024-02-02','Project Management System App',7,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2023-11-03','2024-02-02','Krushi Product Management',8,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EAgroServices','2023-11-13','2025-02-02','Farmers Goods Management',9,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2017-02-02','2024-02-02','Store Management App',7,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2017-10-10','2025-02-02','Ticket booking Management App',8,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HMApp','2017-10-10','2025-02-02','Hospital Management App',9,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('TMS','2016-02-02','2023-02-02','Travel Management System',7,'completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HRM','2016-10-10','2023-02-02','Human Resource Management',8,'completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('CLMS','2016-10-10','2022-02-02','Contarct Labour Management System',9,'completed');


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
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',8,15);
INSERT INTO projectallocations(membership,assigndate,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',9,15);


-- Inventory Management
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a  Store Worker, I want to be able to reset my password in case I forget it.','', '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Worker, I want to view a graph that shows my daily, weekly, and monthly delivered orders, so that i can monitor my performance','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory', 'As a Store Worker, I want to mark orders as delivered when I successfully hand over the materials to the manufacturing supervisors so that i can ensure order is delivered.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory', 'As a Store Worker, I want to access information about the supervisors who will receive the deliveries, including their contact details so that I can efficiently communicate regarding the delivery process and resolve any potential issues.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Worker, I want to receive notifications for new task that require pickup and delivery, so that i can stay updated on my tasks.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Worker, I want to access order details including the order-id, and pickup/delivery locations so that i can prepare for the tasks.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Worker, I want to mark orders as picked up when I collect the materials from the inventory so that i can change status of order.','',   '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisor Incharge, I want to view an overview of employee information and departments so that I can efficiently manage teams and make informed decisions regarding staffing and resource allocation.','',  '2023-12-10','2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to view request reports graphs so that i can make data-driven decisions and analyze trends.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to add new supervior to the system so that i can seamlessly expand our team, assign roles and responsibilities.', '',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to update  information of supervisors  so that I can ensure that the records are accurate and up-to-date.','',  '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to switch the departments of employees when they move to different teams so that I can maintain efficient workflow across teams.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want request reports of each supervisor,  so that I can assess individual and team performance, track trends in order management.','',   '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to view a graph showing the total number of requests placed by each supervisor so that I can assess their productivity levels.','',  '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to view graphical representations of weekly, monthly, and yearly so that i can analise request trends.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to see a graph that displays the number of cancelled requests for each supervisor so that I can identify potential issues in order processing.', '',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7,4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a  Supervisors Incharge, I want to be able to reset my password in case I forget it.','',  '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to view current inventory level so that i can effectively manage stock availability.', '', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to view departments and assigned store manager so that I can effectively oversee the organization','',   '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to add new materials to the inventory along with their details so that i can keep inventory updated.','',  '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to update material information such, so that i can keep the inventory data up to date.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a Store Incharge, I want to remove materials that are no longer needed from the inventory, so that i can maintain clean and relevant material list.','',   '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store Incharge, I want to receive notifications when stock levels materials fall below a defined limit so that i can add material before it wents out of stock.','',  '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to create new categories of materials and add materials to these categories,so that i can maintain organized inventory.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to add new store managers and store workers to the system, so that i can seamlessly expand our team, assign roles and responsibilities.','',   '2023-12-05', '2023-12-06', '2023-12-10',  15, 7,4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to edit the personal information of store managers and store workers so that i can maintain accurate records.','',  '2023-12-10', '2023-12-05', '2023-12-06', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to update information of store manager and store worker so that I can ensure that the records are accurate and up-to-date.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7,4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to be able to reset my password in case I forget it.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store manager, I want to view pending orders so that i can fulfill orders efficiently.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a store manager, I want to view current inventory level so that i can effectively manage stock availability.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a store manager, I want to view detailed information about each material,  so that i can see all material details.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a store manager, I want to view the availability of materials when approving orders so that i can approve material as per the availability.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store manager, I want to view the department and supervisors names associated with request when, so that i can identify the source of the request.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store manager, I want to sort and filter order requests based on their status (pending, cancelled, completed) so that I can manage them efficiently.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store manager, I want to mark materials as "out of stock" when they are no longer available, so that i can provide material accordingly.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store manager, I want to choose a specific time frame (monthly, yearly, weekly) for the graph, so that I can focus on the relevant data.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a store manager, I want to be able to reset my password in case I forget it.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to search specific materials from the inventory so that I can request quickly.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7,4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a  supervisor, I want to sort materials by categories so that I can easily find and request materials.','','2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to be able to save items to my wishlist so that I can keep track of materials that I am interested in and request multiple materials at one time.','',  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to edit or remove materials from the tray so that I can efficiently manage and refine the selection of materials.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to cancel request that I have placed, so that I can cancel request if i ordered incorrectly.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to see status of my request (processing, shipped, delivered) so that I can track my requests.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to view the history and details of my past requests so that I can reference them for future planning.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to easily reorder previously ordered materials so that I can save time on repetitive orders.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to access a dashboard that displays graphical representations of my monthly, yearly, and weekly material requests, so that I can visualize trends and patterns.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to choose a specific time frame (monthly, yearly, weekly) for the graph, so that I can focus on the relevant data.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a  supervisor, I want the option to download the graph as a file for reporting purposes, so that I can share the information with others.','', '2023-12-10','2023-12-05', '2023-12-06',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a supervisor, I want verification that an order has been delivered by a store worker, so that I can confirm on materials received.','', '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a supervisor, I want to be able to reset my password in case I forget it.','',  '2023-12-05', '2023-12-06', '2023-12-10',  15, 7, 4, 'todo','2023-12-04');





-- Task 1
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Complete Feature X', 'Implement and test Feature X according to specifications', '2023-11-27', '2023-12-01', '2023-12-30', 10, 9, 1, 'todo','2023-11-23');

-- Task 2
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I need to authenticate myself so that I can see my account details.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-23');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to submit feedback so that the shop owner can consider my opinion related to krushi products and consulting.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-05');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to ask queries related to farming so that I can get feedback on issues.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-11');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to create an account and save my payment information so that I can have a personalized shopping experience.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-01');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view my order history so that I can easily track my purchases.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-01');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view product details, including images, descriptions, prices, so that I can make informed purchasing decisions.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-01');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to see the status of my orders (processing, shipped, delivered) so that I am aware of their progress.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-02');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to search for krushi products by category so that I can find krushi products easily.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-03');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view a dashboard that displays graphical representations of my monthly, yearly, and weekly orders so that I can check my order information.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-08-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to add products to my cart so that I can continue shopping and complete the checkout process later.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-01');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to update product quantities in my cart so that I can order the accurate quantity.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to remove krushi products from my cart so that I can manage my cart list.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-11');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to purchase the required amount of products so that I can save time.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-08-13');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view different answers to a particular question in my questions so that I can get many solutions.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-13');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to remove questions from my list so that I can manage my question list.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-11');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to view my bill so that I can make a payment.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-15');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a farmer, I want to buy agri equipment so that I can engage in precision farming.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-08');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a signed-in user, I want to view my profile so that I can check my personal information.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-07-12');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','  As a shop owner, I want to see a dashboard so that I can evaluate consultant performance.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-13');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a shop owner, I want to manage my krushi product inventory and update product details so that I can effectively manage my online krushi store.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a shop owner, I want to track sales and revenue so that I can make data-driven decisions about my business.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-02');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a shop owner, I want to add new sellers so that I can manage my application.', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-11-13');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a shop owner, I want to create new categories of products and assign products to these categories so that I can maintain new krushi products.', '', '2023-10-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a shop owner, I want to check orders of farmers so that I can deliver them within time.
', '', '2023-10-24', '2023-10-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a shop owner, I want to be able to see farmer reviews for products so that I can make more informed purchasing decisions.
', '', '2023-10-24', '2023-10-25', '2023-11-02', 7, 10, 2, 'todo','2023-08-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a shop owner, I want to add new agri product categories so that I can manage my application.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-08-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Subject Matter Expert, I want to see queries related to farming so that I can solve them anytime and anywhere.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Subject Matter Expert, I want to view graphical representations of my monthly, yearly, and weekly question answers information so that it helps me check my performance.
', '', '2023-11-04', '2023-11-10', '2023-11-22', 7, 10, 2, 'todo','2023-10-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a Subject Matter Expert, I want to view a dashboard that displays graphical representations of my monthly, yearly, and weekly answers so that I can check my answers information.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a registered user, I want to be able to buy listed products so that I can use the products I buy.
', '', '2023-11-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-02');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a registered user, I want to update my profile information so that it can be accurate and up to date.
', '', '2023-10-24', '2023-11-01', '2023-11-25', 7, 10, 2, 'todo','2023-08-11');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to be securely enter my payment information and complete my purchase so that I can buy the products I want.', '', '2023-09-24', '2023-10-25', '2023-11-02', 7, 10, 2, 'todo','2023-08-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to be able to login to my account so that I can access my saved information.
', '', '2023-10-24', '2023-11-25', '2023-12-05', 7, 10, 2, 'todo','2023-10-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a registered user, I want to update my profile information so that it can be accurate and up to date.
', '', '2023-10-24', '2023-10-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to securely enter my payment information and complete my purchase so that I can buy the products I want.', '', '2023-10-24', '2023-10-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to store my credit card information in the app so I can make my next purchases fast.', '', '2023-10-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-09-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a visitor, I want to register on the website so that I can browse and buy listed products from the krushi application.
', '', '2023-10-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a visitor, I want to register on the website so that I can browse and buy listed products from the krushi application.', '', '2023-10-24', '2023-11-25', '2023-12-02', 7, 10, 2, 'todo','2023-10-03');


-- E-AGRO




INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a new user, I want to be able to create an account by providing my contactnumber and password, so that I can access the applications features.', '', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
    
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a  user ,I want to add new account of the application by multiple roles like transporter,farmer,collection so that multiple corporates can easily add in the application.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a new user, I want to receive a verification email with a link to confirm my email address, ensuring the security of my account.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a new user, I want to receive clear error messages if I enter invalid information during the registration process, so that I can correct my mistakes','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to be able to log in to my account using my mobile number and password, so that I can access my personalized settings and data.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want the option to reset my password if I forget it, by receiving a password reset link via email or contactnumber.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user, I want to see appropriate error messages if I enter incorrect login credentials, guiding me to provide accurate information.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a registered user,As a registered user, I want the system to remember my login credentials, so that I dont have to log in again every time I visit the application.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a signed-in user, I want to have the option to update my profile details such as my name, contact information,and other relevant information. This will help me keep my profile information accurate and up-to-date.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a signed-in user, I want to be able to update my profile picture by selecting an image from my device or capturing a new photo using my devices camera. This will allow me to personalize my account and have a recognizable image associated with my profile across the platform.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a user ,I want to add or update corporate details if I am collection manager,merchant,transporter so that they can easily mentain the corporates details','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a collection manager, I want to be able to add new collections gathered at the collection center so that I can accurately record   for further processing .','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a collection manager, I want to review and verify the added collections so that I can ensure that the quality standards are met before allowing the collections to proceed to the shipment phase.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a collection manager, I want the ability to edit details of collected collections so that I can make necessary corrections or updates in case of inaccuracies, ensuring that our data remains precise.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a collection manager, I want the option to remove collected collections from the system if there are issues with them, maintaining accurate records and data integrity.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a collection manager, once Ive verified a collection for Grade and Weight, I want it to automatically proceed to the shipment phase so that the validated collections can be dispatched in shipment phase for delivery, optimizing efficiency.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a collection manager, when a verified collection is ready for shipment, I want the system to check if a vehicle is available. If not, I want the system to allow me to create a new shipment so that our collections can be transported in a timely manner.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a collection manager, I want to ensure that the collections added to shipments are listed in the shipments record so that I can have a clear overview of what is being transported, aiding in accurate monitoring and coordination.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a collection manager, I want the ability to sort and filter collections based on different properties such as the farmers name, crop type, container used, and date collected so that I can organize data effectively and gain insights for decision-making.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a collection manager, I want to access a history of all collections for reference so that I can review past activities, identify trends, and make informed decisions based on historical data.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a collection manager, I want to generate charts and reports based on specific time frames (yearly, quarterly, monthly, weekly) so that I can visualize collection patterns and trends during different periods, facilitating data-driven decisions.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to be able to view a list of shipments sent from various collection centers so that I can track the movement of goods efficiently and ensure timely deliveries.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to have the ability to remove a collection from a shipment if its unacceptable or contains incorrect information. So that it will help me maintain the accuracy and quality of the shipments I manage.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want the capability to change the status of a shipment (e.g.,inprogress, delivered) to keep all stakeholders informed about the progress. So that it will improve transparency and communication throughout the supply chain.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a merchant, I want to categorize delivered shipments into "paid delivered" and "unpaid delivered" to easily distinguish between completed orders that have been paid for and those that still require payment processing. So that this classification will help me in financial tracking.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to access a record of all past collections, so that I can review historical data, track trends, and make informed decisions about inventory, pricing, and sourcing strategies.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a merchant, I want the ability to set and adjust collection rates for different , so that it will empower me to manage pricing flexibly based on market conditions.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to initiate payments to various parties using account-to-account transfers or UPI ,so that it will increse the efficiency of financial transactions.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to view my bank account statement within the platform, providing a clear overview of financial transactions related to my business operations,so that it will help me monitor my cash flow and financial health.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to search and filter my bank account statement based on criteria like account numbers, transaction dates, or transaction types. so that it will help me quickly locate and analyze specific transactions.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want the functionality to make payments to transporters for their services, so it will ensure that I can  compensate transporters for their role in the supply chain.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to access a  payment history for each transporter, collection center, and farmer, so that it  will help me maintain accurate financial records and foster transparent business relationships.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory',' As a merchant, I want to generate business reports based on specific time frames (yearly, quarterly, monthly, weekly) , so that it  will  enable me to identify trends, patterns, and opportunities for improvement in my operations.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want the ability to make payments to farmers and collection centers for the products they provide , so that it  will ensure that all stakeholders are compensated fairly and on time.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a merchant, I want to search and filter collection invoices to quickly locate specific ones , so that it  will enhance my efficiency in managing invoices and payments.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a transporter ,I want to see my already added vehicles to system, so that I can efficiently manage and track the available vehicles.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a transporter,I want to add new vehicle to my business,so that I can increase my business revenue.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a transporter,I want to see my recent shipments of each vehicle,so that I can track there performance.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a transporter, I want to view shipment contents so that I can ensure proper handling and delivery.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to the dashboard should display an overview of recent collections and their status so that farmer can updated with his recent collection.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view  revenue charts so that I can analyze financial activities.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want the dashboard should display the average rates of goods in the market for the current day so that farmer can see the current rates of crops.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to see my history of collection list  so that I can make buissness decison based on it ','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to  the ability to view detailed information about each collection so that farmer can access the details of each collection.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to filtering and searching for collection records so that I can find specific collections.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to send notifications to farmers about collection status updates, verifications, and deliveries so that the farmer is informed with his collection status.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view of  the charts to display on the dashboard  so that I can analyze my activity.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view list of verifiedgoodscollections  so that I can see the quality and quantity of goods.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to view the charges details of a collection so that I can analyze how many charges are applied.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('userstory','As a farmer, I want to  view a list of payment details so that I can see payments of goodscollection.','', '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 3, 'todo','2023-11-23');

-- -------------------
-- Task 3
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','QA Testing for Module Y', 'Conduct QA testing for Module Y and document any issues found', '2023-11-25', '2023-11-26', '2023-12-03', 8, 11, 3, 'completed','2023-11-24');

-- Task 4
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Update User Interface', 'Modify the user interface to improve user experience', '2023-11-26', '2023-11-27', '2023-12-04', 9, 12, 4, 'todo','2023-11-25');

-- Task 5
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Bug Fixing in Module Z', 'Identify and fix bugs in Module Z reported by QA', '2023-11-27', '2023-11-28', '2023-12-05', 10, 13, 5, 'inprogress','2023-11-26');

-- Task 6
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Documentation for API', 'Create comprehensive documentation for the new API', '2023-11-28', '2023-11-29', '2023-12-06', 11, 14, 6, 'completed','2023-11-27');

-- Task 7
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Sprint Planning Meeting', 'Participate in the sprint planning meeting to discuss upcoming tasks', '2023-11-29', '2023-11-30', '2023-12-07', 12, 15, 1, 'todo','2023-11-28');


-- Task 9
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','User Feedback Analysis', 'Analyze user feedback and propose improvements for the next release', '2023-12-01', '2023-12-02', '2023-12-09', 14, 17, 3, 'completed','2023-11-30');

-- Task 10
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Database restructuring', 'improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 15, 18, 4, 'todo','2023-12-01');

-- Task 11
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Database Optimization', 'Optimize database queries for improved performance', '2023-12-02', '2023-12-03', '2023-12-10',16, 1, 3, 'todo','2023-12-02');

-- Task 12
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Remove unnecessary variable', 'improved performance', '2023-12-02', '2023-12-03', '2023-12-10', 17, 2, 3, 'todo','2023-12-02');

-- Task 13
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','API crude operation', 'Create comprehensive crude operations for the API', '2023-12-04', '2023-12-05', '2023-12-10', 18, 1, 3, 'todo','2023-12-03');

-- Task 14
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ('task','Database Optimization', 'Optimize database queries for improved performance', '2023-12-05', '2023-12-06', '2023-12-10', 7, 2, 3, 'todo','2023-12-04');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","User Registration","As a new user, I want to be able to register for an account so that I can access the platform.",'2023-10-29','2023-10-30','2023-11-04',8,10,1,'todo','2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","Login Functionality","As a forgetful user, I want to be able to reset my password via email verification.",'2023-10-29','2023-10-30','2023-11-04',9,10,1,"todo",'2023-10-30');
INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)
VALUES ("userstory","Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",'2023-12-14','2023-12-14','2023-12-30',15,10,8,"inprogress",'2023-10-30');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory",'Communication Platform', 'As a stakeholder, I want a communication platform that facilitates discussions and updates among project team members.','2023-11-06','2023-11-07','2023-11-08', 14, 3, 1, 'todo','2023-11-06 09:15:00'),
("userstory",'Budget Tracking and Alerts', 'As a project manager, I want a budget tracking feature that monitors expenses and alerts me if the project is at risk of exceeding the budget.','2023-11-06','2023-11-07','2023-11-09', 13, 4, 5, 'todo','2023-11-06 09:30:00'),
("userstory",'Build and Deployment Streamlining', 'As a developer, I want an integrated build and deployment system to streamline the process of releasing new features.','2023-11-06','2023-11-07','2023-11-12', 14, 5, 1, 'todo','2023-11-06 09:45:00'),
("userstory",'Feedback Mechanism', 'As a team member, I want a feedback mechanism within the project management tool to provide input on the teams collaboration and processes.','2023-11-06','2023-11-07','2023-11-11', 15, 6, 7,'todo', '2023-11-06 10:00:00'),
("userstory",'Retrospective Tool', 'As a project manager, I want a retrospective tool to conduct post-project evaluations and gather insights for continuous improvement.','2023-11-06','2023-11-07','2023-11-10', 14, 4, 3, 'todo','2023-11-06 10:30:00');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory",'User Acceptance Testing', 'As a product owner, I want a feature that allows me to conduct user acceptance testing within the project management platform.','2023-11-13','2023-11-13','2023-11-14', 15, 7, 1,  'todo','2023-11-13 10:45:00'),
("userstory",'Velocity Tracking', 'As a Scrum Master, I want a velocity tracking tool to monitor the teams progress and adjust future sprint planning accordingly.','2023-11-13','2023-11-14','2023-11-14', 11, 1, 2,  'todo','2023-11-13 11:00:00'),
("userstory",'Gantt Chart Visualization', 'As a team member, I want a visual representation of the projects progress using a Gantt chart for better understanding and planning.','2023-11-13','2023-11-13','2023-11-14', 12, 1, 3, 'todo', '2023-11-13 11:15:00'),
("userstory",'Onboarding Facilitation', 'As a project coordinator, I want a tool that facilitates the onboarding process for new team members, providing them with necessary resources.','2023-11-13','2023-11-13','2023-11-17', 13, 2, 3,  'todo','2023-11-13 11:30:00'),
("userstory",'Integrated Collaboration', 'As a stakeholder, I want a project management tool that supports multiple integrations with other productivity tools for seamless collaboration.','2023-11-13','2023-11-13','2023-11-16', 11, 3, 4, 'todo', '2023-11-13 11:45:00'),
("userstory",'Risk Register Management', 'As a project manager, I want a risk register that captures and prioritizes identified risks along with proposed mitigation strategies.','2023-11-13','2023-11-15','2023-11-17', 12, 4, 5,  'todo','2023-11-13 12:00:00');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory",'Automated Testing Framework', 'As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.','2023-11-20','2023-11-21','2023-11-22', 13, 5, 3,'todo', '2023-11-20 12:15:00' ),
("userstory",'Retrospective Documentation', 'As a project manager, I want a retrospective tool to capture both positive and negative aspects of the project for future reference.','2023-11-20','2023-11-22','2023-11-24', 13, 4, 1, 'todo', '2023-11-20 12:30:00'),
("userstory",'Knowledge Base Access', 'As a team member, I want a knowledge base within the project management platform to access documentation and guidelines.','2023-11-20','2023-11-22','2023-11-25', 12, 3, 1, 'todo','2023-11-20 12:45:00'),
("userstory",'Milestone Tracking for Clients', 'As a client, I want a feature that allows me to track project milestones and receive notifications when key deliverables are achieved.','2023-11-20','2023-11-21','2023-11-23', 13, 2, 1, 'todo','2023-11-20 13:00:00'),
("userstory","Password Reset:","As a new user, I want to be able to register for an account so that I can access the platform.",'2023-11-20','2023-11-21','2023-11-21',13,3,3,'todo','2023-11-20');

INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory","Project Timeline Visualization","As a project manager, I want to create and customize project timelines with milestones to visualize project progress.",'2023-11-27','2023-11-27','2023-11-30',15,5,1,"todo",'2023-11-27'),
("userstory","Automated Notifications"," As a team member, I want to receive automatic notifications for upcoming meetings and deadlines to stay organized.",'2023-11-27','2023-11-28','2023-12-01',16,4,3,"todo",'2023-11-27'),
("userstory","Resource Allocation","As a project coordinator, I want a resource allocation tool to assign team members to specific tasks based on their skills and availability.",'2023-11-27','2023-11-27','2023-12-03',17,4,3,"todo",'2023-11-27'),
("userstory","Feedback Mechanism","As a team member, I want a feedback mechanism within the project management tool to provide input on the team's collaboration and processes.",'2023-11-27','2023-11-27','2023-11-04',18,3,3,"todo",'2023-11-27'),
("userstory","Gantt Chart Visualization","As a team member, I want a visual representation of the project's progress using a Gantt chart for better understanding and planning.",'2023-11-27','2023-11-28','2023-11-04',8,6,3,"todo",'2023-11-27');


INSERT INTO activities (activitytype,title, description, assigneddate, startdate, duedate, assignedto, assignedby, projectid, status,createddate)VALUES
("userstory","Automated Testing Framework","As a developer, I want an automated testing framework integrated into the project to ensure the stability of new features.",'2023-12-04','2023-12-05','2023-12-06',12,3,4,"todo",'2023-12-04'),
("userstory","User Survey Participation","As a user, I want the opportunity to participate in surveys to provide feedback and improve the platform.",'2023-12-04','2023-12-04','2023-12-06',13,7,1,"todo",'2023-12-04'),
("userstory","Privacy Settings","As a user, I want to control my privacy settings and data sharing preferences.",'2023-12-04','2023-12-07','2023-12-08',14,6,3,"todo",'2023-12-04'),
("userstory","Security Measures","As a user, I want assurance that my personal and payment information is secure on the platform.",'2023-12-04','2023-12-04','2023-12-07',12,3,4,"todo",'2023-12-04'),
("userstory","Language Preferences","As a user, I want to choose my preferred language for the platform.",'2023-12-04','2023-12-05','2023-12-06',13,7,7,"todo",'2023-12-04'),
("userstory","Accessibility Features","As a user with accessibility needs, I want the platform to be accessible and user-friendly.",'2023-12-04','2023-12-04','2023-12-08',14,6,8,"todo",'2023-12-04');

INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-01','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-02','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-03','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-04','Rejected',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-05','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-06','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-07','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-01','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-02','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-03','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-04','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-05','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-06','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-07','Approved',15);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-08','Approved',15);

INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2023-12-08','Approved',10);
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

INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("Code Refactoring", "task", "Review and refactor existing code", "09:00:00", "10:30:00", 1),
  ("Client Meeting", "meeting", "Discuss project updates with the client", "10:30:00", "12:00:00", 1),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 1),
  ("Feature Implementation", "userstory", "Implement new features in the project", "13:00:00", "14:30:00", 1),
  ("Client Call", "meeting", "Call with New Client", "14:30:00", "15:15:00", 1),
  ("Project Wrap-up", "task", "Finalize and document project tasks", "15:15:00", "16:45:00", 1);
INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("Bug Fixing", "bug", "Identify and fix bugs in the system", "09:00:00", "10:30:00", 2),
  ("Team Meeting", "meeting", "Team Collaboration and Project Updates", "10:30:00", "11:30:00", 2),
  ("Lunch Break", "break", "Lunch Break", "11:30:00", "13:00:00", 2),
  ("Data Analysis", "task", "Analyze project data and metrics", "13:00:00", "14:30:00", 2),
  ("Team Discussion", "meeting", "Discuss future project planning", "14:30:00", "15:15:00", 2),
  ("Coding Tasks", "task", "Code new functionalities", "15:15:00", "16:45:00", 2);

INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("UI Design", "task", "Designing User Interface for new features", "09:00:00", "10:30:00", 3),
  ("Stakeholder Meeting", "meeting", "Meeting with Stakeholders for Project A", "10:30:00", "12:00:00", 3),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 3),
  ("Backend Coding", "task", "Coding Backend functionalities", "13:00:00", "14:30:00", 3),
  ("Testing Session", "userstory", "Testing New Features and Functionality", "14:30:00", "15:15:00", 3),
  ("Project Review", "meeting", "Reviewing Project Progress", "15:15:00", "16:45:00", 3);

INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("Research and Analysis", "task", "Research and Analyze market trends", "09:00:00", "10:30:00", 4),
  ("Weekly Team Meeting", "meeting", "Discussing Project Updates", "10:30:00", "12:00:00", 4),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 4),
  ("Report Writing", "task", "Writing Reports and Documentation", "13:00:00", "14:30:00", 4),
  ("Client Presentation", "meeting", "Preparing for Client Presentation", "14:30:00", "15:15:00", 4),
  ("Documentation", "task", "Documenting Project Tasks", "15:15:00", "18:00:00", 4);


INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("Requirements Analysis", "task", "Analyzing client requirements for Project A", "09:00:00", "10:30:00", 5),
  ("Team Collaboration", "meeting", "Weekly team collaboration meeting", "10:30:00", "12:00:00", 5),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 5),
  ("Software Development", "task", "Coding and developing new features", "13:00:00", "15:30:00", 5),
  ("Client Meeting", "meeting", "Meeting with the client for Project A", "15:30:00", "17:15:00", 5),
  ("Testing and QA", "task", "Quality assurance and testing", "17:15:00", "18:00:00", 5);

INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("Market Research", "task", "Conducting market research for Project B", "09:00:00", "10:30:00", 6),
  ("Team Sync-up", "meeting", "Weekly team synchronization meeting", "10:30:00", "12:00:00", 6),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 6),
  ("Software Development", "userstory", "Coding and programming tasks", "13:00:00", "14:30:00", 6),
  ("Client Demo Preparation", "meeting", "Preparing for client demo", "14:30:00", "16:00:00", 6),
  ("Documentation", "task", "Documenting project tasks and updates", "16:00:00", "18:00:00", 6);

INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("Project Planning", "meeting", "Planning the next project sprint", "09:00:00", "10:30:00", 7),
  ("Client Requirements Discussion", "clientcall", "Discussing client requirements", "10:30:00", "11:00:00", 7),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 7),
  ("Software Development", "userstory", "Coding and development tasks", "13:00:00", "16:30:00", 7),
  ("Quality Assurance", "task", "Testing and quality assurance", "16:30:00", "17:15:00", 7),
  ("Project Status Review", "meeting", "Reviewing project status and progress", "17:15:00", "18:00:00", 7);

INSERT INTO timesheetentries(work, workcategory, description, fromtime, totime, timesheetid)
VALUES
  ("UI Design", "task", "Designing User Interface for new features", "09:00:00", "10:30:00", 8),
  ("Stakeholder Meeting", "meeting", "Meeting with Stakeholders for Project A", "10:30:00", "12:00:00", 8),
  ("Lunch Break", "break", "Lunch Break", "12:00:00", "13:00:00", 8),
  ("Backend Coding", "task", "Coding Backend functionalities", "13:00:00", "14:30:00", 8),
  ("Testing Session", "task", "Testing New Features and Functionality", "14:30:00", "15:15:00", 8),
  ("Project Review", "meeting", "Reviewing Project Progress", "15:15:00", "16:45:00", 8);




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

Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(1,30000,3000,200,300,200,2000);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(2,40000,2200,300,200,250,4000);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(3,30000,1000,400,400,330,3000);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(4,45000,5000,500,500,350,3300);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(5,20000,6000,600,500,400,4000);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(6,19000,3200,600,600,600,2000);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(7,45000,5000,500,500,350,3300);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(8,20000,6000,600,500,400,4000);
Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(9,19000,3200,600,600,600,2000);
 

Insert Into salarydisbursement(employeeid,paydate,amount) values(1,'2023-12-07',25000);
Insert Into salarydisbursement(employeeid,paydate,amount) values(2,'2023-12-06',25000);
Insert Into salarydisbursement(employeeid,paydate,amount) values(3,'2023-12-05',25000);
Insert Into salarydisbursement(employeeid,paydate,amount) values(4,'2023-12-04',25000);
Insert Into salarydisbursement(employeeid,paydate,amount) values(5,'2023-12-03',25000);
Insert Into salarydisbursement(employeeid,paydate,amount) values(6,'2023-12-02',25000);

-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(1,'2023-04-03','2023-05-05',26000,"notstarted","casual");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(2,'2023-04-03','2023-05-05',26000,"notstarted","casual");
--  Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(3,'2023-05-03','2023-05-20',30000,"approved","paternity");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(4,'2023-06-03','2023-05-15',40000,"approved","sick");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(5,'2023-07-03','2023-05-25',50000,"rejected","study");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(6,'2023-08-03','2023-05-15',40000,"approved","comp off");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(7,'2023-06-03','2023-05-13',40000,"rejected","bereavement");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(8,'2023-01-03','2023-05-25',50000,"approved","study");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(9,'2023-08-03','2023-07-15',40000,"rejected","comp off");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(10,'2023-07-03','2023-05-25',50000,"rejected","study");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(11,'2023-08-03','2023-05-15',40000,"approved","comp off");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(12,'2023-06-03','2023-05-13',40000,"rejected","bereavement");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(13,'2023-01-03','2023-05-25',50000,"approved","study");
-- Insert Into leaves(employeeid,fromdate,todate,amount,status,leavetype) values(14,'2023-08-03','2023-07-15',40000,"rejected","comp off");


-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(10,3,1,2,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(11,1,1,2,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(12,3,1,5,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(13,6,1,2,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(14,3,1,7,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(15,3,1,2,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(16,1,6,2,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(17,3,2,5,2);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(18,6,5,2,1);
-- Insert Into leavespending(employeeid,sickleaves,casualleaves,paidleaves,unpaidleaves) values(19,3,2,1,1);

 