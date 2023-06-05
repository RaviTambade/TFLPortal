-- Active: 1685344824419@@127.0.0.1@3306@pms
DROP DATABASE PMS;
CREATE DATABASE PMS;
USE PMS;


CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                   email VARCHAR(50) UNIQUE NOT NULL,
                   password VARCHAR(50) NOT NULL);
                   
CREATE TABLE accounts(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
				 accountnumber VARCHAR(25) UNIQUE, 
                     ifsccode VARCHAR(50) ,
                     registerdate DATETIME ,
                     balance DOUBLE);
                     
CREATE TABLE employees(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                      firstname VARCHAR (50),
                      lastname VARCHAR(50),
                      birthdate DATETIME,
                      hiredate DATETIME,
                      contactnumber VARCHAR(20),
                      accountnumber VARCHAR(25) NOT NULL UNIQUE ,
                      CONSTRAINT fk_account_no1 FOREIGN KEY(accountnumber) REFERENCES accounts(accountnumber) ON UPDATE CASCADE ON DELETE CASCADE,
                      userid INT NOT NULL UNIQUE ,CONSTRAINT fk_user_id FOREIGN KEY(userid) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE); 

CREATE TABLE roles(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                   rolename varchar (50));
                   
CREATE TABLE userroles(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
		     	   userid INT NOT NULL, 
                       CONSTRAINT fk_user_id2 FOREIGN KEY(userid) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
                       roleid INT NOT NULL,
                       CONSTRAINT fk_role_id2 FOREIGN KEY(roleid) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE projects(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                     title VARCHAR(100),
                     startdate DATETIME NOT NULL,
                     enddate DATETIME NOT NULL,
                     description VARCHAR(255));
                     
CREATE TABLE projectmembers(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            projectid INT NOT NULL, 
                            CONSTRAINT fk_proid FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                            empid INT NOT NULL, 
                            CONSTRAINT fk_emp_Id4 FOREIGN KEY(empid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE );
                            
CREATE TABLE clients(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    fullname VARCHAR(50),
                    address VARCHAR(200),
                    details VARCHAR(200),
                    accountnumber VARCHAR(25) NOT NULL UNIQUE ,
                    CONSTRAINT fk_account_no2 FOREIGN KEY(accountnumber) REFERENCES accounts(accountnumber) ON UPDATE CASCADE ON DELETE CASCADE);
                    
CREATE TABLE onproject(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                      projectid INT NOT NULL, 
                      CONSTRAINT fk_projid FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                      clientid INT NOT NULL, 
                      CONSTRAINT fk_clientid FOREIGN KEY (clientid) REFERENCES clients(id)ON UPDATE CASCADE  ON DELETE CASCADE);
                      
CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  title VARCHAR(50),
                  projectid INT NOT NULL, 
                  CONSTRAINT fk_proidd FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                  description VARCHAR(200),
                  startdate DATETIME,
                  enddate DATETIME);
                  
CREATE TABLE assigned(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                     taskid INT NOT NULL, 
                     CONSTRAINT fk_taskid FOREIGN KEY (taskid) REFERENCES tasks(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                     empid INT NOT NULL, 
                     CONSTRAINT fk_empidd FOREIGN KEY (empid) REFERENCES employees(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                     roleid INT NOT NULL, 
                     CONSTRAINT fk_roleidd FOREIGN KEY (roleid) REFERENCES roles(id)ON UPDATE CASCADE  ON DELETE CASCADE);
                     
CREATE TABLE payrollCycles(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                           payrollcycleyear DATETIME,
                           payrollcyclenumber INT NOT NULL,
                           startdate DATETIME,
                           enddate  DATETIME,
                           accountnumber VARCHAR(25) NOT NULL UNIQUE ,
                           CONSTRAINT fk_account_no3 FOREIGN KEY(accountnumber) REFERENCES accounts(accountnumber) ON UPDATE CASCADE ON DELETE CASCADE,
                           depositdate DATETIME);
                           
CREATE TABLE timesheets(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,startdate DATETIME,
                        week1monday VARCHAR(10),week1tuesday VARCHAR(10),week1wednesday VARCHAR(10),week1thursday VARCHAR(10),week1friday VARCHAR(10),week1saturday VARCHAR(10), week1sunday VARCHAR(10),
                        week2monday VARCHAR(10),week2tuesday VARCHAR(10),week2wednesday VARCHAR(10),week2thursday VARCHAR(10),week2friday VARCHAR(10),week2saturday VARCHAR(10),week2sunday VARCHAR(10),
                        week3monday VARCHAR(10),week3tuesday VARCHAR(10),week3wednesday VARCHAR(10),week3thursday VARCHAR(10),week3friday VARCHAR(10),week3saturday VARCHAR(10),week3sunday VARCHAR(10),
                        week4monday VARCHAR(10),week4tuesday VARCHAR(10),week4wednesday VARCHAR(10),week4thursday VARCHAR(10),week4friday VARCHAR(10),week4saturday VARCHAR(10),week4sunday VARCHAR(10),
                        empid INT NOT NULL, CONSTRAINT fk_emp_Id2 FOREIGN KEY(empid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
                        projectid INT NOT NULL, CONSTRAINT fk_project_Id2 FOREIGN KEY(projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
                        payrollcycleid INT NOT NULL , CONSTRAINT payroll_cycle_Id3 FOREIGN KEY(payrollcycleId) REFERENCES payrollCycles(id) ON UPDATE CASCADE ON DELETE CASCADE,
                        notes VARCHAR(255));
            
INSERT INTO users(email,password)VALUES('Rushi@12345','RC@12345');
INSERT INTO users(email,password)VALUES('Akshay@12345','AK@12345');
INSERT INTO users(email,password)VALUES('Rohit@12345','RG@12345');
INSERT INTO users(email,password)VALUES('Shubham@12345','ST@12345');
INSERT INTO users(email,password)VALUES('Abhay@12345','AN@12345');
INSERT INTO users(email,password)VALUES('Sahil@12345','SM@12345');
INSERT INTO users(email,password)VALUES('Pragati@12345','PB@12345');
INSERT INTO users(email,password)VALUES('Akash@12345','Aks@12345');
INSERT INTO users(email,password)VALUES('Vedant@12345','VY@12345');
INSERT INTO users(email,password)VALUES('Rmangavle@12345','RM@12345');
INSERT INTO users(email,password)VALUES('RaviT@12345','RT@12345');
INSERT INTO users(email,password)VALUES('ShubhamN@12345','SN@12345');
INSERT INTO users(email,password)VALUES('SAM@12345','SC@12345');
INSERT INTO users(email,password)VALUES('KBhapkar@12345','KB@12345');

INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1001','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1002','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1003','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1004','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1005','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1006','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1007','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1008','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1009','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1010','MAHB0000286','2023-03-01 12:40:35',22500);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1011','UNB0000286','2023-04-15 02:45:35',2250025);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1012','BARBO0000286','2023-03-04 02-40-35',225700);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1013','MAHB000299','2022-03-16  03-40-35',24540);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1014','MAHB0000886','2022-05-01 04-50-35',454500);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1015','AXIS0000296','2021-07-01 07-40-35',2352500);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1016','UBIN0000286','2021-08-01 07-10-35',23500);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1017','AXIS0000285','2021-05-02 07-40-35',232500);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1018','MAHB0000284','2021-08-03 07-40-35',235250);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1019','UBIN0000286','2021-08-04 07-40-35',23520);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1020','UBIN0000286','2021-08-04 07-40-35',25000);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1021','UBIN0000286','2021-08-04 07-40-35',25000);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1022','UBIN0000286','2021-08-04 07-40-35',25000);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1023','UBIN0000286','2021-08-04 07-40-35',25000);
INSERT INTO accounts(accountnumber,ifsccode,registerdate,balance) VALUES( '1025','UBIN0000286','2021-08-04 07-40-35',25000);

INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','1001',1);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','1002',2);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Rohit','Gore','1998-05-20','2023-02-11','7038548507','1003',3);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Shubham','Teli','1998-05-29','2023-02-21','7038548515','1004',4);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Abhay','Navale','1999-05-19','2021-02-01','7038548525','1005',5);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Sahil','Mankar','1996-05-19','2023-05-05','7038548513','1006',6);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Pragati','Bangar','1997-05-19','2023-02-01','7038548595','1007',7);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Akash','Ajab','1995-05-29','2021-05-01','7038548516','1008',8);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Vedant','Yadav','1996-05-14','2023-02-07','7038548515','1009',9);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Rohit','Mangavale','1998-05-19','2023-02-01','7038548505','1010',10);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Ravi','Tambade','1975-05-19','1994-02-01','7038548501','1011',11);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Shubham','Navale','1994-05-19','2020-02-01','7038548502','1012',12);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid) VALUES('Samruddhi','Chavan','1996-03-15','2021-02-05','7038548504','1013',13);

INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,accountnumber,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','1014','2022-05-25');
INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,accountnumber,depositdate)VALUES('2022-04-22',12,'2022-05-15','2023-05-22','1015','2022-05-16');
INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,accountnumber,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','1016','2022-05-25');         


INSERT INTO roles(rolename)VALUES('Developer');
INSERT INTO roles(rolename)VALUES('Consultant');
INSERT INTO roles(rolename)VALUES('Tester');
INSERT INTO roles(rolename)VALUES('Manager');


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


