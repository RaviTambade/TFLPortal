## REST API EndPoints
### BIService API

#### TeamManagerBiController

 

  - <b>URL</b> : /api/TeamManagersBI/projectwork/{teamManagerId}
  - /api/TeamManagersBI/projectworkhours/{teamManagerId}
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


  - <b>URL</b> : /api/TeamManagersBI/projectstatuscount/{teamManagerId}
  - /api/TeamManagersBI/projects/statuscount/{teamManagerId}
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

           
  - <b>URL</b> :/api/TeamManagersBI/allocatedtasks/{teamMemberId}
  - /api/TeamManagersBI/allocatedtasks/{teamMemberId}
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

          


  - <b>URL</b> :/api/TeamManagersBI/totaltimespend/{teamMemberId}
  - /api/TeamManagersBI/totaltimespend/{teamMemberId}
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


  - <b>URL</b> : /api/TeamManagersBI/projectpercentage/{projectId}
  - /api/TeamManagersBI/projectprogress/{projectId}
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

  - <b>URL</b> : /api/TeamManagersBI/memberworkhours/{projectId}/{givenDate}/{dateRange}
  - /api/TeamManagersBI/members/workinghours/{projectId}/{givenDate}/{dateRange}
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

  - <b>URL</b> : /api/TeamMemberBI/totaltimespend/{teamMemberId}
  - /api/TeamMemberBI/workinghours/{teamMemberId}
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

  - <b>URL</b> : /api/TeamMemberBI/memberworkhours/{teamMemberId}/{givenDate}/{dateRange}
  - /api/TeamMemberBI/workinghours/{teamMemberId}/{givenDate}/{dateRange}
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

  - <b>URL</b> : /api/TeamMemberBI/memberaverageworkhours/{userId}
  - /api/TeamMemberBI/averageworkinghours/{userId}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return Calculate Average Time of employee
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      2.0263
    ```

  - <b>URL</b> : /api/TeamMemberBI/memberoverduetasks/{userId}
  - /api/TeamMemberBI/overduetasks/{userId}
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

  - <b>URL</b> : /api/Employees/employeeid/{userId}
  - /api/Employees/employeeid/{userId}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return employee ID when passing  user ID
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
      20
    ```

  - <b>URL</b> : /api/Employees/userId/{employeeId}
  - /api/Employees/userId/{employeeId}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return user ID passing by employee ID
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
    {
      23
    }
    ``` 

  - <b>URL</b> : /api/Employees/employeeinfo/{employeeId}
  - /api/Employees/info/{employeeId}
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

  - <b>URL</b> : /api/Employees/useridbymanager/{managerId}
  - /api/Employees/userid/{managerId}
  - <b>Method</b>: GET
  - <b>Description</b>:  Return list of employeeId of that manager id 
  - <b>Body</b>: Not Required

  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 
     
    ```console
    {
      10,
      11,
      15,
      16,
      19
    }
    ```






### Tasks Service API

#### TaskController

  - <b>URL</b> : /api/tasks/count/{projectId} 
  - /api/tasks/completed/count/{projectId} 
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

  - <b>URL</b> : /api/tasks/mytasks/{teamMemberId}/{timePeriod} 
  - /api/tasks/mytasks/{teamMemberId}/{timePeriod} 
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

  - <b>URL</b> :  /api/tasks/taskdetail/{taskId}
  - /api/tasks/details/{taskId}
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

  - <b>URL</b> : /api/tasks/moretaskdetail/{taskId}
  - /api/tasks/alldetail/{taskId}
  - <b>Method</b>: GET
  - <b>Description</b>: Return All Details of tasks which id passes
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

  - <b>URL</b> :  /api/tasks/alltasks/{employeeId}/{timePeriod} 
  - /api/tasks/alltasks/{employeeId}/{timePeriod} 
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
  - <b>URL</b> : /api/tasks/tasktitle/{employeeId}/{projectId}/{status} 
  - /api/tasks/title/{employeeId}/{projectId}/{status}
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

  - <b>URL</b> : /api/tasks/addtask
  - /api/tasks/addtask
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
  {
     true/false
  }
  ```
 
  - <b>URL</b> : /api/tasks/details/{taskId}
  - /api/tasks/{taskId}
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

  - <b>URL</b> : /api/tasks/status/{taskId}/{updateStatus}
  - /api/tasks/{taskId}/{updateStatus}
  - <b>Method</b>: PATCH
  - <b>Description</b>:  for updating previous tasks details
  - <b>Body</b>: Not Required
  - <b>JWTToken Header</b>: Not required
  - <b>Response</b> = 

   ```console
      true/false
   ```



