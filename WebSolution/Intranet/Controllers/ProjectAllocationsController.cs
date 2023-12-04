// using System;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.DTO;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projectallocation")]
public class ProjectAllocationController : ControllerBase
{
    private readonly IProjectAllocationService _service;
    private readonly ExternalApiService _apiService;

    public ProjectAllocationController(IProjectAllocationService service, ExternalApiService apiService)
    {
        _service = service;
        _apiService = apiService;
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

    [HttpGet("unassignedemployees/{status}")]
    public async Task<List<ProjectAllocation>> GetAllUnassignedEmployees(string status)
    {
        List<ProjectAllocation> employees = await _service.GetAllUnassignedEmployees(status);

        return employees;
    }

    [HttpGet("assignedemployees/{status}")]
    public async Task<List<ProjectAllocation>> GetAllAssignedEmployees(string status)
    {
        List<ProjectAllocation> employees = await _service.GetAllAssignedEmployees(status);
        return employees;
    }

    [HttpGet("projects/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = await _service.GetAllProjectsBetweenDates(fromAssignedDate,toAssignedDate);
        return projects;
    }

    [HttpGet("projects/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectAllocation>> GetAllProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectAllocation> projects = await _service.GetAllProjectsOfEmployeeBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return projects;
    }

    [HttpGet("employees/{projectId}")]
    public async Task<List<ProjectAllocationResponse>> GetAssignedEmployeesOfProject(int projectId)
    {
        var employees = await _service.GetAssignedEmployeesOfProject(projectId);
        string userIds = string.Join(',', employees.Select(m => m.Employee.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<ProjectAllocationResponse> projectAllocationResponse = new();
        foreach (var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.UserId == employee.Employee.UserId);
            if (userDetail != null)
            {
                var projectResponse = new ProjectAllocationResponse
                {
                    FullName = userDetail.FullName,
                    EmployeeId = employee.Id,
                    Membership = employee.Membership,
                    AssignDate = employee.AssignDate,
                };
                projectAllocationResponse.Add(projectResponse);
            }
        }
        return projectAllocationResponse;
    }
}
