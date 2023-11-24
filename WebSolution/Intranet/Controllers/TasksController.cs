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
}