#### TaskAllocationsController API

  - <b>URL</b> : /api/taskallocation
  - /api/taskallocation
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

  - <b>URL</b> : /api/timesheets/list/{employeeId}/{timePeriod}
  - /api/timesheets/list/{employeeId}/{timePeriod}
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

  - <b>URL</b> : /api/timesheets/details/{timesheetid}
  - /api/timesheets/details/{timesheetid}
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

  - <b>URL</b> : /api/timesheets/add
  - /api/timesheets/add
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

  - <b>URL</b> : /api/timesheets/timesheetlist/{managerid}/{timePeriod}
  - /api/timesheets/employees/list/{managerid}/{timePeriod}
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


### UserRollsManagement API

#### UserRollsManagement

- <b>URL</b>: /api/userroles
- /api/userroles             
- <b>Method</b>: GET
- <b>Description</b>: return list of employeeid with userid and roleid 
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required
- <b>Response</b> = 

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


- <b>URL</b>: /api/userroles/{userRoleId} 
- /api/userroles/{userRoleId}        
- <b>Method</b>: GET
- <b>Description</b>:getting employyee role by their userid
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required
- <b>Response</b> = 

```console
{
  "id": 23,
  "userId": 23,
  "roleId": 4
}
```


- <b>URL</b>: /api/userroles/roles/{userId}
- /api/userroles/roles/{userId}
- <b>Method</b>: GET
- <b>Description</b>: getting role of given userid
- <b>Body</b>: Not Required
- <b>JWTToken Header</b>: Not required
- <b>Response</b> =  

```console
"Team Member"
```

- <b>URL</b>: /api/userroles   
- /api/userroles   
- <b>Method</b>: POST
- <b>Description</b>:  for inserting new role
- <b>Body</b>:

```console
{
  "id": 0,
  "userId": 0,
  "roleId": 0
}
```

- <b>JWTToken Header</b>: Not required
- <b>Response</b> = 

```console
{
true/false
}
```

- <b>URL</b>: /api/userroles/userid/{role}   
- /api/userroles/userid/{role}   
- <b>Method</b>: GET
- <b>Description</b>: while entering role and then return their id
- <b>Body</b>: Not required
- <b>JWTToken Header</b>: Not required
- <b>Response</b> = 

```console
  "7,8,9"
```

- <b>URL</b>: /api/userroles/ 
- /api/userroles/ 
- <b>Method</b>: PUT
- <b>Description</b>: For updating previous role 
- <b>Body</b>: 

```console
  {
  "id": 0,
  "userId": 0,
  "roleId": 0
}
```
            
- <b>JWTToken Header</b>: Not required
- <b>Response</b> = 

```console
{
  true/false
}
```

- <b>URL</b>: /api/userroles/{userRoleId}
- /api/userroles/{userRoleId}
- <b>Method</b>: DELETE
- <b>Description</b>: for deleting and users role id
- <b>Body</b>: Not required   
- <b>JWTToken Header</b>: Not required
- <b>Response</b> = 

```console
{
  true/false
}
```

    
### Projects API

- <b>URL</b> : /api/projects/lists/{teammemberid}
- /api/projects/list/{teammemberid}
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

- <b>URL</b>: /api/projects/teammembers/{projectid}
- /api/projects/teammembers/{projectid}
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

- <b>URL</b>: /api/projects/tasks/{projectid}/{timeperiod}
- /api/projects/tasks/{projectid}/{timeperiod}
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

- <b>URL</b>: /api/projects/teammember/{teammemberid}
- /api/projects/teammember/{teammemberid}
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

- <b>URL</b>: /api/projects/manager/{managerid}  
- /api/projects/manager/{managerid}      
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

- <b>URL</b>: /api/projects/unassignedtask/{projectId}/{timePeriod}
- /api/projects/unassignedtask/{projectId}/{timePeriod}
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

- <b>URL</b>: /api/projects/assignedtask/{projectId}/{timePeriod} 
- /api/projects/assignedtask/{projectId}/{timePeriod} 
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

- <b>URL</b>: api/projects/employeeidwithuserid/{projectId}
- api/projects/employeeidwithuserid/{projectId}
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

- <b>URL</b>: api/projects/title/{projectid}
- api/projects/title/{projectid} 
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

- <b>URL</b>: api/projects/managerprojects/{managerid}
- api/projects/managerprojects/{managerid} 
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

- <b>URL</b>: api/projects/teammemberids/{teammanagerid}
- api/projects/teammemberids/{teammanagerid}
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

- <b>URL</b>: api/projects/addproject
- api/projects/addproject
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

- <b>URL</b>: /api/projects/edit
- /api/projects/edit
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

- <b>URL</b>: /api/projects/delete/{projectid}
- /api/projects/delete/{projectid}
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
    
         