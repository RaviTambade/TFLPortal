using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;
using TFLPortal.Helpers;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/leaves")]
public class LeavesManagementController : ControllerBase
{
    private readonly ILeaveService _service;   
    private readonly IHRService  _hrService;
    public LeavesManagementController(ILeaveService service,IHRService hrService)
    {
        _service = service;
        _hrService=hrService;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet]
    public async Task<List<LeaveApplication>> GetLeaveApplications()
    {
        List<LeaveApplication> leaves= await _service.GetLeaveApplications();
        return leaves;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("leaveallocations")]
    public async Task<List<LeaveAllocation>> GetLeaveAllocations()
    {
        List<LeaveAllocation> leaves=await _service.GetLeaveAllocations();
        return leaves;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet]
    [Route ("employees/{employeeId}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId)
    {
        return await _service.GetLeaveApplications(employeeId);
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet]
    [Route ("employees/{employeeId}/status/{status}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId,string status)
    {
        return await _service.GetLeaveApplications(employeeId,status);
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet]
    [Route ("{roleId}")]
    public async Task<LeaveAllocation> GetRoleLeavesDetails(int roleId)
    {
        return await _service.GetRoleLeavesDetails(roleId);
    }
    
    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet]
    [Route ("{leaveId}")]
    public async Task<LeaveApplication> GetLeaveApplication(int leaveId)
    {
        LeaveApplication leave =await _service.GetLeaveApplication(leaveId);
        return leave;
    } 

    [Authorize(RoleTypes.HRManager)]
    [HttpGet]
    [Route ("date/{date}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(string date)
    {
        List<LeaveApplication> leaves =await _service.GetLeaveApplications(date);
        return leaves;
    }    

    [Authorize(RoleTypes.HRManager)] 
    [HttpGet]
    [Route ("status/{leaveStatus}")]
    public async Task<List<LeaveApplication>> GetLeaveApplicationDetails(string leaveStatus)
    {
        List<LeaveApplication> leaves =await _service.GetLeaveApplications(leaveStatus);
        return leaves;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet]
    [Route ("projects/{projectId}/status/{status}")]
    public async Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId,string status)
    {
        List<LeaveApplication> leaves =await _service.GetTeamLeaveDetails(projectId,status);
        return leaves;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee,RoleTypes.Director)]
    [HttpGet]
    [Route ("monthlyconsumedleaves/employees/{employeeId}/year/{year}")]
    public async Task<List<ConsumedLeave>> GetAnnualLeavesCount(int employeeId,int year)
    {
      return await _service.GetAnnualLeavesCount(employeeId,year);
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("annualavailableleaves/employees/{employeeId}/year/{year}")]
    public async Task<LeavesCount> GetAnnualAvailableLeaves(int employeeId,int roleId,int year)
    {
        // Employee employee= await _hrService.GetEmployeeById(employeeId);
        // List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        // int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualAvailableLeaves(employeeId,roleId,year);   
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("annualconsumedleaves/employees/{employeeId}/year/{year}")]
    public async Task<LeavesCount> GetAnnualConsumedLeaves(int employeeId,int year)
    {
        // Employee employee= await _hrService.GetEmployeeById(employeeId);
        // List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        // int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualConsumedLeaves(employeeId,year);   
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("annualleaves/roles/{roleId}/year/{year}")]
    public async Task<LeavesCount> GetAnnualLeaves(int roleId,int year)
    {
        // Employee employee= await _hrService.GetEmployeeById(employeeId);
        // List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        // int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualLeaves(roleId,year);   
    }
 
    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<List<ConsumedLeave>> GetMonthlyLeaveCount(int employeeId,int month,int year)
    {
        return await _service.GetMonthlyLeaveCount(employeeId,month,year);   
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpPost]
    public async Task<bool> AddNewLeaveApplication(LeaveApplication leaveApplication)
    {
        return await _service.AddNewLeaveApplication(leaveApplication);
       
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPost("leaveallocation")]
    public async Task<bool> AddNewLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        return await _service.AddNewLeaveAllocation(leaveAllocation);
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPut("leaveallocation")]
    public async Task<bool> UpdateLeaveAllocation(LeaveAllocation leaveAllocation)
    {
       bool status= await _service.UpdateLeaveAllocation(leaveAllocation);
        return status; 
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpPut("updateleaves")]
    public async Task<bool> Update(LeaveApplication leaveApplication)
    {
       bool status= await _service.Update(leaveApplication);
        return status; 
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpDelete("deleteleaveallocation/{id}")]
    public async Task<bool> DeleteLeaveMaster(int id)
    {
       bool status= await _service.DeleteLeaveMaster(id);
        return status; 
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpDelete("{id}")]
    public async Task<bool> Delete(int id)
    {
       bool status= await _service.Delete(id);
        return status; 
    }
}