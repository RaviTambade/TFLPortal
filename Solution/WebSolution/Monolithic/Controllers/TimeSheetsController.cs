using Microsoft.AspNetCore.Mvc;
using TFLPortal.Helpers;
using TFLPortal.Models;
using TFLPortal.Responses;
using TFLPortal.Services.Interfaces;
using TFLPortal.Services.TimesheetMgmt.Analytics;
using TFLPortal.Services.TimesheetMgmt.Operations;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/timesheets")]
public class TimesheetsController : ControllerBase
{
    private readonly ITimesheetAnalyticsService _timesheetAnalyticsSvc;
    private readonly ITimesheetOperationsService _timesheetOpSvc;

    public TimesheetsController(ITimesheetOperationsService timesheetOpSvc, ITimesheetAnalyticsService timesheetAnalyticsSvc)
    {
        _timesheetOpSvc = timesheetOpSvc;
        _timesheetAnalyticsSvc = timesheetAnalyticsSvc;
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("employees/{employeeId}/from/{from}/to/{to}")]
    public async Task<List<Timesheet>> GetTimesheets(int employeeId,DateOnly from,DateOnly to)
    {
        return await _timesheetAnalyticsSvc.GetTimesheets(employeeId, from, to);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<Timesheet> GetTimesheet(int employeeId, DateOnly date)
    {
        return await _timesheetAnalyticsSvc.GetTimesheet(employeeId, date);
    }
    
    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("{timesheetId}")]
    public async Task<IActionResult> GetTimesheet(int timesheetId)
    {
        Timesheet timesheet = await _timesheetAnalyticsSvc.GetTimesheet(timesheetId);
        if (timesheet is null)
        {
            return NotFound();
        }
        return Ok(timesheet);
    }

    [Authorize(RoleTypes.ProjectManager)]
    [HttpGet("pendingapproval/from/{from}/to/{to}/manager/{projectManagerId}")]
    public async Task<List<Timesheet>> GetTimeSheetsForApproval(int projectManagerId,DateOnly from,DateOnly to)
    {
        List<Timesheet> timesheets = await _timesheetAnalyticsSvc.GetTimeSheetsForApproval(projectManagerId,from,to);
        return timesheets;
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("{timesheetId}/timesheetentries")]
    public async Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId)
    {
        return await _timesheetAnalyticsSvc.GetTimesheetEntries(timesheetId);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("timesheetentries/{timesheetEntryId}")]
    public async Task<IActionResult> GetTimesheetEntry(int timesheetEntryId)
    {
        TimesheetEntry entry = await _timesheetAnalyticsSvc.GetTimesheetEntry(timesheetEntryId);
        if (entry is null)
        {
            return NotFound();
        }
        return Ok(entry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
     [HttpGet("memberutilization/employees/{employeeId}/from/{from}/to/{to}/projects/{projectId}")]
     public async  Task<List<MemberUtilization>> GetWorkUtilization(int employeeId,DateOnly from, DateOnly to,int projectId)
     {
        return await _timesheetAnalyticsSvc.GetWorkUtilization(employeeId, from,to, projectId);
     }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("workinghours/employees/{employeeId}/from/{from}/to/{to}")]
    public async Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId, DateOnly from, DateOnly to )
    {
        return await _timesheetAnalyticsSvc.GetHoursWorkedForEachProject(employeeId,from,to);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
        return await _timesheetOpSvc.AddTimesheet(timesheet);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPost("timesheetentries")]
    public async Task<bool> AddTimesheetEntry([FromBody] TimesheetEntry timesheetEntry)
    {
        return await _timesheetOpSvc.AddTimesheetEntry(timesheetEntry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPut("{timesheetId}")]
    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
        return await _timesheetOpSvc.ChangeTimesheetStatus(timesheetId, timesheet);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPut("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> UpdateTimesheetEntry(int timesheetEntryId,TimesheetEntry timesheetEntry)
    {
        return await _timesheetOpSvc.UpdateTimesheetEntry(timesheetEntryId, timesheetEntry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpDelete("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> RemoveTimesheetEntry(int timesheetEntryId)
    {
        return await _timesheetOpSvc.RemoveTimesheetEntry(timesheetEntryId);
    }
    
    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpDelete("{timesheetId}/timesheetentries/removeall")]
    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
    {
        return await _timesheetOpSvc.RemoveAllTimesheetEntries(timesheetId);
    }
}
