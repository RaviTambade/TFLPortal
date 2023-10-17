Format----------

URL            : http://localhost:5242/api/TeamManagersBIController/projectwork/{teamManagerId}
Description    :
Parameter      :
Body           :
Response       : {
                 }
Token required : Yes/No
-------------------------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------------------------


BIService- 
         TeamManagerBiController -
                                  1) http://localhost:5242/api/TeamManagersBIController/projectwork/{teamManagerId} => Return Total Project Work Hours
                                  2) http://localhost:5242/api/TeamManagersBIController/projectstatuscount/{teamManagerId} => Return Project Status Wise Count
                                  3) http://localhost:5242/api/TeamManagersBIController/allocatedtasks/{teamMemberId} => Return Allocated Task Overview
                                  4) http://localhost:5242/api/TeamManagersBIController/totaltimespend/{teamMemberId} => Return Total Time Spend By Members on project
                                  5) http://localhost:5242/api/TeamManagersBIController/projectpercentage/{projectId} => Return Projects Completion Percentage
                                  6) http://localhost:5242/api/TeamManagersBIController/memberworkhours/{projectId}/{givenDate}/{dateRange} => Returm Total Project Work Hour Of Team Members


         TeamMemberBiController  -
                                 1) http://localhost:5242/api/TeamMemberBIController/totaltimespend/{teamMemberId} => Return Total Time Spend By Members 
                                 2) http://localhost:5242/api/TeamMemberBIController/memberworkhours/{teamMemberId}/{givenDate}/{dateRange} => Return Total Project Work Hour Of   Members
                                 3) http://localhost:5242/api/TeamMemberBIController/memberaveragheworkhours/{userId} =>  Return Calculate Average Time of employrr
                                 4) http://localhost:5242/api/TeamMemberBIController/memberoverduetasks/{userId} =>  Return Over Due Task Of Member which have 7 days to get overdue
 
--------------------------------------------------------------------------------------------------------------------------------------------
          
HRService  - 
            1) http://localhost:5230/api/EmployeesController/employeeid/{userId} => Return employee ID by user ID
            2) http://localhost:5230/api/EmployeesController/userId/{employeeId} => Return user ID by employee ID
            3) http://localhost:5230/api/EmployeesController/employeeinfo/{employeeId} => Returns Employee Detail Information
            4) http://localhost:5230/api/EmployeesController/useridbymanager/{managerId} =>   Return list of employee of that manager id 

--------------------------------------------------------------------------------------------------------------------------------------------

Project  -
           1) http://localhost:5248/api/projects/lists/{teammemberid} =>Returns projectlist of teammember
           2) http://localhost:5248/api/projects/teammembers/{projectid} => Returns teammembers of project
           3) http://localhost:5248/api/projects/tasks/{projectId}/{timeperiod} =>Returns tasks list of a project
           4) http://localhost:5248/api/projects/teammember/{teammemberid} =>Returns projectname and its id  
           5) http://localhost:5248/api/projects/mamager/{managerid} =>Returns projectlist of team manager
           6) http://localhost:5248/api/projects/unassignedtask/{projectId}/{timePeriod} =>Returns unassigned task of a project
           7) http://localhost:5248/api/projects/assignedtask/{projectId}/{timePeriod} =>Returns assigned task of a project
           8) http://localhost:5248/api/projects/unassignedtask/{projectId}/{timePeriod} =>Returns unassigned task of a project
           9) http://localhost:5248/api/projects/employeeidwithuserid/{projectId} =>Returns list of employeeid and userid of teammembers of a project
          10) http://localhost:5248/api/projects/title/{projectid} =>Returns a project title
          11) http://localhost:5248/api/projects/managerprojects/{managerid} => Returns managers projects 
          12) http://localhost:5248/api/projects/teammemberids/{teammanagerid} => Returns the team member ids works under a team manager
          13) http://localhost:5248/api/projects/addproject => add a new project
          14) http://localhost:5248/api/projects/edit => edit a existing project
          15) http://localhost:5248/api/projects/delete/{projectid} => delete a existing project
        

----------------------------------------------------------------------------------------------------------------------------------------------------------

Tasks -
     TaskController -
        1)  http://localhost:5283/api/tasks/count/{projectId}  =>  Return Completed tasks count and total tasks count of that project
        2)  http://localhost:5283/api/tasks/mytasks/{teamMemberId}/{timePeriod} => Return Employees tasks
        3)  http://localhost:5283/api/tasks/taskdetail/{taskId} =>  Retun Normal Detail of task which id passes
        4)  http://localhost:5283/api/tasks/moretaskdetail/{taskId} =>  Retrun Total Details of tasks ehich id passes
        5)  http://localhost:5283/api/tasks/alltasks/{employeeId}/{timePeriod} => 
        6)  http://localhost:5283/api/tasks/tasktitle/{employeeId}/{projectId}/{status} => When Passes empid proid and status that time it returns taskid and title
        7)  http://localhost:5283/api/tasks/addtask => for inserting or adding new tasks
        8)  http://localhost:5283/api/tasks/details/{taskId} =>  retrn only id title desc of tasks
        9)  http://localhost:5283/api/tasks/status/{taskId}/{updateStatus} => for updating previous tasks details

     TaskAllocationsController- 
         1)  http://localhost:5283/api/taskallocation =>  for allocating task of certain project id to certain teammember on certain date


-----------------------------------------------------------------------------------------------------------------------------------------------------------

TimeSheets -
         1) http://localhost:5221/api/timesheets/list/{employeeId}/{timePeriod} => Returns timesheet list of a employee
         2) http://localhost:5221/api/timesheets/details/{timesheetid} => Returns timesheet details of a timesheet
         3) http://localhost:5221/api/timesheets/add => Add new timesheet
         4) http://localhost:5221/api/timesheets/timesheetlist/{managerid}/{timePeriod} => Returns timesheet list of employees by managerid

----------------------------------------------------------------------------------------------------------------------------------------------------------------

UserRollsManagement -
         1)  http://localhost:5031/api/userroles => return lis of empid with userid and roleid 
         2)  http://localhost:5031/api/userroles/{userRoleId} => getting employyee role by their userid
         3)  http://localhost:5031/api/userroles/roles/{userId} => getting role of this id
         4)  http://localhost:5031/api/userroles                =>  for inserting new role
         5)  http://localhost:5031/api/userroles/usersid/{role} => while entering role and then retun their id 
         6)  http://localhost:5031/api/userroles/               => For updating previous role 
         7)  http://localhost:5031/api/userroles/{userRoleId} =>  for deleting and users role id