-- Active: 1696576841746@@127.0.0.1@3306@pms

DROP PROCEDURE IF EXISTS getorcreatetimesheet;
CREATE PROCEDURE getorcreatetimesheet(IN timesheetdate date,IN empid INT,OUT timesheetid INT)
BEGIN
DECLARE tid INT;
 SELECT id into tid from timesheets  where timesheets.timesheetdate =timesheetdate and timesheets.employeeid=empid;
 IF tid IS NULL THEN
 INSERT INTO timesheets(timesheetdate,employeeid) VALUES (timesheetdate,empid);
 SET timesheetid=LAST_INSERT_ID();
ELSE
 SET timesheetid=tid;
END IF;
END;

-- CALL getorcreatetimesheet('2013-01-15',10,@timesheetid);
-- SELECT * FROM timesheets;
-- SELECT @timesheetid;


-- DELIMITER //
-- CREATE PROCEDURE GetEmployeeWorkingHours(
--     IN projectId INT,
--     IN givenDate DATE,
--     IN dateRange VARCHAR(10)
-- )
-- BEGIN
--     IF dateRange = 'today' THEN
--     SET givenDate=CURDATE();
--      SELECT employees.userid, SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
--     FROM employees 
--     INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
--     INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
--     INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
--     WHERE projecttasks.projectid = projectId
--     AND DATE(timesheets.date) = givenDate
--     GROUP BY employees.id
--     ORDER BY totalworkinghours DESC;


--     ELSEIF dateRange = 'yesterday' THEN
--         SELECT employees.userid, SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
--     FROM employees 
--     INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
--     INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
--     INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
--     WHERE projecttasks.projectid = projectId
--     AND DATE(timesheets.date) =DATE_SUB(givenDate,INTERVAL 1 DAY)
--     GROUP BY employees.id
--     ORDER BY totalworkinghours DESC;


--     ELSEIF dateRange = 'weekly' THEN
--     SELECT employees.userid, SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
--     FROM employees 
--     INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
--     INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
--     INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
--     WHERE projecttasks.projectid = projectId
--     AND  DATE(timesheets.date) BETWEEN DATE_SUB(givenDate, INTERVAL (DAYOFWEEK(givenDate) - 1) DAY) 
--     AND DATE_ADD(givenDate, INTERVAL (7 - DAYOFWEEK(givenDate)) DAY)
--     GROUP BY employees.id
--     ORDER BY totalworkinghours DESC;


--     ELSEIF dateRange = 'monthly' THEN
--         SELECT employees.userid, SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
--     FROM employees 
--     INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
--     INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
--     INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
--     WHERE projecttasks.projectid = projectId
--     AND  DATE(timesheets.date) BETWEEN DATE_SUB(givenDate, INTERVAL DAY(givenDate) - 1 DAY)
--     AND LAST_DAY(givenDate)
--     GROUP BY employees.id
--     ORDER BY totalworkinghours DESC;

--       ELSEIF dateRange = 'custom' THEN
--     SET @startDateTime = CONCAT(givenDate, ' 00:00:00');
--     SET @endDateTime = CONCAT(givenDate, ' 23:59:59');
    
--     SELECT employees.userid, SUM(TIMESTAMPDIFF(SECOND, timesheets.fromtime, timesheets.totime)) / 3600 AS totalworkinghours
--     FROM employees 
--     INNER JOIN taskallocations ON employees.id = taskallocations.teammemberid
--     INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
--     INNER JOIN projecttasks ON taskallocations.projecttaskid = projecttasks.id
--     WHERE projecttasks.projectid = projectId
--     AND timesheets.date >= @startDateTime
--     AND timesheets.date <= @endDateTime
--     GROUP BY employees.id
--     ORDER BY totalworkinghours DESC;
--     END IF;
-- END //
-- DELIMITER ;



-- -- working hours of team member 
-- DELIMITER //
-- CREATE PROCEDURE GetEmployeeWorkHours(IN teamMemberId INT,
--                                       IN givenDate DATE,
--                                       IN dateRange VARCHAR(10))
--     BEGIN
--     IF dateRange = 'today' THEN
--         SET givenDate=CURDATE();
-- SELECT employees.userid AS UserId, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) AS TotalWorkingHour
-- FROM taskallocations
-- INNER JOIN employees ON taskallocations.teammemberid =employees.id
-- INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
-- WHERE taskallocations.teammemberid IN (teamMemberId) AND Date(timesheets.date)=givenDate GROUP BY employees.userid;

