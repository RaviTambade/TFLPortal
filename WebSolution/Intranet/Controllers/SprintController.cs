using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/sprints")]
public class SprintController : ControllerBase
{
    private readonly ISprintService _sprintService;
     private readonly ExternalApiService _apiService;

    public SprintController(ISprintService service,ExternalApiService apiService)
    {
        _sprintService = service;
        _apiService=apiService;
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
    public async Task<List<SprintDetails>> GetSprintWorks(int sprintId)
    {
       List<SprintDetails> employees = await _sprintService.GetSprintWorks(sprintId);
        string userIds=string.Join(',', employees.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        return employees; 
    }
}
