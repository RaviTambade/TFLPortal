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
                                 2) http://localhost:5242/api/TeamMemberBIController/memberworkhours/{teamMemberId}/{givenDate}/{dateRange} => Return Total Project Work Hour Of Members
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

          http://localhost:5248/api/projects/addproject => add a new project
          http://localhost:5248/api/projects/edit => edit a existing project
          http://localhost:5248/api/projects/delete/{projectid} => delete a existing project
          http://localhost:5221/api/timesheets/list/{employeeId}/{timePeriod} => Returns timesheet list of a employee
          http://localhost:5221/api/timesheets/details/{timesheetid} => Returns timesheet details of a timesheet
          http://localhost:5221/api/timesheets/add => Add new timesheet
          http://localhost:5221/api/timesheets/timesheetlist/{managerid}/{timePeriod} => Returns timesheet list of employees by managerid

----------------------------------------------------------------------------------------------------------------------------------------------------------

Tasks -
        1)
