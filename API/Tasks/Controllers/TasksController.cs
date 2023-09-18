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

    [HttpGet("mytasks/{teamMemberId}")]
    public async Task<List<MyTaskList>> GetMyTasksList(int teamMemberId)
    {    
    return await _service.GetMyTasksList(teamMemberId);
    }

    

}