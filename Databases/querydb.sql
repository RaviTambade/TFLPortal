-- Active: 1678339848098@@127.0.0.1@3306@pms
select * From timerecords where empid=2;
select * from employees;
select * from users;
select * from roles;
select * from userroles;
select * from projectmembers;
select * from projects;
select * from assigned;
select * from timesheets;
select * from timerecords where empid =2;
select employees.userid,tasks.title,tasks.status,tasks.id,assignedtasks.teammemberid
 from employees  tasks WHERE projectid=1;

 SELECT * FROM assignedtasks;
select * from payrollCycles;
select * from clients;


-- 1)Finding role name of employee from roles table 
select roles.rolename from userroles inner join roles on userroles.roleid =roles.id where userroles.userid=12;


-- 2)Finding running projects between from date and to date
SELECT * FROM projects WHERE startDate BETWEEN @fromdate AND @todate;


-- select * from timesheets with details
SELECT ts.id, e.firstname, e.lastname, p.title AS projecttitle, t.title AS tasktitle ,ts.date,ts.fromtime,ts.totime,ts.workingtime
FROM Timesheets ts
INNER JOIN employees e ON ts.empid = e.id
INNER JOIN projects p ON ts.projectid = p.id
INNER JOIN tasks t ON ts.taskid = t.id
WHERE  ts.empid=2 ;


-- datewise total working time
SELECT CONCAT(FLOOR(SUM(TIME_TO_SEC(workingtime)/3600)),':',LPAD(FLOOR((SUM(TIME_TO_SEC(workingtime) / 60)) % 60), 2, '0')) AS totalworkingHRS 
FROM timesheets WHERE  empid = 2 AND date = '2023-06-13';

-- total working time of default employee with between two dates
SELECT CONCAT(FLOOR(SUM(TIME_TO_SEC(totaltime)/3600)),':',LPAD(FLOOR((SUM(TIME_TO_SEC(totaltime)/ 60)) % 60),2,'0')) AS totalworkingHRS 
FROM timerecords WHERE  date >='2023-06-01' AND date <='2023-06-10'&& empid=1;

-- Query for finding employees working on project and their working time
SELECT 
    p.id AS projectid,
    p.title AS project_name,
    p.description AS project_description,
    p.startdate AS startDate,
    p.enddate AS endDate,
    p.status AS project_status,
    e.firstname AS employee_firstName,
    e.lastname AS employee_lastName,
    tr.date AS working_date,
    tr.totaltime AS totalTime
FROM
    projects p
INNER JOIN
    projectmembers pm ON p.id = pm.projectid
INNER JOIN
    employees e ON pm.empid = e.id
LEFT JOIN
    timerecords tr ON pm.empid = tr.empid AND tr.date >= p.startdate AND tr.date <= p.enddate
-- ORDER BY
--     p.id, e.id
    where p.id=3;
SELECT * FROM roles;


  SELECT `p`.`Id`, `p`.`Title`, `p`.`StartDate`, `p`.`TeamManagerId`
      FROM `Projects` AS `p`;



      SELECT * FROM employees;
      SELECT * FROM projectmembers;
      SELECT employees.userid FROM employees 
      INNER JOIN projectmembers ON employees.id=projectmembers.teammemberid
      WHERE projectmembers.projectid=1;


    SELECT `t`.`id` AS `TaskId`, `t`.`title` AS `Title`, `e`.`UserId` AS `TeamMemberUserId`, `t`.`status` AS `Status`, `a`.`teammemberid` AS `TeamMemberId`
      FROM `Employees` AS `e`
      INNER JOIN `projectmembers` AS `p` ON `e`.`Id` = `p`.`teammemberid`
      INNER JOIN `projects` AS `p0` ON `p`.`projectid` = `p0`.`id`
      INNER JOIN `tasks` AS `t` ON `p0`.`id` = `t`.`projectid`
      INNER JOIN `assignedtasks` AS `a` ON `e`.`Id` = `a`.`teammemberid`
      WHERE `t`.`projectid` = 1;


select employees.userid,tasks.title,tasks.status,tasks.id
 from employees
  INNER JOIN assignedtasks
   ON employees.id =assignedtasks.teammemberid
   INNER JOIN tasks
   ON assignedtasks.taskid=tasks.id
    WHERE projectid=1;

    SELECT * FROM tasks;
SELECT * FROM assignedtasks;
SELECT * FROM employees;
SELECT * FROM projects;
SELECT * FROM projectmembers;

SELECT projects.title,tasks.title,assignedtasks.teammemberid,tasks.id,employees.userid
FROM projects INNER JOIN projectmembers
ON projects.id =projectmembers.projectid
FROM 

SELECT
    p.title AS project_title,
    t.title AS task_title,
    at.teammemberid,
    t.id AS task_id,
    e.userid AS employee_userid
FROM
    employees e
INNER JOIN
    projectmembers pm ON e.id = pm.teammemberid
INNER JOIN
    tasks t ON pm.projectid = t.projectid
INNER JOIN
    projects p ON t.projectid = p.id
INNER JOIN
    assignedtasks at ON t.id = at.taskid
