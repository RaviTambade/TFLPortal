using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.Tasks.Entities;
 using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Services.Interfaces;
namespace Transflower.PMSApp.Tasks.Controller;
[ApiController]
[Route("api/tasks")]
public class TasksController : ControllerBase
{
    private readonly ITaskService _service;
    public TasksController(ITaskService service)
    {
        _service = service;
    }

    [HttpGet("count/{projectId}")]
    public async Task<ProjectTaskCount> GetProjectTaskCount(int projectId)
    {
        return await _service.GetProjectTaskCount(projectId);
    }

    [HttpGet("mytasks/{teamMemberId}/{timePeriod}")]
    public async Task<List<MyTaskList>> GetMyTasksList(int teamMemberId, string timePeriod)
    {
        return await _service.GetMyTasksList(teamMemberId, timePeriod);
    }


    [HttpGet("{projectId}/{teamMemberId}")]
     public async Task<List<TaskResponse>> GetTasks(int projectId,int teamMemberId)
    {
        return await _service.GetTasks( projectId,teamMemberId);
    }

    [HttpGet("taskdetail/{taskId}")]
    public async Task<TaskDetail> GetTaskDetail(int taskId)
    {
        return await _service.GetTaskDetail(taskId);
    }

    [HttpGet("moretaskdetail/{taskId}")]
    public async Task<MoreTaskDetail> GetMoreTaskDetail(int taskId)
    {
        return await _service.GetMoreTaskDetail(taskId);
    }

    [HttpGet("alltasks/{employeeId}/{timePeriod}")]
    public async Task<List<AllTaskList>> GetAllTaskList(int employeeId, string timePeriod)
    {
        return await _service.GetAllTaskList(employeeId, timePeriod);
    }

    [HttpGet("tasktitle/{employeeId}/{projectId}/{status}")]
    public async Task<List<TaskIdWithTitle>> GetTaskIdWithTitle(int employeeId, int projectId, string status)
    {
        return await _service.GetTaskIdWithTitle(employeeId, projectId, status);
    }

    [HttpPost("addtask")]
    public async Task<bool> AddTask(Transflower.PMSApp.Tasks.Entities.Task task)
    {
        return await _service.AddTask(task);
    }

    [HttpGet("details/{taskId}")]
    public async Task<Transflower.PMSApp.Tasks.Entities.Task> GetDetailsById(int taskId)
    {
      return await _service.GetDetailsById(taskId);
    }

    [HttpPatch("status/{taskId}/{updateStatus}")]
    public async Task<bool> UpdateTaskStatus(int taskId,string updateStatus)
    {
    return await _service.UpdateTaskStatus(taskId,updateStatus);    
    }
    





}