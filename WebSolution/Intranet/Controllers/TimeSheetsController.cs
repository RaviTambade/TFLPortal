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
    private readonly ExternalApiService _apiservice;
    private readonly ITimesheetService _service;

    public TimeSheetsController(ExternalApiService apiService, ITimesheetService service)
    {
        _apiservice = apiService;
        _service = service;
    }

    [HttpGet("employees/{employeeId}")]
    public async Task<List<Timesheet>> GetAllTimeSheets(int employeeId)
    {
        List<Timesheet> timesheets = await _service.GetTimeSheetsOfEmployee(employeeId);
        return timesheets;
    }

    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<TimeSheetResponse> GetTimeSheetOfEmployee(int employeeId, string date)
    {
        Timesheet timesheet = await _service.GetTimeSheetOfEmployee(employeeId, date);

        if (timesheet.Employee != null)
        {
            var user = await _apiservice.GetUserDetails(timesheet.Employee.UserId.ToString());
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
    public async Task<TimesheetEntry> GetTimeSheetEntry(int timesheetEntryId)
    {
        return await _service.GetTimeSheetEntry(timesheetEntryId);
    }

    [HttpGet("{timesheetId}/timesheetentries")]
    public async Task<List<TimesheetEntry>> GetTimeSheetEntries(int timesheetId)
    {
        return await _service.GetTimeSheetEntries(timesheetId);
    }

    [HttpGet("employees/{employeeId}/workduration/{intervalType}/{projectId}")]
    public async Task<List<WorkCategoryDetails>> GetActivityWiseHours(
        int employeeId,
        string intervalType,
        int projectId
    )
    {
        return await _service.GetActivityWiseHours(employeeId, intervalType, projectId);
    }

    [HttpGet("projects/employees/{employeeId}")]
    public async Task<List<ProjectHours>> GetProjectWiseTimeSpentByEmployee(int employeeId)
    {
        return await _service.GetProjectWiseTimeSpentByEmployee(employeeId);
    }

    [HttpGet("workingdays/employees/{employeeId}/years/{year}/months/{month}")]
    public async Task<int> GetEmployeeWorkingDaysInMonth(int employeeId, int year, int month)
    {
        return await _service.GetEmployeeWorkingDaysInMonth(employeeId, year, month);
    }

    [HttpPost]
    public async Task<bool> InsertTimeSheet(Timesheet timesheet)
    {
        return await _service.InsertTimeSheet(timesheet);
    }

    [HttpPost("timesheetentries")]
    public async Task<bool> InsertTimeSheetEntry([FromBody] TimesheetEntry timesheetEntry)
    {
        return await _service.InsertTimeSheetEntry(timesheetEntry);
    }

    [HttpPut("{timesheetId}")]
    public async Task<bool> ChangeTimeSheetStatus(int timesheetId, Timesheet timesheet)
    {
        return await _service.ChangeTimeSheetStatus(timesheetId, timesheet);
    }

    [HttpPut("timesheetentries/{timesheetEntryId}")]
    public async Task<bool> UpdateTimeSheetEntry(
        int timesheetEntryId,
        TimesheetEntry timesheetEntry
    )
    {
        return await _service.UpdateTimeSheetEntry(timesheetEntryId, timesheetEntry);
    }

    [HttpDelete("timesheetentries/remove/{timesheetEntryId}")]
    public async Task<bool> RemoveTimeSheetEntry(int timesheetEntryId)
    {
        return await _service.RemoveTimeSheetEntry(timesheetEntryId);
    }

    [HttpDelete("timesheetentries/removeall/{timesheetId}")]
    public async Task<bool> RemoveAllTimeSheetEntries(int timesheetId)
    {
        return await _service.RemoveAllTimeSheetEntries(timesheetId);
    }
}