WHERE
    e.id = 7;

SELECT
    p.title AS project_title,
    t.title AS task_title,
    at.teammemberid,
    t.id AS task_id,
    e.userid AS employee_userid
FROM
    employees e
INNER JOIN
    projectmembers pm ON e.id = pm.teammemberid
INNER JOIN
    tasks t ON pm.projectid = t.projectid
INNER JOIN
    projects p ON t.projectid = p.id
INNER JOIN
    assignedtasks at ON t.id = at.taskid
WHERE
    e.id = 7;



SELECT
    p.title AS project_title,
    t.title AS task_title,
    at.teammemberid,
    t.id AS task_id,
    e2.userid AS employee_userid
FROM
    employees e
INNER JOIN
    projectmembers pm ON e.id = pm.teammemberid
INNER JOIN
    tasks t ON pm.projectid = t.projectid
INNER JOIN
    projects p ON t.projectid = p.id
INNER JOIN
    assignedtasks at ON t.id = at.taskid
INNER JOIN
    employees e2 ON at.teammemberid = e2.id
WHERE
    e.id = 7;


SELECT * FROM timesheets;
SELECT * FROM projects;
SELECT * FROM projectmembers;
SELECT * FROM tasks;
SELECT * FROM assignedtasks;

    SELECT tasks.id,tasks.title
    FROM tasks INNER JOIN assignedtasks
    ON tasks.id = assignedtasks.taskid
    WHERE tasks.projectid=1 AND assignedtasks.teammemberid=7 AND tasks.status= "pending";
    SELECT * FROM tasks WHERE projectid=4;


    SELECT * FROM projects;
    SELECT * FROM projectmembers;
    SELECT * FROM employees ;
    SELECT * FROM tasks;
    SELECT * FROM assignedtasks;
    SELECT * FROM timesheets;
    SELECT * FROM projects;


SELECT p.title AS project_title, t.title AS task_title
FROM projects p
INNER JOIN tasks t ON p.id = t.projectid
LEFT JOIN assignedtasks at ON t.id = at.taskid
WHERE p.teammanagerid = 4 AND at.taskid IS NULL;

SELECT * FROM employees;
SELECT * FROM projects;
SELECT * FROM projectmembers;
SELECT * FROM tasks;
SELECT * FROM assignedtasks;

  SELECT `t`.`id` AS `TaskId`, `p`.`id` AS `ProjectId`, `t`.`title` AS `TaskTitle`, `p`.`title` AS `ProjectTitle`, `t`.`date` AS `TaskDate`, `a`.`assignedon` AS `AssignedTaskDate`, `a`.`teammemberid` AS `TeamMemberId`, `e0`.`UserId` AS `TeamMemberUserId`
      FROM `Employees` AS `e`
      INNER JOIN `projects` AS `p` ON `e`.`Id` = `p`.`teammanagerid`
      INNER JOIN `tasks` AS `t` ON `p`.`id` = `t`.`projectid`
      INNER JOIN `assignedtasks` AS `a` ON `t`.`id` = `a`.`taskid`
      INNER JOIN `Employees` AS `e0` ON `a`.`teammemberid` = `e0`.`Id`
      WHERE ((`p`.`teammanagerid` = 4) AND (`a`.`assignedon` >= "2023-09-26 00:00:00")) AND (`a`.`assignedon` <=  "2023-09-26 23:59:59" );


SELECT
    t.id AS TaskId,
    p.id AS ProjectId,
    t.title AS TaskTitle,
    p.title AS ProjectTitle,
    t.date AS TaskDate,
    a.assignedon AS AssignedTaskDate,
    a.teammemberid AS TeamMemberId,
    e0.UserId AS TeamMemberUserId
FROM
    Employees AS e
INNER JOIN
    projects AS p ON e.Id = p.teammanagerid
INNER JOIN
    tasks AS t ON p.id = t.projectid
INNER JOIN
    assignedtasks AS a ON t.id = a.taskid
INNER JOIN
    Employees AS e0 ON a.teammemberid = e0.Id
WHERE
    p.teammanagerid =   4
    AND a.assignedon >= '2023-09-26 00:00:00'
    AND a.assignedon <= '2023-09-26 23:59:59';



   SELECT `t`.`id` AS `TaskId`, `t`.`projectid` AS `ProjectId`, `t`.`title` AS `Title`, `a`.`assignedon` AS `AssignedOn`, `p`.`title` AS `ProjectName`, `t`.`status` AS `Status`
      FROM `projects` AS `p`
      INNER JOIN `tasks` AS `t` ON `p`.`id` = `t`.`projectid`
      INNER JOIN `assignedtasks` AS `a` ON `t`.`id` = `a`.`taskid`
      WHERE ((`a`.`teammemberid` = 7) AND (`a`.`assignedon` >= '2023-09-27 00:00:00')) AND (`a`.`assignedon` <='2023-09-27 23:59:59')
      ORDER BY `a`.`assignedon` DESC;


