-- Active: 1694968636816@@127.0.0.1@3306@pms

    DROP DATABASE IF EXISTS PMS;
    CREATE DATABASE PMS;
    USE PMS;

    CREATE TABLE
        employees(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL UNIQUE,
            hiredate DATETIME,
            reportingid INT,
            CONSTRAINT fk_employees FOREIGN KEY(reportingid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );

    CREATE TABLE
        projects(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(40),
            startdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            enddate DATETIME,
            description TEXT,
            teammanagerid INT NOT NULL,
            CONSTRAINT fk_employees_projects FOREIGN KEY(teammanagerid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
            status enum(
                'NotStarted',
                'InProgress',
                'Completed') DEFAULT 'NotStarted'
        );

    CREATE TABLE
        members(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            membership VARCHAR(20),
            membershipdate DATETIME,
            projectid INT NOT NULL,
            CONSTRAINT fk_projects_projectmembers FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            employeeid INT NOT NULL,
            CONSTRAINT fk_employee_projectmembers FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );

    CREATE TABLE
        tasks(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(50),
            description TEXT,
            assigneddate DATETIME,
            startdate DATETIME,
            duedate DATETIME,
            assignedto INT NOT NULL, 
            CONSTRAINT fk_taskallocations_employees FOREIGN KEY (assignedto) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
            assignedby INT,
            CONSTRAINT fk_tasks_members FOREIGN KEY (assignedby) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
            projectid INT NOT NULL,
            CONSTRAINT fk_tasks_projects FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            status ENUM (     
                'NotStarted',
                'InProgress',
                'Completed') DEFAULT 'NotStarted'        
        );


   CREATE TABLE userstories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    description VARCHAR(400),
    projectid INT NOT NULL,
    assignedto INT NOT NULL, 
    assignedby INT NOT NULL,
    creareddate DATETIME NOT NULL,
    status ENUM ( 'Todo','InProgress','Completed') DEFAULT 'Todo' , 
    CONSTRAINT fk_userstories_members FOREIGN KEY (assignedby) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_userstories_members2 FOREIGN KEY (assignedto) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_userstories_projects FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
   );



CREATE TABLE sprints(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL,  
  startdate DATETIME NOT NULL,
  enddate DATETIME NOT NULL,
  goal VARCHAR(200)
);

CREATE TABLE sprintUserstories(
  id INT PRIMARY KEY AUTO_INCREMENT,
  sprintid INT NOT NULL,
  userstoryid INT NOT NULL,
CONSTRAINT fk_sprints FOREIGN KEY (sprintid) REFERENCES sprints(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_userStories FOREIGN KEY (userstoryid) REFERENCES userstories(id) ON UPDATE CASCADE ON DELETE CASCADE
);

    CREATE TABLE
        timesheets(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            date DATETIME,
            status ENUM (   
                'Submitted',
                'Approved',
                'Rejected'
                ) DEFAULT 'Submitted', 
            employeeid INT NOT NULL,
            CONSTRAINT fk_timesheets_taskallocations FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );


        CREATE TABLE timesheetentries(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            description VARCHAR(225),
            fromtime TIME,
            totime TIME,
            timesheetid INT NOT NULL,
            CONSTRAINT fk_timesheets_timesheetentries FOREIGN KEY(timesheetid) REFERENCES timesheets(id) ON UPDATE CASCADE ON DELETE CASCADE
            )
