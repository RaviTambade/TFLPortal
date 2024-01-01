using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;
using Transflower.TFLPortal.TFLOBL.External;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

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
    public async Task<List<EmployeeLeave>> GetAllEmployeeLeaves()
    {
        return await _service.GetAllEmployeeLeaves();
    }

    [HttpGet("rolebasedleaves")]
    public async Task<List<RoleBasedLeave>> GetAllRoleBasedLeaves()
    {
        return await _service.GetAllRoleBasedLeaves();
    }

    

    [HttpGet]
    [Route ("{employeeId}")]
    public async Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId)
    {
        return await _service.GetLeaveDetailsOfEmployee(employeeId);
    }

    [HttpGet]
    [Route ("details/{leaveId}")]
    public async Task<EmployeeLeave> GetLeaveDetails(int leaveId)
    {
        return await _service.GetLeaveDetails(leaveId);
    }

    [HttpGet]
    [Route ("projects/{projectId}/status/{status}")]
    public async Task<List<LeaveResponse>> GetTeamLeaveDetails(int projectId,string status)
    {
        List<EmployeeLeave> leaves =await _service.GetTeamLeaveDetails(projectId,status);
        string userIds = string.Join(',', leaves.Select(m => m.EmployeeId).ToList());
        var users = await _apiService.GetUserDetails(userIds);
        List<LeaveResponse> leaveResponses = new();
        foreach (var employee in leaves)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.EmployeeId);
            if (userDetail != null)
            {
                var leaveResponse = new LeaveResponse
                {
                    FullName = userDetail.FirstName+" "+userDetail.LastName,
                    FromDate = employee.FromDate,
                    ToDate = employee.ToDate,
                    Status = employee.Status,
                    LeaveType = employee.LeaveType,
                    EmployeeId = employee.EmployeeId,
                    ApplicationDate=employee.ApplicationDate,
                    Year=employee.Year
                };
                leaveResponses.Add(leaveResponse);
            }
        }
        return leaveResponses;
    }


    [HttpGet]
    [Route ("leavescount/{employeeId}/year/{year}")]
    public async Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId,int year)
    {
      return await _service.GetAnnualLeavesCountByMonth(employeeId,year);
    }


    [HttpGet("pendingleaves/employees/{employeeId}/year/{year}")]
    public async Task<PendingLeaveDetails> GetPendingLeaves(int employeeId,int year)
    {
        Employee employee= await _hrService.GetEmployeeById(employeeId);
        List<Role> roles= await _apiService.GetRoleOfUser(employee.UserId);
        int roleId=roles.FirstOrDefault().Id;
       return await _service.GetPendingLeaves(employeeId,roleId,year);   
    }

    [HttpPost]
    public async Task<bool> AddLeave(EmployeeLeave employeeLeave)
    {
        return await _service.AddNewLeaveApplication(employeeLeave);
       
    }

    [HttpPut]
    public async Task<bool> UpdateLeaveApplication(EmployeeLeave employeeLeave)
    {
        bool status= await _service.UpdateLeaveApplication(employeeLeave);
        return status;
    }

    [HttpPut("updateleaves")]
    public async Task<bool> UpdateEmployeeLeave(EmployeeLeave employeeLeave)
    {
       bool status= await _service.UpdateEmployeeLeave(employeeLeave);
        return status; 
    }

    [HttpDelete("{id}")]
    public async Task<bool> DeleteEmployeeLeave(int id)
    {
       bool status= await _service.DeleteEmployeeLeave(id);
        return status; 
    }
}