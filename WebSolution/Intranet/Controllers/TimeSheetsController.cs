using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/timesheets")]
public class TimeSheetsController : ControllerBase
{
    private readonly ExternalApiService _apiservice;
    private readonly ITimeSheetService _service;

    public TimeSheetsController(ExternalApiService apiService, ITimeSheetService service)
    {
        _apiservice = apiService;
        _service = service;
    }

    [HttpGet("employees/{employeeId}")]
    public async Task<List<TimeSheet>> GetAllTimeSheets(int employeeId)
    {
        List<TimeSheet> timesheets = await _service.GetTimeSheetsOfEmployee(employeeId);
        return timesheets;
    }

    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<TimeSheetResponse> GetTimeSheetOfEmployee(int employeeId, string date)
    {
        TimeSheet timesheet = await _service.GetTimeSheetOfEmployee(employeeId, date);

        if (timesheet.Employee != null)
        {
            var user = await _apiservice.GetUserDetails(timesheet.Employee.UserId.ToString());
            TimeSheetResponse timeSheetResponse = new TimeSheetResponse
            {
                Id = timesheet.Id,
                TimeSheetDate = timesheet.TimeSheetDate,
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

    [HttpGet("timesheetentries/{timeSheetId}")]
    public async Task<List<TimeSheetEntry>> GetTimeSheetEntries(int timeSheetId)
    {
        return await _service.GetTimeSheetEntries(timeSheetId);
    }

    [HttpGet("employees/{employeeId}/workduration/{intervalType}")]
    public async Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType)
    {
        return await _service.GetActivityWiseHours(employeeId,intervalType);
    }

    [HttpGet("workduration/employees/{employeeId}/from/{fromDate}/to/{toDate}")]
    public async Task<WorkCategory> GetWorkDurationOfEmployee(
        int employeeId,
        DateTime fromDate,
        DateTime toDate
    )
    {
        return await _service.GetWorkDurationOfEmployee(employeeId, fromDate, toDate);
    }

    [HttpPost]
    public async Task<bool> InsertTimeSheet(TimeSheet timeSheet)
    {
        return await _service.InsertTimeSheet(timeSheet);
    }

    [HttpPost("timesheetentries")]
    public async Task<bool> InsertTimeSheetEntry([FromBody] TimeSheetEntry timeSheetEntry)
    {
        return await _service.InsertTimeSheetEntry(timeSheetEntry);
    }

    [HttpPut("{timeSheetId}")]
    public async Task<bool> ChangeTimeSheetStatus(int timeSheetId, TimeSheet timeSheet)
    {
        return await _service.ChangeTimeSheetStatus(timeSheetId, timeSheet);
    }

    [HttpPut("timesheetentries/{timeSheetEntryId}")]
    public async Task<bool> UpdateTimeSheetEntry(
        int timeSheetEntryId,
        TimeSheetEntry timeSheetEntry
    )
    {
        return await _service.UpdateTimeSheetEntry(timeSheetEntryId, timeSheetEntry);
    }

    [HttpDelete("timesheetentries/remove/{timeSheetEntryId}")]
    public async Task<bool> RemoveTimeSheetEntry(int timeSheetEntryId)
    {
        return await _service.RemoveTimeSheetEntry(timeSheetEntryId);
    }

    [HttpDelete("timesheetentries/removeall/{timeSheetId}")]
    public async Task<bool> RemoveAllTimeSheetEntry(int timeSheetId)
    {
        return await _service.RemoveAllTimeSheetEntry(timeSheetId);
    }
}
