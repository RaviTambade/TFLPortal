## REST API EndPoints
### BIService API

#### TeamManagerBiController

 

  - <b>URL</b> : http://localhost:5242/api/TeamManagersBI/projectwork/{teamManagerId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: POST
  - <b>Description</b>: Return Total Project Work Hours
  - <b>Body</b>:

      ```console
      {
      "startDate": "2023-08-17T08:53:55.542Z",
      "endDate": "2023-10-17T08:53:55.542Z"
      }
      ```
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

    ```console
    [
      {
    "id": 1,
    "title": "PMSAPP",
    "totalTimeSpend": 637
      },
     {
    "id": 4,
    "title": "Inventory",
    "totalTimeSpend": 600
     },
     {
    "id": 5,
    "title": "OMTB",
    "totalTimeSpend": 600
      }
    ]
    ```


- <b>URL</b> : http://localhost:5242/api/TeamManagersBIController/projectstatuscount/{teamManagerId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Project Status Wise Count
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
  ```console
  {
    "projectTitle": "PMSAPP",
    "status": "Pending",
    "taskStatusCount": 201
  },
  {
    "projectTitle": "PMSAPP",
    "status": "In-Progress",
    "taskStatusCount": 199
  },
  {
    "projectTitle": "PMSAPP",
    "status": "Completed",
    "taskStatusCount": 200
  },
```


- <b>URL</b> : http://localhost:5242/api/TeamManagersBIController/allocatedtasks/{teamMemberId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Allocated Task Overview
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
  ```console
  {
    "userId": 10,
    "taskAllocationCount": 38,
    "title": "PMSAPP",
    "status": "In-Progress",
    "projectId": 1
  },
  {
    "userId": 10,
    "taskAllocationCount": 38,
    "title": "Inventory",
    "status": "Pending",
    "projectId": 4
  },
  {
    "userId": 10,
    "taskAllocationCount": 41,
    "title": "Inventory",
    "status": "Completed",
    "projectId": 4
  },
  ```












URL            

```console
http://localhost:5242/api/TeamManagersBIController/totaltimespend/{teamMemberId}
```

Description    : Return Total Time Spend By Members on project

Parameter      : teamMemberId

Body           : 

```console
{
  "startDate": "2023-08-17T09:22:26.915Z",
  "endDate": "2023-10-17T09:22:26.915Z"
}
```
              
Response       : 

```console
 {
    "userId": 10,
    "totalWorkingHour": 244
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5242/api/TeamManagersBIController/projectpercentage/{projectId}
```

Description    : Return Projects Completion Percentage

Parameter      : projectId

Body           : none
              
Response       : 

```console
 {
    "projectId": 1,
    "completionPercentage": 33.33
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5242/api/TeamManagersBIController/memberworkhours/{projectId}/{givenDate}/{dateRange}
```

Description    : Returm Total Project Work Hour Of Team Members

Parameter      : projectId , givenDate, dateRange

Body           : none
              
Response       : 

```console
  {
    "userId": 12,
    "totalWorkingHour": 2
  },
  {
    "userId": 13,
    "totalWorkingHour": 2
  },
  {
    "userId": 17,
    "totalWorkingHour": 2
  },
  {
    "userId": 20,
    "totalWorkingHour": 2
  },
  {
    "userId": 23,
    "totalWorkingHour": 2
  }
```

Token required : No

<hr>

<h4>TeamMemberBiController </h4>
<hr>

URL            

```console
http://localhost:5242/api/TeamMemberBIController/totaltimespend/{teamMemberId}
```

Description    : Return Total Time Spend By Members 

Parameter      : teamMemberId

Body           : 

```console
{
  "startDate": "2023-08-17T09:31:26.449Z",
  "endDate": "2023-10-17T09:31:26.449Z"
}
```
              
Response       : 

```console
  {
    "userId": 10,
    "totalWorkingHour": 244
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5242/api/TeamMemberBIController/memberworkhours/{teamMemberId}/{givenDate}/{dateRange}
```

Description    : Return Total Project Work Hour Of   Members

Parameter      : teamMemberId , givenDate, dateRange

Body           : None

              
Response       : 

```console
  {
    "userId": 10,
    "totalWorkingHour": 4
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5242/api/TeamMemberBIController/memberaveragheworkhours/{userId}
```

Description    :  Return Calculate Average Time of employee

Parameter      : userId

Body           : None

              
Response       : 

```console
   2.0263
```

Token required : No

<hr>


URL            

```console
 http://localhost:5242/api/TeamMemberBIController/memberoverduetasks/{userId}
```

Description    :  Return Over Due Task Of Member which have 7 days to get overdue

Parameter      : userId

Body           : None

              
Response       : 

