-- Active: 1696576841746@@127.0.0.1@3306@pms

    DROP DATABASE IF EXISTS PMS;
    CREATE DATABASE PMS;
    USE PMS;

    CREATE TABLE
        employees(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL UNIQUE,
            hiredate DATETIME,
            reportingid INT,
            CONSTRAINT fk_employees FOREIGN KEY(reportingid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
            salary double NOT NULL
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
                'notstarted',
                'inprogress',
                'completed') DEFAULT 'notstarted'
        );

    CREATE TABLE
        members(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            membership VARCHAR(20),
            membershipdate DATETIME,
            projectid INT NOT NULL,
            CONSTRAINT fk_projects_projectmembers FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            employeeid INT NOT NULL,
            CONSTRAINT fk_employee_projectmembers FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
        );



CREATE TABLE activities(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    activitytype ENUM("userstory","task","bug","issues","meeting","learning","mentoring","other"),
    description VARCHAR(400),
    projectid INT NOT NULL,
    assignedto INT NOT NULL, 
    assignedby INT NOT NULL,
    createddate DATETIME NOT NULL,
    assigneddate DATETIME,
    startdate DATETIME,
    duedate DATETIME,
    status ENUM ( 'todo','inprogress','completed') DEFAULT 'todo' , 
    CONSTRAINT fk_activitiess_members FOREIGN KEY (assignedby) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_activities_members2 FOREIGN KEY (assignedto) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_activities_projects FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
);




CREATE TABLE sprints(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL,  
  startdate DATETIME NOT NULL,
  enddate DATETIME NOT NULL,
  goal VARCHAR(200)
);

CREATE TABLE sprintactivities(
  id INT PRIMARY KEY AUTO_INCREMENT,
  sprintid INT NOT NULL,
  activityid INT NOT NULL,
CONSTRAINT fk_sprints FOREIGN KEY (sprintid) REFERENCES sprints(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_activity FOREIGN KEY (activityid) REFERENCES activities(id) ON UPDATE CASCADE ON DELETE CASCADE
);

    CREATE TABLE
        timesheets(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            timesheetdate DATETIME ,
            status ENUM (   
                'submitted',
                'approved',
                'rejected'
                ) DEFAULT 'submitted', 
            statuschangeddate DATETIME DEFAULT  CURRENT_TIMESTAMP,
            employeeid INT NOT NULL,
            CONSTRAINT fk_timesheets_taskallocations FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );

        CREATE TABLE timesheetentries(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            activityid INT NOT NULL,
            fromtime TIME,
            totime TIME,
            timesheetid INT NOT NULL,
            CONSTRAINT fk_timesheetentry_activities FOREIGN KEY(activityid) REFERENCES activities(id) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT fk_timesheets_timesheetentries FOREIGN KEY(timesheetid) REFERENCES timesheets(id) ON UPDATE CASCADE ON DELETE CASCADE
        );
