using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Helpers;
using TFLPortal.Services.LeaveMgmt.Operations;
using TFLPortal.Services.LeaveMgmt.Analytics;
namespace Intranet.Controllers;

[ApiController]
[Route("/api/leaves")]
public class LeavesManagementController : ControllerBase
{
    private readonly ILeaveOperationsService _operationService;   
    private readonly ILeaveAnalyticsService _analyticService;  
    public LeavesManagementController(ILeaveOperationsService operationService,ILeaveAnalyticsService analyticService)
    {
        _operationService = operationService;
        _analyticService=analyticService;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("applications")]
    public async Task<List<LeaveApplication>> GetLeaveApplications()
    {
        List<LeaveApplication> leaves= await _analyticService.GetLeaveApplications();
        return leaves;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("allocations")]
    public async Task<List<LeaveAllocation>> GetLeaveAllocations()
    {
        List<LeaveAllocation> leaves=await _analyticService.GetLeaveAllocations();
        return leaves;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet]
    [Route ("applications/employees/{employeeId}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId)
    {
        return await _analyticService.GetLeaveApplications(employeeId);
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet]
    [Route ("applications/employees/{employeeId}/status/{status}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId,string status)
    {
        return await _analyticService.GetLeaveApplications(employeeId,status);
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet]
    [Route ("allocations/roles/{roleId}")]
    public async Task<LeaveAllocation> GetRoleLeavesDetails(int roleId)
    {
        return await _analyticService.GetRoleLeavesDetails(roleId);
    }
    
    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet]
    [Route ("applications/{leaveapplicationId}")]
    public async Task<LeaveApplication> GetLeaveApplication(int leaveapplicationId)
    {
        LeaveApplication leave =await _analyticService.GetLeaveApplication(leaveapplicationId);
        return leave;
    } 

    [Authorize(RoleTypes.HRManager)]
    [HttpGet]
    [Route ("applications/date/{date}")]
    public async Task<List<LeaveApplication>> GetLeaveApplications(string date)
    {
        List<LeaveApplication> leaves =await _analyticService.GetLeaveApplications(date);
        return leaves;
    }    

    [Authorize(RoleTypes.HRManager)] 
    [HttpGet]
    [Route ("/applications/status/{leaveStatus}")]
    public async Task<List<LeaveApplication>> GetLeaveApplicationDetails(string leaveStatus)
    {
        List<LeaveApplication> leaves =await _analyticService.GetLeaveApplications(leaveStatus);
        return leaves;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet]
    [Route ("applications/projects/{projectId}/status/{status}")]
    public async Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId,string status)
    {
        List<LeaveApplication> leaves =await _analyticService.GetTeamLeaveDetails(projectId,status);
        return leaves;
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee,RoleTypes.Director)]
    [HttpGet]
    [Route ("consumed/employees/{employeeId}/year/{year}")]
    public async Task<List<MonthlyLeaves>> GetAnnualLeavesCount(int employeeId,int year)
    {
      return await _analyticService.GetAnnualLeavesCount(employeeId,year);
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("annualavailable/employees/{employeeId}/roles/{roleId}/year/{year}")]
    public async Task<AnnualLeaves> GetAnnualAvailableLeaves(int employeeId,int roleId,int year)
    {
       return await _analyticService.GetAnnualAvailableLeaves(employeeId,roleId,year);   
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("annualconsumedleaves/employees/{employeeId}/year/{year}")]
    public async Task<AnnualLeaves> GetAnnualConsumedLeaves(int employeeId,int year)
    {
        
       return await _analyticService.GetAnnualConsumedLeaves(employeeId,year);   
    }


//employeeId
    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("annualleaves/roles/{roleId}/year/{year}")]
    public async Task<List<LeaveCount>> GetAnnualLeaves(int roleId,int year)
    {
    
       return await _analyticService.GetAnnualLeaves(roleId,year);   
    }
 
    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpGet("employees/{employeeId}/month/{month}/year/{year}")]
    public async Task<List<LeaveCount>> GetMonthlyLeaveCount(int employeeId,int month,int year)
    {
        return await _analyticService.GetMonthlyLeaveCount(employeeId,month,year);   
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpPost]
    public async Task<bool> AddNewLeaveApplication(LeaveApplication leaveApplication)
    {
        return await _operationService.AddNewLeaveApplication(leaveApplication);
       
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPost("leaveallocation")]
    public async Task<bool> AddNewLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        return await _operationService.AddNewLeaveAllocation(leaveAllocation);
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpPut("leaveallocation")]
    public async Task<bool> UpdateLeaveAllocation(LeaveAllocation leaveAllocation)
    {
       bool status= await _operationService.UpdateLeaveAllocation(leaveAllocation);
        return status; 
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpPut]
    public async Task<bool> Update(LeaveApplication leaveApplication)
    {
       bool status= await _operationService.Update(leaveApplication);
        return status; 
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpDelete("deleteleaveallocation/{id}")]
    public async Task<bool> DeleteLeaveMaster(int id)
    {
       bool status= await _operationService.DeleteLeaveMaster(id);
        return status; 
    }

    [Authorize(RoleTypes.HRManager,RoleTypes.ProjectManager,RoleTypes.Employee)]
    [HttpDelete("{id}")]
    public async Task<bool> Delete(int id)
    {
       bool status= await _operationService.Delete(id);
        return status; 
    }
}