using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;

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

    [HttpGet]
    public async Task<List<LeaveApplication>> GetLeaveApplications()
    {
        List<LeaveApplication> leaves= await _service.GetLeaveApplications();
        return leaves;
    }

    [HttpGet("leaveallocations")]
    public async Task<List<LeaveAllocation>> GetLeaveAllocation()
    {
        List<LeaveAllocation> leaves=await _service.GetLeaveAllocation();
        return leaves;
    }

    [HttpGet]
    [Route ("employees/{employeeId}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId)
    {
        return await _service.GetLeaveApplications(employeeId);
    }

    [HttpGet]
    [Route ("employees/{employeeId}/status/{status}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId,string status)
    {
        return await _service.GetLeaveApplications(employeeId,status);
    }

    [HttpGet]
    [Route ("{roleId}")]
    public async Task<LeaveAllocation> GetRoleLeavesDetails(int roleId)
    {
        return await _service.GetRoleLeavesDetails(roleId);
    }
    
 
    [HttpGet]
    [Route ("{leaveId}")]
    public async Task<LeaveApplication> GetLeaveApplication(int leaveId)
    {
        LeaveApplication leave =await _service.GetLeaveApplication(leaveId);
        return leave;
    } 


    [HttpGet]
    [Route ("date/{date}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(string date)
    {
        List<LeaveApplication> leaves =await _service.GetLeaveApplications(date);
        return leaves;
    }    
       
    [HttpGet]
    [Route ("status/{leaveStatus}")]
    public async Task<List<LeaveApplication>> GetLeaveApplicationDetails(string leaveStatus)
    {
        List<LeaveApplication> leaves =await _service.GetLeaveApplications(leaveStatus);
        return leaves;
    }

    [HttpGet]
    [Route ("projects/{projectId}/status/{status}")]
    public async Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId,string status)
    {
        List<LeaveApplication> leaves =await _service.GetTeamLeaveDetails(projectId,status);
        return leaves;
    }


    [HttpGet]
    [Route ("monthlyconsumedleaves/employees/{employeeId}/year/{year}")]
    public async Task<List<ConsumedLeave>> GetAnnualLeavesCount(int employeeId,int year)
    {
      return await _service.GetAnnualLeavesCount(employeeId,year);
    }

  
    [HttpGet("annualavailableleaves/employees/{employeeId}/year/{year}")]
    public async Task<LeavesCount> GetAnnualAvailableLeaves(int employeeId,int roleId,int year)
    {
        // Employee employee= await _hrService.GetEmployeeById(employeeId);
        // List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        // int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualAvailableLeaves(employeeId,roleId,year);   
    }

    [HttpGet("annualconsumedleaves/employees/{employeeId}/year/{year}")]
    public async Task<LeavesCount> GetAnnualConsumedLeaves(int employeeId,int year)
    {
        // Employee employee= await _hrService.GetEmployeeById(employeeId);
        // List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        // int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualConsumedLeaves(employeeId,year);   
    }

 
    [HttpGet("annualleaves/roles/{roleId}/year/{year}")]
    public async Task<LeavesCount> GetAnnualLeaves(int roleId,int year)
    {
        // Employee employee= await _hrService.GetEmployeeById(employeeId);
        // List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        // int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualLeaves(roleId,year);   
    }
 
 
    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<List<ConsumedLeave>> GetMonthlyLeaveCount(int employeeId,int month,int year)
    {
        return await _service.GetMonthlyLeaveCount(employeeId,month,year);   
    }

    [HttpPost]
    public async Task<bool> AddNewLeaveApplication(LeaveApplication leaveApplication)
    {
        return await _service.AddNewLeaveApplication(leaveApplication);
       
    }

    [HttpPost("leaveallocation")]
    public async Task<bool> AddNewLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        return await _service.AddNewLeaveAllocation(leaveAllocation);
    }

    [HttpPut("leaveallocation")]
    public async Task<bool> UpdateLeaveMaster(LeaveAllocation leaveAllocation)
    {
       bool status= await _service.UpdateLeaveMaster(leaveAllocation);
        return status; 
    }

    [HttpPut("{leaveId}/updatestatus/{leaveStatus}")]
    public async Task<bool> UpdateLeaveApplication(int leaveId,string leaveStatus)
    {
        bool status= await _service.UpdateLeaveApplication(leaveId,leaveStatus);
        return status;
    }

    [HttpPut("updateleaves")]
    public async Task<bool> Update(LeaveApplication leaveApplication)
    {
       bool status= await _service.Update(leaveApplication);
        return status; 
    }

    [HttpDelete("deleterolebasedleave/{id}")]
    public async Task<bool> DeleteLeaveMaster(int id)
    {
       bool status= await _service.DeleteLeaveMaster(id);
        return status; 
    }

    [HttpDelete("{id}")]
    public async Task<bool> Delete(int id)
    {
       bool status= await _service.Delete(id);
        return status; 
    }
}