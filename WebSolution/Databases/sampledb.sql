-- Active: 1696576841746@@127.0.0.1@3306@tflportal

-- director
INSERT INTO employees(userid,hiredate,reportingid) VALUES (1,'2013-01-01',1);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (2,'2013-11-03',1);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (3,'2013-08-11',1);
-- HR Manager
INSERT INTO employees(userid,hiredate,reportingid) VALUES (4,'2013-10-06',1);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (5,'2014-09-07',2);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (6,'2014-11-01',3);

-- project Manager
INSERT INTO employees(userid,hiredate,reportingid) VALUES (7,'2013-11-01',4);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (8,'2013-04-14',5);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (9,'2015-12-01',6);

-- Team MEMBER 

INSERT INTO employees(userid,hiredate,reportingid) VALUES (10,'2013-03-17',6);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (11,'2014-02-12',7);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (12,'2014-05-21',7);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (13,'2014-05-21',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (14,'2015-11-11',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (15,'2015-09-15',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (16,'2015-07-16',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (17,'2015-04-23',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (18,'2015-05-13',9);


INSERT INTO employees(userid,hiredate,reportingid) VALUES (19,'2014-05-21',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (20,'2015-11-11',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (21,'2015-09-15',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (22,'2015-07-16',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (23,'2015-04-23',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (24,'2015-05-13',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (25,'2014-05-21',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (26,'2015-11-11',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (27,'2015-09-15',8);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (28,'2015-07-16',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (29,'2015-04-23',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (30,'2015-05-13',9);


Insert Into rolebasedleaves(roleid,sick,casual,paid,unpaid,financialyear) values(1,10,5,12,15,2023);
Insert Into rolebasedleaves(roleid,sick,casual,paid,unpaid,financialyear) values(2,9,5,12,10,2023);
Insert Into rolebasedleaves(roleid,sick,casual,paid,unpaid,financialyear) values(3,8,10,10,15,2023);
Insert Into rolebasedleaves(roleid,sick,casual,paid,unpaid,financialyear) values(4,7,5,11,10,2023);




Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(11,'2023-04-01','2023-04-03','2023-04-05',"notsanctioned",2023,"casual");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-01','2023-04-03','2023-04-05',"sanctioned",2023,"casual");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(13,'2023-03-01','2023-03-03','2023-03-20',"applied",2023,"casual");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(14,'2023-04-01','2023-04-10','2023-04-15',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(11,'2023-04-30','2023-04-03','2023-05-05',"notsanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-01','2023-04-15','2023-05-05',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(13,'2023-02-01','2023-03-03','2023-05-20',"applied",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(14,'2023-04-01','2023-04-10','2023-02-15',"sanctioned",2023,"casual");


Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-01','2023-04-20','2023-04-21',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-01-20','2023-01-22','2023-01-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-01-20','2023-01-26','2023-01-26',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-01-20','2023-01-26','2023-01-26',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-01-15','2023-02-25','2023-02-25',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-02-20','2023-02-22','2023-02-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-02-20','2023-02-26','2023-02-26',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-02-20','2023-02-26','2023-02-26',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-02-15','2023-02-25','2023-02-25',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-03-01','2023-03-22','2023-03-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-03-05','2023-03-26','2023-03-26',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-03-10','2023-03-26','2023-03-26',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-03-12','2023-03-25','2023-03-25',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-01','2023-04-22','2023-04-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-05','2023-04-26','2023-04-26',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-10','2023-04-26','2023-04-26',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-04-12','2023-04-25','2023-04-25',"sanctioned",2023,"casual");


Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-05-01','2023-05-22','2023-05-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-05-05','2023-05-26','2023-05-28',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-05-10','2023-05-26','2023-05-27',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-05-12','2023-05-15','2023-05-18',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-06-01','2023-06-22','2023-06-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-06-05','2023-06-26','2023-06-28',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-06-10','2023-06-26','2023-06-27',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-06-12','2023-06-15','2023-06-18',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-07-01','2023-07-22','2023-07-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-07-05','2023-07-26','2023-07-28',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-08-10','2023-08-26','2023-08-27',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-08-12','2023-08-15','2023-08-18',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-09-01','2023-09-22','2023-09-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-09-05','2023-09-26','2023-09-28',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-10-10','2023-10-26','2023-10-27',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-10-12','2023-10-15','2023-10-18',"sanctioned",2023,"casual");

Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-11-01','2023-11-22','2023-11-22',"sanctioned",2023,"unpaid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-11-05','2023-11-26','2023-11-28',"sanctioned",2023,"sick");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-12-12','2023-12-26','2023-12-27',"sanctioned",2023,"paid");
Insert Into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(12,'2023-12-12','2023-12-15','2023-12-18',"sanctioned",2023,"casual");



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
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(10,19000,3200,600,600,600);

Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(11,30000,1000,400,400,330);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(12,45000,5000,500,500,350);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(13,20000,6000,600,500,400);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(14,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(15,45000,5000,500,500,350);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(16,20000,6000,600,500,400);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(17,19000,3200,600,600,600);
Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(18,19000,3200,600,600,600);



Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(11,'2024-01-11',24,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(12,'2024-01-11',25,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(13,'2024-01-11',24,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(14,'2024-01-11',25,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(15,'2024-01-11',24,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(16,'2024-01-11',25,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(17,'2024-01-11',24,600,600,600,20000);
Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(18,'2024-01-11',25,600,600,600,20000);





INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('EKrushi','2023-11-03','2024-02-02','Krushi Product Management',1,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('PMSAPP','2023-11-02','2024-02-02','Project Management System App',7,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('EAgroServices','2023-11-13','2025-02-02','Farmers Goods Management',9,'notstarted');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('Inventory','2017-02-02','2024-02-02','Store Management App',7,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('OMTB','2017-10-10','2025-02-02','Ticket booking Management App',8,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('HMApp','2017-10-10','2025-02-02','Hospital Management App',9,'inprogress');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('TMS','2016-02-02','2023-02-02','Travel Management System',7,'completed');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('HRM','2016-10-10','2023-02-02','Human Resource Management',8,'completed');
INSERT INTO projects(title,startdate,enddate,description,managerid,status)VALUES('Other','2000-12-19 11:23:17','2099-02-02 ','Other',1,'inprogress');


INSERT INTO projectmembership(projectrole,projectassigndate,projectreleasedate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Manager','2017-10-10','2017-10-10','no',6,9);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Manager','2016-10-10','yes',1,8);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Manager','2016-02-02','yes',3,9);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Manager','2017-10-10','yes',4,7);
INSERT INTO projectmembership(projectrole,projectassigndate,projectreleasedate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Manager','2016-10-10','2017-10-10','no',9,9);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2023-11-02','yes',1,10);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2023-11-03','yes',3,10);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2023-11-02','yes',4,10);

INSERT INTO projectmembership(projectrole,projectassigndate,projectreleasedate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2023-11-13','2017-10-10','no',5,12);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Tester','2017-02-02','yes',5,13);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',5,14);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',5,15);
INSERT INTO projectmembership(projectrole,projectassigndate,projectreleasedate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2016-02-02','2017-10-10','no',7,16);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',8,15);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',9,15);

INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2017-10-10','yes',1,15);
INSERT INTO projectmembership(projectrole,projectassigndate,projectreleasedate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2016-02-02','2017-10-10','no',2,15);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',3,15);
INSERT INTO projectmembership(projectrole,projectassigndate,currentprojectworkingstatus,projectid,employeeid) VALUES ('Developer','2016-10-10','yes',4,15);

INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 1',"2024-01-01","2024-01-07","Resolve critical and high-priority bugs",4);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 2',"2024-01-08","2024-01-14","Enhance system performance by optimizing database queries",4);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 3',"2024-01-15","2024-01-21","Refactor codebase",4);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 4',"2024-01-22","2024-01-28","Improve project documentation",4);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('inventory sprint 5',"2024-01-29","2024-02-04","Integration Testing",4);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 1',"2024-01-01","2024-01-07","Resolve critical and high-priority bugs",1);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 2',"2024-01-08","2024-01-14","Enhance system performance by optimizing database queries",1);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 3',"2024-01-15","2024-01-21","Refactor codebase",1);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 4',"2024-01-22","2024-01-28","Improve project documentation",1);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('ekrushi sprint 5',"2024-01-29","2024-02-04","Integration Testing",1);

INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 1',"2024-01-01","2024-01-07","Resolve critical and high-priority bugs",3);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 2',"2024-01-08","2024-01-14","Enhance system performance by optimizing database queries",3);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 3',"2024-01-15","2024-01-21","Refactor codebase",3);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 4',"2024-01-22","2024-01-28","Improve project documentation",3);
INSERT INTO sprintmaster(title,startdate,enddate,goal,projectid) VALUES ('eagro sprint 5',"2024-01-29","2024-02-04","Integration Testing",3);



-- Inventory Management

-- INSERT INTO employeework (projectworktype,assignedby,assignedto,projectid,sprintid)
-- VALUES ('userstory',1,1,1,0);

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a  Store Worker, I want to be able to reset my password in case I forget it.','reset password',4,1, '2024-01-06', '2024-01-06', '2024-01-06', 10, 7, 'inprogress','2024-01-06');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Worker, I want to view a graph that shows my daily, weekly, and monthly delivered orders, so that i can monitor my performance','orders chart',4,1,  '2023-12-05', '2023-12-06', '2023-12-10',  12, 7,  'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory', 'As a Store Worker, I want to mark orders as delivered when I successfully hand over the materials to the manufacturing supervisors so that i can ensure order is delivered.','change order status',5,1,  '2023-12-05', '2023-12-06', '2023-12-10', 13, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory', 'As a Store Worker, I want to access information about the supervisors who will receive the deliveries, including their contact details so that I can efficiently communicate regarding the delivery process and resolve any potential issues.','communication with supervisors',5,1,  '2023-12-05', '2023-12-06', '2023-12-10', 14, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Worker, I want to receive notifications for new task that require pickup and delivery, so that i can stay updated on my tasks.','notifiaction receiving pickup and delivery', 4,1,  '2024-01-04', '2024-01-04', '2024-01-04', 3, 7, 'inprogress','2024-01-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Worker, I want to access order details including the order-id, and pickup/delivery locations so that i can prepare for the tasks.','order details',4,1,  '2023-12-05', '2023-12-06', '2023-12-10', 15, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Worker, I want to mark orders as picked up when I collect the materials from the inventory so that i can change status of order.','change status of order',5,1,'2023-12-28', '2023-12-28', '2023-12-28',  15, 7,'inprogress','2023-12-28');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisor Incharge, I want to view an overview of employee information and departments so that I can efficiently manage teams and make informed decisions regarding staffing and resource allocation.','employee information',4,1,  '2023-12-10','2023-12-06', '2023-12-10',  1, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to view request reports graphs so that i can make data-driven decisions and analyze trends.','reports generation',4,1,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7, 'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to add new supervior to the system so that i can seamlessly expand our team, assign roles and responsibilities.', 'adding employee details',4,1,  '2023-12-29', '2023-12-29', '2023-12-29',  15, 7, 'inprogress','2023-12-29');


INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to update  information of supervisors  so that I can ensure that the records are accurate and up-to-date.','updating employee details',4,2,  '2023-12-10','2023-12-05', '2023-12-06',  10, 7, 'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to switch the departments of employees when they move to different teams so that I can maintain efficient workflow across teams.','switch department of employee',4,2,  '2023-12-05', '2023-12-06', '2023-12-10', 10, 7, 'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want request reports of each supervisor,  so that I can assess individual and team performance, track trends in order management.','reports generation for supervisor',4,2,   '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to view a graph showing the total number of requests placed by each supervisor so that I can assess their productivity levels.','request chart',4,2,  '2023-12-30','2023-12-30', '2023-12-30',  15, 7, 'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to view graphical representations of weekly, monthly, and yearly so that i can analise request trends.','weekly,monthly,yearly charts',4,2,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Supervisors Incharge, I want to see a graph that displays the number of cancelled requests for each supervisor so that I can identify potential issues in order processing.', 'cancelled request chart',4,2,  '2023-12-05', '2023-12-06', '2023-12-10', 10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a  Supervisors Incharge, I want to be able to reset my password in case I forget it.','reset password',4,2,  '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to view current inventory level so that i can effectively manage stock availability.', 'inventory view',4,2, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to view departments and assigned store manager so that I can effectively oversee the organization','Assign store manager',4,2,'2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to add new materials to the inventory along with their details so that i can keep inventory updated.','Add items to inventory',4,2,  '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to update material information such, so that i can keep the inventory data up to date.','update material info',4,3, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a Store Incharge, I want to remove materials that are no longer needed from the inventory, so that i can maintain clean and relevant material list.','remove materials',4,3,   '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store Incharge, I want to receive notifications when stock levels materials fall below a defined limit so that i can add material before it wents out of stock.','notification-material stock ',4,3,  '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to create new categories of materials and add materials to these categories,so that i can maintain organized inventory.','add categories for materials',4,3,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to add new store managers and store workers to the system, so that i can seamlessly expand our team, assign roles and responsibilities.','add store manager and workers',4,3,   '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to edit the personal information of store managers and store workers so that i can maintain accurate records.','update personal info',4,3,  '2023-12-10', '2023-12-05', '2023-12-06', 10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to update information of store manager and store worker so that I can ensure that the records are accurate and up-to-date.','update store manager and workers',4,3,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Store Incharge, I want to be able to reset my password in case I forget it.','reset password',4,3, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store manager, I want to view pending orders so that i can fulfill orders efficiently.','view pending orders',4,3, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a store manager, I want to view current inventory level so that i can effectively manage stock availability.','inventory stock avilability',4,3, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a store manager, I want to view detailed information about each material,  so that i can see all material details.','material details',4,4,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a store manager, I want to view the availability of materials when approving orders so that i can approve material as per the availability.','avilability of material',4,4, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store manager, I want to view the department and supervisors names associated with request when, so that i can identify the source of the request.','department-supervisor list',4,4, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store manager, I want to sort and filter order requests based on their status (pending, cancelled, completed) so that I can manage them efficiently.',' sorting of requestes',4,4,  '2023-12-05', '2023-12-06', '2023-12-10', 10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store manager, I want to mark materials as "out of stock" when they are no longer available, so that i can provide material accordingly.','outof stock ',4,4, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store manager, I want to choose a specific time frame (monthly, yearly, weekly) for the graph, so that I can focus on the relevant data.','chart different time intervals',4,4, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7, 'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a store manager, I want to be able to reset my password in case I forget it.','reset password',4,4,  '2024-01-03', '2024-01-03', '2024-01-03', 3, 7,'inprogress','2024-01-03');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a supervisor, I want to search specific materials from the inventory so that I can request quickly.','search materials',4,4, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a  supervisor, I want to sort materials by categories so that I can easily find and request materials.','sort materials',4,4,'2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to be able to save items to my wishlist so that I can keep track of materials that I am interested in and request multiple materials at one time.','wishlist',4,4,  '2023-12-05', '2023-12-06', '2023-12-10', 10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a supervisor, I want to edit or remove materials from the tray so that I can efficiently manage and refine the selection of materials.','update materials',4,5, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a supervisor, I want to cancel request that I have placed, so that I can cancel request if i ordered incorrectly.','cancel order request',4,5, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a supervisor, I want to see status of my request (processing, shipped, delivered) so that I can track my requests.','view status of request',4,5,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a supervisor, I want to view the history and details of my past requests so that I can reference them for future planning.','request history',4,5, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a supervisor, I want to easily reorder previously ordered materials so that I can save time on repetitive orders.','reordering same orders',4,5, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a supervisor, I want to access a dashboard that displays graphical representations of my monthly, yearly, and weekly material requests, so that I can visualize trends and patterns.','dashboard for data representation',4,5, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a supervisor, I want to choose a specific time frame (monthly, yearly, weekly) for the graph, so that I can focus on the relevant data.','differrent timeframe charts',4,5, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a  supervisor, I want the option to download the graph as a file for reporting purposes, so that I can share the information with others.','downloading files,charts',4,5, '2023-12-10','2023-12-05', '2023-12-06',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a supervisor, I want verification that an order has been delivered by a store worker, so that I can confirm on materials received.','verification on deivery',4,5, '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a supervisor, I want to be able to reset my password in case I forget it.','reset password',4,5,  '2023-12-05', '2023-12-06', '2023-12-10',  10, 7,'inprogress','2023-12-04');




-- E-Krushi
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I need to authenticate myself so that I can see my account details.', 'Login',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-23');


INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to submit feedback so that the shop owner can consider my opinion related to krushi products and consulting.
', 'feedback form',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-05');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to ask queries related to farming so that I can get feedback on issues.', 'quereis related farming',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-11');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to create an account and save my payment information so that I can have a personalized shopping experience.
', 'payment info saving',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-01');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to view my order history so that I can easily track my purchases.', 'view order history',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-01');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to view product details, including images, descriptions, prices, so that I can make informed purchasing decisions.', 'view product details',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-01');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to see the status of my orders (processing, shipped, delivered) so that I am aware of their progress.', 'order status tracking',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-02');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to search for krushi products by category so that I can find krushi products easily.
', 'search products',1,6, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-03');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to view a dashboard that displays graphical representations of my monthly, yearly, and weekly orders so that I can check my order information.', 'dashboard charts',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8, 'inprogress','2023-08-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to add products to my cart so that I can continue shopping and complete the checkout process later.', 'add to cart',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-01');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to update product quantities in my cart so that I can order the accurate quantity.', 'update cart ',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to remove krushi products from my cart so that I can manage my cart list.
', 'remove items from cart',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-11');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to purchase the required amount of products so that I can save time.
', 'incresing quantity of produt in cart',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-08-13');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to view different answers to a particular question in my questions so that I can get many solutions.', 'multiple answers to one question',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-13');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','As a farmer, I want to remove questions from my list so that I can manage my question list.
', 'remove question',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-11');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to view my bill so that I can make a payment.', 'view bills',1,7, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-15');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a farmer, I want to buy agri equipment so that I can engage in precision farming.', 'agri equipment listing',1,8, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-08');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task',' As a signed-in user, I want to view my profile so that I can check my personal information.
', 'profile',1,8, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-07-12');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('task','  As a shop owner, I want to see a dashboard so that I can evaluate consultant performance.
', 'shop owner dashboard',1,8, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-13');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a shop owner, I want to manage my krushi product inventory and update product details so that I can effectively manage my online krushi store.', 'shop-update product',1,8, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a shop owner, I want to track sales and revenue so that I can make data-driven decisions about my business.
', 'sales-revenue chart',1,8, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-02');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a shop owner, I want to add new sellers so that I can manage my application.', 'add new sellers',1,8, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-11-13');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a shop owner, I want to create new categories of products and assign products to these categories so that I can maintain new krushi products.', 'add categories',1,8, '2023-10-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-30');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a shop owner, I want to check orders of farmers so that I can deliver them within time.
', 'order checking',1,8, '2023-10-24', '2023-10-25', '2023-12-02', 10, 8,'inprogress','2023-09-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a shop owner, I want to be able to see farmer reviews for products so that I can make more informed purchasing decisions.
', 'review product',1,9, '2023-10-24', '2023-10-25', '2023-11-02', 10, 8,'inprogress','2023-08-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a shop owner, I want to add new agri product categories so that I can manage my application.
', 'add product',1,9, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-08-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Subject Matter Expert, I want to see queries related to farming so that I can solve them anytime and anywhere.
', 'view  questions',1,9, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Subject Matter Expert, I want to view graphical representations of my monthly, yearly, and weekly question answers information so that it helps me check my performance.
', 'charts of different time-interval',1,9, '2023-11-04', '2023-11-10', '2023-11-22', 10, 8,'inprogress','2023-10-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a Subject Matter Expert, I want to view a dashboard that displays graphical representations of my monthly, yearly, and weekly answers so that I can check my answers information.
', 'SME-dashboard',1,9, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a registered user, I want to be able to buy listed products so that I can use the products I buy.
', 'buying products',1,9, '2023-11-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-02');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a registered user, I want to update my profile information so that it can be accurate and up to date.
', 'update profile',1,9, '2023-10-24', '2023-11-01', '2023-11-25', 10, 8,'inprogress','2023-08-11');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to be securely enter my payment information and complete my purchase so that I can buy the products I want.', 'secure payment',1,9, '2023-09-24', '2023-10-25', '2023-11-02', 10, 8,'inprogress','2023-08-23');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to be able to login to my account so that I can access my saved information.
', 'login',1,10, '2023-10-24', '2023-11-25', '2023-12-05', 10, 8,'inprogress','2023-10-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a registered user, I want to update my profile information so that it can be accurate and up to date.
', 'update profile',1,10, '2023-10-24', '2023-10-25', '2023-12-02', 10, 8,'inprogress','2023-10-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to securely enter my payment information and complete my purchase so that I can buy the products I want.', 'securely doing payment',1,10, '2023-10-24', '2023-10-25', '2023-12-02', 10, 8,'inprogress','2023-09-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to store my credit card information in the app so I can make my next purchases fast.', 'storing credit card info',1,10, '2023-10-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-09-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a visitor, I want to register on the website so that I can browse and buy listed products from the krushi application.
', 'visitor access',1,10, '2023-10-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a user, I want to Delete account from platform .', 'Delete Account',1,10, '2023-10-24', '2023-11-25', '2023-12-02', 10, 8,'inprogress','2023-10-03');


