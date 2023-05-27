DROP DATABASE PMS;
CREATE DATABASE PMS;
USE PMS;


CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL);
CREATE TABLE accounts(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,accountNumber VARCHAR(25) UNIQUE, ifscCode VARCHAR(50) ,registerDate DATETIME ,balance DOUBLE);
CREATE TABLE employees(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR (50),lastName VARCHAR(50),birthDate DATETIME,hireDate DATETIME,contactNumber VARCHAR(20),accountNumber VARCHAR(25) NOT NULL UNIQUE ,CONSTRAINT fk_account_no1 FOREIGN KEY(accountNumber) REFERENCES accounts(accountNumber) ON UPDATE CASCADE ON DELETE CASCADE,userId INT NOT NULL UNIQUE ,CONSTRAINT fk_user_id FOREIGN KEY(userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE); 
CREATE TABLE teams(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, teamName VARCHAR (50)UNIQUE);
CREATE TABLE roles(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,roleName varchar (50));

CREATE TABLE userRoles(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
					   userId INT NOT NULL, 
                       CONSTRAINT fk_user_id2 FOREIGN KEY(userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
                       roleId INT NOT NULL,
                       CONSTRAINT fk_role_id2 FOREIGN KEY(roleId) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE teamMembers(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, teamId INT NOT NULL, CONSTRAINT fk_teamid FOREIGN KEY (teamId) REFERENCES teams (id)ON UPDATE CASCADE  ON DELETE CASCADE ,roleId INT NOT NULL, CONSTRAINT fk_roleid FOREIGN KEY (roleId) REFERENCES roles(id)ON UPDATE CASCADE  ON DELETE CASCADE,empId INT NOT NULL, CONSTRAINT fk_emp_Id4 FOREIGN KEY(empId) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE);
CREATE TABLE projects(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,projName VARCHAR(100),startDate DATETIME NOT NULL,endDate DATETIME NOT NULL,projectDescription VARCHAR(255),teamId INT NOT NULL, CONSTRAINT fk_teamId1 FOREIGN KEY (teamId) REFERENCES teams(id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE projectManagers(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,projectId INT NOT NULL, CONSTRAINT fk_proid FOREIGN KEY (projectId) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,userId INT NOT NULL, CONSTRAINT fk_userid FOREIGN KEY (userId) REFERENCES users(id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE clients(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50),address VARCHAR(200),details VARCHAR(200),accountNumber VARCHAR(25) NOT NULL UNIQUE ,CONSTRAINT fk_account_no2 FOREIGN KEY(accountNumber) REFERENCES accounts(accountNumber) ON UPDATE CASCADE ON DELETE CASCADE);
CREATE TABLE onProjects(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,projectId INT NOT NULL, CONSTRAINT fk_projid FOREIGN KEY (projectId) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,clientId INT NOT NULL, CONSTRAINT fk_clientid FOREIGN KEY (clientId) REFERENCES clients(id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,taskName VARCHAR(50),projectId INT NOT NULL, CONSTRAINT fk_projectId FOREIGN KEY (projectId) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,description VARCHAR(200),startDate DATETIME,endDate DATETIME);
CREATE TABLE assigned(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,taskId INT NOT NULL, CONSTRAINT fk_taskid FOREIGN KEY (taskId) REFERENCES tasks(id)ON UPDATE CASCADE  ON DELETE CASCADE,empId INT NOT NULL, CONSTRAINT fk_empId FOREIGN KEY (empId) REFERENCES employees(id)ON UPDATE CASCADE  ON DELETE CASCADE,roleId INT NOT NULL, CONSTRAINT fk_roleId1 FOREIGN KEY (roleId) REFERENCES roles(id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE payrollCycles(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,payrollCycleYear DATETIME,payrollCycleNumber INT NOT NULL,startDate DATETIME,endDate  DATETIME,depositDate DATETIME);
CREATE TABLE timesheets(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,startDate DATETIME,
                        week1Monday VARCHAR(10),week1Tuesday VARCHAR(10),week1Wednesday VARCHAR(10),week1Thursday VARCHAR(10),week1Friday VARCHAR(10),week1Saturday VARCHAR(10), week1Sunday VARCHAR(10),
                        week2Monday VARCHAR(10),week2Tuesday VARCHAR(10),week2Wednesday VARCHAR(10),week2Thursday VARCHAR(10),week2Friday VARCHAR(10),week2Saturday VARCHAR(10),week2Sunday VARCHAR(10),
                        week3Monday VARCHAR(10),week3Tuesday VARCHAR(10),week3Wednesday VARCHAR(10),week3Thursday VARCHAR(10),week3Friday VARCHAR(10),week3Saturday VARCHAR(10),week3Sunday VARCHAR(10),
                        week4Monday VARCHAR(10),week4Tuesday VARCHAR(10),week4Wednesday VARCHAR(10),week4Thursday VARCHAR(10),week4Friday VARCHAR(10),week4Saturday VARCHAR(10),week4Sunday VARCHAR(10),
                        empId INT NOT NULL, CONSTRAINT fk_emp_Id2 FOREIGN KEY(empId) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
                        projectId INT NOT NULL, CONSTRAINT fk_project_Id2 FOREIGN KEY(projectId) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
                        payrollCycleId INT NOT NULL , CONSTRAINT payroll_cycle_Id3 FOREIGN KEY(payrollCycleId) REFERENCES payrollCycles(id) ON UPDATE CASCADE ON DELETE CASCADE,
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

INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1001','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1002','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1003','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1004','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1005','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1006','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1007','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1008','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1009','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1010','MAHB0000286','2023-03-01 12:40:35',22500);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1011','UNB0000286','2023-04-15 02:45:35',2250025);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1012','BARBO0000286','2023-03-04 02-40-35',225700);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1013','MAHB000299','2022-03-16  03-40-35',24540);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1014','MAHB0000886','2022-05-01 04-50-35',454500);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1015','AXIS0000296','2021-07-01 07-40-35',2352500);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1016','UBIN0000286','2021-08-01 07-10-35',23500);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1017','AXIS0000285','2021-05-02 07-40-35',232500);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1018','MAHB0000284','2021-08-03 07-40-35',235250);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1019','UBIN0000286','2021-08-04 07-40-35',23520);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1020','UBIN0000286','2021-08-04 07-40-35',25000);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1021','UBIN0000286','2021-08-04 07-40-35',25000);
INSERT INTO accounts(accountNumber,ifscCode,registerDate,balance) VALUES( '1022','UBIN0000286','2021-08-04 07-40-35',25000);


INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','1001',1);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','1002',2);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Rohit','Gore','1998-05-20','2023-02-11','7038548507','1003',3);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Shubham','Teli','1998-05-29','2023-02-21','7038548515','1004',4);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Abhay','Navale','1999-05-19','2021-02-01','7038548525','1005',5);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Sahil','Mankar','1996-05-19','2023-05-05','7038548513','1006',6);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Pragati','Bangar','1997-05-19','2023-02-01','7038548595','1007',7);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Akash','Ajab','1995-05-29','2021-05-01','7038548516','1008',8);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Vedant','Yadav','1996-05-14','2023-02-07','7038548515','1009',9);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Rohit','Mangavale','1998-05-19','2023-02-01','7038548505','1010',10);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Ravi','Tambade','1975-05-19','1994-02-01','7038548501','1011',11);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Shubham','Navale','1994-05-19','2020-02-01','7038548502','1012',12);
INSERT INTO employees(firstName,lastName,birthDate,hireDate,contactNumber,accountNumber,userId) VALUES('Samruddhi','Chavan','1996-03-15','2021-02-05','7038548504','1013',13);

