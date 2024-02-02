using Microsoft.AspNetCore.Mvc;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;
using ProjectTask=TFLPortal.Models.Task;
using TFLPortal.Helpers;
namespace Intranet.Controllers;

[ApiController]
[Route("/api/sprints")]
public class SprintController : ControllerBase
{
    private readonly ISprintService _sprintService;
    public SprintController(ISprintService service)
    {
        _sprintService = service;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("projects/{projectId}")]
    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _sprintService.GetSprints(projectId);
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("projects/{projectId}/date/{date}")]
    public async Task<Sprint> GetCurrentSprint(int projectId, DateOnly date)
    {
        return await _sprintService.GetCurrentSprint(projectId, date);
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("{sprintId}/tasks")]
    public async Task<List<ProjectTask>> GetSprintTasks(int sprintId)
    {
        List<ProjectTask> tasks = await _sprintService.GetSprintTasks(sprintId);
        return tasks;
    }


    [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> Insert(Sprint theSprint)
    {
        bool status = await _sprintService.Insert(theSprint);
        return status;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpDelete]
    public async Task<bool> Delete(int sprintId)
    {
        bool status = await _sprintService.Delete(sprintId);
        return status;
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpPut]
    public async Task<bool> Update(int sprintId,Sprint theSprint)
    {
        bool status = await _sprintService.Update(sprintId,theSprint);
        return status;
    }
}
