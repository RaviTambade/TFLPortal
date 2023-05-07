
CREATE DATABASE PMS;
USE PMS;

CREATE TABLE users(user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(50) UNIQUE NOT NULL,contact_number VARCHAR(20), password VARCHAR(50) NOT NULL);
CREATE TABLE accounts(account_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,account_number VARCHAR(25) UNIQUE, ifsc_code VARCHAR(50) ,register_date DATETIME ,balance DOUBLE);
CREATE TABLE employees(emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, empfirst_name VARCHAR (50),emplast_name VARCHAR(50),birth_date DATETIME,hire_date DATETIME,contact_number VARCHAR(20),email VARCHAR(50) UNIQUE NOT NULL,password varchar(50)NOT NULL,account_number VARCHAR(25) NOT NULL UNIQUE ,CONSTRAINT fk_account_no1 FOREIGN KEY(account_number) REFERENCES accounts(account_number) ON UPDATE CASCADE ON DELETE CASCADE); 
CREATE TABLE team(team_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, team_name VARCHAR (50)UNIQUE);
CREATE TABLE role(role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,role_name varchar (50));
CREATE TABLE team_member(team_member_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, team_id INT NOT NULL, CONSTRAINT fk_teamid FOREIGN KEY (team_id) REFERENCES team (team_id)ON UPDATE CASCADE  ON DELETE CASCADE ,emp_id INT NOT NULL, CONSTRAINT fk_empid FOREIGN KEY (emp_id) REFERENCES employees(emp_id)ON UPDATE CASCADE  ON DELETE CASCADE ,role_id INT NOT NULL, CONSTRAINT fk_roleid FOREIGN KEY (role_id) REFERENCES role(role_id)ON UPDATE CASCADE  ON DELETE CASCADE );
CREATE TABLE project(proj_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,proj_name VARCHAR(100),planned_startDate DATETIME,planend_endDate DATETIME,actual_startDate DATETIME NOT NULL,actual_endDate DATETIME NOT NULL,proj_desc VARCHAR(255));
CREATE TABLE project_manager(pm_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,proj_id INT NOT NULL, CONSTRAINT fk_proid FOREIGN KEY (proj_id) REFERENCES project(proj_id)ON UPDATE CASCADE  ON DELETE CASCADE,user_id INT NOT NULL, CONSTRAINT fk_userid FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE client(client_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,clt_name VARCHAR(50),clt_address VARCHAR(200),clt_details VARCHAR(200),account_number VARCHAR(25) NOT NULL UNIQUE ,CONSTRAINT fk_account_no2 FOREIGN KEY(account_number) REFERENCES accounts(account_number) ON UPDATE CASCADE ON DELETE CASCADE);
CREATE TABLE on_project(on_project_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,proj_id INT NOT NULL, CONSTRAINT fk_projid FOREIGN KEY (proj_id) REFERENCES project(proj_id)ON UPDATE CASCADE  ON DELETE CASCADE,client_id INT NOT NULL, CONSTRAINT fk_clientid FOREIGN KEY (client_id) REFERENCES client(client_id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE task(task_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,task_name VARCHAR(50),proj_id INT NOT NULL, CONSTRAINT fk_proidd FOREIGN KEY (proj_id) REFERENCES project(proj_id)ON UPDATE CASCADE  ON DELETE CASCADE,description VARCHAR(200),start_date DATETIME,end_date DATETIME);
CREATE TABLE assigned(assign_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,task_id INT NOT NULL, CONSTRAINT fk_taskid FOREIGN KEY (task_id) REFERENCES task(task_id)ON UPDATE CASCADE  ON DELETE CASCADE,emp_id INT NOT NULL, CONSTRAINT fk_empidd FOREIGN KEY (emp_id) REFERENCES employees(emp_id)ON UPDATE CASCADE  ON DELETE CASCADE,role_id INT NOT NULL, CONSTRAINT fk_roleidd FOREIGN KEY (role_id) REFERENCES role(role_id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE payrollCycles(payroll_cycle_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,payroll_cycle_year DATETIME,payroll_cycle_number INT NOT NULL,start_date DATETIME,end_date  DATETIME,deposit_date DATETIME);
CREATE TABLE timesheets(timesheet_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,start_date DATETIME,
                        week1_monday VARCHAR(10),week1_tuesday VARCHAR(10),week1_wednesday VARCHAR(10),week1_thursday VARCHAR(10),week1_friday VARCHAR(10),week1_saturday VARCHAR(10), week1_sunday VARCHAR(10),
                        week2_monday VARCHAR(10),week2_tuesday VARCHAR(10),week2_wednesday VARCHAR(10),week2_thursday VARCHAR(10),week2_friday VARCHAR(10),week2_saturday VARCHAR(10),week2_sunday VARCHAR(10),
                        week3_monday VARCHAR(10),week3_tuesday VARCHAR(10),week3_wednesday VARCHAR(10),week3_thursday VARCHAR(10),week3_friday VARCHAR(10),week3_saturday VARCHAR(10),week3_sunday VARCHAR(10),
                        week4_monday VARCHAR(10),week4_tuesday VARCHAR(10),week4_wednesday VARCHAR(10),week4_thursday VARCHAR(10),week4_friday VARCHAR(10),week4_saturday VARCHAR(10),week4_sunday VARCHAR(10),
                        emp_id INT NOT NULL, CONSTRAINT fk_emp_Id2 FOREIGN KEY(emp_id) REFERENCES employees(emp_id) ON UPDATE CASCADE ON DELETE CASCADE,proj_id INT NOT NULL, CONSTRAINT fk_project_Id2 FOREIGN KEY(proj_id) REFERENCES project(proj_id) ON UPDATE CASCADE ON DELETE CASCADE,
                        payroll_cycle_id INT NOT NULL , CONSTRAINT payroll_cycle_Id3 FOREIGN KEY(payroll_cycle_Id) REFERENCES payrollCycles(payroll_cycle_Id) ON UPDATE CASCADE ON DELETE CASCADE,
                        notes VARCHAR(255));
                        

                        

/* Trigger for user insertion after employee insertion */ 
DELIMITER //
CREATE TRIGGER insert_employee AFTER INSERT ON employees 
FOR EACH ROW 
BEGIN 
    DECLARE userId INT;
	INSERT INTO users(email,contact_number,password)VALUES (NEW.email,NEW.contact_number,NEW.password);
    SELECT user_id INTO userId FROM users where email=NEW.email;
END //
DELIMITER ;
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1001','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1002','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1003','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1004','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1005','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1006','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1007','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1008','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1009','MAHB0000286','2023-03-01 12:40:40',22555);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1010','MAHB0000286','2023-03-01 12:40:35',22500);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1011','UNB0000286','2023-04-15 02:45:35',2250025);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1012','BARBO0000286','2023-03-04 02-40-35',225700);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1013','MAHB000299','2022-03-16  03-40-35',24540);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1014','MAHB0000886','2022-05-01 04-50-35',454500);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1015','AXIS0000296','2021-07-01 07-40-35',2352500);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1016','UBIN0000286','2021-08-01 07-10-35',23500);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1017','AXIS0000285','2021-05-02 07-40-35',232500);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1018','MAHB0000284','2021-08-03 07-40-35',235250);
INSERT INTO accounts(account_number,ifsc_code,register_date,balance) VALUES( '1019','UBIN0000286','2021-08-04 07-40-35',23520);


INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','Rushi@12345','RC@12345','1001');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','Akshay@12345','AK@12345','1002');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Rohit','Gore','1998-05-20','2023-02-11','7038548507','Rohit@12345','RG@12345','1003');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Shubham','Teli','1998-05-29','2023-02-21','7038548515','Shubham@12345','ST@12345','1004');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Abhay','Navale','1999-05-19','2021-02-01','7038548525','Abhay@12345','AN@12345','1005');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Sahil','Mankar','1996-05-19','2023-05-05','7038548513','Sahil@12345','SM@12345','1006');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Pragati','Bangar','1997-05-19','2023-02-01','7038548595','Pragati@12345','PB@12345','1007');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Akash','Ajab','1995-05-29','2021-05-01','7038548516','Akash@12345','Aks@12345','1008');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Vedant','Yadav','1996-05-14','2023-02-07','7038548515','Vedant@12345','VY@12345','1009');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Rohit','Mangavale','1998-05-19','2023-02-01','7038548505','Rmangavle@12345','RM@12345','1010');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Ravi','Tambade','1975-05-19','1994-02-01','7038548501','RaviT@12345','RT@12345','1011');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Shubham','Navale','1994-05-19','2020-02-01','7038548502','ShubhamN@12345','SN@12345','1012');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,account_number) VALUES('Samruddhi','Chavan','1996-03-15','2021-02-05','7038548504','SAM@12345','SC@12345','1013');

INSERT INTO payrollCycles(payroll_cycle_year,payroll_cycle_number,start_date,end_date,deposit_date)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');
INSERT INTO payrollCycles(payroll_cycle_year,payroll_cycle_number,start_date,end_date,deposit_date)VALUES('2022-04-22',12,'2022-05-15','2023-05-22','2022-05-16');
INSERT INTO payrollCycles(payroll_cycle_year,payroll_cycle_number,start_date,end_date,deposit_date)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');         

