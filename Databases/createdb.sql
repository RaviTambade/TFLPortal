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

    -- CREATE TABLE
    --     taskallocations(
    --         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
           
    --         projecttaskid INT NOT NULL,
    --         CONSTRAINT fk_taskallocations_projecttasks FOREIGN KEY (projecttaskid) REFERENCES projecttasks(id) ON UPDATE CASCADE ON DELETE CASCADE,
            
    --     );

    CREATE TABLE
        timesheets(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            date DATETIME,
        status ENUM (     
                'NotStarted',
                'InProgress',
                'Completed') DEFAULT 'NotStarted', 
            employeeid INT NOT NULL,
            CONSTRAINT fk_timesheets_taskallocations FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );


        CREATE TABLE TimeSheetEntries(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            description VARCHAR(225),
            fromtime TIME,
            totime TIME,
            timesheetid INT NOT NULL,
            CONSTRAINT fk_timesheets_timesheetentries FOREIGN KEY(timesheetid) REFERENCES timesheets(id) ON UPDATE CASCADE ON DELETE CASCADE
            )

    -- CREATE TABLE projectchats(
    --     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    --     projectid INT NOT NULL,
    --     comment TEXT,
    --     createdat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    --     CONSTRAINT fk_projectchats_projects FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
    --     employeeid INT NOT NULL,
    --     CONSTRAINT fk_timerecords_employees FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
    --     );

    -- CREATE TABLE attachments (
    --     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    --     -- projectid INT,
    --     task_id INT,
    --     comment_id INT,
    --     file_name VARCHAR(40) NOT NULL,
    --     file_path VARCHAR(80) NOT NULL,
    --     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    --     -- CONSTRAINT fk_projects_attachments FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
    --     CONSTRAINT fk_tasks_attachments FOREIGN KEY (taskid) REFERENCES tasks(id) ON UPDATE CASCADE ON DELETE CASCADE,
    --     CONSTRAINT fk_projectchats_attachments FOREIGN KEY (commentid) REFERENCES projectchats(id) ON UPDATE CASCADE ON DELETE CASCADE
    -- );
