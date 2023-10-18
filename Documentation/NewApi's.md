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

          


  - <b>URL</b> : http://localhost:5242/api/TeamManagersBIController/totaltimespend/{teamMemberId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: POST
  - <b>Description</b>:  Return Total Time Spend By Members on project
  - <b>Body</b>:

  ```console
     {
      "startDate": "2023-08-17T09:22:26.915Z",
      "endDate": "2023-10-17T09:22:26.915Z"
     }
  ```

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

    ```console
       {
        "userId": 10,
        "totalWorkingHour": 244
       }
    ```


  - <b>URL</b> : http://localhost:5242/api/TeamManagersBIController/projectpercentage/{projectId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Projects Completion Percentage
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

      ```console
        {
          "projectId": 1,
          "completionPercentage": 33.33
        }
      ```

  - <b>URL</b> : http://localhost:5242/api/TeamManagersBIController/memberworkhours/{projectId}/{givenDate}/{dateRange}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Returm Total Project Work Hour Of Team Members
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

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



#### TeamMemberBiController 

  - <b>URL</b> : http://localhost:5242/api/TeamMemberBIController/totaltimespend/{teamMemberId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: POST
  - <b>Description</b>:  Return Total Time Spend By Members 
  - <b>Body</b>: 

  ```console
     {
       "startDate": "2023-08-17T09:31:26.449Z",
       "endDate": "2023-10-17T09:31:26.449Z"
     }
  ```

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
     ```console
        {
          "userId": 10,
          "totalWorkingHour": 244
        }
     ```

  - <b>URL</b> : http://localhost:5242/api/TeamMemberBIController/memberworkhours/{teamMemberId}/{givenDate}/{dateRange}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Total Project Work Hour Of  Members
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
     ```console
        {
          "userId": 10,
          "totalWorkingHour": 4
        }
     ```

  - <b>URL</b> : http://localhost:5242/api/TeamMemberBIController/memberaveragheworkhours/{userId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Calculate Average Time of employee
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      2.0263
    ```

  - <b>URL</b> : http://localhost:5242/api/TeamMemberBIController/memberoverduetasks/{userId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Over Due Task Of Member which have 7 days to get overdue
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      {
        "dueDate": "2023-10-17T09:39:46.020Z",
        "status": "string",
        "projectTitle": "string",
        "userId": 0,
        "taskTitle": "string"
      }
    ```







### HRService API

  - <b>URL</b> : http://localhost:5230/api/EmployeesController/employeeid/{userId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return employee ID passing by user ID
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      20
    ```

  - <b>URL</b> : http://localhost:5230/api/EmployeesController/userId/{employeeId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return user ID passing by employee ID
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      23
    ``` 

  - <b>URL</b> : http://localhost:5230/api/EmployeesController/employeeinfo/{employeeId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Returns Employee Detail Information
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      {
        "department": "Development Team",
        "position": "Software Architect",
        "hireDate": "2021-02-15T00:00:00"
      }
    ```

  - <b>URL</b> : http://localhost:5230/api/EmployeesController/useridbymanager/{managerId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return list of employeeId of that manager id 
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      10,
      11,
      15,
      16,
      19
    ```






### Tasks Service API

#### TaskController

  - <b>URL</b> :  http://localhost:5283/api/tasks/count/{projectId} 
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return list of employeeId of that manager id 
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      {
        "completedTaskCount": 200,
        "totalTaskCount": 600
      }
    ```

  - <b>URL</b> :  http://localhost:5283/api/tasks/mytasks/{teamMemberId}/{timePeriod} 
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Employees tasks
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
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

  - <b>URL</b> :  http://localhost:5283/api/tasks/taskdetail/{taskId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>: Retun Normal Detail of task which id passes
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
        {
          "taskId": 276,
          "task": "Task 276",
          "status": "Pending",
          "projectId": 1,
          "projectName": "PMSAPP"
        }
    ```    

  - <b>URL</b> :  http://localhost:5283/api/tasks/moretaskdetail/{taskId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>: Retrun Total Details of tasks which id passes
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
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

  - <b>URL</b> :  http://localhost:5283/api/tasks/alltasks/{employeeId}/{timePeriod} 
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  when passing emp id and time period that time gives lists between that time period
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
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
  - <b>URL</b> :  http://localhost:5283/api/tasks/tasktitle/{employeeId}/{projectId}/{status} 
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  When Passes empid projid and status that time it returns tasklist of that status
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
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

  - <b>URL</b> : http://localhost:5283/api/tasks/addtask
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: POST
  - <b>Description</b>:  for inserting or adding new tasks
  - <b>Body</b>: 

    ```console
      {
        "id": 0,
        "title": "string",
        "description": "string"
      }
    ```

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
  ```console
     true/false
  ```
 
  - <b>URL</b> : http://localhost:5283/api/tasks/details/{taskId}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  retrn only id title desc of tasks
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

  ```console
    {
      "id": 276,
      "title": "Task 276",
      "description": "Description 276"
    }
  ```

  - <b>URL</b> : http://localhost:5283/api/tasks/status/{taskId}/{updateStatus}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: PATCH
  - <b>Description</b>:  for updating previous tasks details
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

   ```console
      true/false
   ```



