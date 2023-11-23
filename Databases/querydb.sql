
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
INSERT INTO employees(userid,hiredate,reportingid) VALUES (16,'2022-07-16',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (17,'2023-04-23',9);
INSERT INTO employees(userid,hiredate,reportingid) VALUES (18,'2023-05-13',9);



INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2021-02-02','2024-02-02','Project Management System App',7,'NotStarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2021-02-02','2024-02-02','Krushi Product Management',8,'NotStarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2021-02-02','2022-02-02','Agri Produst Supplying App',9,'NotStarted');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2021-02-02','2024-02-02','Store Management App',7,'InProgress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2021-10-10','2025-02-02','Ticket booking Management App',8,'InProgress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HMApp','2021-10-10','2025-02-02','Hospital Management App',9,'InProgress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2021-02-02','2024-02-02','Store Management App',7,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2021-10-10','2025-02-02','Ticket booking Management App',8,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('HMApp','2021-10-10','2025-02-02','Hospital Management App',9,'Completed');

 