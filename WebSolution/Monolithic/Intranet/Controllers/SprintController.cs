using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services;
using TFLPortal.Services.Interfaces;
using ProjectTask=TFLPortal.Models.Task;
namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/sprints")]
public class SprintController : ControllerBase
{
    private readonly ISprintService _sprintService;
    public SprintController(ISprintService service)
    {
        _sprintService = service;
    }

    [HttpGet("projects/{projectId}")]
    public async Task<List<Sprint>> GetSprints(int projectId)
    {
        return await _sprintService.GetSprints(projectId);
    }

    [HttpGet("projects/{projectId}/date/{date}")]
    public async Task<Sprint> GetOngoingSprints(int projectId, DateOnly date)
    {
        return await _sprintService.GetCurrentSprint(projectId, date);
    }


 [HttpGet("project/tasks/{sprintId}")]
public async Task<List<ProjectTask>> GetSprintWorks(int sprintId)
{
    List<ProjectTask> tasks = await _sprintService.GetSprintTasks(sprintId);
    return tasks;
}



[HttpPost]
public async Task<bool> Insert(Sprint theSprint)
{
    bool status = await _sprintService.Insert(theSprint);
    return status;
}

 [HttpDelete]
public async Task<bool> Delete(int sprintId)
{
    bool status = await _sprintService.Delete(sprintId);
    return status;
}

 [HttpPut]
public async Task<bool> Update(int sprintId,Sprint theSprint)
{
    bool status = await _sprintService.Update(sprintId,theSprint);
    return status;
}
}
