using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;
using TFLPortal.Services;
using TFLPortal.Helpers;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projectallocation")]
public class ProjectAllocationsController : ControllerBase
{
    private readonly IProjectAllocationService _service;

    public ProjectAllocationsController(IProjectAllocationService service)
    {
        _service = service;
    }

    // [Authorize(RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> Assign(Member member)
    {
        bool status= await _service.Assign(member);
        return status;
    }


    // [Authorize(RoleTypes.ProjectManager)]
    [HttpPut]
    public async Task<bool> Release(Member member)
    {
        bool status= await _service.Release(member);
        return status;
    }


    // [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("projects/{projectId}")]
    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members= await _service.GetProjectMembers(projectId);
        return members;
    }
}
