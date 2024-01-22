using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;
using Transflower.TFLPortal.TFLOBL.External;
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

    [HttpGet("employees/{employeeId}/from/{fromDate}/to/{toDate}")]
    public async Task<List<TimesheetDuration>> GetTimesheets(int employeeId,DateOnly fromDate,DateOnly toDate)
    {
        return await _timesheetService.GetTimesheets(employeeId, fromDate, toDate);
    }

    [HttpGet("timesheetid/employees/{employeeId}/date/{date}")]
    public async Task<int> GetTimesheetId(int employeeId, DateOnly date)
    {
        return await _timesheetService.GetTimesheetId(employeeId, date);
    }

    [HttpGet("{timesheetId}")]
    public async Task<TimesheetResponse> GetTimesheet(int timesheetId)
    {
        TimesheetViewModel timesheet = await _timesheetService.GetTimesheet(timesheetId);

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

    [HttpGet("hrmanager/{hrmanagerId}/status/{status}/from/{fromDate}/to/{toDate}")]
    public async Task<List<TimesheetResponse>> GetEmployeeTimesheetsForHRManager(
        int hrmanagerId,
        string status,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<TimesheetViewModel> timesheets =
        await _timesheetService.GetEmployeeTimesheetsForHRManager(hrmanagerId,status,fromDate,toDate );
        string userIds = string.Join(',', timesheets.Select(t => t.Employee.UserId).ToList());
        List<TimesheetResponse> timesheetResponses = new List<TimesheetResponse>();
        List<User> users = await _apiService.GetUserDetails(userIds);

        foreach (var timesheet in timesheets)
        {
            User user = users.FirstOrDefault(user => user.Id == timesheet.Employee.UserId) ?? new User();
            
            TimesheetResponse timeSheetResponse = new TimesheetResponse
            {
                Id = timesheet.Id,
                TimesheetDate = timesheet.TimesheetDate,
                StatusChangedDate = timesheet.StatusChangedDate,
                Status = timesheet.Status,
                TimeSheetDetails = timesheet.TimeSheetDetails,
                Hours = timesheet.Hours,
                EmployeeId = timesheet.EmployeeId,
                EmployeeName = user.FirstName + " " + user.LastName,
            };
            timesheetResponses.Add(timeSheetResponse);
        }
        return timesheetResponses;
    }

    [HttpGet("timesheetdetails/{timesheetDetailId}")]
    public async Task<TimesheetDetailViewModel> GetTimesheetDetail(int timesheetDetailId)
    {
        return await _timesheetService.GetTimesheetDetail(timesheetDetailId);
    }

 

    [HttpGet("employees/{employeeId}/workduration/{intervalType}/projects/{projectId}")]
    public async Task<List<WorkCategoryDetails>> GetActivityWiseHours(
        int employeeId,
        string intervalType,
        int projectId
    )
    {
        return await _timesheetService.GetActivityWiseHours(employeeId, intervalType, projectId);
    }

    [HttpGet("projects/workinghours/employees/{employeeId}/from/{fromDate}/to/{toDate}")]
    public async Task<List<ProjectWorkHours>> GetProjectWiseTimeSpentByEmployee(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        return await _timesheetService.GetProjectWiseTimeSpentByEmployee(
            employeeId,
            fromDate,
            toDate
        );
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

    [HttpPost("timesheetdetails")]
    public async Task<bool> AddTimesheetDetail([FromBody] TimesheetDetail timesheetEntry)
    {
        return await _timesheetService.AddTimesheetDetail(timesheetEntry);
    }

    [HttpPut("{timesheetId}")]
    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
        return await _timesheetService.ChangeTimesheetStatus(timesheetId, timesheet);
    }

    [HttpPut("timesheetdetails/{timesheetDetailId}")]
    public async Task<bool> UpdateTimesheetDetail(
        int timesheetDetailId,
        TimesheetDetail timesheetEntry
    )
    {
        return await _timesheetService.UpdateTimesheetDetail(timesheetDetailId, timesheetEntry);
    }

    [HttpDelete("timesheetdetails/remove/{timesheetDetailId}")]
    public async Task<bool> RemoveTimesheetDetail(int timesheetDetailId)
    {
        return await _timesheetService.RemoveTimesheetDetail(timesheetDetailId);
    }

    [HttpDelete("timesheetdetails/removeall/{timesheetId}")]
    public async Task<bool> RemoveAllTimesheetDetails(int timesheetId)
    {
        return await _timesheetService.RemoveAllTimesheetDetails(timesheetId);
    }
}
