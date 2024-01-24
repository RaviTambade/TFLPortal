using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services;
using TFLPortal.Services.Interfaces;

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
public async Task<List<SprintResponse>> GetSprintWorks(int sprintId)
{
    List<SprintDetails> employees = await _sprintService.GetSprintWorks(sprintId);
    string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
    var users = await _apiService.GetUserDetails(userIds);
     List<SprintResponse> sprintResponses = new();
        foreach (var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.AssignedTo);
            if (userDetail != null)
            {
                var sprintResponse = new SprintResponse
                {
                    FirstName=userDetail.FirstName,
                    LastName=userDetail.LastName,
                    Id=employee.Id,
                    
                   Title=employee.Title,
                   ProjectWorkType=employee.ProjectWorkType,
                   Description=employee.Description,
                   AssignDate=employee.AssignDate,
                   StartDate=employee.StartDate,
                   DueDate=employee.DueDate,
                   CreatedDate=employee.CreatedDate,
                   AssignedTo=employee.AssignedTo,
                   ProjectId=employee.ProjectId,
                   SprintId=employee.SprintId,
                   Status=employee.Status,
                   AssignedBy=employee.AssignedBy
                };
                sprintResponses.Add(sprintResponse);
            }
        }


    return sprintResponses;
}

}
