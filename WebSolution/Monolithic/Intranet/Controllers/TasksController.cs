using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services;
using ProjectTask=TFLPortal.Models.Task;
using TFLPortal.Services.Interfaces;
namespace Intranet.Controllers;

[ApiController]
[Route("/api/tasks/")]
public class TasksController : ControllerBase
{
    private readonly ITaskService  _service;
   
    public TasksController(ITaskService service)
    {
        _service = service;

    }

    [HttpGet("projects/{projectId}")]
   public async Task<List<ProjectTask>> GetAllTasks(int projectId)
    {
 
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId);
        return tasks;
    }
   

    [HttpGet]
    public async Task<List<ProjectTask>> GetAllTasks()
    {
        List<ProjectTask> tasks = await _service.GetAllTasks();
        return tasks;
    }

   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<ProjectTask>> GetAllMemberTasks(int employeeId)
    {
        List<ProjectTask> tasks = await _service.GetMemberTasks(employeeId);
        return tasks;
    }
   
    [HttpGet("projects/{projectId}/type/{projectWorkType}")]
    public async Task<List<ProjectTask>>GetAllTasks(int projectId, string taskType)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,taskType);
        return tasks;
    }

     [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<List<ProjectTask>> GetAllTasks(int projectId,int employeeId)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,employeeId);
        return tasks;
    }

     
    [HttpGet("projects/{projectId}/employees/{employeeId}/status/{status}")]
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int employeeId,string status)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,employeeId,status);
        return tasks;
    }

    [HttpGet("sprints/{sprintId}/employees/{employeeId}/status/{status}")]
    public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int employeeId, string status)
    {
        return await _service.GetAllSprintTasks(sprintId,employeeId,status);
    }


    [HttpGet("projects/{employeeWorkId}")]
    public async Task<ProjectTask> GetTask(int taskId)
    {
        ProjectTask task = await _service.GetTask(taskId);
         
            return task;
    }

    [HttpPost]
    public async Task<bool> AddTask(ProjectTask activity)
    {
        bool status = await _service.AddTask(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectTask>> GetAllTasks(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(fromAssignedDate,toAssignedDate);
        return tasks;
    }

    

    [HttpGet("employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectTask>> GetAllTasks(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(employeeId,fromAssignedDate,toAssignedDate);
        return tasks;
    }
 


   [HttpPut("project/{employeeWorkId}/status/{Status}")]
    public async Task<bool> UpdateTask(string Status,int employeeWorkId)
    {
        bool status = await _service.UpdateTask(Status, employeeWorkId);
        return status;

    }


 [HttpGet("EmployeeWorkCount")]
    public async Task<ProjectTaskStatusCountResponse> GetTasksCount()
    {
        ProjectTaskStatusCountResponse task = await _service.GetTasksCount();
        return task;
    }

    [HttpGet("project/{projectId}/date/{date}")]
    public async Task<List<ProjectTask>> GetTodaysTasks(int projectId,DateTime date)
    {
        List<ProjectTask> tasks = await _service.GetTodaysTasks(projectId,date);
        return tasks;
    }


    [HttpDelete]
    public async Task<bool> Delete(int taskId)
    {
        bool  status = await _service.Delete(taskId);
        return status;
    }

   
}
