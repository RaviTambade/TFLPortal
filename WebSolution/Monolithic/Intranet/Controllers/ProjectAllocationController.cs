// using System;
using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;
using TFLPortal.Services;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projectallocation")]
public class ProjectAllocationController : ControllerBase
{
    private readonly IProjectAllocationService _service;

    public ProjectAllocationController(IProjectAllocationService service)
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

    [HttpGet("projects/release/employees")]
    public async Task<List<Employee>> GetEmployeesOnBench()
    {
        List<Employee> projects= await _service.GetEmployeesOnBench();
        return projects;
    }

    // [HttpGet("projects/allocated/employees/{status}")]
    // public async Task<List<ProjectAllocation>> GetAllocatedEmployees(string status)
    // {
    //     List<ProjectAllocation> employees = await _service.GetAllocatedEmployees(status);
    //     return employees;
    // }

    // [HttpGet("projects/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    // public async Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    // {
    //     List<ProjectAllocation> projects = await _service.GetAllProjectsBetweenDates(fromAssignedDate,toAssignedDate);
    //     return projects;
    // }

    // [HttpGet("projects/employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    // public async Task<List<ProjectAllocation>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    // {
    //     List<ProjectAllocation> projects = await _service.GetProjectsOfEmployeeBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
    //     return projects;
    // }

    // //Listing of All employees working on project project123  who are working or who left
    // [HttpGet("projects/{projectId}/status/{status}/employees")]
    // public async Task<List<ProjectAllocation>> GetEmployeesOfProject(int projectId,string status)
    // {
    //     List<ProjectAllocation> employees = await _service.GetEmployeesOfProject(projectId,status);
    //     return employees;
    // }
}
