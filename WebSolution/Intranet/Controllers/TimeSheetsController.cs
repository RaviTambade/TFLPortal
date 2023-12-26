using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/timesheets")]
public class TimesheetsController : ControllerBase
{
    private readonly ExternalApiService _apiService;
    private readonly ITimesheetService _timesheetService;

    public TimesheetsController(ExternalApiService apiService, ITimesheetService service)
    {
        _apiService = apiService;
        _timesheetService = service;
    }

    [HttpGet("employees/{employeeId}")]
    public async Task<List<Timesheet>> GetTimesheets(int employeeId)
    {
        List<Timesheet> timesheets = await _timesheetService.GetTimesheets(employeeId);
        return timesheets;
    }

    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<TimesheetResponse> GetTimesheet(int employeeId, string date)
    {
        Timesheet timesheet = await _timesheetService.GetTimesheet(employeeId, date);

        if (timesheet.Employee != null)
        {
            var user = await _apiService.GetUserDetails(timesheet.Employee.UserId.ToString());
            TimesheetResponse timeSheetResponse = new TimesheetResponse
            {
                Id = timesheet.Id,
                TimesheetDate = timesheet.TimesheetDate,
                StatusChangedDate = timesheet.StatusChangedDate,
                Status = timesheet.Status,
                TimeSheetDetails = timesheet.TimeSheetDetails,
                EmployeeId = timesheet.EmployeeId,
                EmployeeName = user[0].FirstName + " " + user[0].LastName,
            };
            return timeSheetResponse;
        }
        return new TimesheetResponse() { };
    }

    [HttpGet("timesheetentries/{timesheetEntryId}")]
    public async Task<TimesheetDetail> GetTimesheetEntry(int timesheetEntryId)
    {
        return await _timesheetService.GetTimesheetEntry(timesheetEntryId);
    }

    [HttpGet("{timesheetId}/timesheetentries")]
    public async Task<List<TimesheetDetail>> GetTimesheetEntries(int timesheetId)
    {
        return await _timesheetService.GetTimesheetEntries(timesheetId);
    }

    [HttpGet("employees/{employeeId}/workduration/{intervalType}/{projectId}")]
    public async Task<List<WorkCategoryDetails>> GetActivityWiseHours(
        int employeeId,
        string intervalType,
        int projectId
    )
    {
        return await _timesheetService.GetActivityWiseHours(employeeId, intervalType, projectId);
    }

    [HttpGet("projects/workinghours/employees/{employeeId}")]
    public async Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(int employeeId)
    {
        return await _timesheetService.GetProjectWiseTimeSpentByEmployee(employeeId);
    }

    [HttpGet("workingdays/employees/{employeeId}/years/{year}/months/{month}")]
    public async Task<int> GetEmployeeWorkingDaysInMonth(int employeeId, int year, int month)
    {
        return await _timesheetService.GetEmployeeWorkingDaysInMonth(employeeId, year, month);
    }

    [HttpPost]
    public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
        return await _timesheetService.AddTimesheet(timesheet);
    }

    [HttpPost("timesheetentries")]
    public async Task<bool> AddTimesheetEntry([FromBody] TimesheetDetail timesheetEntry)
    {
        return await _timesheetService.AddTimesheetEntry(timesheetEntry);
    }

    [HttpPut("{timesheetId}")]
    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
        return await _timesheetService.ChangeTimesheetStatus(timesheetId, timesheet);
    }

    [HttpPut("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> UpdateTimesheetEntry(
        int timesheetEntryId,
        TimesheetDetail timesheetEntry
    )
    {
        return await _timesheetService.UpdateTimesheetEntry(timesheetEntryId, timesheetEntry);
    }

    [HttpDelete("timesheetentries/remove/{timesheetEntryId}")]
    public async Task<bool> RemoveTimesheetEntry(int timesheetEntryId)
    {
        return await _timesheetService.RemoveTimesheetEntry(timesheetEntryId);
    }

    [HttpDelete("timesheetentries/removeall/{timesheetId}")]
    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
    {
        return await _timesheetService.RemoveAllTimesheetEntries(timesheetId);
    }
}
