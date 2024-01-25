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


 [HttpGet("project/employeeWork/{sprintId}")]
public async Task<List<ProjectTask>> GetSprintWorks(int sprintId)
{
    List<ProjectTask> tasks = await _sprintService.GetSprintTasks(sprintId);
    return tasks;
}

}