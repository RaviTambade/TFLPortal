CREATE DATABASE PMS;
USE PMS;

CREATE TABLE users(user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(50) UNIQUE NOT NULL,contact_number VARCHAR(20), password VARCHAR(50) NOT NULL);
CREATE TABLE employees(emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, empfirst_name VARCHAR (50),emplast_name VARCHAR(50),birth_date DATETIME,hire_date DATETIME,contact_number VARCHAR(20),email VARCHAR(50) UNIQUE NOT NULL,password varchar(50)NOT NULL); 
CREATE TABLE team(team_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, team_name VARCHAR (50)UNIQUE);
CREATE TABLE role(role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,role_name varchar (50));
CREATE TABLE team_member(team_member_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, team_id INT NOT NULL, CONSTRAINT fk_teamid FOREIGN KEY (team_id) REFERENCES team (team_id)ON UPDATE CASCADE  ON DELETE CASCADE ,emp_id INT NOT NULL, CONSTRAINT fk_empid FOREIGN KEY (emp_id) REFERENCES employees(emp_id)ON UPDATE CASCADE  ON DELETE CASCADE ,role_id INT NOT NULL, CONSTRAINT fk_roleid FOREIGN KEY (role_id) REFERENCES role(role_id)ON UPDATE CASCADE  ON DELETE CASCADE );

CREATE TABLE project(proj_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,proj_name VARCHAR(100),planned_startDate DATETIME,planend_endDate DATETIME,actual_startDate DATETIME NOT NULL,actual_endDate DATETIME NOT NULL,proj_desc VARCHAR(255));
CREATE TABLE project_manager(pm_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,proj_id INT NOT NULL, CONSTRAINT fk_proid FOREIGN KEY (proj_id) REFERENCES project(proj_id)ON UPDATE CASCADE  ON DELETE CASCADE,user_id INT NOT NULL, CONSTRAINT fk_userid FOREIGN KEY (user_id) REFERENCES users(user_id)ON UPDATE CASCADE  ON DELETE CASCADE);
CREATE TABLE client(client_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,clt_name VARCHAR(50),clt_address VARCHAR(200),clt_details VARCHAR(200));
CREATE TABLE on_project(on_project_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,proj_id INT NOT NULL, CONSTRAINT fk_projid FOREIGN KEY (proj_id) REFERENCES project(proj_id)ON UPDATE CASCADE  ON DELETE CASCADE,client_id INT NOT NULL, CONSTRAINT fk_clientid FOREIGN KEY (client_id) REFERENCES client(client_id)ON UPDATE CASCADE  ON DELETE CASCADE);



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

INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','Rushi@12345','RC@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','Akshay@12345','AK@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Rohit','Gore','1998-05-20','2023-02-11','7038548507','Rohit@12345','RG@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Shubham','Teli','1998-05-29','2023-02-21','7038548515','Shubham@12345','ST@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Abhay','Navale','1999-05-19','2021-02-01','7038548525','Abhay@12345','AN@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Sahil','Mankar','1996-05-19','2023-05-05','7038548513','Sahil@12345','SM@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Pragati','Bangar','1997-05-19','2023-02-01','7038548595','Pragati@12345','PB@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Akash','Ajab','1995-05-29','2021-05-01','7038548516','Akash@12345','Aks@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Vedant','Yadav','1996-05-14','2023-02-07','7038548515','Vedant@12345','VY@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Rohit','Mangavale','1998-05-19','2023-02-01','7038548505','Rmangavle@12345','RM@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Ravi','Tambade','1975-05-19','1994-02-01','7038548501','RaviT@12345','RT@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Shubham','Navale','1994-05-19','2020-02-01','7038548502','ShubhamN@12345','SN@12345');
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password) VALUES('Samruddhi','Chavan','1996-03-15','2021-02-05','7038548504','SAM@12345','SC@12345');


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
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,10,2);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(2,12,4);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,1,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,5,1);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,7,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,8,3);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,10,2);
INSERT INTO team_member(team_id,emp_id,role_id)VALUES(3,12,4);


INSERT INTO project(proj_name,planned_startDate,planend_endDate,actual_startDate,actual_endDate,proj_desc)VALUES('Online Meeting Sheduling','2021-02-01','2021-03-01','2021-02-02','2021-03-03','Compeny requirement want to organize meetins online');

INSERT INTO project_manager(proj_id,user_id)VALUES(1,11);

INSERT INTO client(clt_name,clt_address,clt_details)VALUES('Vishwambhar Kapare','Pune RajguruNagar','Client want to create online meeting portal for their compeny');

INSERT INTO on_project(proj_id,client_id)VALUES(1,1);

select * from employees;
select * from users;
select * from team;
select * from role;
select * from team_member;
select * from project;
select * from project_manager;
select * from client;
select * from on_project;