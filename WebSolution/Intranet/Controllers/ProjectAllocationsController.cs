// using System;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;


namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projectallocation")]
public class ProjectAllocationController : ControllerBase
{
    private readonly IProjectAllocationService _service;
    private readonly IHttpClientFactory _httpClientFactory;

    public ProjectAllocationController(IProjectAllocationService service, IHttpClientFactory httpClientFactory)
    {
        _service = service;
        _httpClientFactory = httpClientFactory;
    }

   
    

    [HttpPost("assignproject/{projectId}/{employeeId}")]
    public async Task<bool> AssignMemberToProject(int projectId,int employeeId,ProjectAllocation project)
    {
        bool status= await _service.AssignMemberToProject(projectId,employeeId,project);
        return status;
    }

    [HttpPut("releaseproject/{projectId}/{employeeId}")]
    public async Task<bool> ReleaseMemberFromProject(int projectId,int employeeId)
    {
        bool status= await _service.ReleaseMemberFromProject(projectId,employeeId);
        return status;
    }
}
