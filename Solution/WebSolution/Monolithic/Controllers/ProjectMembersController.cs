// using System;
using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;
using TFLPortal.Services;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projectallocation")]
public class ProjectMembersController : ControllerBase
{
    private readonly IProjectMemberService _service;

    public ProjectMembersController(IProjectMemberService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<bool> Assign(Member member)
    {
        bool status= await _service.Assign(member);
        return status;
    }

    [HttpPut]
    public async Task<bool> Release(Member member)
    {
        bool status= await _service.Release(member);
        return status;
    }

    [HttpGet("projects/{projectId}")]
    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members= await _service.GetProjectMembers(projectId);
        return members;
    }

    [HttpGet("employeesonbench")]
    public async Task<List<Employee>> GetEmployeesOnBench()
    {
        List<Employee> projects= await _service.GetEmployeesOnBench();
        return projects;
    }

    
}
