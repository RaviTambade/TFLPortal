using Microsoft.AspNetCore.Mvc;
using TFLPortal.Helpers;
using TFLPortal.Models;
using TFLPortal.Responses;
using TFLPortal.Services.TimesheetMgmt.Analytics;
using TFLPortal.Services.TimesheetMgmt.Operations;

namespace TFLPortal.Controllers;

[ApiController]
[Route("/api/timesheets")]
public class TimesheetsController : ControllerBase
{
    private readonly ITimesheetAnalyticsService _analyticsSvc;
    private readonly ITimesheetOperationsService _operationsSvc;

    public TimesheetsController( ITimesheetAnalyticsService analyticsSvc,ITimesheetOperationsService operationsSvc)
    {
        _analyticsSvc = analyticsSvc;
        _operationsSvc = operationsSvc;
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("employees/{employeeId}/from/{from}/to/{to}")]
    public async Task<List<Timesheet>> GetTimesheets(int employeeId,DateOnly from,DateOnly to)
    {
        return await _analyticsSvc.GetTimesheets(employeeId, from, to);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<Timesheet> GetTimesheet(int employeeId, DateOnly date)
    {
        return await _analyticsSvc.GetTimesheet(employeeId, date);
    }
    
    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("{timesheetId}")]
    public async Task<IActionResult> GetTimesheet(int timesheetId)
    {
        Timesheet timesheet = await _analyticsSvc.GetTimesheet(timesheetId);
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
        List<Timesheet> timesheets = await _analyticsSvc.GetTimeSheetsForApproval(projectManagerId,from,to);
        return timesheets;
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("{timesheetId}/timesheetentries")]
    public async Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId)
    {
        return await _analyticsSvc.GetTimesheetEntries(timesheetId);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("timesheetentries/{timesheetEntryId}")]
    public async Task<IActionResult> GetTimesheetEntry(int timesheetEntryId)
    {
        TimesheetEntry entry = await _analyticsSvc.GetTimesheetEntry(timesheetEntryId);
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
        return await _analyticsSvc.GetWorkUtilization(employeeId, from,to, projectId);
     }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("workinghours/employees/{employeeId}/from/{from}/to/{to}")]
    public async Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId, DateOnly from, DateOnly to )
    {
        return await _analyticsSvc.GetHoursWorkedForEachProject(employeeId,from,to);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
        return await _operationsSvc.AddTimesheet(timesheet);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPost("timesheetentries")]
    public async Task<bool> AddTimesheetEntry([FromBody] TimesheetEntry timesheetEntry)
    {
        return await _operationsSvc.AddTimesheetEntry(timesheetEntry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPut("{timesheetId}")]
    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
        return await _operationsSvc.ChangeTimesheetStatus(timesheetId, timesheet);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPut("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> UpdateTimesheetEntry(int timesheetEntryId,TimesheetEntry timesheetEntry)
    {
        return await _operationsSvc.UpdateTimesheetEntry(timesheetEntryId, timesheetEntry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpDelete("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> RemoveTimesheetEntry(int timesheetEntryId)
    {
        return await _operationsSvc.RemoveTimesheetEntry(timesheetEntryId);
    }
    
    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpDelete("{timesheetId}/timesheetentries/removeall")]
    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
    {
        return await _operationsSvc.RemoveAllTimesheetEntries(timesheetId);
    }
}
