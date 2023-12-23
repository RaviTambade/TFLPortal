using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.DTO;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/timesheets")]
public class TimeSheetsController : ControllerBase
{
    private readonly ExternalApiService _apiService;
    private readonly ITimesheetService _timesheetService;

    public TimeSheetsController(ExternalApiService apiService, ITimesheetService service)
    {
        _apiService = apiService;
        _timesheetService = service;
    }

    [HttpGet("employees/{employeeId}")]
    public async Task<List<Timesheet>> GetTimesheetsOfEmployee(int employeeId)
    {
        List<Timesheet> timesheets = await _timesheetService.GetTimesheetsOfEmployee(employeeId);
        return timesheets;
    }

    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<TimeSheetResponse> GetTimesheetOfEmployee(int employeeId, string date)
    {
        Timesheet timesheet = await _timesheetService.GetTimesheetOfEmployee(employeeId, date);

        if (timesheet.Employee != null)
        {
            var user = await _apiService.GetUserDetails(timesheet.Employee.UserId.ToString());
            TimeSheetResponse timeSheetResponse = new TimeSheetResponse
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
        return new TimeSheetResponse() { };
    }

    [HttpGet("timesheetentries/{timesheetEntryId}")]
    public async Task<TimesheetEntry> GetTimesheetEntry(int timesheetEntryId)
    {
        return await _timesheetService.GetTimesheetEntry(timesheetEntryId);
    }

    [HttpGet("{timesheetId}/timesheetentries")]
    public async Task<List<TimesheetEntry>> GetTimesheetEntries(int timesheetId)
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

    [HttpGet("projects/employees/{employeeId}")]
    public async Task<List<TimesheetHours>> GetProjectWiseTimeSpentByEmployee(int employeeId)
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
    public async Task<bool> AddTimesheetEntry([FromBody] TimesheetEntry timesheetEntry)
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
        TimesheetEntry timesheetEntry
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
