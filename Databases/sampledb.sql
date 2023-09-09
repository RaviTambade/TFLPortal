INSERT INTO roles(name)VALUES('Director');
INSERT INTO roles(name)VALUES('HR Manager');
INSERT INTO roles(name)VALUES('Team Manager');
INSERT INTO roles(name)VALUES('Team Member');

INSERT INTO userroles(userid,roleid) VALUES (1,1);
INSERT INTO userroles(userid,roleid) VALUES (2,1);
INSERT INTO userroles(userid,roleid) VALUES (3,1);
INSERT INTO userroles(userid,roleid) VALUES (4,2);
INSERT INTO userroles(userid,roleid) VALUES (5,2);
INSERT INTO userroles(userid,roleid) VALUES (6,2);
INSERT INTO userroles(userid,roleid) VALUES (7,3);
INSERT INTO userroles(userid,roleid) VALUES (8,3);
INSERT INTO userroles(userid,roleid) VALUES (9,3);
INSERT INTO userroles(userid,roleid) VALUES (10,4);
INSERT INTO userroles(userid,roleid) VALUES (11,4);
INSERT INTO userroles(userid,roleid) VALUES (12,4);


insert into directors(corporateid,userid)values(1,1);
insert into directors(corporateid,userid)values(2,1);
insert into directors(corporateid,userid)values(3,1);
insert into directors(corporateid,userid)values(4,1);
 
insert into employees(userid,department,position,hire_date,directorid)values(1,'Developing','Developer','2010-02-02',1);   
insert into employees(userid,department,position,hire_date,directorid)values(2,'Testing','Tester','2010-10-02',1); 
insert into employees(userid,department,position,hire_date,directorid)values(3,'Hardware','Assambly','2011-05-02',2); 
insert into employees(userid,department,position,hire_date,directorid)values(4,'QA','Quality Assure','2010-02-02',2); 
insert into employees(userid,department,position,hire_date,directorid)values(5,'Supplier','Supplier','2008-02-12',3); 


INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('PMSAPP','2023-02-02','2024-02-02','Project Management System App',1,'In-Progress');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('EKrushi','2020-02-02','2022-02-02','Krushi Product Management',2,'Completed');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Agro','2022-02-02','2021-02-02','Agri Produst Supplying App',3,'Pending');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('Inventory','2020-02-02','2021-02-02','Store Management App',4,'Error');
INSERT INTO projects(title,startdate,enddate,description,teammanagerid,status)VALUES('OMTB','2021-02-02','2023-02-02','Ticket booking Management App',1,'Completed');

INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,2);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,3);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(1,4);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(2,5);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,1);
INSERT INTO projectmembers(projectid,teammemberid)VALUES(3,5);

INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop feature login for Project PMS App',1,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Troubleshoot and fix bugs in module timesheet',2,'please arrange the meeting sheduling prosess quickly','2023-02-01','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Check data validation for Form adding timesheet',3,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Optimize performance of Database PMS',3,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Write unit tests for Module Timerecord',4,'please arrange the meeting sheduling prosess quickly','2023-02-02','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Refactor code for better maintainability',2,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for project PMSApp',5,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop RESTful API for EKSApp',1,'please arrange the meeting sheduling prosess quickly','2023-02-03','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for EKSApp ',4,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('SRS Document preparing',5,'please arrange the meeting sheduling prosess quickly','2023-02-04','11:00:00', '01:30:00');

INSERT INTO assignedtasks(taskid,teammemberid)VALUES(1,1);
INSERT INTO assignedtasks(taskid,teammemberid)VALUES(2,1);
INSERT INTO assignedtasks(taskid,teammemberid)VALUES(3,2);
INSERT INTO assignedtasks(taskid,teammemberid)VALUES(3,3);
INSERT INTO assignedtasks(taskid,teammemberid)VALUES(4,2);

INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-01','10:00:00','11:00:00',1,1,1);
INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-02','10:30:00','11:30:00',2,2,2);
INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-03','07:00:00','09:00:00',3,3,3);
INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-04','09:00:00','11:00:00',1,4,4);
INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-05','08:00:00','10:00:00',2,2,5);
INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-06','11:00:00','12:00:00',2,1,4);
INSERT INTO timesheets(date,fromtime,totime,employeeid,projectid,taskid)VALUES('2023-06-07','05:00:00','07:00:00',3,3,5);

INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-01 ','3:00',1);                          
INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-02 ','5:00',1);                          
INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-03 ','6:00',1);                          
INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-04 ','8:00',1);                          
INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-05 ','4:00',1);                          
INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-06 ','6:00',1);                          
INSERT INTO timerecords(date,totaltime,employeeid)VALUES('2023-06-07 ','4:00',1);                          








-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('PMSAPP','2023-02-02','2024-02-02','Project Management System App','In-Progress');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('OTBMApp','2023-05-10','2024-05-10','Online Ticket Booking management System App','Completed');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('IMSApp','2023-02-02','2024-03-03','Inventry Management System App','Pending');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EKSApp','2023-02-02','2024-03-03','E Krushi Seva App','Error');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EAApp','2023-05-10','2024-05-13','E Auto App','Completed');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('BSApp','2023-02-02','2024-03-03',' Banking System App','Error');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('TAPApp','2023-02-02','2024-03-03','Transflower Acceleration Program App','In-Progress');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('NDApp','2023-05-10','2024-05-13','Naukari Details App','Completed');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('HCApp','2023-02-02','2024-03-03',' Health Care App','Error');
-- INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EcommApp','2023-02-02','2024-03-03','ECommerce App','Completed');

