

    DROP DATABASE IF EXISTS TFLPortal;
    CREATE DATABASE TFLPortal;
    USE TFLPortal;
   
    CREATE TABLE employees(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL UNIQUE,
            hiredon DATETIME,
            reportingid INT,    
            CONSTRAINT fk_employees FOREIGN KEY(reportingid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE      
    );


   CREATE TABLE projects(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(40),
            startdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            enddate DATETIME,
            description TEXT,
            status ENUM(
                'incomplete',
                'cancelled',
                'notstarted',
                'inprogress',
                'completed') DEFAULT 'notstarted'
    );

    CREATE TABLE sprints(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(40) NOT NULL,  
        startdate DATETIME NOT NULL, 
        enddate DATETIME NOT NULL,
        goal VARCHAR(200),
        projectid INT NULL,
        CONSTRAINT fk_projects_sprints_projectid FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE projectallocations(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            projectid INT NOT NULL,
            employeeid INT NOT NULL,
            title VARCHAR(20),
            assignedon DATETIME,
            releasedon DATETIME default null,
            status enum('yes','no') default 'yes' ,
            CONSTRAINT fk_projects_projectallocations_projectid FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT fk_employee_projectallocations_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE tasks(
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(500),
        tasktype ENUM("userstory","task","bug","issues","meeting","learning","mentoring","others"),
        description VARCHAR(400) DEFAULT '',
        projectid INT NULL,
        sprintid INT NULL,
        assignedto INT NULL, 
        assignedby INT NULL,
        createdon DATETIME NULL,
        assignedon DATETIME NULL,
        startdate DATETIME NULL,
        duedate DATETIME NULL,
        status ENUM ( 'todo','inprogress','completed') DEFAULT 'todo' , 
        CONSTRAINT fk_employees_tasks_assigneby FOREIGN KEY (assignedby) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT fk_employees_tasks_assignedto FOREIGN KEY (assignedto) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT fk_projects_tasks_projectid FOREIGN KEY (projectid) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT fk_sprints_tasks_sprintid FOREIGN KEY (sprintid) REFERENCES sprints(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

     CREATE TABLE timesheets(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            createdon DATETIME ,
            status ENUM ( 
                'inprogress',
                'submitted',
                'approved',
                'rejected'
                ) DEFAULT 'inprogress', 
            modifiedon DATETIME DEFAULT  CURRENT_TIMESTAMP,
            createdby INT NOT NULL,
            CONSTRAINT unique_emp_timesheet UNIQUE KEY(createdon,createdby) ,
            CONSTRAINT fk_employees_timesheets_createdby FOREIGN KEY(createdby) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE timesheetentries(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        fromtime TIME,
        totime TIME,
        timesheetid INT NOT NULL,
        taskid  INT,
        durationinhours DECIMAL(10,2) as ((( TIME_TO_SEC(TIMEDIFF(totime,fromtime)))/3600)),
        CONSTRAINT fk_tasks_timesheetentries_taskid FOREIGN KEY (taskid) REFERENCES tasks(id) ON UPDATE CASCADE  ON DELETE CASCADE,
        CONSTRAINT fk_timesheets_timesheetentries_timesheetid FOREIGN KEY(timesheetid) REFERENCES timesheets(id) ON UPDATE CASCADE ON DELETE CASCADE
    );


    CREATE TABLE leaveallocations(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                roleid INT NOT NULL UNIQUE,
                sick INT NOT NULL,
                casual INT NOT NULL,
                paid INT NOT NULL,
                unpaid INT NOT NULL,
                financialyear INT NOT NULL
    );

    CREATE TABLE leaveapplications(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
            employeeid INT NOT NULL,
            CONSTRAINT fk_employees_leaveapplications_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
            createdon DateTime,
            fromdate DateTime,
            todate DateTime,
            status enum("notsanctioned","sanctioned","applied")DEFAULT 'applied',
            leavetype enum("casual","sick","paid","unpaid")
    );

    CREATE TABLE salarystructures(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            employeeid INT NOT NULL,
            CONSTRAINT fk_employees_salarystructures_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
            basicsalary DOUBLE NOT NULL,
            hra DOUBLE NOT NULL,
            da DOUBLE NOT NULL,
            lta DOUBLE NOT NULL,
            variablepay DOUBLE NOT NULL
    );


    CREATE TABLE salaryslips(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            employeeid INT NOT NULL,
            CONSTRAINT fk_employees_salaryslips_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
            paydate DateTime,
            monthlyworkingdays INT NOT NULL,
            deduction DOUBLE NOT NULL,
            tax DOUBLE NOT NULL,
            pf DOUBLE NOT NULL,
            amount DOUBLE NOT NULL
    );
