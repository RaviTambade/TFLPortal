select * From timerecords where empid=2;
select * from employees;
select * from users;
select * from roles;
select * from userroles;
select * from projectmembers;
select * from projects;
select * from clients;
select * from onproject;
select * from assigned;
select * from timesheets;
select * from timerecords where empid =2;
select * from projects;
select * from tasks;
select * from payrollCycles;


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




