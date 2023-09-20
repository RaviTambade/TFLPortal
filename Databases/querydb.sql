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