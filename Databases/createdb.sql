-- Active: 1694968636816@@127.0.0.1@3306@pms

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

    CREATE TABLE
        directors(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            corporateid INT NOT NULL,
            userid INT NOT NULL,
            CONSTRAINT fk_userroles_directors FOREIGN KEY(userid) REFERENCES userroles(userid) ON UPDATE CASCADE ON DELETE CASCADE
        );

    CREATE TABLE
        employees(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL,
            department VARCHAR(50),
            position VARCHAR(50),
            hiredate DATETIME,
            directorid INT NOT NULL,
            managerid INT,
            CONSTRAINT fk_directors_employees FOREIGN KEY(directorid) REFERENCES directors(id) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT fk_userroles_employees FOREIGN KEY(userid) REFERENCES userroles(userid) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT fk_employees FOREIGN KEY(managerid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
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
                'Pending',
                'In-Progress',
                'Completed',
                'Canceled'
            ) DEFAULT 'Pending'
        );

    CREATE TABLE
        projectmembers(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            projectid INT NOT NULL,
            CONSTRAINT fk_projects_projectmembers FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            teammemberid INT NOT NULL,
            CONSTRAINT fk_employee_projectmembers FOREIGN KEY(teammemberid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );


    CREATE TABLE tasks(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            title VARCHAR(50),
                            description TEXT
                            );
    CREATE TABLE
        projecttasks(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            projectid INT NOT NULL,
            CONSTRAINT fk_tasks_projects FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            status ENUM (     
                'Pending',
                'In-Progress',
                'Completed') DEFAULT 'Pending',
            date DATETIME DEFAULT CURRENT_TIMESTAMP,
            fromtime DATETIME,
            totime DATETIME,
            taskid INT NOT NULL,
            CONSTRAINT fk_projecttasks_tasks FOREIGN KEY (taskid) REFERENCES tasks(id) ON UPDATE CASCADE ON DELETE CASCADE
        );

    CREATE TABLE
        taskallocations(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            assignedon DATETIME DEFAULT CURRENT_TIMESTAMP ,
            projecttaskid INT NOT NULL,
            CONSTRAINT fk_taskallocations_projecttasks FOREIGN KEY (projecttaskid) REFERENCES projecttasks(id) ON UPDATE CASCADE ON DELETE CASCADE,
            teammemberid INT NOT NULL,
            CONSTRAINT fk_taskallocations_employees FOREIGN KEY (teammemberid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
        );

    CREATE TABLE
        timesheets(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            date DATETIME,
            fromtime TIME,
            totime TIME,
            description TEXT,
        status ENUM (     
                'Pending',
                'In-Progress',
                'Completed') DEFAULT 'Pending', 
            taskallocationid INT NOT NULL,
            CONSTRAINT fk_timesheets_taskallocations FOREIGN KEY(taskallocationid) REFERENCES taskallocations(id) ON UPDATE CASCADE ON DELETE CASCADE
        );

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