INSERT INTO payrollCycles(payrollCycleYear,payrollCycleNumber,startDate,endDate,depositDate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');
INSERT INTO payrollCycles(payrollCycleYear,payrollCycleNumber,startDate,endDate,depositDate)VALUES('2022-04-22',12,'2022-05-15','2023-05-22','2022-05-16');
INSERT INTO payrollCycles(payrollCycleYear,payrollCycleNumber,startDate,endDate,depositDate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');         


INSERT INTO teams(teamName)VALUES('alpha-1');
INSERT INTO teams(teamName)VALUES('alpha-2');
INSERT INTO teams(teamName)VALUES('alpha-3');

INSERT INTO roles(roleName)VALUES('Developer');
INSERT INTO roles(roleName)VALUES('Consultant');
INSERT INTO roles(roleName)VALUES('Tester');
INSERT INTO roles(roleName)VALUES('Manager');


INSERT INTO userRoles(userId,roleId) VALUES (1,1);
INSERT INTO userRoles(userId,roleId) VALUES (2,1);
INSERT INTO userRoles(userId,roleId) VALUES (3,1);
INSERT INTO userRoles(userId,roleId) VALUES (4,2);
INSERT INTO userRoles(userId,roleId) VALUES (5,2);
INSERT INTO userRoles(userId,roleId) VALUES (6,2);
INSERT INTO userRoles(userId,roleId) VALUES (7,3);
INSERT INTO userRoles(userId,roleId) VALUES (8,3);
INSERT INTO userRoles(userId,roleId) VALUES (9,3);
INSERT INTO userRoles(userId,roleId) VALUES (10,4);
INSERT INTO userRoles(userId,roleId) VALUES (11,4);
INSERT INTO userRoles(userId,roleId) VALUES (12,4);

INSERT INTO teamMembers(teamId,empId,roleId)VALUES(1,1,1);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(1,2,1);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(1,3,3);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(1,4,3);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(1,13,2);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(1,11,4);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(2,5,1);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(2,6,1);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(2,7,3);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(2,8,3);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(2,12,4);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(3,1,1);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(3,5,1);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(3,7,3);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(3,8,3);
INSERT INTO teamMembers(teamId,empId,roleId)VALUES(3,10,4);

INSERT INTO projects(projName,startDate,endDate,projectDescription,teamId)VALUES('Online Meeting Sheduling','2021-02-02','2021-03-03','Compeny requirement want to organize meetins online',1);
INSERT INTO projects(projName,startDate,endDate,projectDescription,teamId)VALUES('Online Interview Sheduling','2022-05-10','2022-05-13','We want to argent hiring of new employeess for new projects',2);
INSERT INTO projects(projName,startDate,endDate,projectDescription,teamId)VALUES('MockTesting Sheduling','2021-02-02','2021-03-03','Compeny requirement want to organize meetins online',3);


INSERT INTO timesheets(startDate,week1Monday,week1Tuesday,week1Wednesday,week1Thursday,week1Friday,week1Saturday,week1Sunday,
                                week2Monday,week2Tuesday,week2Wednesday,week2Thursday,week2Friday,week2Saturday,week2Sunday,
                                week3Monday,week3Tuesday,week3Wednesday,week3Thursday,week3Friday,week3Saturday,week3Sunday,
                                week4Monday,week4Tuesday,week4Wednesday,week4Thursday,week4Friday,week4Saturday,week4Sunday,
                                empId,projectId,payrollCycleId,notes)VALUES('2022-04-22',
                                     '3:04:25','5:15:11','3:17:45','5:15:23','4:05:12','3:46:45','4:18:55',
                                     '2:05:24','4:35:23','3:15:43','6:16:28','6:25:55','7:26:25','6:07:05',
                                     '6:46:27','4:16:42','5:17:47','4:15:55','7:06:19','6:55:25','2:18:55',
                                     '4:05:54','5:45:33','4:12:43','2:23:27','5:15:19','4:46:25','6:49:29',
                                      2,2,1,'remaining work in process');
INSERT INTO timesheets(startDate,week1Monday,week1Tuesday,week1Wednesday,week1Thursday,week1Friday,week1Saturday, week1Sunday,
                                week2Monday,week2Tuesday,week2Wednesday,week2Thursday,week2Friday,week2Saturday, week2Sunday,
                                week3Monday,week3Tuesday,week3Wednesday,week3Thursday,week3Friday,week3Saturday, week3Sunday,
                                week4Monday,week4Tuesday,week4Wednesday,week4Thursday,week4Friday,week4Saturday, week4Sunday,
                                empId,projectId,payrollCycleId,notes)VALUES('2022-05-19',
                                     '4:05:25','5:35:17','6:17:43','4:15:43','6:05:19','7:46:25','5:18:25',
                                     '3:05:24','4:35:23','3:15:43','6:25:28','7:55:19','4:12:25','6:07:05',
                                     '5:05:27','5:35:42','4:17:47','5:15:55','5:06:19','5:55:25','3:18:55',
                                     '1:05:54','5:45:33','6:12:43','4:55:27','6:42:19','6:17:25','4:18:29',
                                      1,1,1,'remaining work in process');

INSERT INTO projectManagers(projectId,userId)VALUES(1,11);
INSERT INTO projectManagers(projectId,userId)VALUES(2,12);
INSERT INTO projectManagers(projectId,userId)VALUES(3,12);

INSERT INTO clients(name,address,details,accountNumber)VALUES('Vishwambhar Kapare','Pune RajguruNagar','Client want to create online meeting portal for their compeny','1001');
INSERT INTO clients(name,address,details,accountNumber)VALUES('Rajat Pisal','Kolhapur','Client want to create online Interview Sheduling Project','1002');

INSERT INTO onProjects(projectId,clientId)VALUES(1,2);

INSERT INTO tasks(taskName,projectId,description,startDate,endDate)VALUES('Meeting Sheduling',1,'please arrange the meeting sheduling prosess quickly','2021-02-01','2021-02-03');

INSERT INTO assigned(taskId,empId,roleId)VALUES(1,1,1);

USE PMS;

select * from employees;
select * from users;-- 
select * from teams ;
select * from roles;
select * from userRoles;
select * from teamMembers;
select * from projects;
select * from projectManagers;
select * from clients;
select * from onProjects;
select * from tasks;
select * from assigned;
select * from timesheets;
select * from payrollCycles;

select roles.roleName from userRoles inner join roles on userRoles.id =roles.id where userroles.userId=12;
SELECT * FROM projects WHERE startDate BETWEEN @fromdate AND @todate;


1)Finding role of employeess whose working on Project
select roles.role_name from user_roles inner join roles on user_roles.role_id =roles.role_id where user_roles.user_id=12;

2)Finding projects startDatd is in between fromdate to todate 
SELECT *
FROM projects
WHERE startDate BETWEEN '2022-01-01' AND '2022-12-31';

