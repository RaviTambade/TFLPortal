using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/tasks")]
public class TasksController : ControllerBase
{
    private readonly ITaskService _service;
   
    public TasksController(ITaskService service)
    {
        _service = service;

    }

    [HttpGet("{projectId}/{memberId}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Task>> GetTasksOfMember(int projectId, int memberId)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Task> tasks = await _service.GetTasksOfMember(projectId,memberId);
        return tasks;
    }

    [HttpGet("taskdetails/{taskId}")]
    public async Task<Transflower.TFLPortal.TFLOBL.Entities.Task> GetTaskDetails(int taskId)
    {
        Transflower.TFLPortal.TFLOBL.Entities.Task task = await _service.GetTaskDetails(taskId);
        return task;
    }

    [HttpGet("insert")]
    public async Task<bool> Insert(Transflower.TFLPortal.TFLOBL.Entities.Task task)
    {
        bool status = await _service.Insert(task);
        return status;

    }
}
