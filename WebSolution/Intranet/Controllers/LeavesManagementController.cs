using Microsoft.AspNetCore.Mvc;
using Transflower.MembershipRolesMgmt.Models.Entities;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;
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
    [Route ("{employeeId}")]
    public async Task<List<LeaveApplication>> GetLeaveDetails(int employeeId)
    {
        return await _service.GetLeaveDetails(employeeId);
    }

    [HttpGet]
    [Route ("projects/{projectId}/status/{status}")]
    public async Task<List<LeaveResponse>> GetTeamLeaveDetails(int projectId,string status)
    {
        List<LeaveApplication> leaves =await _service.GetTeamLeaveDetails(projectId,status);
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
        List<RoleDTO> roles= await _apiService.GetRoleOfUser(employee.UserId);
        int roleId=roles.FirstOrDefault().Id;
       return await _service.GetPendingLeaves(employeeId,roleId,year);
     
    }

    [HttpPost]
    public async Task<bool> AddLeave(LeaveApplication leaveApplication)
    {
        return await _service.AddNewLeaveApplication(leaveApplication);
       
    }

    
    [HttpPut]
    public async Task<bool> UpdateLeaveApplication(LeaveApplication leave)
    {
        bool status= await _service.UpdateLeaveApplication(leave);
        return status;
    }
}