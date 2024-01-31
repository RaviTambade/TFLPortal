using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services;
using ProjectTask=TFLPortal.Models.Task;
using TFLPortal.Services.Interfaces;
namespace Intranet.Controllers;

[ApiController]
[Route("/api/tasks")]
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

   
    [HttpGet("members/{memberId}")]
    public async Task<List<ProjectTask>> GetAllMemberTasks(int memberId)
    {
        List<ProjectTask> tasks = await _service.GetMemberTasks(memberId);
        return tasks;
    }
   
    [HttpGet("projects/{projectId}/type/{taskType}")]
    public async Task<List<ProjectTask>>GetAllTasks(int projectId, string taskType)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,taskType);
        return tasks;
    }

     [HttpGet("projects/{projectId}/members/{memberId}")]
    public async Task<List<ProjectTask>> GetAllTasks(int projectId,int memberId)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,memberId);
        return tasks;
    }

     
    [HttpGet("projects/{projectId}/members/{memberId}/status/{status}")]
    public async Task<List<ProjectTask>> GetAllTasks(int projectId, int memberId,string status)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(projectId,memberId,status);
        return tasks;
    }

    [HttpGet("sprints/{sprintId}/members/{memberId}/status/{status}")]
    public async Task<List<ProjectTask>> GetAllSprintTasks(int sprintId, int memberId, string status)
    {
        return await _service.GetAllSprintTasks(sprintId,memberId,status);
    }


    [HttpGet("{taskId}")]
    public async Task<ProjectTask> GetTask(int taskId)
    {
        ProjectTask task = await _service.GetTask(taskId);
         
            return task;
    }

    [HttpPost]
    public async Task<bool> AddTask(ProjectTask task)
    {
        bool status = await _service.AddTask(task);
        return status;

    }

    [HttpGet("from/{fromDate}/to/{toDate}")]
    public async Task<List<ProjectTask>> GetAllTasks(DateTime fromDate,DateTime toDate)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(fromDate,toDate);
        return tasks;
    }

    

    [HttpGet("members/{memberId}/from/{from}/to/{to}")]
    public async Task<List<ProjectTask>> GetAllTasks(int memberId,DateTime from,DateTime to)
    {
        List<ProjectTask> tasks = await _service.GetAllTasks(memberId,from,to);
        return tasks;
    }
 


   [HttpPut("{taskId}/status/{Status}")]
    public async Task<bool> UpdateTask(string taskStatus,int taskId)
    {
        bool status = await _service.UpdateTask(taskStatus, taskId);
        return status;

    }


 [HttpGet("Count")]
    public async Task<AllTaskCount> GetTasksCount()
    {
        AllTaskCount task = await _service.GetTasksCount();
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
