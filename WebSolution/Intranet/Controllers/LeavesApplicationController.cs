using Microsoft.AspNetCore.Mvc;
using Transflower.MembershipRolesMgmt.Models.Entities;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/leaves")]
public class LeavesApplicationController : ControllerBase
{
    private readonly ILeaveApplicationService _service;
    private readonly IEmployeeService _employeeService;
    private readonly ExternalApiService _apiService;
    public LeavesApplicationController(ILeaveApplicationService service,ExternalApiService apiService,IEmployeeService employeeService)
    {
        _service = service;
        _apiService=apiService;
        _employeeService=employeeService;
    }

    [HttpPost]
    [Route ("addleave")]
    public async Task<bool> AddLeave(Leave leave)
    {
        bool status =await _service.AddLeave(leave);
        return status;
    }




    [HttpGet]
    [Route ("{employeeId}")]
    public async Task<List<Leave>> GetEmployeeLeaves(int employeeId)
    {
        List<Leave> leaves =await _service.GetEmployeeLeaves(employeeId);
        Console.WriteLine(leaves);
        return leaves;
    }

    [HttpGet]
    [Route ("project/{projectId}/status/{status}")]
    public async Task<List<LeaveResponse>> GetEmployeeLeaves(int projectId,string status)
    {
        List<Leave> leaves =await _service.GetProjectEmployeesLeavesByStatus(projectId,status);
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

    [HttpPut]
    public async Task<bool> UpdateLeaveStatus(Leave leave)
    {
        bool status= await _service.UpdateLeaveStatus(leave);
        Console.WriteLine(status);
        return status;
    }

    [HttpGet]
    [Route ("leavescount/{employeeId}")]
    public async Task<List<LeaveCount>> GetMonthLeavesCount(int employeeId)
    {
        List<LeaveCount> leaves =await _service.GetMonthLeavesCount(employeeId);
        Console.WriteLine(leaves);
        return leaves;
    }


    [HttpGet("pendingleaves/employees/{employeeId}/year/{year}")]
    public async Task<RemainingLeaveDetails> GetPendingLeaves(int employeeId,int year)
    {
        Employee employee= await _employeeService.GetEmployeeDetails(employeeId);
        List<RoleDTO> roles= await _apiService.GetRoleOfUser(employee.UserId);
        int roleId=roles.FirstOrDefault().Id;
       return await _service.GetPendingLeaves(employeeId,roleId,year);
     
    }
}