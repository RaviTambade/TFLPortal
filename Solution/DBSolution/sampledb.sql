
-- Active: 1696576841746@@127.0.0.1@3306@tflportal

-- director
INSERT INTO employees(id,hiredon,reportingid) VALUES (1,'2013-01-01',1);
INSERT INTO employees(id,hiredon,reportingid) VALUES (2,'2013-11-03',1);
INSERT INTO employees(id,hiredon,reportingid) VALUES (3,'2013-08-11',1);
-- HR Manager
INSERT INTO employees(id,hiredon,reportingid) VALUES (4,'2013-10-06',1);
INSERT INTO employees(id,hiredon,reportingid) VALUES (5,'2014-09-07',2);
INSERT INTO employees(id,hiredon,reportingid) VALUES (6,'2014-11-01',3);

-- project Manager
INSERT INTO employees(id,hiredon,reportingid) VALUES (7,'2013-11-01',4);
INSERT INTO employees(id,hiredon,reportingid) VALUES (8,'2013-04-14',5);
INSERT INTO employees(id,hiredon,reportingid) VALUES (9,'2015-12-01',6);

-- Team MEMBER 

INSERT INTO employees(id,hiredon,reportingid) VALUES (10,'2013-03-17',6);
INSERT INTO employees(id,hiredon,reportingid) VALUES (11,'2014-02-12',7);
INSERT INTO employees(id,hiredon,reportingid) VALUES (12,'2014-05-21',7);
INSERT INTO employees(id,hiredon,reportingid) VALUES (13,'2014-05-21',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (14,'2015-11-11',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (15,'2015-09-15',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (16,'2015-07-16',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (17,'2015-04-23',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (18,'2015-05-13',9);


INSERT INTO employees(id,hiredon,reportingid) VALUES (19,'2014-05-21',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (20,'2015-11-11',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (21,'2015-09-15',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (22,'2015-07-16',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (23,'2015-04-23',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (24,'2015-05-13',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (25,'2014-05-21',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (26,'2015-11-11',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (27,'2015-09-15',8);
INSERT INTO employees(id,hiredon,reportingid) VALUES (28,'2015-07-16',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (29,'2015-04-23',9);
INSERT INTO employees(id,hiredon,reportingid) VALUES (30,'2015-05-13',9);


Insert Into leaveallocations(roleid,sick,casual,paid,unpaid,financialyear) values(1,10,5,12,15,2023);
Insert Into leaveallocations(roleid,sick,casual,paid,unpaid,financialyear) values(2,9,5,12,10,2023);
Insert Into leaveallocations(roleid,sick,casual,paid,unpaid,financialyear) values(3,8,10,10,15,2023);
Insert Into leaveallocations(roleid,sick,casual,paid,unpaid,financialyear) values(4,7,5,11,10,2023);


Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(10,'2024-01-13','2024-01-14','2024-01-15',"sanctioned","unpaid");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(11,'2024-04-01','2024-04-03','2024-04-05',"notsanctioned","casual");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(12,'2024-04-01','2024-04-03','2024-04-05',"sanctioned","casual");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(13,'2024-03-01','2024-03-03','2024-03-20',"sanctioned","casual");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(14,'2024-04-01','2024-04-10','2024-04-15',"sanctioned","casual");

Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(15,'2024-11-01','2024-11-22','2024-11-22',"applied","unpaid");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(16,'2024-11-05','2024-11-26','2024-11-28',"applied","sick");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(17,'2024-12-12','2024-12-26','2024-12-27',"applied","paid");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(18,'2024-12-12','2024-12-15','2024-12-18',"applied","casual");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(19,'2024-01-15','2024-01-17','2024-01-17',"sanctioned","casual");
Insert Into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(18,'2024-01-14','2024-01-17','2024-01-17',"sanctioned","casual");


-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(1,30000,3000,200,300,200);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(2,40000,2200,300,200,250);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(3,30000,1000,400,400,330);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(4,45000,5000,500,500,350);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(5,20000,6000,600,500,400);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(6,19000,3200,600,600,600);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,v  ariablepay) values(7,45000,5000,500,500,350);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(8,20000,6000,600,500,400);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(9,19000,3200,600,600,600);
-- Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(10,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(1,30000,3000,200,300,200);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(2,40000,2200,300,200,250);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(3,30000,1000,400,400,330);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(4,45000,5000,500,500,350);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(5,20000,6000,600,500,400);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(6,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(7,45000,5000,500,500,350);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(8,20000,6000,600,500,400);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(9,19000,3200,600,600,600);

Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(11,30000,1000,400,400,330);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(12,45000,5000,500,500,350);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(13,20000,6000,600,500,400);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(14,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(15,45000,5000,500,500,350);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(16,20000,6000,600,500,400);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(17,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(18,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(10,450000,44000,100,4000,6000);

Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(11,'2024-01-11',24,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(12,'2024-01-11',25,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(13,'2024-01-11',24,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(14,'2024-01-11',25,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(15,'2024-01-11',24,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(16,'2024-01-11',25,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(17,'2024-01-11',24,600,600,600,20000);
Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(18,'2024-01-11',25,600,600,600,20000);




  
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EKrushi','2023-11-03','2024-02-02','Krushi Product Management','notstarted');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('PMSAPP','2023-11-02','2024-02-02','Project Management System App','notstarted');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EAgroServices','2023-11-13','2025-02-02','Farmers Goods Management','notstarted');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('Inventory','2017-02-02','2024-02-02','Store Management App','inprogress');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('OMTB','2017-10-10','2025-02-02','Ticket booking Management App','inprogress');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('HMApp','2017-10-10','2025-02-02','Hospital Management App','inprogress');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('TMS','2016-02-02','2023-02-02','Travel Management System','completed');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('HRM','2016-10-10','2023-02-02','Human Resource Management','completed');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('Other','2000-12-19 11:23:17','2099-02-02 ','Other','inprogress');


INSERT INTO projectallocations(title,assignedon,releasedon,status,projectid,employeeid) VALUES ('Manager','2017-10-10','2017-10-10','no',6,9);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Manager','2016-10-10','yes',1,8);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Manager','2016-02-02','yes',3,9);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Manager','2017-10-10','yes',4,7);
INSERT INTO projectallocations(title,assignedon,releasedon,status,projectid,employeeid) VALUES ('Manager','2016-10-10','2017-10-10','no',9,9);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2023-11-02','yes',1,10);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2023-11-03','yes',3,10);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2023-11-02','yes',4,10);

INSERT INTO projectallocations(title,assignedon,releasedon,status,projectid,employeeid) VALUES ('Developer','2023-11-13','2017-10-10','no',5,12);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Tester','2017-02-02','yes',5,13);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',5,14);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',5,15);
INSERT INTO projectallocations(title,assignedon,releasedon,status,projectid,employeeid) VALUES ('Developer','2016-02-02','2017-10-10','no',7,16);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',8,15);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',9,15);

INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',1,15);
INSERT INTO projectallocations(title,assignedon,releasedon,status,projectid,employeeid) VALUES ('Developer','2016-02-02','2017-10-10','no',2,15);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',3,15);
INSERT INTO projectallocations(title,assignedon,status,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',4,15);

INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 1',"2024-01-01","2024-01-07","Resolve critical and high-priority bugs",4);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 2',"2024-01-08","2024-01-14","Enhance system performance by optimizing database queries",4);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 3',"2024-01-15","2024-01-21","Refactor codebase",4);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 4',"2024-01-22","2024-01-28","Improve project documentation",4);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 5',"2024-01-29","2024-02-04","Integration Testing",4);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 1',"2024-01-01","2024-01-07","Resolve critical and high-priority bugs",1);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 2',"2024-01-08","2024-01-14","Enhance system performance by optimizing database queries",1);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 3',"2024-01-15","2024-01-21","Refactor codebase",1);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 4',"2024-01-22","2024-01-28","Improve project documentation",1);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 5',"2024-01-29","2024-02-04","Integration Testing",1);

INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 1',"2024-01-01","2024-01-07","Resolve critical and high-priority bugs",3);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 2',"2024-01-08","2024-01-14","Enhance system performance by optimizing database queries",3);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 3',"2024-01-15","2024-01-21","Refactor codebase",3);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 4',"2024-01-22","2024-01-28","Improve project documentation",3);
INSERT INTO sprints(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 5',"2024-01-29","2024-02-04","Integration Testing",3);



INSERT INTO tasks VALUES (1,'reset password','userstory','As a  Store Worker, I want to be able to reset my password in case I forget it.',10,7,'2024-01-06 00:00:00','2024-01-06 00:00:00','2024-01-06 00:00:00','2024-01-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(2,'orders chart','userstory','As a Store Worker, I want to view a graph that shows my daily, weekly, and monthly delivered orders, so that i can monitor my performance',12,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(3,'change order status','userstory','As a Store Worker, I want to mark orders as delivered when I successfully hand over the materials to the manufacturing supervisors so that i can ensure order is delivered.',13,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(4,'communication with supervisors','userstory','As a Store Worker, I want to access information about the supervisors who will receive the deliveries, including their contact details so that I can efficiently communicate regarding the delivery process and resolve any potential issues.',14,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(5,'notifiaction receiving pickup and delivery','userstory','As a Store Worker, I want to receive notifications for new task that require pickup and delivery, so that i can stay updated on my tasks.',3,7,'2024-01-04 00:00:00','2024-01-04 00:00:00','2024-01-04 00:00:00','2024-01-04 00:00:00','inprogress');
INSERT INTO tasks VALUES(6,'order details','userstory','As a Store Worker, I want to access order details including the order-id, and pickup/delivery locations so that i can prepare for the tasks.',15,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(7,'change status of order','userstory','As a Store Worker, I want to mark orders as picked up when I collect the materials from the inventory so that i can change status of order.',15,7,'2023-12-28 00:00:00','2023-12-28 00:00:00','2023-12-28 00:00:00','2023-12-28 00:00:00','inprogress');
INSERT INTO tasks VALUES(8,'employee information','userstory','As a Supervisor Incharge, I want to view an overview of employee information and departments so that I can efficiently manage teams and make informed decisions regarding staffing and resource allocation.',1,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(9,'reports generation','userstory','As a Supervisors Incharge, I want to view request reports graphs so that i can make data-driven decisions and analyze trends.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(10,'adding employee details','userstory','As a Supervisors Incharge, I want to add new supervior to the system so that i can seamlessly expand our team, assign roles and responsibilities.',15,7,'2023-12-29 00:00:00','2023-12-29 00:00:00','2023-12-29 00:00:00','2023-12-29 00:00:00','inprogress');
INSERT INTO tasks VALUES(11,'updating employee details','userstory','As a Supervisors Incharge, I want to update  information of supervisors  so that I can ensure that the records are accurate and up-to-date.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(12,'switch department of employee','userstory','As a Supervisors Incharge, I want to switch the departments of employees when they move to different teams so that I can maintain efficient workflow across teams.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(13,'reports generation for supervisor','userstory','As a Supervisors Incharge, I want request reports of each supervisor,  so that I can assess individual and team performance, track trends in order management.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(14,'request chart','userstory','As a Supervisors Incharge, I want to view a graph showing the total number of requests placed by each supervisor so that I can assess their productivity levels.',15,7,'2023-12-04 00:00:00','2023-12-30 00:00:00','2023-12-30 00:00:00','2023-12-30 00:00:00','inprogress');
INSERT INTO tasks VALUES(15,'weekly,monthly,yearly charts','userstory','As a Supervisors Incharge, I want to view graphical representations of weekly, monthly, and yearly so that i can analise request trends.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(16,'cancelled request chart','userstory','As a Supervisors Incharge, I want to see a graph that displays the number of cancelled requests for each supervisor so that I can identify potential issues in order processing.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(17,'reset password','userstory','As a  Supervisors Incharge, I want to be able to reset my password in case I forget it.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(18,'inventory view','userstory','As a Store Incharge, I want to view current inventory level so that i can effectively manage stock availability.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(19,'Assign store manager','userstory','As a Store Incharge, I want to view departments and assigned store manager so that I can effectively oversee the organization',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(20,'Add items to inventory','userstory','As a Store Incharge, I want to add new materials to the inventory along with their details so that i can keep inventory updated.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(21,'update material info','userstory','As a Store Incharge, I want to update material information such, so that i can keep the inventory data up to date.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(22,'remove materials','userstory',' As a Store Incharge, I want to remove materials that are no longer needed from the inventory, so that i can maintain clean and relevant material list.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(23,'notification-material stock ','userstory','As a store Incharge, I want to receive notifications when stock levels materials fall below a defined limit so that i can add material before it wents out of stock.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(24,'add categories for materials','userstory','As a Store Incharge, I want to create new categories of materials and add materials to these categories,so that i can maintain organized inventory.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(25,'add store manager and workers','userstory','As a Store Incharge, I want to add new store managers and store workers to the system, so that i can seamlessly expand our team, assign roles and responsibilities.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(26,'update personal info','userstory','As a Store Incharge, I want to edit the personal information of store managers and store workers so that i can maintain accurate records.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(27,'update store manager and workers','userstory','As a Store Incharge, I want to update information of store manager and store worker so that I can ensure that the records are accurate and up-to-date.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(28,'reset password','userstory','As a Store Incharge, I want to be able to reset my password in case I forget it.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(29,'view pending orders','userstory','As a store manager, I want to view pending orders so that i can fulfill orders efficiently.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(30,'inventory stock avilability','userstory',' As a store manager, I want to view current inventory level so that i can effectively manage stock availability.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(31,'material details','userstory',' As a store manager, I want to view detailed information about each material,  so that i can see all material details.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(32,'avilability of material','userstory',' As a store manager, I want to view the availability of materials when approving orders so that i can approve material as per the availability.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(33,'department-supervisor list','userstory','As a store manager, I want to view the department and supervisors names associated with request when, so that i can identify the source of the request.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(34,' sorting of requestes','userstory','As a store manager, I want to sort and filter order requests based on their status INSERT INTO tasks VALUES(pending, cancelled, completed) so that I can manage them efficiently.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(35,'outof stock ','userstory','As a store manager, I want to mark materials as \"out of stock\" when they are no longer available, so that i can provide material accordingly.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(36,'chart different time intervals','userstory','As a store manager, I want to choose a specific time frame INSERT INTO tasks VALUES(monthly, yearly, weekly) for the graph, so that I can focus on the relevant data.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(37,'reset password','userstory','As a store manager, I want to be able to reset my password in case I forget it.',3,7,'2024-01-03 00:00:00','2024-01-03 00:00:00','2024-01-03 00:00:00','2024-01-03 00:00:00','inprogress');
INSERT INTO tasks VALUES(38,'search materials','userstory','As a supervisor, I want to search specific materials from the inventory so that I can request quickly.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(39,'sort materials','userstory','As a  supervisor, I want to sort materials by categories so that I can easily find and request materials.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(40,'wishlist','userstory','As a registered user, I want to be able to save items to my wishlist so that I can keep track of materials that I am interested in and request multiple materials at one time.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(41,'update materials','userstory','As a supervisor, I want to edit or remove materials from the tray so that I can efficiently manage and refine the selection of materials.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(42,'cancel order request','userstory','As a supervisor, I want to cancel request that I have placed, so that I can cancel request if i ordered incorrectly.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(43,'view status of request','userstory','As a supervisor, I want to see status of my request INSERT INTO tasks VALUES(processing, shipped, delivered) so that I can track my requests.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(44,'request history','task','As a supervisor, I want to view the history and details of my past requests so that I can reference them for future planning.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(45,'reordering same orders','task','As a supervisor, I want to easily reorder previously ordered materials so that I can save time on repetitive orders.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(46,'dashboard for data representation','task','As a supervisor, I want to access a dashboard that displays graphical representations of my monthly, yearly, and weekly material requests, so that I can visualize trends and patterns.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(47,'differrent timeframe charts','task','As a supervisor, I want to choose a specific time frame INSERT INTO tasks VALUES(monthly, yearly, weekly) for the graph, so that I can focus on the relevant data.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(48,'downloading files,charts','task','As a  supervisor, I want the option to download the graph as a file for reporting purposes, so that I can share the information with others.',10,7,'2023-12-04 00:00:00','2023-12-10 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','inprogress');
INSERT INTO tasks VALUES(49,'verification on deivery','task',' As a supervisor, I want verification that an order has been delivered by a store worker, so that I can confirm on materials received.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(50,'reset password','task','As a supervisor, I want to be able to reset my password in case I forget it.',10,7,'2023-12-04 00:00:00','2023-12-05 00:00:00','2023-12-06 00:00:00','2023-12-10 00:00:00','inprogress');
INSERT INTO tasks VALUES(51,'Login','task',' As a farmer, I need to authenticate myself so that I can see my account details.',10,8,'2023-11-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(52,'feedback form','task',' As a farmer, I want to submit feedback so that the shop owner can consider my opinion related to krushi products and consulting.\r\n',10,8,'2023-09-05 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(53,'quereis related farming','task',' As a farmer, I want to ask queries related to farming so that I can get feedback on issues.',10,8,'2023-09-11 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(54,'payment info saving','task','As a farmer, I want to create an account and save my payment information so that I can have a personalized shopping experience.\r\n',10,8,'2023-09-01 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(55,'view order history','task','As a farmer, I want to view my order history so that I can easily track my purchases.',10,8,'2023-10-01 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(56,'view product details','task','As a farmer, I want to view product details, including images, descriptions, prices, so that I can make informed purchasing decisions.',10,8,'2023-11-01 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(57,'order status tracking','task',' As a farmer, I want to see the status of my orders INSERT INTO tasks VALUES(processing, shipped, delivered) so that I am aware of their progress.',10,8,'2023-11-02 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(58,'search products','task','As a farmer, I want to search for krushi products by category so that I can find krushi products easily.\r\n',10,8,'2023-11-03 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(59,'dashboard charts','task','As a farmer, I want to view a dashboard that displays graphical representations of my monthly, yearly, and weekly orders so that I can check my order information.',10,8,'2023-08-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(60,'add to cart','task','As a farmer, I want to add products to my cart so that I can continue shopping and complete the checkout process later.',10,8,'2023-11-01 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(61,'update cart ','task',' As a farmer, I want to update product quantities in my cart so that I can order the accurate quantity.',10,8,'2023-10-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(62,'remove items from cart','task','As a farmer, I want to remove krushi products from my cart so that I can manage my cart list.\r\n',10,8,'2023-09-11 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(63,'incresing quantity of produt in cart','task',' As a farmer, I want to purchase the required amount of products so that I can save time.\r\n',10,8,'2023-08-13 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(64,'multiple answers to one question','task','As a farmer, I want to view different answers to a particular question in my questions so that I can get many solutions.',10,8,'2023-10-13 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(65,'remove question','task','As a farmer, I want to remove questions from my list so that I can manage my question list.\r\n',10,8,'2023-10-11 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(66,'view bills','task',' As a farmer, I want to view my bill so that I can make a payment.',10,8,'2023-09-15 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(67,'agri equipment listing','task',' As a farmer, I want to buy agri equipment so that I can engage in precision farming.',10,8,'2023-09-08 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(68,'profile','task',' As a signed-in user, I want to view my profile so that I can check my personal information.\r\n',10,8,'2023-07-12 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(69,'shop owner dashboard','task','  As a shop owner, I want to see a dashboard so that I can evaluate consultant performance.\r\n',10,8,'2023-10-13 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(70,'shop-update product','userstory',' As a shop owner, I want to manage my krushi product inventory and update product details so that I can effectively manage my online krushi store.',10,8,'2023-11-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(71,'sales-revenue chart','userstory','As a shop owner, I want to track sales and revenue so that I can make data-driven decisions about my business.\r\n',10,8,'2023-10-02 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(72,'add new sellers','userstory','As a shop owner, I want to add new sellers so that I can manage my application.',10,8,'2023-11-13 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(73,'add categories','userstory','As a shop owner, I want to create new categories of products and assign products to these categories so that I can maintain new krushi products.',10,8,'2023-09-30 00:00:00','2023-10-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(74,'order checking','userstory','As a shop owner, I want to check orders of farmers so that I can deliver them within time.\r\n',10,8,'2023-09-23 00:00:00','2023-10-24 00:00:00','2023-10-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(75,'review product','userstory','As a shop owner, I want to be able to see farmer reviews for products so that I can make more informed purchasing decisions.\r\n',10,8,'2023-08-23 00:00:00','2023-10-24 00:00:00','2023-10-25 00:00:00','2023-11-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(76,'add product','userstory','As a shop owner, I want to add new agri product categories so that I can manage my application.\r\n',10,8,'2023-08-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(77,'view  questions','userstory','As a Subject Matter Expert, I want to see queries related to farming so that I can solve them anytime and anywhere.\r\n',10,8,'2023-09-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(78,'charts of different time-interval','userstory','As a Subject Matter Expert, I want to view graphical representations of my monthly, yearly, and weekly question answers information so that it helps me check my performance.\r\n',10,8,'2023-10-23 00:00:00','2023-11-04 00:00:00','2023-11-10 00:00:00','2023-11-22 00:00:00','inprogress');
INSERT INTO tasks VALUES(79,'SME-dashboard','userstory','As a Subject Matter Expert, I want to view a dashboard that displays graphical representations of my monthly, yearly, and weekly answers so that I can check my answers information.\r\n',10,8,'2023-10-23 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(80,'buying products','userstory',' As a registered user, I want to be able to buy listed products so that I can use the products I buy.\r\n',10,8,'2023-10-02 00:00:00','2023-11-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(81,'update profile','userstory',' As a registered user, I want to update my profile information so that it can be accurate and up to date.\r\n',10,8,'2023-08-11 00:00:00','2023-10-24 00:00:00','2023-11-01 00:00:00','2023-11-25 00:00:00','inprogress');
INSERT INTO tasks VALUES(82,'secure payment','userstory','As a registered user, I want to be securely enter my payment information and complete my purchase so that I can buy the products I want.',10,8,'2023-08-23 00:00:00','2023-09-24 00:00:00','2023-10-25 00:00:00','2023-11-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(83,'login','userstory','As a registered user, I want to be able to login to my account so that I can access my saved information.\r\n',10,8,'2023-10-23 00:00:00','2023-10-24 00:00:00','2023-11-25 00:00:00','2023-12-05 00:00:00','inprogress');
INSERT INTO tasks VALUES(84,'update profile','userstory',' As a registered user, I want to update my profile information so that it can be accurate and up to date.\r\n',10,8,'2023-10-23 00:00:00','2023-10-24 00:00:00','2023-10-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(85,'securely doing payment','userstory','As a registered user, I want to securely enter my payment information and complete my purchase so that I can buy the products I want.',10,8,'2023-09-23 00:00:00','2023-10-24 00:00:00','2023-10-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(86,'storing credit card info','userstory','As a registered user, I want to store my credit card information in the app so I can make my next purchases fast.',10,8,'2023-09-23 00:00:00','2023-10-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(87,'visitor access','userstory',' As a visitor, I want to register on the website so that I can browse and buy listed products from the krushi application.\r\n',10,8,'2023-10-23 00:00:00','2023-10-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(88,'Delete Account','userstory',' As a user, I want to Delete account from platform .',10,8,'2023-10-03 00:00:00','2023-10-24 00:00:00','2023-11-25 00:00:00','2023-12-02 00:00:00','inprogress');
INSERT INTO tasks VALUES(89,'create account','userstory','As a new user, I want to be able to create an account by providing my contactnumber and password, so that I can access the applications features.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(90,'multiple roles same account','userstory','As a  user ,I want to add new account of the application by multiple roles like transporter,farmer,collection so that multiple corporates can easily add in the application.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(91,'verifiaction email','userstory','As a new user, I want to receive a verification email with a link to confirm my email address, ensuring the security of my account.',3,9,'2024-01-03 00:00:00','2024-01-03 00:00:00','2024-01-03 00:00:00','2024-01-03 00:00:00','inprogress');
INSERT INTO tasks VALUES(92,'error messsage while login','userstory','As a new user, I want to receive clear error messages if I enter invalid information during the registration process, so that I can correct my mistakes',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(93,'login activity','userstory','As a registered user, I want to be able to log in to my account using my mobile number and password, so that I can access my personalized settings and data.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(94,'reset password','userstory','As a registered user, I want the option to reset my password if I forget it, by receiving a password reset link via email or contactnumber.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(95,'error message while login','userstory','As a registered user, I want to see appropriate error messages if I enter incorrect login credentials, guiding me to provide accurate information.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(96,'remember login credentials','userstory','As a registered user,As a registered user, I want the system to remember my login credentials, so that I dont have to log in again every time I visit the application.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(97,'update profile','userstory','As a signed-in user, I want to have the option to update my profile details such as my name, contact information,and other relevant information. This will help me keep my profile information accurate and up-to-date.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(98,'update profile image','userstory','As a signed-in user, I want to be able to update my profile picture by selecting an image from my device or capturing a new photo using my devices camera. This will allow me to personalize my account and have a recognizable image associated with my profile across the platform.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(99,'add corporate details','userstory','As a user ,I want to add or update corporate details if I am collection manager,merchant,transporter so that they can easily mentain the corporates details',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(100,'add new collection','userstory','As a collection manager, I want to be able to add new collections gathered at the collection center so that I can accurately record   for further processing .',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(101,'collecction verification','userstory','As a collection manager, I want to review and verify the added collections so that I can ensure that the quality standards are met before allowing the collections to proceed to the shipment phase.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(102,'updating collection','userstory',' As a collection manager, I want the ability to edit details of collected collections so that I can make necessary corrections or updates in case of inaccuracies, ensuring that our data remains precise.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(103,'remove collection','userstory','As a collection manager, I want the option to remove collected collections from the system if there are issues with them, maintaining accurate records and data integrity.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(104,'collection shipment','userstory','As a collection manager, once Ive verified a collection for Grade and Weight, I want it to automatically proceed to the shipment phase so that the validated collections can be dispatched in shipment phase for delivery, optimizing efficiency.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(105,'create shipment','userstory',' As a collection manager, when a verified collection is ready for shipment, I want the system to check if a vehicle is available. If not, I want the system to allow me to create a new shipment so that our collections can be transported in a timely manner.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(106,'shipment history','userstory',' As a collection manager, I want to ensure that the collections added to shipments are listed in the shipments record so that I can have a clear overview of what is being transported, aiding in accurate monitoring and coordination.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(107,'collections filtering','userstory',' As a collection manager, I want the ability to sort and filter collections based on different properties such as the farmers name, crop type, container used, and date collected so that I can organize data effectively and gain insights for decision-making.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(108,'collecction history','userstory','As a collection manager, I want to access a history of all collections for reference so that I can review past activities, identify trends, and make informed decisions based on historical data.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(109,'charts-different time interval','userstory','As a collection manager, I want to generate charts and reports based on specific time frames INSERT INTO tasks VALUES(yearly, quarterly, monthly, weekly) so that I can visualize collection patterns and trends during different periods, facilitating data-driven decisions.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(110,'shipment tracking','userstory','As a merchant, I want to be able to view a list of shipments sent from various collection centers so that I can track the movement of goods efficiently and ensure timely deliveries.',10,4,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(111,'removing collection from shipment','userstory','As a merchant, I want to have the ability to remove a collection from a shipment if its unacceptable or contains incorrect information. So that it will help me maintain the accuracy and quality of the shipments I manage.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(112,'update status of shipment','userstory','As a merchant, I want the capability to change the status of a shipment INSERT INTO tasks VALUES(e.g.,inprogress, delivered) to keep all stakeholders informed about the progress. So that it will improve transparency and communication throughout the supply chain.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(113,'categorize shipment','userstory',' As a merchant, I want to categorize delivered shipments into \"paid delivered\" and \"unpaid delivered\" to easily distinguish between completed orders that have been paid for and those that still require payment processing. So that this classification will help me in financial tracking.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(114,'collection history for merchant','userstory','As a merchant, I want to access a record of all past collections, so that I can review historical data, track trends, and make informed decisions about inventory, pricing, and sourcing strategies.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(115,'update collection rates','userstory',' As a merchant, I want the ability to set and adjust collection rates for different , so that it will empower me to manage pricing flexibly based on market conditions.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(116,'payment transfer','userstory','As a merchant, I want to initiate payments to various parties using account-to-account transfers or UPI ,so that it will increse the efficiency of financial transactions.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(117,'bank account statement','userstory','As a merchant, I want to view my bank account statement within the platform, providing a clear overview of financial transactions related to my business operations,so that it will help me monitor my cash flow and financial health.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(118,'filtering bank account statement','userstory','As a merchant, I want to search and filter my bank account statement based on criteria like account numbers, transaction dates, or transaction types. so that it will help me quickly locate and analyze specific transactions.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(119,'payment history for each individual','userstory','As a merchant, I want to access a  payment history for each transporter, collection center, and farmer, so that it  will help me maintain accurate financial records and foster transparent business relationships.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(120,'buissness reports generation','userstory',' As a merchant, I want to generate business reports based on specific time frames INSERT INTO tasks VALUES(yearly, quarterly, monthly, weekly) , so that it  will  enable me to identify trends, patterns, and opportunities for improvement in my operations.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(121,'payment processing','userstory','As a merchant, I want the ability to make payments to farmers and collection centers for the products they provide , so that it  will ensure that all stakeholders are compensated fairly and on time.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(122,'filtering invoices','userstory','As a merchant, I want to search and filter collection invoices to quickly locate specific ones , so that it  will enhance my efficiency in managing invoices and payments.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(123,'vehicle list','userstory','As a transporter ,I want to see my already added vehicles to system, so that I can efficiently manage and track the available vehicles.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(124,'add vehicle','userstory','As a transporter,I want to add new vehicle to my business,so that I can increase my business revenue.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(125,'transporter-shipment list','userstory','As a transporter,I want to see my recent shipments of each vehicle,so that I can track there performance.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(126,' view contents of shipment','userstory','As a transporter, I want to view shipment contents so that I can ensure proper handling and delivery.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(127,'farmer-collections','userstory','As a farmer, I want to the dashboard should display an overview of recent collections and their status so that farmer can updated with his recent collection.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(128,'farmer revenue chart','userstory','As a farmer, I want to view  revenue charts so that I can analyze financial activities.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(129,'rates of goods','userstory','As a farmer, I want the dashboard should display the average rates of goods in the market for the current day so that farmer can see the current rates of crops.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(130,'farmer collection list','userstory','As a farmer, I want to see my history of collection list  so that I can make buissness decison based on it ',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(131,'farmer collection details','userstory','As a farmer, I want to  the ability to view detailed information about each collection so that farmer can access the details of each collection.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(132,'farmer collection filtering','userstory','As a farmer, I want to filtering and searching for collection records so that I can find specific collections.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(133,'farmer notifications','userstory','As a farmer, I want to send notifications to farmers about collection status updates, verifications, and deliveries so that the farmer is informed with his collection status.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(134,'farmer dashboard charts ','userstory','As a farmer, I want to view of  the charts to display on the dashboard  so that I can analyze my activity.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(135,'farmer verified collection list','userstory','As a farmer, I want to view list of verifiedgoodscollections  so that I can see the quality and quantity of goods.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(136,'farmer charges overview','userstory','As a farmer, I want to view the charges details of a collection so that I can analyze how many charges are applied.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(137,'farmer payments history','userstory','As a farmer, I want to  view a list of payment details so that I can see payments of goodscollection.',10,9,'2023-11-23 00:00:00','2023-11-23 00:00:00','2023-11-24 00:00:00','2023-12-01 00:00:00','inprogress');
INSERT INTO tasks VALUES(138,'sst','task','assss',2,1,'2024-02-01 00:00:00','2024-02-01 00:00:00','2024-02-01 00:00:00','2024-02-01 00:00:00','todo');



INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,1);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,2);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,3);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,4);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,5);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,6);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,7);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,8);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,9);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (1,10);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,11);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,12);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,13);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,14);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,15);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,16);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,17);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,18);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,19);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (2,20);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,21);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,22);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,23);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,24);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,25);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,26);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,27);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,28);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,29);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (3,30);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,31);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,32);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,33);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,34);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,35);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,36);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,37);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,38);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,39);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (4,40);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,41);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,42);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,43);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,44);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,45);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,46);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,47);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,48);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,49);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (5,50);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,51);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,52);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,53);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,54);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,55);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,56);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,57);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (6,58);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,59);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,60);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,61);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,62);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,63);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,64);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,65);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (7,66);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,67);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,68);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,69);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,70);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,71);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,72);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,73);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (8,74);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,75);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,76);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,77);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,78);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,79);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,80);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,81);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (9,82);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (10,83);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (10,84);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (10,85);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (10,86);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (10,87);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (10,88);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,89);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,90);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,91);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,92);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,93);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,94);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,95);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,96);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,97);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (11,98);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,99);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,100);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,101);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,102);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,103);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,104);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,105);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,106);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,107);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (12,108);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,109);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,110);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,111);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,112);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,113);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,114);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,115);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,116);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,117);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (13,118);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,119);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,120);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,121);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,122);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,123);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,124);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,125);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,126);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,127);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (14,128);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,129);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,130);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,131);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,132);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,133);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,134);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,135);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,136);
INSERT INTO sprinttasks (sprintid,taskid)VALUES (15,137);


INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-01','Approved',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-02','Approved',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-03','Approved',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-04','Rejected',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-05','Approved',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-06','Approved',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES ('2024-01-08','Approved',10);
INSERT INTO timesheets(createdon,status,createdby) VALUES
('2024-01-09 ','submitted',10),
('2024-01-10 ','submitted',10),
('2024-01-11 ','inprogress',10),
('2024-01-12 ','submitted',10),
('2024-01-13 ','inprogress',10);

INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 1,1),
  ( "10:30:00", "12:00:00", 1,2),
  ( "12:00:00", "13:00:00", 1,3),
  ( "13:00:00", "14:30:00", 1,4),
  ( "14:30:00", "15:15:00", 1,5);
INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 2,7),
  ( "10:30:00", "11:30:00", 2,8),
  ( "11:30:00", "13:00:00", 2,9),
  ( "13:00:00", "14:30:00", 2,10),
  ( "14:30:00", "15:15:00", 2,51),
  ( "15:15:00", "16:45:00", 2,52);

INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 3,53),
  ( "10:30:00", "12:00:00", 3,54),
  ( "12:00:00", "13:00:00", 3,6),
  ( "13:00:00", "14:30:00", 3,55),
  ( "14:30:00", "15:15:00", 3,56);

INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 4,57),
  ( "10:30:00", "12:00:00", 4,58),
  ( "12:00:00", "13:00:00", 4,89),
  ( "13:00:00", "14:30:00", 4,90),
  ( "14:30:00", "15:15:00", 4,91);



INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 5,92),
  ( "10:30:00", "12:00:00", 5,93),
  ( "12:00:00", "13:00:00", 5,94),
  ( "13:00:00", "15:30:00", 5,95),
  ( "13:00:00", "15:30:00", 5,9);


INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 6,96),
  ( "10:30:00", "12:00:00", 6,97),
  ( "12:00:00", "13:00:00", 6,98),
  ( "13:00:00", "14:30:00", 6,97),
  ( "14:30:00", "16:00:00", 6,57),
  ( "16:00:00", "18:00:00", 6,89);

INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 7,11),
  ( "10:30:00", "11:00:00", 7,12),
  ( "12:00:00", "13:00:00", 7,13),
  ( "13:00:00", "16:30:00", 7,14),
  ( "16:30:00", "17:15:00", 7,11),
  ( "17:15:00", "18:00:00", 7,15);

INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
  ( "09:00:00", "10:30:00", 8,16),
  ( "10:30:00", "12:00:00", 8,17),
  ( "12:00:00", "13:00:00", 8,18),
  ( "13:00:00", "14:30:00", 8,19),
  ("14:30:00", "15:15:00", 8,20),
  ( "15:15:00", "16:45:00", 8,17);
INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
 ( "09:00:00", "10:30:00", 9,59),
  ( "10:30:00", "11:00:00", 9,60),
  ( "12:00:00", "13:00:00", 9,61),
  ( "13:00:00", "16:30:00", 9,62),
  ( "16:30:00", "17:15:00", 9,63),
  ( "17:15:00", "18:00:00", 9,64);
INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
 ( "09:00:00", "10:30:00", 10,65),
  ( "10:30:00", "11:00:00", 10,66),
  ( "12:00:00", "13:00:00", 10,99),
  ( "13:00:00", "16:30:00", 10,100),
  ( "16:30:00", "17:15:00", 10,101),
  ( "17:15:00", "18:00:00", 10,102);

  INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
 ( "09:00:00", "10:30:00", 11,103),
  ( "10:30:00", "11:00:00", 11,104),
  ( "12:00:00", "13:00:00", 11,105),
  ( "13:00:00", "16:30:00", 11,106),
  ( "16:30:00", "17:15:00", 11,107),
  ( "17:15:00", "18:00:00", 11,108);

    INSERT INTO timesheetentries( fromtime, totime, timesheetid,taskid)
VALUES
 ( "09:00:00", "10:30:00", 12,12),
  ( "10:30:00", "11:00:00", 12,18),
  ( "12:00:00", "13:00:00", 12,62),
  ( "13:00:00", "16:30:00", 12,65),
  ( "16:30:00", "17:15:00", 12,100),
  ( "17:15:00", "18:00:00", 12,102);
