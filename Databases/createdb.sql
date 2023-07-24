DROP DATABASE IF EXISTS PMS;
CREATE DATABASE PMS;
USE PMS;

                     
CREATE TABLE employees(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                      firstname VARCHAR (50),
                      lastname VARCHAR(50),
                      birthdate DATETIME,
                      hiredate DATETIME,
                      contactnumber VARCHAR(20),
                      image varchar(255),
                      userid INT NOT NULL); 

CREATE TABLE roles(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                   rolename varchar (50));
                   
CREATE TABLE userroles(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
		     	       userid INT NOT NULL, 
                       roleid INT NOT NULL,
                       CONSTRAINT fk_role_id2 FOREIGN KEY(roleid) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE);

CREATE TABLE projects(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                     title VARCHAR(100),
                     startdate DATETIME NOT NULL,
                     enddate DATETIME NOT NULL,
                     description VARCHAR(255),
                     status enum('Pending','In-Progress','Completed','Error'));
                     
CREATE TABLE projectmembers(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            projectid INT NOT NULL, 
                            CONSTRAINT fk_proid FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                            empid INT NOT NULL, 
                            CONSTRAINT fk_emp_Id4 FOREIGN KEY(empid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE );
                            
CREATE TABLE clients(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    fullname VARCHAR(50),
                    address VARCHAR(200),
                    details VARCHAR(200)
	                );
                    
CREATE TABLE onproject(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                      projectid INT NOT NULL, 
                      CONSTRAINT fk_projid FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                      clientid INT NOT NULL, 
                      CONSTRAINT fk_clientid FOREIGN KEY (clientid) REFERENCES clients(id)ON UPDATE CASCADE  ON DELETE CASCADE);
                      
CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  title VARCHAR(50),
                  projectid INT NOT NULL, 
                  CONSTRAINT fk_projectid FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                  description VARCHAR(200),
                  date DATETIME,
                  fromtime TIME,
                  totime TIME);
                  
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
                           depositdate DATETIME);
                               
 CREATE TABLE timesheets (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                         date DATETIME,
                         fromtime TIME,
                         totime TIME,
                         workingtime TIME GENERATED ALWAYS AS (TIMEDIFF(totime, fromtime)) VIRTUAL,
                         empid INT NOT NULL, CONSTRAINT fk_emp_Id5 FOREIGN KEY(empid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
                         projectid INT NOT NULL, CONSTRAINT fk_project_Id2 FOREIGN KEY(projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
                         taskid INT NOT NULL, CONSTRAINT fk_task_Id2 FOREIGN KEY(taskid) REFERENCES tasks(id) ON UPDATE CASCADE ON DELETE CASCADE);
 
 CREATE TABLE timerecords (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
						  date DATE,
						  totaltime TIME,
                          empid INT NOT NULL, CONSTRAINT fk_emp_Id6 FOREIGN KEY(empid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
                          );