using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

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
    public async Task<List<Sprint>> GetOngoingSprints(int projectId, DateOnly date)
    {
        return await _sprintService.GetOngoingSprints(projectId, date);
    }


     [HttpGet("project/employeeWork/{sprintId}")]
    public async Task<List<EmployeeWork>> GetSprintWorks(int sprintId)
    {
        return await _sprintService.GetSprintWorks(sprintId);
    }
}
