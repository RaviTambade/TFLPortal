using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services;
using ProjectTask=TFLPortal.Models.Task;
using TFLPortal.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/Tasks")]
public class TasksController : ControllerBase
{
    private readonly ITaskService _service;
   
    public TasksController(ITaskService service,ExternalApiService apiService)
    {
        _service = service;

    }

    [HttpGet("selectedProject/{projectId}")]
   public async Task<List<ProjectTask>> GetEmployeeWorkByProject(int projectId)
    {
 
        List<ProjectTask> tasks = await _service.GetTasksByProject(projectId);
        return tasks;
    }
   

    [HttpGet]
    public async Task<List<ProjectTask>> GetAllEmployeeWork()
    {
        List<ProjectTask> tasks = await _service.GetAllTasks();
        return tasks;
    }

   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<ProjectTask>> GetAllEmployeeWorks(int employeeId)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(employeeId);
        return tasks;
    }
   
    [HttpGet("projects/{projectId}/type/{projectWorkType}")]
    public async Task<List<ProjectTask>>GetProjectTasksByType(int projectId, string projectWorkType)
    {
        List<ProjectTask> tasks = await _service.GetProjectTasksByType(projectId,projectWorkType);
        return tasks;
    }

     [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<List<ProjectTask>> GetProjectEmployeeWorks(int projectId,int employeeId)
    {
        List<ProjectTask> tasks = await _service.GetProjectTasks(projectId,employeeId);
        return tasks;
    }

     
    [HttpGet("projects/{projectId}/employees/{employeeId}/status/{status}")]
    public async Task<List<ProjectTask>> GetProjectEmployeeWorks(int projectId, int employeeId,string status)
    {
        List<ProjectTask> tasks = await _service.GetProjectTasks(projectId,employeeId,status);
        return tasks;
    }

    [HttpGet("sprints/{sprintId}/employees/{employeeId}/status/{status}")]
    public async Task<List<ProjectTask>> GetSprintEmployeeWorks(int sprintId, int employeeId, string status)
    {
        return await _service.GetSprintTasks(sprintId,employeeId,status);
    }


    [HttpGet("projects/{employeeWorkId}")]
    public async Task<ProjectTask> GetEmployeeWorkDetails(int employeeWorkId)
    {
        ProjectTask task = await _service.GetTaskDetails(employeeWorkId);
         
            return task;
    }

    [HttpPost]
    public async Task<bool> AddTask(ProjectTask activity)
    {
        bool status = await _service.AddTask(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectTask>> GetAllEmployeesWorksBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectTask> tasks = await _service.GetAllTasksBetweenDates(fromAssignedDate,toAssignedDate);
        return tasks;
    }

    

    [HttpGet("employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectTask>> GetTasksBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectTask> tasks = await _service.GetTasksBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return tasks;
    }
 


   [HttpPut("project/{employeeWorkId}/status/{Status}")]
    public async Task<bool> UpdateTask(string Status,int employeeWorkId)
    {
        bool status = await _service.UpdateTask(Status, employeeWorkId);
        return status;

    }


  [HttpGet("employeework/todo/{projectId}/{assignedTo}")]
    public async Task<List<ProjectTask>> GetAllTask(int projectId,int assignedTo)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,assignedTo);
        return tasks;
    }


 [HttpGet("EmployeeWorkCount")]
    public async Task<EmployeeWorkStatusCount> GetEmployeesWorkCount()
    {
        EmployeeWorkStatusCount task = await _service.GetTasksCount();
        return task;
    }

    [HttpGet("project/{projectId}/date/{date}")]
    public async Task<List<ProjectTask>> GetTodayEmployeesWork(int projectId,DateTime date)
    {
        List<ProjectTask> tasks = await _service.GetTodaysTasks(projectId,date);
        return tasks;
    }

   
}