```console
   {
    "dueDate": "2023-10-17T09:39:46.020Z",
    "status": "string",
    "projectTitle": "string",
    "userId": 0,
    "taskTitle": "string"
  }
```

Token required : No

<hr>

<h4 align="center">HRServiceController </h4>
<hr>

URL            

```console
 http://localhost:5230/api/EmployeesController/employeeid/{userId}
```

Description    :  Return employee ID passing by user ID

Parameter      : userId

Body           : None

              
Response       : 

```console
 20
```

Token required : No

<hr>

URL            

```console
http://localhost:5230/api/EmployeesController/userId/{employeeId}
```

Description    :  Return user ID passing by employee ID

Parameter      : employeeId

Body           : None

              
Response       : 

```console
 23
```

Token required : No

<hr>

URL            

```console
http://localhost:5230/api/EmployeesController/employeeinfo/{employeeId}
```

Description    :  Returns Employee Detail Information

Parameter      : employeeId

Body           : None

              
Response       : 

```console
{
  "department": "Development Team",
  "position": "Software Architect",
  "hireDate": "2021-02-15T00:00:00"
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5230/api/EmployeesController/useridbymanager/{managerId}
```

Description    :  Return list of employeeId of that manager id 

Parameter      : managerId

Body           : None

              
Response       : 

```console
  10,
  11,
  15,
  16,
  19
```

Token required : No

<hr>

<h3 align="center">Tasks </h3>
<hr>
<h4>TaskController</h4>

URL            

```console
 http://localhost:5283/api/tasks/count/{projectId} 
```

Description    :  Return Completed tasks count and total tasks count of that project

Parameter      : projectId

Body           : None

              
Response       : 

```console
 {
  "completedTaskCount": 200,
  "totalTaskCount": 600
}
```

Token required : No

<hr>

URL            

```console
  http://localhost:5283/api/tasks/mytasks/{teamMemberId}/{timePeriod} 
```

Description    :  Return Employees tasks

Parameter      : teamMemberId , timePeriod

Body           : None

              
Response       : 

```console
 {
    "taskId": 276,
    "projectId": 1,
    "title": "Task 276",
    "assignedOn": "2023-10-17T00:00:00",
    "projectName": "PMSAPP",
    "status": "Pending"
  },
  {
    "taskId": 376,
    "projectId": 1,
    "title": "Task 376",
    "assignedOn": "2023-10-17T00:00:00",
    "projectName": "PMSAPP",
    "status": "Completed"
  },
```

Token required : No

<hr>

URL            

```console
 http://localhost:5283/api/tasks/taskdetail/{taskId}
```

Description    :  Retun Normal Detail of task which id passes

Parameter      : taskId

Body           : None

              
Response       : 

```console
{
  "taskId": 276,
  "task": "Task 276",
  "status": "Pending",
  "projectId": 1,
  "projectName": "PMSAPP"
}
```

Token required : No

<hr>


URL            

```console
http://localhost:5283/api/tasks/moretaskdetail/{taskId}
```

Description    : Retrun Total Details of tasks which id passes

Parameter      : taskId

Body           : None

              
Response       : 

```console
{
  "taskId": 276,
  "date": "2023-10-04T00:00:00",
  "assignedTaskDate": "2023-10-17T00:00:00",
  "description": "Description 276",
  "fromTime": "2023-10-04T00:00:00",
  "toTime": "2023-10-04T01:00:00"
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5283/api/tasks/alltasks/{employeeId}/{timePeriod} 
```

Description    : when passing emp id and time period that time gives lists between that time period

Parameter      : empId, timePeriod (weakly)

Body           : None

              
Response       : 

```console
 {
    "taskId": 275,
    "projectName": "PMSAPP",
    "taskTitle": "Task 275",
    "assignedTaskDate": "2023-10-16T00:00:00",
    "teamMemberId": 16,
    "teamMemberUserId": 19
  },
  {
    "taskId": 375,
    "projectName": "PMSAPP",
    "taskTitle": "Task 375",
    "assignedTaskDate": "2023-10-16T00:00:00",
    "teamMemberId": 16,
    "teamMemberUserId": 19
  },
```

Token required : No

<hr>

URL            

```console
http://localhost:5283/api/tasks/tasktitle/{employeeId}/{projectId}/{status}
```

Description    : When Passes empid projid and status that time it returns tasklist of that status

Parameter      : empId, projectId , status

Body           : None

              
Response       : 

```console
{
    "taskId": 6,
    "title": "Task 6"
  },
  {
    "taskId": 21,
    "title": "Task 21"
  },
  {
    "taskId": 36,
    "title": "Task 36"
  },
  {
    "taskId": 51,
    "title": "Task 51"
  },
  {
    "taskId": 66,
    "title": "Task 66"
  },
```

Token required : No

<hr>

URL            

