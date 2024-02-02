using Microsoft.AspNetCore.Mvc;
using TFLPortal.Helpers;
using TFLPortal.Models;
using TFLPortal.Responses;
using TFLPortal.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/timesheets")]
public class TimesheetsController : ControllerBase
{
    private readonly ITimesheetService _timesheetService;
    private readonly ITimesheetBIService _biService;

    public TimesheetsController(ITimesheetService service,ITimesheetBIService bIService)
    {
        _timesheetService = service;
        _biService=bIService;
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("employees/{employeeId}/from/{from}/to/{to}")]
    public async Task<List<Timesheet>> GetTimesheets(int employeeId,DateOnly from,DateOnly to)
    {
        return await _timesheetService.GetTimesheets(employeeId, from, to);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<Timesheet> GetTimesheet(int employeeId, DateOnly date)
    {
        return await _timesheetService.GetTimesheet(employeeId, date);
    }
    
    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("{timesheetId}")]
    public async Task<IActionResult> GetTimesheet(int timesheetId)
    {
        Timesheet timesheet = await _timesheetService.GetTimesheet(timesheetId);
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
        List<Timesheet> timesheets = await _timesheetService.GetTimeSheetsForApproval(projectManagerId,from,to);
        return timesheets;
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("{timesheetId}/timesheetentries")]
    public async Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId)
    {
        return await _timesheetService.GetTimesheetEntries(timesheetId);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("timesheetentries/{timesheetEntryId}")]
    public async Task<IActionResult> GetTimesheetEntry(int timesheetEntryId)
    {
        TimesheetEntry entry = await _timesheetService.GetTimesheetEntry(timesheetEntryId);
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
        return await _biService.GetWorkUtilization(employeeId, from,to, projectId);
     }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpGet("workinghours/employees/{employeeId}/from/{from}/to/{to}")]
    public async Task<List<ProjectWorkHours>> GetHoursWorkedForEachProject(int employeeId, DateOnly from, DateOnly to )
    {
        return await _biService.GetHoursWorkedForEachProject(employeeId,from,to);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPost]
    public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
        return await _timesheetService.AddTimesheet(timesheet);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPost("timesheetentries")]
    public async Task<bool> AddTimesheetEntry([FromBody] TimesheetEntry timesheetEntry)
    {
        return await _timesheetService.AddTimesheetEntry(timesheetEntry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPut("{timesheetId}")]
    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
        return await _timesheetService.ChangeTimesheetStatus(timesheetId, timesheet);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpPut("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> UpdateTimesheetEntry(int timesheetEntryId,TimesheetEntry timesheetEntry)
    {
        return await _timesheetService.UpdateTimesheetEntry(timesheetEntryId, timesheetEntry);
    }

    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpDelete("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> RemoveTimesheetEntry(int timesheetEntryId)
    {
        return await _timesheetService.RemoveTimesheetEntry(timesheetEntryId);
    }
    
    [Authorize(RoleTypes.Employee,RoleTypes.Director,RoleTypes.HRManager,RoleTypes.ProjectManager)]
    [HttpDelete("{timesheetId}/timesheetentries/removeall")]
    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
    {
        return await _timesheetService.RemoveAllTimesheetEntries(timesheetId);
    }
}