#### TaskAllocationsController API

  - <b>URL</b> : http://localhost:5283/api/taskallocation
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: POST
  - <b>Description</b>:  for allocating task of certain project id to certain teammember on certain date
  - <b>Body</b>: 

    ```console
      {
        "id": 0,
        "assignedOn": "2023-10-17T10:25:34.627Z",
        "projectTaskId": 0,
        "teamMemberId": 0
      }
    ```

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

   ```console
      true/false
   ```



    
### TimeSheets API 

  - <b>URL</b> : http://localhost:5221/api/timesheets/list/{employeeId}/{timePeriod}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Returns timesheet list of a employee
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

   ```console
      {
          "timeSheetId": 1838,
          "date": "2023-10-16T00:00:00",
          "status": "Pending",
          "taskTitle": "Task 80"
        }
   ```

  - <b>URL</b> : http://localhost:5221/api/timesheets/details/{timesheetid}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>:  Returns timesheet details of a timesheet
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

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

  - <b>URL</b> : http://localhost:5221/api/timesheets/add
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: POST
  - <b>Description</b>: Add new timesheet
  - <b>Body</b>: 

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

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

   ```console
    true/false
   ```

  - <b>URL</b> : http://localhost:5221/api/timesheets/timesheetlist/{managerid}/{timePeriod}
  - api/collections/farmers/{farmerId}/verifiedstatus/{paymentStatus}
  - <b>Method</b>: GET
  - <b>Description</b>: Returns timesheet list of employees by managerid
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

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



    
###ProjectsController 

- <b>URL</b> : http://localhost:5248/api/projects/lists/{teammemberid}
- <b>Method</b>: GET
- <b>Description</b>: Returns projectlist of teammember
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required
- <b>Response</b> =              :

```console
[{
"Id" :
"Title" :
"StartDate" :
"Status" :
"TeamManagerId" : 
"TeamManagerUserId" :
}]
```

- <b>URL</b>: http://localhost:5248/api/projects/teammembers/{projectid}
- <b>Method</b>: GET
- <b>Description</b>: Returns teammembers userid of Project
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required          
- <b>Response</b> = 

```console
[{
    1,2,3,4,5
}]
```

- <b>URL</b>: http://localhost:5248/api/projects/tasks/{projectid}/{timeperiod}
- <b>Method</b>: GET
- <b>Description</b>: Returns tasks list of a project
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required  
- <b>Response</b> =

```console
[{
"TaskId" :
"Title" :
"Status" :
"TaskAllocationDate" : 
"TeamMemberUserId" :
}]
```

- <b>URL</b>: http://localhost:5248/api/projects/teammember/{teammemberid}
- <b>Method</b>: GET
- <b>Description</b>: Returns projectname and its id of a team member
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required  
- <b>Response</b> =

```console
[{
"ProjectId" :
"Title" :
}]
```

- <b>URL</b>:http://localhost:5248/api/projects/manager/{managerid}       
- <b>Method</b>: GET
- <b>Description</b>: Returns projectlist of team manager
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

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

- <b>URL</b>: http://localhost:5248/api/projects/unassignedtask/{projectId}/{timePeriod}
- <b>Method</b>: GET
- <b>Description</b>: Returns unassigned task of a project
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
{
"ProjectId" :
"TitleId" :
"title" :
"Status" :
"ProjectName" :
}
```

- <b>URL</b>: http://localhost:5248/api/projects/assignedtask/{projectId}/{timePeriod} 
- <b>Method</b>: GET
- <b>Description</b>: Returns assigned task of a project
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
{
"ProjectId" :
"TitleId" :
"title" :
"Status" :
"ProjectName" :
}
```

- <b>URL</b>: http://localhost:5248/api/projects/employeeidwithuserid/{projectId}
- <b>Method</b>: GET
- <b>Description</b>: Returns list of employeeid and userid of teammembers of a project
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
{
"EmployeeId" :
"UserId" :
}
```

- <b>URL</b>: http://localhost:5248/api/projects/title/{projectid}
- <b>Method</b>: GET
- <b>Description</b>: Returns a project title
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
{
"PMSAPP"
}
```

- <b>URL</b>:http://localhost:5248/api/projects/managerprojects/{managerid}
- <b>Method</b>: GET
- <b>Description</b>: Returns projects under a manager
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
{
"ProjectId":
"Title":
}
```

- <b>URL</b>: http://localhost:5248/api/projects/teammemberids/{teammanagerid}
- <b>Method</b>: GET
- <b>Description</b>: Returns the team member ids works under a team manager
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
[{
1,2,3
}]
```

- <b>URL</b>: http://localhost:5248/api/projects/addproject
- <b>Method</b>: POST
- <b>Description</b>: add a new project
- <b>Body</b> =

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
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> = 

```console
{
    true/false
}
```

- <b>URL</b>: http://localhost:5248/api/projects/edit
- <b>Method</b>: PUT
- <b>Description</b>: edit a existing project
- <b>Body</b> = 

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
              
- <b>Response</b> = 

```console
{
    true/false
}
```

- <b>URL</b>:http://localhost:5248/api/projects/delete/{projectid}
- <b>Method</b>: DELETE
- <b>Description</b>:delete a existing project
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required           
- <b>Response</b> =

```console
{
    true/false
}
```
    
         