-- Active: 1696576841746@@127.0.0.1@3306@tflportal
DROP PROCEDURE IF EXISTS getemployeeworkhoursbyactivity;
CREATE PROCEDURE getemployeeworkhoursbyactivity(IN employee_id INT,IN interval_type VARCHAR (20),IN project_id INT)
BEGIN
  SET project_id = CASE WHEN project_id = 0 THEN NULL ELSE project_id END;

    IF interval_type='year' THEN 
    SELECT MONTHNAME(timesheets.timesheetdate) as label,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetentries
    INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
    WHERE timesheets.employeeid=employee_id AND YEAR(timesheets.timesheetdate)=YEAR(CURDATE()) AND timesheetentries.projectid=COALESCE(project_id,timesheetentries.projectid)
    GROUP BY MONTH(timesheets.timesheetdate);

 ELSEIF interval_type='month' THEN 
    SELECT
    DATE_ADD(timesheets.timesheetdate, INTERVAL(1-DAYOFWEEK(timesheets.timesheetdate)) DAY) as label,
    DATE_ADD(timesheets.timesheetdate, INTERVAL(7-DAYOFWEEK(timesheets.timesheetdate)) DAY) as end_of_week,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetentries   
    INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
    WHERE  timesheets.employeeid=employee_id AND MONTH(timesheets.timesheetdate)=MONTH(CURDATE()) AND YEAR (timesheets.timesheetdate)=YEAR(CURDATE()) AND timesheetentries.projectid=COALESCE(project_id,timesheetentries.projectid)
    GROUP BY WEEK(timesheets.timesheetdate);

 ELSEIF interval_type='week' THEN 
    SELECT timesheets.timesheetdate as label,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="userstory" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as userstory,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="task" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as task,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="bug" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as bug,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="issues" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as issues,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="meeting" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as meeting,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="learning" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as learning,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="mentoring" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as mentoring,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="break" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as break,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="clientcall" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as clientcall,
    CAST(((SUM( CASE WHEN  timesheetentries.workcategory="other" THEN TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ELSE 0 END))/3600)AS DECIMAL(10,2)) as other
    FROM timesheetentries
    INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
    WHERE  timesheets.employeeid=employee_id AND timesheets.timesheetdate >= DATE_ADD(CURDATE(), INTERVAL(1-DAYOFWEEK(CURDATE())) DAY) AND 
    timesheets.timesheetdate<= DATE_ADD(CURDATE(), INTERVAL(7-DAYOFWEEK(CURDATE())) DAY)  AND timesheetentries.projectid=COALESCE(project_id,timesheetentries.projectid)
    GROUP BY timesheets.timesheetdate;
  END IF;
END;



-- CALL getemployeeworkhoursbyactivity(10,'month',0);

CREATE PROCEDURE getActivityCounts(OUT  todo INT,OUT inprogress INT,OUT completed INT)
BEGIN
    SELECT COUNT(*) INTO todo FROM activities WHERE status = 'todo';
    SELECT COUNT(*) INTO inprogress FROM activities WHERE status = 'inprogress';
    SELECT COUNT(*) INTO completed FROM activities WHERE status = 'completed';
END;

-- SELECT TIMEDIFF('10:12:22','10:22:22');
 -- projectwise time allocation
  -- SELECT projects.title as projectName,
  --   CAST(((SUM( TIME_TO_SEC(TIMEDIFF(totime,fromtime)) ))/3600)AS DECIMAL(10,2)) 
  --   FROM timesheetentries
  --   INNER JOIN timesheets on timesheetentries.timesheetid=timesheets.id
  --   INNER JOIN projects on timesheetentries.projectid=projects.id
  --   WHERE  timesheets.employeeid=10 
  --   GROUP BY timesheetentries.projectid;



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