```console
http://localhost:5283/api/tasks/addtask
```

Description    :  for inserting or adding new tasks

Parameter      : empId, timePeriod (weakly)

Body           : 

```console
{
  "id": 0,
  "title": "string",
  "description": "string"
}
```

              
Response       : 

```console
true/false
```

Token required : No

<hr>

URL            

```console
http://localhost:5283/api/tasks/details/{taskId}
```

Description    :  retrn only id title desc of tasks

Parameter      : taskId

Body           : None
              
Response       : 

```console
{
  "id": 276,
  "title": "Task 276",
  "description": "Description 276"
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5283/api/tasks/status/{taskId}/{updateStatus}
```

Description    :  for updating previous tasks details

Parameter      : taskId , updatestatus

Body           : None
              
Response       : 

```console
true/false
```

Token required : No

<hr>

<h4>TaskAllocationsController</h4>


URL            

```console
http://localhost:5283/api/taskallocation
```

Description    :  for allocating task of certain project id to certain teammember on certain date

Parameter      : None

Body           : 

```console
{
  "id": 0,
  "assignedOn": "2023-10-17T10:25:34.627Z",
  "projectTaskId": 0,
  "teamMemberId": 0
}
```
              
Response       : 

```console
true/false
```

Token required : No

<hr>

    
<h3 align="center">TimeSheets </h3>

<h4>TimeSheetsController </h4>
<hr>

URL            

```console
http://localhost:5221/api/timesheets/list/{employeeId}/{timePeriod}
```

Description    :   Returns timesheet list of a employee

Parameter      : employeeId, timePerion (yesterday)

Body           : None

              
Response       : 

```console
 {
    "timeSheetId": 1838,
    "date": "2023-10-16T00:00:00",
    "status": "Pending",
    "taskTitle": "Task 80"
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5221/api/timesheets/details/{timesheetid}
```

Description    :  Returns timesheet details of a timesheet

Parameter      : timeSheetId

Body           : None

              
Response       : 

```console
{
  "timeSheetId": 198,
  "date": "2023-07-06T00:00:00",
  "fromTime": "14:00:00",
  "toTime": "16:00:00",
  "description": "Description ",
  "status": "Pending",
  "taskTitle": "Task 486"
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5221/api/timesheets/add
```

Description    :  Add new timesheet

Parameter      : none

Body           : 

```console
{
  "id": 0,
  "date": "2023-10-17T10:48:15.464Z",
  "fromTime": {
    "ticks": 0
  },
  "toTime": {
    "ticks": 0
  },
  "description": "string",
  "status": "string",
  "taskAllocationId": 0
}
```

              
Response       : 

```console
true/false
```

Token required : No

<hr>

URL            

```console
http://localhost:5221/api/timesheets/timesheetlist/{managerid}/{timePeriod}
```

Description    : Returns timesheet list of employees by managerid

Parameter      : managerId , timeperion (yesterday)

Body           : None

              
Response       : 

```console
{
    "taskId": 76,
    "timeSheetId": 116,
    "projectId": 1,
    "taskTitle": "Task 76",
    "employeeUserId": 10,
    "timeSheetDate": "2023-10-16T00:00:00"
  },
  {
    "taskId": 77,
    "timeSheetId": 362,
    "projectId": 1,
    "taskTitle": "Task 77",
    "employeeUserId": 11,
    "timeSheetDate": "2023-10-16T00:00:00"
  },
  {
    "taskId": 78,
    "timeSheetId": 608,
    "projectId": 1,
    "taskTitle": "Task 78",
    "employeeUserId": 15,
    "timeSheetDate": "2023-10-16T00:00:00"
  },
```

Token required : No

<hr>

<h3 align="center">UserRollsManagement </h3>

<h4>UserRollsManagementController </h4>
<hr>

URL            

```console
 http://localhost:5031/api/userroles
```

Description    : return lis of empid with userid and roleid 

Parameter      : none

Body           : None

              
Response       : 

```console
 {
    "id": 1,
    "userId": 1,
    "roleId": 1
  },
  {
    "id": 2,
    "userId": 2,
    "roleId": 1
  },
  {
    "id": 3,
    "userId": 3,
    "roleId": 1
  },
  {
    "id": 4,
    "userId": 4,
    "roleId": 2
  },
```

Token required : No

<hr>

URL            

```console
http://localhost:5031/api/userroles/{userRoleId}
```

Description    : getting employyee role by their userid

Parameter      : userId

Body           : none



              
Response       : 

```console
{
  "id": 23,
  "userId": 23,
  "roleId": 4
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5031/api/userroles/roles/{userId}
```

Description    : getting role of this id

Parameter      : userId

Body           : none

              
Response       : 

```console
"Team Member"
```

Token required : No

<hr>

