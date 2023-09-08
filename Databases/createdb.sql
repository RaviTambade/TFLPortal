-- Active: 1678339848098@@127.0.0.1@3306@sampledb
DROP DATABASE IF EXISTS PMS;
CREATE DATABASE PMS;
USE PMS;
CREATE TABLE
    roles(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name varchar(20)
    );
CREATE TABLE
    userroles(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        userid INT NOT NULL,
        roleid INT NOT NULL,
        CONSTRAINT uc_userroles UNIQUE (userid, roleid),
        CONSTRAINT fk_userroles_roles FOREIGN KEY(roleid) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE
    );
CREATE TABLE directors(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                      corporateid INT NOT NULL,
                      userid INT NOT NULL,
                      CONSTRAINT fk_userroles_directors FOREIGN KEY(userid) REFERENCES userroles(userid) ON UPDATE CASCADE ON DELETE CASCADE
                      );
CREATE TABLE employees(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
                      userid INT NOT NULL,
                      department VARCHAR(50),
                      position VARCHAR(50),
                      hire_date DATE,
                      directorid INT NOT NULL,
                      managerid INT,
                      CONSTRAINT fk_directors_employees FOREIGN KEY(directorid) REFERENCES directors(id) ON UPDATE CASCADE ON DELETE CASCADE,
                      CONSTRAINT fk_userroles_employees FOREIGN KEY(userid) REFERENCES userroles(userid) ON UPDATE CASCADE ON DELETE CASCADE,
                      CONSTRAINT fk_employees FOREIGN KEY(managerid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
                      );       
CREATE TABLE projects(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                     title VARCHAR(40),
                     startdate DATETIME NOT NULL,
                     enddate DATETIME NOT NULL,
                     description VARCHAR(100),
                     teammanagerid INT NOT NULL,
                     CONSTRAINT fk_employees_projects FOREIGN KEY(teammanagerid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
                     status enum('Pending','In-Progress','Completed','Error'));             
CREATE TABLE projectmembers(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            projectid INT NOT NULL, 
                            CONSTRAINT fk_projects_projectmembers FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                            teammemberid INT NOT NULL, 
                            CONSTRAINT fk_employee_projectmembers FOREIGN KEY(teammemberid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE);                           
CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                  title VARCHAR(50),
                  projectid INT NOT NULL, 
                  CONSTRAINT fk_tasks_projects FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                  description VARCHAR(200),
                  date DATETIME,
                  fromtime TIME,
                  totime TIME);               
CREATE TABLE assignedtasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           taskid INT NOT NULL, 
                           CONSTRAINT fk_tasks_assignedtasks FOREIGN KEY (taskid) REFERENCES tasks(id)ON UPDATE CASCADE  ON DELETE CASCADE,
                           teammemberid INT NOT NULL, 
                           CONSTRAINT fk_assignedtasks_employees FOREIGN KEY (teammemberid) REFERENCES employees(id)ON UPDATE CASCADE  ON DELETE CASCADE);          
 CREATE TABLE timesheets(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                         date DATETIME,
                         fromtime TIME,
                         totime TIME,
                         workingtime TIME GENERATED ALWAYS AS (TIMEDIFF(totime, fromtime)) VIRTUAL,
                         employeeid INT NOT NULL,
                         CONSTRAINT fk_timesheets_employees FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
                         projectid INT NOT NULL,
                         CONSTRAINT fk_timesheets_projects FOREIGN KEY(projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
                         taskid INT NOT NULL,
                         CONSTRAINT fk_timesheets_tasks FOREIGN KEY(taskid) REFERENCES tasks(id) ON UPDATE CASCADE ON DELETE CASCADE);
 CREATE TABLE timerecords(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
						  date DATETIME NOT NULL,
						  totaltime TIME,
                          employeeid INT NOT NULL,
                          CONSTRAINT fk_timerecords_employees FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
                          );
                          
                          
-- CREATE TABLE clients(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--                     fullname VARCHAR(50),
--                     address VARCHAR(200),
--                     details VARCHAR(200)
-- 	                );
                    
-- CREATE TABLE onproject(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--                       projectid INT NOT NULL, 
--                       CONSTRAINT fk_projid FOREIGN KEY (projectid) REFERENCES projects(id)ON UPDATE CASCADE  ON DELETE CASCADE,
--                       clientid INT NOT NULL, 
--                       CONSTRAINT fk_clientid FOREIGN KEY (clientid) REFERENCES clients(id)ON UPDATE CASCADE  ON DELETE CASCADE);
   