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

    [HttpPost("projects/{projectId}/allocate/employee/{employeeId}")]
    public async Task<bool> AssignEmployeeToProject(int projectId,int employeeId,ProjectAllocation project)
    {
        bool status= await _service.AssignEmployeeToProject(projectId,employeeId,project);
        return status;
    }

    [HttpPut("projects/{projectId}/release/employee/{employeeId}")]
    public async Task<bool> ReleaseEmployeeFromProject(int projectId,int employeeId,ProjectAllocation project)
    {
        bool status= await _service.ReleaseEmployeeFromProject(projectId,employeeId,project);
        Console.WriteLine(status);
        return status;
    }

    [HttpGet("projects/release/employees")]
    public async Task<List<EmployeeResponse>> GetUnassignedEmployees()
    {
        var employees = await _service.GetUnassignedEmployees();
        string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
        Console.WriteLine(userIds);
        var users = await _apiService.GetUserDetails(userIds);
        List<EmployeeResponse> employeeResponses = new();
        foreach(var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.UserId);
            if (userDetail != null)
            {
                EmployeeResponse employeeResponse = new EmployeeResponse
                {
                    FirstName = userDetail.FirstName,
                    LastName = userDetail.LastName,
                    Email = userDetail.Email,
                    EmployeeId = employee.Id,
                    ContactNumber = userDetail.ContactNumber,
                    Salary = employee.Salary,
                };
                employeeResponses.Add(employeeResponse);
            }
        }
        return employeeResponses;
    }

    [HttpGet("projects/allocated/employees/{status}")]
    public async Task<List<ProjectAllocationResponse>> GetAllocatedEmployees(string status)
    {
        var employees = await _service.GetAllocatedEmployees(status);
        string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<ProjectAllocationResponse> projectAllocationResponse = new();
        foreach (var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.UserId);
            if (userDetail != null)
            {
                var projectResponse = new ProjectAllocationResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    EmployeeId = employee.Id,
                    Membership = employee.Membership,
                    AssignDate = employee.AssignDate,
                };
                projectAllocationResponse.Add(projectResponse);
            }
        }
        return projectAllocationResponse;
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

    // [HttpGet("projects/{projectId}/releaseemployees")]
    // public async Task<List<ProjectAllocationResponse>> GetRecentEmployeesOfProject(int projectId)
    // {
    //     var employees = await _service.GetRecentEmployeesOfProject(projectId);
    //     string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
    //     var users = await _apiService.GetUserDetails(userIds);
    //     List<ProjectAllocationResponse> projectAllocationResponse = new();
    //     foreach (var employee in employees)
    //     {
    //         var userDetail = users.FirstOrDefault(u => u.Id == employee.UserId);

    //         if (userDetail != null)
    //         {
    //             var projectResponse = new ProjectAllocationResponse
    //             {
    //                 FullName = userDetail.FirstName+" "+userDetail.LastName,
    //                 EmployeeId = employee.Id,
    //                 ProjectId = employee.ProjectId,
    //                 Membership = employee.Membership,
    //                 AssignDate = employee.AssignDate,
    //             };
    //             projectAllocationResponse.Add(projectResponse);
    //         }
    //     }
    //     return projectAllocationResponse;
    // }

    [HttpGet("projects/{projectId}/status/{status}/employees")]
    public async Task<List<ProjectAllocationResponse>> GetEmployeesOfProject(int projectId,string status)
    {
        var employees = await _service.GetEmployeesOfProject(projectId,status);
        string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<ProjectAllocationResponse> projectAllocationResponse = new();
        foreach (var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.UserId);
            if (userDetail != null)
            {
                var projectResponse = new ProjectAllocationResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    EmployeeId = employee.Id,
                    Membership = employee.Membership,
                    AssignDate = employee.AssignDate,
                    ProjectId = employee.ProjectId,
                };
                projectAllocationResponse.Add(projectResponse);
            }
        }
        return projectAllocationResponse;
    }
}
