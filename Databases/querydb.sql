
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

INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-22 00:00:00','2023-07-29 00:00:00','2023-07-12 00:00:00',10,7,1);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-11-23 00:00:00','2023-07-29 00:00:00','2023-07-12 00:00:00',11,8,2);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-24 00:00:00','2023-07-22 00:00:00','2023-07-12 00:00:00',12,9,4);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-06-25 00:00:00','2023-07-21 00:00:00','2023-07-12 00:00:00',13,7,5);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-08-26 00:00:00','2023-07-24 00:00:00','2023-07-12 00:00:00',14,9,8);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-27 00:00:00','2023-07-23 00:00:00','2023-07-12 00:00:00',15,7,3);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-22 00:00:00','2023-07-27 00:00:00','2023-07-12 00:00:00',16,8,6);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-28 00:00:00','2023-07-28 00:00:00','2023-07-12 00:00:00',17,9,7);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-29 00:00:00','2023-07-29 00:00:00','2023-07-12 00:00:00',18,7,8);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-30 00:00:00','2023-07-29 00:00:00','2023-07-12 00:00:00',15,8,9);
INSERT INTO tasks (title, description,assigneddate,startdate,duedate,assignedto,assignedby,projectid) VALUES('task1','description1','2023-07-22 00:00:00','2023-07-29 00:00:00','2023-07-12 00:00:00',14,9,10);






VALUES
(1, 'Pending', '2023-07-21', '2023-07-21 00:00:00', '2023-07-21 01:00:00', 201),
(1, 'In-Progress', '2023-07-22', '2023-07-22 00:00:00', '2023-07-22 01:00:00', 202),
(1, 'Completed', '2023-07-23', '2023-07-23 00:00:00', '2023-07-23 01:00:00', 203),
(1, 'Pending', '2023-07-24', '2023-07-24 00:00:00', '2023-07-24 01:00:00', 204),
(1, 'In-Progress', '2023-07-25', '2023-07-25 00:00:00', '2023-07-25 01:00:00', 205),
(1, 'Completed', '2023-07-26', '2023-07-26 00:00:00', '2023-07-26 01:00:00', 206),
(1, 'Pending', '2023-07-27', '2023-07-27 00:00:00', '2023-07-27 01:00:00', 207),
(1, 'In-Progress', '2023-07-28', '2023-07-28 00:00:00', '2023-07-28 01:00:00', 208),
(1, 'Completed', '2023-07-29', '2023-07-29 00:00:00', '2023-07-29 01:00:00', 209),

 CREATE TABLE
        tasks(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(50),
            description TEXT,
            assigneddate DATETIME,
            startdate DATETIME,
            duedate DATETIME,
            assignedto INT NOT NULL, 10-18
            CONSTRAINT fk_taskallocations_employees FOREIGN KEY (assignedto) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
            assignedby INT,7,8,9
            CONSTRAINT fk_tasks_members FOREIGN KEY (assignedby) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
            projectid INT NOT NULL,
            CONSTRAINT fk_tasks_projects FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            status ENUM (     
                'NotStarted',
                'InProgress',
                'Completed') DEFAULT 'NotStarted'
           
          
        );