INSERT INTO projects(title,startdate,enddate,description)VALUES('PMSAPP','2021-02-02','2021-03-03','Project Management System App');
INSERT INTO projects(title,startdate,enddate,description)VALUES('OTBMAPP','2022-05-10','2022-05-13','Online Ticket Booking management System App');
INSERT INTO projects(title,startdate,enddate,description)VALUES('IMSAPP','2021-02-02','2021-03-03','Inventry Management System App');


INSERT INTO projectmembers(projectid,empid)VALUES(1,1);
INSERT INTO projectmembers(projectid,empid)VALUES(1,2);
INSERT INTO projectmembers(projectid,empid)VALUES(1,3);
INSERT INTO projectmembers(projectid,empid)VALUES(1,4);
INSERT INTO projectmembers(projectid,empid)VALUES(1,13);
INSERT INTO projectmembers(projectid,empid)VALUES(1,11);
INSERT INTO projectmembers(projectid,empid)VALUES(2,5);
INSERT INTO projectmembers(projectid,empid)VALUES(2,6);
INSERT INTO projectmembers(projectid,empid)VALUES(2,7);
INSERT INTO projectmembers(projectid,empid)VALUES(2,8);
INSERT INTO projectmembers(projectid,empid)VALUES(2,12);
INSERT INTO projectmembers(projectid,empid)VALUES(3,1);
INSERT INTO projectmembers(projectid,empid)VALUES(3,5);
INSERT INTO projectmembers(projectid,empid)VALUES(3,7);
INSERT INTO projectmembers(projectid,empid)VALUES(3,8);
INSERT INTO projectmembers(projectid,empid)VALUES(3,10);


INSERT INTO timesheets(startdate,week1monday,week1tuesday,week1wednesday,week1thursday,week1friday,week1saturday, week1sunday,
                                week2monday,week2tuesday,week2wednesday,week2thursday,week2friday,week2saturday, week2sunday,
                                week3monday,week3tuesday,week3wednesday,week3thursday,week3friday,week3saturday, week3sunday,
                                week4monday,week4tuesday,week4wednesday,week4thursday,week4friday,week4saturday, week4sunday,
                                empid,projectid,payrollcycleid,notes)VALUES('2022-04-22',
                                     '3:04:25','5:15:11','3:17:45','5:15:23','4:05:12','3:46:45','4:18:55',
                                     '2:05:24','4:35:23','3:15:43','6:16:28','6:25:55','7:26:25','6:07:05',
                                     '6:46:27','4:16:42','5:17:47','4:15:55','7:06:19','6:55:25','2:18:55',
                                     '4:05:54','5:45:33','4:12:43','2:23:27','5:15:19','4:46:25','6:49:29',
                                      2,2,1,'remaining work in process');
INSERT INTO timesheets(startdate,week1monday,week1tuesday,week1wednesday,week1thursday,week1friday,week1saturday, week1sunday,
                                week2monday,week2tuesday,week2wednesday,week2thursday,week2friday,week2saturday, week2sunday,
                                week3monday,week3tuesday,week3wednesday,week3thursday,week3friday,week3saturday, week3sunday,
                                week4monday,week4tuesday,week4wednesday,week4thursday,week4friday,week4saturday, week4sunday,
                                empid,projectid,payrollcycleid,notes)VALUES('2022-05-19',
                                     '4:05:25','5:35:17','6:17:43','4:15:43','6:05:19','7:46:25','5:18:25',
                                     '3:05:24','4:35:23','3:15:43','6:25:28','7:55:19','4:12:25','6:07:05',
                                     '5:05:27','5:35:42','4:17:47','5:15:55','5:06:19','5:55:25','3:18:55',
                                     '1:05:54','5:45:33','6:12:43','4:55:27','6:42:19','6:17:25','4:18:29',
                                      1,1,1,'remaining work in process');



INSERT INTO clients(fullname,address,details,accountnumber)VALUES('Vishwambhar Kapare','Pune RajguruNagar','Client want to create online meeting portal for their compeny','1001');
INSERT INTO clients(fullname,address,details,accountnumber)VALUES('Rajat Pisal','Kolhapur','Client want to create online Interview Sheduling Project','1002');

INSERT INTO onproject(projectid,clientid)VALUES(1,2);

INSERT INTO tasks(title,projectid,description,startdate,enddate)VALUES('Meeting Sheduling',1,'please arrange the meeting sheduling prosess quickly','2021-02-01','2021-02-03');

INSERT INTO assigned(taskid,empid,roleid)VALUES(1,1,1);



select * from employees;
select * from users;
select * from teams ;
select * from roles;
select * from userroles;
select * from projectmembers;
select * from projects;
select * from clients;
select * from onproject;
select * from tasks;
select * from assigned;
select * from timesheets;
select * from payrollCycles;

-- 1)Finding role name of employee from roles table 
select roles.rolename from userroles inner join roles on userroles.roleid =roles.id where userroles.userid=12;

-- 2)Finding running projects between from date and to date
SELECT * FROM projects WHERE startDate BETWEEN @fromdate AND @todate;