-- INSERT INTO projectmembers(projectid,empid)VALUES(1,1);
-- INSERT INTO projectmembers(projectid,empid)VALUES(1,2);
-- INSERT INTO projectmembers(projectid,empid)VALUES(1,3);
-- INSERT INTO projectmembers(projectid,empid)VALUES(1,4);
-- INSERT INTO projectmembers(projectid,empid)VALUES(2,5);
-- INSERT INTO projectmembers(projectid,empid)VALUES(2,6);
-- INSERT INTO projectmembers(projectid,empid)VALUES(3,1);
-- INSERT INTO projectmembers(projectid,empid)VALUES(3,5);

-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop feature login for Project PMS App',1,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Troubleshoot and fix bugs in module timesheet',2,'please arrange the meeting sheduling prosess quickly','2023-02-01','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Check data validation for Form adding timesheet',3,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Optimize performance of Database PMS',3,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Write unit tests for Module Timerecord',4,'please arrange the meeting sheduling prosess quickly','2023-02-02','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Refactor code for better maintainability',2,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for project PMSApp',5,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop RESTful API for EKSApp',1,'please arrange the meeting sheduling prosess quickly','2023-02-03','11:00:00', '01:30:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for EKSApp ',4,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
-- INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('SRS Document preparing',5,'please arrange the meeting sheduling prosess quickly','2023-02-04','11:00:00', '01:30:00');


-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,1,1,'2023-06-01 ','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,2,1,'2023-06-01 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,3,1,'2023-06-01 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,1,'2023-06-01 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,2,'2023-06-02 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,2,'2023-06-02 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,7,2,'2023-06-02','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,8,3,'2023-06-02','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,9,3,'2023-06-02 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,10,3,'2023-06-03 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,1,3,'2023-06-03 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,2,4,'2023-06-03 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,3,4,'2023-06-03 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,4,'2023-06-04 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,5,'2023-06-04 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-06-04 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,5,'2023-06-04 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-05-04 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,1,'2023-06-05 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,2,'2023-06-05 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,1,3,'2023-06-05','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,2,4,'2023-06-06 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,3,5,'2023-06-06 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,6,'2023-06-06 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,5,6,'2023-06-06 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,6,6,'2023-06-06 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,7,7,'2023-06-07 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,8,7,'2023-06-07 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,9,7,'2023-06-07 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,10,8,'2023-06-08 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,1,8,'2023-06-08','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,2,8,'2023-06-08 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,3,9,'2023-06-09 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,4,9,'2023-06-09 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,5,9,'2023-06-09 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,6,10,'2023-06-10 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,7,10,'2023-06-10 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,10,'2023-05-10 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,5,10,'2023-06-11 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,4,1,'2023-06-11 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,1,2,'2023-06-12 ','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,2,2,'2023-06-13 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,3,3,'2023-06-13 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,3,'2023-06-14 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,3,'2023-06-14 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,4,'2023-06-15 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,7,4,'2023-06-15 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,8,4,'2023-06-16 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,9,5,'2023-06-17 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,10,5,'2023-06-18 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,1,5,'2023-06-18','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,2,6,'2023-06-18','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,3,6,'2023-06-19 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,4,6,'2023-06-20 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,5,'2023-06-21 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,5,'2023-06-21 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,7,4,'2023-06-22 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,4,'2023-05-22 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,4,'2023-06-23 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,4,'2023-06-23 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,3,'2023-05-24 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,3,'2023-06-24 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,3,'2023-06-25 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,1,3,'2023-06-25 ','10:00:00', '11:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,2,3,'2023-06-26 ','11:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,3,3,'2023-06-26 ','01:00:00', '02:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,1,'2023-06-27 ','10:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,2,'2023-06-27 ','10:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,2,'2023-06-28 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,1,'2023-06-28 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,8,2,'2023-06-28 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,9,2,'2023-06-29 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,10,2,'2023-06-29 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,1,2,'2023-06-29','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,2,2,'2023-06-29','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,3,2,'2023-06-29 ','01:00:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,2,'2023-06-29 ','11:30:00', '12:50:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,3,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,3,'2023-06-30 ','11:50:00', '12:30:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,3,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-05-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,6,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,6,'2023-06-30 ','11:00:00', '12:00:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-01 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-02 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-03 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-04 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-05 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-06 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-07 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-08 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-09 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-10 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-11 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-12 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-13 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-14 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-15 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-16 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-17 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-18 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-19 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-20 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-21 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-22 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-23 ','3:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-24 ','14:55');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-25 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-26 ','10:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-27 ','08:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-28 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-29 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-30 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-28 ','18:00');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-29 ','04:10');
-- INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-30 ','04:10');
-- INSERT INTO assigned(taskid,empid,roleid)VALUES(1,1,1);





-- INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');
-- INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-04-22',12,'2022-05-15','2023-05-22','2022-05-16');
-- INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');         

-- INSERT INTO onproject(projectid,clientid)VALUES(1,2);