SELECT * FROM assignedtasks;
 SELECT `t`.`id` AS `TaskId`, `p`.`id` AS `ProjectId`, `t`.`title` AS `TaskTitle`, `p`.`title` AS `ProjectTitle`, `t`.`date` AS `TaskDate`
      FROM `projects` AS `p`
      INNER JOIN `tasks` AS `t` ON `p`.`id` = `t`.`projectid`    
      LEFT JOIN `assignedtasks` AS `a` ON `t`.`id` = `a`.`taskid`
      WHERE ((`a`.`id` IS NULL AND (`p`.`teammanagerid` =4)) AND (`t`.`date` >= '2023-09-27 00:00:00')) AND (`t`.`date` <='2023-09-27 23:59:59');
SELECT * FROM tasks;
SELECT * FROM projectmembers;



DELIMITER $$
CREATE PROCEDURE addTaskAndAssign(IN title VARCHAR(40),
                                  IN projectId INT ,
                                  IN description TEXT,
                                  IN date DATETIME,
                                  IN status VARCHAR(20),
                                  IN fromTime DATETIME,
                                  IN toTime DATETIME,
                                  IN teamMemberId INT,
                                  IN assignedOn DATETIME)
BEGIN
DECLARE taskId INT;
START TRANSACTION;  
INSERT INTO tasks(title,projectid,description,status,date,fromtime,totime)VALUES(title,projectId,description,status,date,fromTime,toTime);
SET taskId=LAST_INSERT_ID();
INSERT INTO assignedtasks(taskid, teammemberid,assignedOn)VALUES(taskId,teamMemberId,assignedOn);
COMMIT;
END $$
DELIMITER ;

CALL `addTaskAndAssign`('Design User Profile Page',2,'Create the user profile page',NOW(),'Pending','2023-09-27 10:00:00','2023-09-28 10:00:00',9,NOW());
SELECT * FROM tasks;
SELECT * FROM assignedtasks;
DROP Procedure addTaskAndAssign;

SELECT employees.userid,tasks.title,assignedTasks.assignedon
FROM employees 
INNER JOIN projects
ON employees.id= projects.teammanagerid
INNER JOIN assignedtasks
ON employees.id=assignedtasks.teammemberid
INNER JOIN tasks
ON assignedtasks.taskid =tasks.id
WHERE projects.teammanagerid=4;


SELECT * FROM timesheets WHERE `date`='2023-06-01 00:00:00';
SELECT * FROM employees;

SELECT employees.userid,tasks.title,tasks.id,projects.id,timesheets.date
FROM projects 
INNER JOIN tasks
ON projects.id =tasks.projectid
INNER JOIN assignedtasks 
ON tasks.id =assignedtasks.taskid
INNER JOIN timesheets
ON tasks.id =timesheets.taskid
INNER JOIN employees
ON timesheets.employeeid =employees.id
WHERE (projects.teammanagerid=4) AND (timesheets.date>='2023-09-28 00:00:00') AND (timesheets.date<='2023-09-28 23:59:59');
SELECT * FROM timesheets;
SELECT * FROM tasks WHERE title="Develop User Registration Feature";

SELECT * FROM tasks;
SELECT * FROM projecttasks;

SELECT * FROM projectmembers;
SELECT * FROM projects;

SELECT * FROM timesheets;
SELECT * FROM taskallocations;
SELECT * FROM projecttasks;

SELECT  projects.title, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime))  AS totaltimespend
FROM projects
INNER JOIN projecttasks ON projects.id = projecttasks.projectid
INNER JOIN taskallocations ON projecttasks.id = taskallocations.projecttaskid
INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
WHERE  projects.teammanagerid=4
GROUP BY projects.title;

SELECT employees.userid,SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
FROM employees 
INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
WHERE projecttasks.projectid = 2  
GROUP BY employees.id
ORDER BY totalworkinghours DESC;


SELECT * FROM projecttasks WHERE projectid=1;

SELECT * FROM employees;
SELECT * FROM projects;

SELECT projects.title,COUNT(projecttasks.status),projecttasks.status
FROM projects 
INNER JOIN projecttasks
ON projects.id = projecttasks.projectid
WHERE projects.id =1
GROUP BY projecttasks.status;

SELECT * FROM projectmembers;
SELECT employees.userid,COUNT(taskallocations.id),projects.title,projecttasks.status
FROM employees
INNER JOIN taskallocations ON employees.id=taskallocations.teammemberid
INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
INNER JOIN projects ON projecttasks.projectid = projects.id
WHERE  taskallocations.teammemberid IN (7) AND (taskallocations.assignedon >="2023-09-01 00:00:00") AND (taskallocations.assignedon<="2023-09-26 00:00:00")
GROUP BY projecttasks.status,projecttasks.projectid,employees.userid; 

SELECT taskallocations.teammemberid, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime))  AS totaltimespend
FROM taskallocations
INNER JOIN timesheets ON timesheets.id=timesheets.taskallocationid
WHERE taskallocations.teammemberid=7;
SELECT * FROM taskallocations WHERE taskallocations.teammemberid=7  AND taskallocations.assignedon >="2023-09-01 00:00:00" AND taskallocations.assignedon<="2023-09-27 00:00:00";


SELECT * FROM timesheets;