-- E-AGRO

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a new user, I want to be able to create an account by providing my contactnumber and password, so that I can access the applications features.', 'create account',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 'inprogress','2023-11-23');
    
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a  user ,I want to add new account of the application by multiple roles like transporter,farmer,collection so that multiple corporates can easily add in the application.','multiple roles same account',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a new user, I want to receive a verification email with a link to confirm my email address, ensuring the security of my account.','verifiaction email',3,11, '2024-01-03', '2024-01-03', '2024-01-03', 3, 9,'inprogress','2024-01-03');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a new user, I want to receive clear error messages if I enter invalid information during the registration process, so that I can correct my mistakes','error messsage while login',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to be able to log in to my account using my mobile number and password, so that I can access my personalized settings and data.','login activity',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want the option to reset my password if I forget it, by receiving a password reset link via email or contactnumber.','reset password',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 'inprogress','2023-11-23');

INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user, I want to see appropriate error messages if I enter incorrect login credentials, guiding me to provide accurate information.','error message while login',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a registered user,As a registered user, I want the system to remember my login credentials, so that I dont have to log in again every time I visit the application.','remember login credentials',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a signed-in user, I want to have the option to update my profile details such as my name, contact information,and other relevant information. This will help me keep my profile information accurate and up-to-date.','update profile',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a signed-in user, I want to be able to update my profile picture by selecting an image from my device or capturing a new photo using my devices camera. This will allow me to personalize my account and have a recognizable image associated with my profile across the platform.','update profile image',3,11, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a user ,I want to add or update corporate details if I am collection manager,merchant,transporter so that they can easily mentain the corporates details','add corporate details',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a collection manager, I want to be able to add new collections gathered at the collection center so that I can accurately record   for further processing .','add new collection',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a collection manager, I want to review and verify the added collections so that I can ensure that the quality standards are met before allowing the collections to proceed to the shipment phase.','collecction verification',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a collection manager, I want the ability to edit details of collected collections so that I can make necessary corrections or updates in case of inaccuracies, ensuring that our data remains precise.','updating collection',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a collection manager, I want the option to remove collected collections from the system if there are issues with them, maintaining accurate records and data integrity.','remove collection',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a collection manager, once Ive verified a collection for Grade and Weight, I want it to automatically proceed to the shipment phase so that the validated collections can be dispatched in shipment phase for delivery, optimizing efficiency.','collection shipment',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a collection manager, when a verified collection is ready for shipment, I want the system to check if a vehicle is available. If not, I want the system to allow me to create a new shipment so that our collections can be transported in a timely manner.','create shipment',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a collection manager, I want to ensure that the collections added to shipments are listed in the shipments record so that I can have a clear overview of what is being transported, aiding in accurate monitoring and coordination.','shipment history',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a collection manager, I want the ability to sort and filter collections based on different properties such as the farmers name, crop type, container used, and date collected so that I can organize data effectively and gain insights for decision-making.','collections filtering',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a collection manager, I want to access a history of all collections for reference so that I can review past activities, identify trends, and make informed decisions based on historical data.','collecction history',3,12,'2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a collection manager, I want to generate charts and reports based on specific time frames (yearly, quarterly, monthly, weekly) so that I can visualize collection patterns and trends during different periods, facilitating data-driven decisions.','charts-different time interval',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to be able to view a list of shipments sent from various collection centers so that I can track the movement of goods efficiently and ensure timely deliveries.','shipment tracking',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 4,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to have the ability to remove a collection from a shipment if its unacceptable or contains incorrect information. So that it will help me maintain the accuracy and quality of the shipments I manage.','removing collection from shipment',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want the capability to change the status of a shipment (e.g.,inprogress, delivered) to keep all stakeholders informed about the progress. So that it will improve transparency and communication throughout the supply chain.','update status of shipment',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a merchant, I want to categorize delivered shipments into "paid delivered" and "unpaid delivered" to easily distinguish between completed orders that have been paid for and those that still require payment processing. So that this classification will help me in financial tracking.','categorize shipment',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to access a record of all past collections, so that I can review historical data, track trends, and make informed decisions about inventory, pricing, and sourcing strategies.','collection history for merchant',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a merchant, I want the ability to set and adjust collection rates for different , so that it will empower me to manage pricing flexibly based on market conditions.','update collection rates',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to initiate payments to various parties using account-to-account transfers or UPI ,so that it will increse the efficiency of financial transactions.','payment transfer', 3 ,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to view my bank account statement within the platform, providing a clear overview of financial transactions related to my business operations,so that it will help me monitor my cash flow and financial health.','bank account statement',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to search and filter my bank account statement based on criteria like account numbers, transaction dates, or transaction types. so that it will help me quickly locate and analyze specific transactions.','filtering bank account statement',3,13, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to access a  payment history for each transporter, collection center, and farmer, so that it  will help me maintain accurate financial records and foster transparent business relationships.','payment history for each individual',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9, 'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory',' As a merchant, I want to generate business reports based on specific time frames (yearly, quarterly, monthly, weekly) , so that it  will  enable me to identify trends, patterns, and opportunities for improvement in my operations.','buissness reports generation',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want the ability to make payments to farmers and collection centers for the products they provide , so that it  will ensure that all stakeholders are compensated fairly and on time.','payment processing',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a merchant, I want to search and filter collection invoices to quickly locate specific ones , so that it  will enhance my efficiency in managing invoices and payments.','filtering invoices',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a transporter ,I want to see my already added vehicles to system, so that I can efficiently manage and track the available vehicles.','vehicle list',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a transporter,I want to add new vehicle to my business,so that I can increase my business revenue.','add vehicle',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a transporter,I want to see my recent shipments of each vehicle,so that I can track there performance.','transporter-shipment list',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a transporter, I want to view shipment contents so that I can ensure proper handling and delivery.',' view contents of shipment',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to the dashboard should display an overview of recent collections and their status so that farmer can updated with his recent collection.','farmer-collections',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to view  revenue charts so that I can analyze financial activities.','farmer revenue chart',3,14, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want the dashboard should display the average rates of goods in the market for the current day so that farmer can see the current rates of crops.','rates of goods',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to see my history of collection list  so that I can make buissness decison based on it ','farmer collection list',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to  the ability to view detailed information about each collection so that farmer can access the details of each collection.','farmer collection details',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to filtering and searching for collection records so that I can find specific collections.','farmer collection filtering',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to send notifications to farmers about collection status updates, verifications, and deliveries so that the farmer is informed with his collection status.','farmer notifications',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to view of  the charts to display on the dashboard  so that I can analyze my activity.','farmer dashboard charts ',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to view list of verifiedgoodscollections  so that I can see the quality and quantity of goods.','farmer verified collection list',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to view the charges details of a collection so that I can analyze how many charges are applied.','farmer charges overview',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');
INSERT INTO employeework (projectworktype,description, title, projectid,sprintid,assigneddate, startdate, duedate, assignedto, assignedby, status,createddate)
VALUES ('userstory','As a farmer, I want to  view a list of payment details so that I can see payments of goodscollection.','farmer payments history',3,15, '2023-11-23', '2023-11-24', '2023-12-01', 10, 9,'inprogress','2023-11-23');


INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-01','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-02','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-03','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-04','Rejected',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-05','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-06','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES ('2024-01-08','Approved',10);
INSERT INTO timesheets(timesheetdate,status,employeeid) VALUES
('2024-01-09 ','submitted',10),
('2024-01-10 ','submitted',10),
('2024-01-11 ','inprogress',10),
('2024-01-12 ','submitted',10),
('2024-01-13 ','inprogress',10);

INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 1,1),
  ( "10:30:00", "12:00:00", 1,2),
  ( "12:00:00", "13:00:00", 1,3),
  ( "13:00:00", "14:30:00", 1,4),
  ( "14:30:00", "15:15:00", 1,5);
INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 2,7),
  ( "10:30:00", "11:30:00", 2,8),
  ( "11:30:00", "13:00:00", 2,9),
  ( "13:00:00", "14:30:00", 2,10),
  ( "14:30:00", "15:15:00", 2,51),
  ( "15:15:00", "16:45:00", 2,52);

INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 3,53),
  ( "10:30:00", "12:00:00", 3,54),
  ( "12:00:00", "13:00:00", 3,6),
  ( "13:00:00", "14:30:00", 3,55),
  ( "14:30:00", "15:15:00", 3,56);

INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 4,57),
  ( "10:30:00", "12:00:00", 4,58),
  ( "12:00:00", "13:00:00", 4,89),
  ( "13:00:00", "14:30:00", 4,90),
  ( "14:30:00", "15:15:00", 4,91);



INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 5,92),
  ( "10:30:00", "12:00:00", 5,93),
  ( "12:00:00", "13:00:00", 5,94),
  ( "13:00:00", "15:30:00", 5,95),
  ( "13:00:00", "15:30:00", 5,9);


INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 6,96),
  ( "10:30:00", "12:00:00", 6,97),
  ( "12:00:00", "13:00:00", 6,98),
  ( "13:00:00", "14:30:00", 6,97),
  ( "14:30:00", "16:00:00", 6,57),
  ( "16:00:00", "18:00:00", 6,89);

INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 7,11),
  ( "10:30:00", "11:00:00", 7,12),
  ( "12:00:00", "13:00:00", 7,13),
  ( "13:00:00", "16:30:00", 7,14),
  ( "16:30:00", "17:15:00", 7,11),
  ( "17:15:00", "18:00:00", 7,15);

INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
  ( "09:00:00", "10:30:00", 8,16),
  ( "10:30:00", "12:00:00", 8,17),
  ( "12:00:00", "13:00:00", 8,18),
  ( "13:00:00", "14:30:00", 8,19),
  ("14:30:00", "15:15:00", 8,20),
  ( "15:15:00", "16:45:00", 8,17);
INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
 ( "09:00:00", "10:30:00", 9,59),
  ( "10:30:00", "11:00:00", 9,60),
  ( "12:00:00", "13:00:00", 9,61),
  ( "13:00:00", "16:30:00", 9,62),
  ( "16:30:00", "17:15:00", 9,63),
  ( "17:15:00", "18:00:00", 9,64);
INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
 ( "09:00:00", "10:30:00", 10,65),
  ( "10:30:00", "11:00:00", 10,66),
  ( "12:00:00", "13:00:00", 10,99),
  ( "13:00:00", "16:30:00", 10,100),
  ( "16:30:00", "17:15:00", 10,101),
  ( "17:15:00", "18:00:00", 10,102);

  INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
 ( "09:00:00", "10:30:00", 11,103),
  ( "10:30:00", "11:00:00", 11,104),
  ( "12:00:00", "13:00:00", 11,105),
  ( "13:00:00", "16:30:00", 11,106),
  ( "16:30:00", "17:15:00", 11,107),
  ( "17:15:00", "18:00:00", 11,108);

    INSERT INTO timesheetdetails( fromtime, totime, timesheetid,employeeworkid)
VALUES
 ( "09:00:00", "10:30:00", 12,12),
  ( "10:30:00", "11:00:00", 12,18),
  ( "12:00:00", "13:00:00", 12,62),
  ( "13:00:00", "16:30:00", 12,65),
  ( "16:30:00", "17:15:00", 12,100),
  ( "17:15:00", "18:00:00", 12,102);