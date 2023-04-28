CREATE DATABASE TestManager;
USE TestManager;


CREATE TABLE users(user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(25) UNIQUE NOT NULL, contact_number VARCHAR(20) NOT NULL , password VARCHAR(15) NOT NULL);
CREATE TABLE tasks(task_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,title VARCHAR(200),description VARCHAR(200), start_date DATETIME, end_date DATETIME, status varchar(25));
CREATE TABLE employees(employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,empfirst_name VARCHAR(100),emplast_name VARCHAR(50),birth_date DATETIME,hire_date DATETIME,contact_number VARCHAR(20),email VARCHAR(50),password VARCHAR(15) NOT NULL,photo varchar (50),task_id INT NOT NULL ,CONSTRAINT fk_task_id FOREIGN KEY(task_id) REFERENCES tasks(task_id) ON UPDATE CASCADE ON DELETE CASCADE);
CREATE TABLE managers(manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,manfirst_name VARCHAR(100),manlast_name VARCHAR(50),birth_date DATETIME,hire_date DATETIME,contact_number VARCHAR(20),email VARCHAR(50),password VARCHAR(15) NOT NULL,photo varchar (50));


DELIMITER //
CREATE TRIGGER insert_employee AFTER INSERT ON employees 
FOR EACH ROW 
BEGIN 
    DECLARE userId INT;
	INSERT INTO users(email,contact_number,password)VALUES (NEW.email,NEW.contact_number,NEW.password);
    SELECT user_id INTO userId FROM users where email=NEW.email;
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER insert_managers AFTER INSERT ON managers 
FOR EACH ROW 
BEGIN 
    DECLARE userId INT;
	INSERT INTO users(email,contact_number,password)VALUES (NEW.email,NEW.contact_number,NEW.password);
    SELECT user_id INTO userId FROM users where email=NEW.email;
END //
DELIMITER ;

INSERT INTO tasks(title,description,start_date,end_date,status)VALUES('Talking Interviews','You have to take interviews of candidatates from morning to afternoon','2022-05-01','2022-03-01','In-Progress');
INSERT INTO tasks(title,description,start_date,end_date,status)VALUES('Meeting Management','You have to arrange everything for meeting','2023-01-05','2023-01-10','Completed');
INSERT INTO tasks(title,description,start_date,end_date,status)VALUES('Account Reporting','Reporting monthly account details to HR & Manager','2023-05-01','2023-05-02','In-Progress');
INSERT INTO tasks(title,description,start_date,end_date,status)VALUES('Cleaning','Cleaning offices for Compeny Owner are visited','2023-04-05','2023-05-07','Completed');
INSERT into tasks(title,description,start_date,end_date,status)VALUES('Documentation','Complete your documents for Audit','2023-06-01','2023-06-02','In-Progress');

INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Rushikesh','Chikane','1998-05-19','2022-02-12','7038548505','Rc@gmail.com','Rc123','./images/Rc.jpg',2);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Rohit','Gore','1999-02-10','2023-05-12','7038548506','Rg@gmail.com','RG123','./images/Rg.jpg',1);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Akash','Ajab','1999-03-11','2022-05-10','7038548507','Aa@gmail.com','Aa123','./images/Aa.jpg',1);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Pragati','Bangar','1999-05-15','2021-02-12','7038548508','Pb@gmail.com','Pb123','./images/Pb.jpg',1);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Akshay','Tanpure','1997-05-12','2023-02-11','7038548509','At@gmail.com','At123','./images/At.jpg',2);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Abhay','Navale','1999-02-10','2023-05-19','7038548510','AN@gmail.com','AbN123','./images/AN.jpg',3);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Sahil','Mankar','1998-08-22','2023-10-17','7038548511','SM@gmail.com','SM123','./images/SM.jpg',4);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Shubham','Teli','1996-01-18','2023-07-14','7038548512','ST@gmail.com','ST123','./images/ST.jpg',5);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Vedant','Yadav','1995-03-10','2023-05-01','7038548513','VY@gmail.com','VY123','./images/VY.jpg',4);
INSERT INTO employees(empfirst_name,emplast_name,birth_date,hire_date,contact_number,email,password,photo,task_id)VALUES('Vishvambhar','Kapare','1996-05-10','2023-01-15','7038548513','VK@gmail.com','VK123','./images/VK.jpg',5);


INSERT INTO managers(manfirst_name,manlast_name,birth_date,hire_date,contact_number,email,password,photo)VALUES('Ravi','Tambade','1975-05-16','2020-01-01','7038548501','RaviT@gmail.com','RaviT123','./images/RT.jpg');
INSERT INTO managers(manfirst_name,manlast_name,birth_date,hire_date,contact_number,email,password,photo)VALUES('Shubham','Navale','1994-05-16','2019-01-09','7038548508','SN@gmail.com','SN123','./images/SN.jpg');


select * from users;
select * from employees;
select * from managers;
select * from tasks;

select * from employees where employee_id =5;

