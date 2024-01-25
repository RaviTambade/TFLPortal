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

    [HttpPost("projects/{projectId}/allocate/employee/{employeeId}")]
    public async Task<bool> AssignEmployeeToProject(int projectId,int employeeId,ProjectAllocation project)
    {
        bool status= await _service.AssignEmployeeToProject(projectId,employeeId,project);
        return status;
    }

    [HttpGet("projects/{projectId}/employee/{employeeId}")]
    public async Task<ProjectAllocation> GetProjectMemberDetails(int employeeId,int projectId)
    {
        ProjectAllocation employee= await _service.GetProjectMemberDetails(employeeId,projectId);
        return employee;
    }




    [HttpGet("projects/release/employees")]
    public async Task<List<Employee>> GetUnassignedEmployees()
    {
        List<Employee> projects= await _service.GetUnassignedEmployees();
        return projects;
    }

    [HttpGet("projects/allocated/employees/{status}")]
    public async Task<List<ProjectAllocation>> GetAllocatedEmployees(string status)
    {
        List<ProjectAllocation> employees = await _service.GetAllocatedEmployees(status);
        return employees;
    }

    [HttpGet("projects/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = await _service.GetAllProjectsBetweenDates(fromAssignedDate,toAssignedDate);
        return projects;
    }

    [HttpGet("projects/employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectAllocation>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = await _service.GetProjectsOfEmployeeBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return projects;
    }

    //Listing of All employees working on project project123  who are working or who left
    [HttpGet("projects/{projectId}/status/{status}/employees")]
    public async Task<List<ProjectAllocation>> GetEmployeesOfProject(int projectId,string status)
    {
        List<ProjectAllocation> employees = await _service.GetEmployeesOfProject(projectId,status);
        return employees;
    }
}