URL            

```console
http://localhost:5031/api/userroles   
```

Description    :  for inserting new role

Parameter      : none

Body           : 

```console
{
  "id": 0,
  "userId": 0,
  "roleId": 0
}
```

              
Response       : 

```console
true/false
```

Token required : No

<hr>

URL            

```console
http://localhost:5031/api/userroles/usersid/{role}   
```

Description    :  while entering role and then retun their id

Parameter      : role (Team Manager)

Body           : None
              
Response       : 

```console
  "7,8,9"
```

Token required : No

<hr>


URL            

```console
http://localhost:5031/api/userroles/ 
```

Description    : For updating previous role 

Parameter      : none

Body           : 

```console
  {
  "id": 0,
  "userId": 0,
  "roleId": 0
}
```
              
Response       : 

```console
  true/false
```

Token required : No

<hr>

URL            

```console
http://localhost:5031/api/userroles/{userRoleId}
```

Description    : for deleting and users role id

Parameter      : userRoleId

Body           : none

              
Response       : 

```console
  true/false
```

Token required : No

<hr>

<h4>ProjectsController </h4>

URL            

```console
 http://localhost:5248/api/projects/lists/{teammemberid}
```

Description    : Returns projectlist of teammember

Parameter      : teammemberid

Body           : None
              
Response        :

```console
{
"Id" :
"Title" :
"StartDate" :
"Status" :
"TeamManagerId" : 
"TeamManagerUserId" :
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/teammembers/{projectid}
```

Description    :  Returns teammembers userid of project

Parameter      : projectid

Body           : None
              
Response        :

```console
[{
    1,2,3,4,5
}]
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/tasks/{projectid}/{timeperiod}
```

Description    : Returns tasks list of a project

Parameter      : projectid

Body           : None
              
Response        :

```console
[{
"TaskId" :
"Title" :
"Status" :
"TaskAllocationDate" : 
"TeamMemberUserId" :
}]
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/teammember/{teammemberid}
```

Description    : Returns projectname and its id of a team member

Parameter      : projectid

Body           : None
              
Response        :

```console
[{
"ProjectId" :
"Title" :
}]
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/manager/{managerid}
```

Description    : Returns projectlist of team manager

Parameter      : managerid

Body           : None
              
Response        :

```console
{
"Id" :
"Title" :
"StartDate" :
"Status" :
"TeamManagerId" : 
"TeamManagerUserId" :
  }
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/unassignedtask/{projectId}/{timePeriod}
```

Description    : Returns unassigned task of a project

Parameter      : projectid ,timeperiod

Body           : None
              
Response        :

```console
{
"ProjectId" :
"TitleId" :
"title" :
"Status" :
"ProjectName" :
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/assignedtask/{projectId}/{timePeriod} 
```

Description    : Returns assigned task of a project

Parameter      : projectid ,timeperiod

Body           : None
              
Response        :

```console
{
"ProjectId" :
"TitleId" :
"title" :
"Status" :
"ProjectName" :
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/employeeidwithuserid/{projectId}
```

Description    : Returns list of employeeid and userid of teammembers of a project

Parameter      : projectid 

Body           : None
              
Response        :

```console
{
"EmployeeId" :
"UserId" :
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/title/{projectid}
```

Description    : Returns a project title

Parameter      : projectid 

Body           : None
              
Response        :

```console
{
"PMSAPP"
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/managerprojects/{managerid}
```

Description    : Returns projects under a manager

Parameter      : managerid 

Body           : None
              
Response        :

```console
{
"ProjectId":
"Title":
}
```

Token required : No

<hr>

URL            

```console
http://localhost:5248/api/projects/teammemberids/{teammanagerid}
```

Description    : Returns the team member ids works under a team manager

Parameter      : teammanagerid 

Body           : None
              
Response        :

```console
[{
1,2,3
}]
```

Token required : No

<hr>

URL            

```console
 http://localhost:5248/api/projects/addproject
```

Description    : add a new project

Parameter      : None 

Body           : 

```console
{
"Title":
"StartDate":
"EndDate":
"Description":
"TeamManagerId":
"Status":
}
```
              
Response        :

```console
{
    true/false
}
```

Token required : No

<hr>

URL            

```console
 http://localhost:5248/api/projects/edit
```

Description    :edit a existing project

Parameter      : None 

Body           : 

```console
{
"Id":
"Title":
"StartDate":
"EndDate":
"Description":
"TeamManagerId":
"Status":
}
```
              
Response        :

```console
{
    true/false
}
```

Token required : No

URL            

```console
http://localhost:5248/api/projects/delete/{projectid}
```

Description    :delete a existing project

Parameter      : projectid 

Body           : None

              
Response        :

```console
{
    true/false
}
```

Token required : No
    
        