INSERT INTO project(proj_name,planned_startDate,planend_endDate,actual_startDate,actual_endDate,proj_desc)VALUES('Online Meeting Sheduling','2021-02-01','2021-03-01','2021-02-02','2021-03-03','Compeny requirement want to organize meetins online');
INSERT INTO project(proj_name,planned_startDate,planend_endDate,actual_startDate,actual_endDate,proj_desc)VALUES('Online Interview Sheduling','2022-05-10','2022-05-12','2022-05-10','2022-05-13','We want to argent hiring of new employeess for new projects');

         
INSERT INTO timesheets(start_date,week1_monday,week1_tuesday,week1_wednesday,week1_thursday,week1_friday,week1_saturday, week1_sunday,
                                week2_monday,week2_tuesday,week2_wednesday,week2_thursday,week2_friday,week2_saturday, week2_sunday,
                                week3_monday,week3_tuesday,week3_wednesday,week3_thursday,week3_friday,week3_saturday, week3_sunday,
                                week4_monday,week4_tuesday,week4_wednesday,week4_thursday,week4_friday,week4_saturday, week4_sunday,
                                emp_id,proj_id,payroll_cycle_id,notes)VALUES('2022-04-22',
                                     '3:04:25','5:15:11','3:17:45','5:15:23','4:05:12','3:46:45','4:18:55',
                                     '2:05:24','4:35:23','3:15:43','6:16:28','6:25:55','7:26:25','6:07:05',
                                     '6:46:27','4:16:42','5:17:47','4:15:55','7:06:19','6:55:25','2:18:55',
                                     '4:05:54','5:45:33','4:12:43','2:23:27','5:15:19','4:46:25','6:49:29',
                                      2,2,1,'remaining work in process');
INSERT INTO timesheets(start_date,week1_monday,week1_tuesday,week1_wednesday,week1_thursday,week1_friday,week1_saturday, week1_sunday,
                                week2_monday,week2_tuesday,week2_wednesday,week2_thursday,week2_friday,week2_saturday, week2_sunday,
                                week3_monday,week3_tuesday,week3_wednesday,week3_thursday,week3_friday,week3_saturday, week3_sunday,
                                week4_monday,week4_tuesday,week4_wednesday,week4_thursday,week4_friday,week4_saturday, week4_sunday,
                                emp_id,proj_id,payroll_cycle_id,notes)VALUES('2022-05-19',
                                     '4:05:25','5:35:17','6:17:43','4:15:43','6:05:19','7:46:25','5:18:25',
                                     '3:05:24','4:35:23','3:15:43','6:25:28','7:55:19','4:12:25','6:07:05',
                                     '5:05:27','5:35:42','4:17:47','5:15:55','5:06:19','5:55:25','3:18:55',
                                     '1:05:54','5:45:33','6:12:43','4:55:27','6:42:19','6:17:25','4:18:29',
                                      1,1,1,'remaining work in process');

INSERT INTO team(team_name)VALUES('alpha-1');
INSERT INTO team(team_name)VALUES('alpha-2');
INSERT INTO team(team_name)VALUES('alpha-3');

INSERT INTO role(role_name)VALUES('Developer');
INSERT INTO role(role_name)VALUES('Consultant');
INSERT INTO role(role_name)VALUES('Tester');
INSERT INTO role(role_name)VALUES('Manager');

INSERT INTO team_member(team_id,emp_id,role_id)VALUES(1,1,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(1,2,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(1,3,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(1,4,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(1,13,2);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(1,11,4);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,5,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,6,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,7,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,8,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,12,4);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,1,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,5,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,7,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,8,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,10,4);



INSERT INTO project_manager(proj_id,user_id)VALUES(1,11);
INSERT INTO project_manager(proj_id,user_id)VALUES(2,12);


INSERT INTO client(clt_name,clt_address,clt_details,account_number)VALUES('Vishwambhar Kapare','Pune RajguruNagar','Client want to create online meeting portal for their compeny','1001');
INSERT INTO client(clt_name,clt_address,clt_details,account_number)VALUES('Rajat Pisal','Kolhapur','Client want to create online Interview Sheduling Project','1002');


INSERT INTO on_project(proj_id,client_id)VALUES(1,2);

INSERT INTO task(task_name,proj_id,description,start_date,end_date)VALUES('Meeting Sheduling',1,'please arrange the meeting sheduling prosess quickly','2021-02-01','2021-02-03');

INSERT INTO assigned(task_id,emp_id,role_id)VALUES(1,1,1);


select * from employees;
select * from users;
select * from team ;
select * from role;
select * from team_member;
select * from team_member where team_id=1;
select * from project;
select * from project_manager;
select * from client;
select * from on_project;
select * from task;
select * from assigned;
select * from timesheets;
select * from payrollCycles;
