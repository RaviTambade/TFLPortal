// using System;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLSAL.Services;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/projectmgmt/projectallocation")]
public class ProjectMembershipController : ControllerBase
{
    private readonly IProjectMembershipService _service;
    private readonly ExternalApiService _apiService;

    public ProjectMembershipController(IProjectMembershipService service, ExternalApiService apiService)
    {
        _service = service;
        _apiService = apiService;
    }

    [HttpPost("projects/{projectId}/allocate/employee/{employeeId}")]
    public async Task<bool> AssignEmployeeToProject(int projectId,int employeeId,ProjectMembership project)
    {
        bool status= await _service.AssignEmployeeToProject(projectId,employeeId,project);
        return status;
    }

    [HttpGet("projects/{projectId}/employee/{employeeId}")]
    public async Task<ProjectMembership> GetProjectMemberDetails(int employeeId,int projectId)
    {
        ProjectMembership employee= await _service.GetProjectMemberDetails(employeeId,projectId);
        return employee;
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
                    ContactNumber = userDetail.ContactNumber
                };
                employeeResponses.Add(employeeResponse);
            }
        }
        return employeeResponses;
    }

    [HttpGet("projects/allocated/employees/{status}")]
    public async Task<List<ProjectMembershipResponse>> GetAllocatedEmployees(string status)
    {
        var employees = await _service.GetAllocatedEmployees(status);
        string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<ProjectMembershipResponse> projectMembershipResponse = new();
        foreach (var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.UserId);
            if (userDetail != null)
            {
                var projectResponse = new ProjectMembershipResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    EmployeeId = employee.Id,
                    ProjectRole = employee.ProjectRole,
                    ProjectAssignDate = employee.ProjectAssignDate,
                    ProjectId=employee.ProjectId
                };
                projectMembershipResponse.Add(projectResponse);
            }
        }
        return projectMembershipResponse;
    }

    [HttpGet("projects/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectMembership>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectMembership> projects = await _service.GetAllProjectsBetweenDates(fromAssignedDate,toAssignedDate);
        return projects;
    }

    [HttpGet("projects/employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<ProjectMembership>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<ProjectMembership> projects = await _service.GetProjectsOfEmployeeBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
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
    public async Task<List<ProjectMembershipResponse>> GetEmployeesOfProject(int projectId,string status)
    {
        var employees = await _service.GetEmployeesOfProject(projectId,status);
        string userIds = string.Join(',', employees.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<ProjectMembershipResponse> projectMembershipResponse = new();
        foreach (var employee in employees)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.UserId);
            if (userDetail != null)
            {
                var projectResponse = new ProjectMembershipResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    EmployeeId = employee.Id,
                    ProjectRole = employee.ProjectRole,
                    ProjectAssignDate = employee.ProjectAssignDate,
                    ProjectId = employee.ProjectId,
                };
                projectMembershipResponse.Add(projectResponse);
            }
        }
        return projectMembershipResponse;
    }
}
