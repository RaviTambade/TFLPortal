using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Models.LeaveMgmt;
using Transflower.TFLPortal.TFLOBL.External;
using TFLPortal.Services;
using TFLPortal.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/leaves")]
public class LeavesManagementController : ControllerBase
{
    private readonly ILeaveManagementService _service;   
    private readonly IHRService  _hrService;
    private readonly ExternalApiService _apiService;
    public LeavesManagementController(ILeaveManagementService service,ExternalApiService apiService,IHRService hrService)
    {
        _service = service;
        _apiService=apiService;
        _hrService=hrService;
    }

    [HttpGet]
    public async Task<List<LeaveResponse>> GetAllEmployeeLeaves()
    {
        List<EmployeeLeaveDetails> leaves=await _service.GetAllEmployeeLeaves();
        string userIds = string.Join(',', leaves.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<LeaveResponse> leaveResponses = new();
        foreach (var leave in leaves)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == leave.EmployeeId);
            if (userDetail != null)
            {
                var leaveResponse = new LeaveResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    FromDate = leave.FromDate,
                    ToDate = leave.ToDate,
                    Status = leave.Status,
                    LeaveType = leave.LeaveType,
                    EmployeeId = leave.EmployeeId,
                    ApplicationDate=leave.ApplicationDate,
                    Year=leave.Year,
                    UserId=leave.UserId
                };
                leaveResponses.Add(leaveResponse);
            }
        }
        return leaveResponses;
    }

    [HttpGet("rolebasedleaves")]
    public async Task<List<RoleResponse>> GetAllRoleBasedLeaves()
    {
        List<RoleBasedLeave> leaves=await _service.GetAllRoleBasedLeaves();
        var roleIds = string.Join(',', leaves.Select(m => m.RoleId).ToList());
        var roles = await _apiService.GetRoleDetails(roleIds);
        List<RoleResponse> roleResponses = new();
        foreach (var role in leaves)
        {
            var roleDetail = roles.FirstOrDefault(u => u.Id == role.RoleId);
            if (roleDetail != null)
            {
                var roleResponse = new RoleResponse
                {
                    Id = role.Id,
                    RoleId = role.RoleId,
                    Sick = role.Sick,
                    Casual = role.Casual,
                    Paid = role.Paid,
                    Unpaid = role.Unpaid,
                    FinancialYear=role.FinancialYear,
                    Role=roleDetail.Name
                };
                roleResponses.Add(roleResponse);
            }
        }
        return roleResponses;
    }

    [HttpGet]
    [Route ("employees/{employeeId}")]
    public async Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId)
    {
        return await _service.GetLeaveDetailsOfEmployee(employeeId);
    }

    [HttpGet]
    [Route ("employees/{employeeId}/status/{status}")]
    public async Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId,string status)
    {
        return await _service.GetLeaveDetailsOfEmployee(employeeId,status);
    }

    [HttpGet]
    [Route ("{roleId}")]
    public async Task<RoleBasedLeave> GetRoleBasedLeaveDetails(int roleId)
    {
        return await _service.GetRoleBasedLeaveDetails(roleId);
    }
    
 
    [HttpGet]
    [Route ("leave/{leaveId}")]
    public async Task<LeaveResponse> GetLeaveDetails(int leaveId)
    {
        EmployeeLeaveDetails leave =await _service.GetLeaveDetails(leaveId);
        User user = await _apiService.GetUser(leave.UserId);
        LeaveResponse leaveResponse = new LeaveResponse
            {
                    Id = leave.Id,
                    FullName = user.FirstName+" "+user.LastName,
                    FromDate = leave.FromDate,
                    ToDate = leave.ToDate,
                    Status = leave.Status,
                    LeaveType = leave.LeaveType,
                    EmployeeId = leave.EmployeeId,
                    ApplicationDate=leave.ApplicationDate,
                    Year=leave.Year
            };
         return leaveResponse;
    } 


    [HttpGet]
    [Route ("employees/date/{date}")]
    public async Task<List<LeaveResponse>> GetLeaveDetailsByDate(string date)
    {
        List<EmployeeLeaveDetails> leaves =await _service.GetLeaveDetailsByDate(date);
        string userIds = string.Join(',', leaves.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<LeaveResponse> leaveResponses = new();
        foreach (var leave in leaves)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == leave.EmployeeId);
            if (userDetail != null)
            {
                var leaveResponse = new LeaveResponse
                {
                    Id = leave.Id,
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    FromDate = leave.FromDate,
                    ToDate = leave.ToDate,
                    Status = leave.Status,
                    LeaveType = leave.LeaveType,
                    EmployeeId = leave.EmployeeId,
                    ApplicationDate=leave.ApplicationDate,
                    Year=leave.Year
                };
                leaveResponses.Add(leaveResponse);
            }
        }
        return leaveResponses;
    }    
       
    [HttpGet]
    [Route ("status/{leaveStatus}")]
    public async Task<List<LeaveResponse>> GetLeaveDetails(string leaveStatus)
    {
        List<EmployeeLeaveDetails> leaves =await _service.GetLeaveDetails(leaveStatus);
        string userIds = string.Join(',', leaves.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<LeaveResponse> leaveResponses = new();
        foreach (var leave in leaves)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == leave.EmployeeId);
            if (userDetail != null)
            {
                var leaveResponse = new LeaveResponse
                {
                    Id = leave.Id,
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    FromDate = leave.FromDate,
                    ToDate = leave.ToDate,
                    Status = leave.Status,
                    LeaveType = leave.LeaveType,
                    EmployeeId = leave.EmployeeId,
                    ApplicationDate=leave.ApplicationDate,
                    Year=leave.Year
                };
                leaveResponses.Add(leaveResponse);
            }
        }
        return leaveResponses;
    }

    [HttpGet]
    [Route ("projects/{projectId}/status/{status}")]
    public async Task<List<LeaveResponse>> GetTeamLeaveDetails(int projectId,string status)
    {
        List<EmployeeLeaveDetails> leaves =await _service.GetTeamLeaveDetails(projectId,status);
        string userIds = string.Join(',', leaves.Select(m => m.UserId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<LeaveResponse> leaveResponses = new();
        foreach (var leave in leaves)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == leave.EmployeeId);
            if (userDetail != null)
            {
                var leaveResponse = new LeaveResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    FromDate = leave.FromDate,
                    ToDate = leave.ToDate,
                    Status = leave.Status,
                    LeaveType = leave.LeaveType,
                    EmployeeId = leave.EmployeeId,
                    ApplicationDate=leave.ApplicationDate,
                    Year=leave.Year,
                    UserId=leave.UserId
                };
                leaveResponses.Add(leaveResponse);
            }
        }
        return leaveResponses;
    }


    [HttpGet]
    [Route ("monthlyconsumedleaves/employees/{employeeId}/year/{year}")]
    public async Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year)
    {
      return await _service.GetAnnualLeavesCountByMonth(employeeId,year);
    }

  
    [HttpGet("annualavailableleaves/employee/{employeeId}/year/{year}")]
    public async Task<PendingLeaveDetails> GetAnnualAvailableLeaves(int employeeId,int year)
    {
        Employee employee= await _hrService.GetEmployeeById(employeeId);
        List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualAvailableLeaves(employeeId,roleId,year);   
    }

    [HttpGet("annualconsumedleaves/employee/{employeeId}/year/{year}")]
    public async Task<PendingLeaveDetails> GetAnnualConsumedLeaves(int employeeId,int year)
    {
        Employee employee= await _hrService.GetEmployeeById(employeeId);
        List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualConsumedLeaves(employeeId,roleId,year);   
    }

 
    [HttpGet("annualleaves/employee/{employeeId}/year/{year}")]
    public async Task<PendingLeaveDetails> GetAnnualLeaves(int employeeId,int year)
    {
        Employee employee= await _hrService.GetEmployeeById(employeeId);
        List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        int roleId=roles.FirstOrDefault().Id;
       return await _service.GetAnnualLeaves(roleId,year);   
    }
 
 
    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<List<LeaveDetails>> GetEmployeeLeaves(int employeeId,int month,int year)
    {
        return await _service.GetEmployeeLeaves(employeeId,month,year);   
    }

    [HttpPost]
    public async Task<bool> AddNewLeaveApplication(EmployeeLeave employeeLeave)
    {
        return await _service.AddNewLeaveApplication(employeeLeave);
       
    }

    [HttpPost("rolebasedleave")]
    public async Task<bool> AddNewRoleBasedLeave(RoleBasedLeave roleBasedLeave)
    {
        return await _service.AddNewRoleBasedLeave(roleBasedLeave);
    }

    [HttpPut("rolebasedleave")]
    public async Task<bool> UpdateRoleBasedLeave(RoleBasedLeave roleBasedLeave)
    {
       bool status= await _service.UpdateRoleBasedLeave(roleBasedLeave);
        return status; 
    }

    [HttpPut("{leaveId}/updatestatus/{leaveStatus}")]
    public async Task<bool> UpdateLeaveApplication(int leaveId,string leaveStatus)
    {
        bool status= await _service.UpdateLeaveApplication(leaveId,leaveStatus);
        return status;
    }

    [HttpPut("updateleaves")]
    public async Task<bool> UpdateEmployeeLeave(EmployeeLeave employeeLeave)
    {
       bool status= await _service.UpdateEmployeeLeave(employeeLeave);
        return status; 
    }

    [HttpDelete("deleterolebasedleave/{id}")]
    public async Task<bool> DeleteRoleBasedLeave(int id)
    {
       bool status= await _service.DeleteRoleBasedLeave(id);
        return status; 
    }

    [HttpDelete("{id}")]
    public async Task<bool> DeleteEmployeeLeave(int id)
    {
       bool status= await _service.DeleteEmployeeLeave(id);
        return status; 
    }
}