--   ELSEIF dateRange = 'yesterday' THEN   
--   SELECT employees.userid AS UserId, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) AS TotalWorkingHour
-- FROM taskallocations
-- INNER JOIN employees ON taskallocations.teammemberid =employees.id
-- INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
-- WHERE taskallocations.teammemberid IN (teamMemberId) AND Date(timesheets.date)=DATE_SUB(givenDate,INTERVAL 1 DAY) GROUP BY employees.userid;

--  ELSEIF dateRange = 'weekly' THEN
--   SELECT employees.userid AS UserId, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) AS TotalWorkingHour
-- FROM taskallocations
-- INNER JOIN employees ON taskallocations.teammemberid =employees.id
-- INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
-- WHERE taskallocations.teammemberid IN (teamMemberId) AND Date(timesheets.date)=DATE_SUB(givenDate,INTERVAL 1 DAY) GROUP BY employees.userid;

--  ELSEIF dateRange = 'monthly' THEN
--   SELECT employees.userid AS UserId, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) AS TotalWorkingHour
-- FROM taskallocations
-- INNER JOIN employees ON taskallocations.teammemberid =employees.id
-- INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
-- WHERE taskallocations.teammemberid IN (teamMemberId) AND  DATE(timesheets.date) BETWEEN DATE_SUB(givenDate, INTERVAL DAY(givenDate) - 1 DAY)
--     AND LAST_DAY(givenDate) GROUP BY employees.userid;

--         ELSEIF dateRange = 'custom' THEN
--     SET @startDateTime = CONCAT(givenDate, ' 00:00:00');
--     SET @endDateTime = CONCAT(givenDate, ' 23:59:59');
--     SELECT employees.userid AS UserId, SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) AS TotalWorkingHour
-- FROM taskallocations
-- INNER JOIN employees ON taskallocations.teammemberid =employees.id
-- INNER JOIN timesheets ON taskallocations.id = timesheets.taskallocationid
-- WHERE taskallocations.teammemberid IN (teamMemberId)  AND timesheets.date >= @startDateTime
--     AND timesheets.date <= @endDateTime GROUP BY employees.userid;
--     END IF;
-- END //
-- DELIMITER ;



-- -- average task duration 
-- DELIMITER //
-- CREATE PROCEDURE CalculateAverageTime(IN userId INT)
-- BEGIN
-- SELECT AVG(taskTime) as AverageTime
-- FROM (
--     SELECT SUM(TIMESTAMPDIFF(HOUR, timesheets.fromtime, timesheets.totime)) as taskTime
--     FROM employees
--     INNER JOIN taskallocations
--     ON employees.id = taskallocations.teammemberid
--     INNER JOIN timesheets
--     ON taskallocations.id = timesheets.taskallocationid
--     INNER JOIN projecttasks
--     ON taskallocations.projecttaskid = projecttasks.id
--     WHERE employees.userid =userId
--     AND projecttasks.status = 'Completed'
--     GROUP BY projecttasks.id
-- ) AS completedTasks;
-- END //
-- DELIMITER;


-- DELIMITER //
-- CREATE PROCEDURE getOverDueTasks(IN userId INT)
-- BEGIN
-- SELECT
--     projecttasks.date AS dueDate,
--     projecttasks.status AS status ,
--     projects.title AS projectTitle ,
--     employees.userid AS userId,
--     tasks.title AS taskTitle
-- FROM
-- tasks
-- INNER JOIN 
--     projecttasks ON tasks.id = projecttasks.taskid
-- INNER JOIN
--     projects ON projecttasks.projectid = projects.id
--     INNER JOIN
--      taskallocations ON projecttasks.id = taskallocations.projecttaskid
--      INNER JOIN 
--      employees ON taskallocations.teammemberid= employees.id
-- WHERE
--     projecttasks.status = 'Pending'
--         AND projecttasks.date BETWEEN NOW() AND DATE_ADD(NOW(), INTERVAL 7 DAY) 
--     AND employees.userid = userId;
--         END //
-- DELIMITER;



-- DELIMITER //
-- CREATE PROCEDURE getTotalStatusWiseTasks(IN teamManagerId INT)
-- BEGIN
-- SELECT projects.title AS Title,COUNT(projecttasks.status) AS TaskCount,projecttasks.status AS Status
--                                FROM projects 
--                                INNER JOIN projecttasks
--                                ON projects.id = projecttasks.projectid
--                                WHERE projects.teammanagerid = teamManagerId
--                                GROUP BY projecttasks.status,projects.title;
--                                END //
--                                DELIMITER ;



