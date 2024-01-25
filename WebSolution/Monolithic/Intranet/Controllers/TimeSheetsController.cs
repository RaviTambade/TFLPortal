using Microsoft.AspNetCore.Mvc;
using TFLPortal.Models;
using TFLPortal.Responses;
using TFLPortal.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/timesheets")]
public class TimesheetsController : ControllerBase
{
    private readonly ITimesheetService _timesheetService;

    public TimesheetsController(ITimesheetService service)
    {
        _timesheetService = service;
    }

    [HttpGet("employees/{employeeId}/from/{fromDate}/to/{toDate}")]
    public async Task<List<Timesheet>> GetTimesheets(
        int employeeId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        return await _timesheetService.GetTimesheets(employeeId, fromDate, toDate);
    }

    [HttpGet("employees/{employeeId}/date/{date}")]
    public async Task<Timesheet> GetTimesheet(int employeeId, DateOnly date)
    {
        return await _timesheetService.GetTimesheet(employeeId, date);
    }

    [HttpGet("{timesheetId}")]
    public async Task<Timesheet> GetTimesheet(int timesheetId)
    {
        Timesheet timesheet = await _timesheetService.GetTimesheet(timesheetId);
        return timesheet;
    }

    [HttpGet("pendingapproval/from/{fromDate}/to/{toDate}/manager/{projectManagerId}")]
    public async Task<List<Timesheet>> GetTimeSheetsForApproval(
        int projectManagerId,
        DateOnly fromDate,
        DateOnly toDate
    )
    {
        List<Timesheet> timesheets =
            await _timesheetService.GetTimeSheetsForApproval(
                projectManagerId,
                fromDate,
                toDate
            );
        return timesheets;
    }

        [HttpGet("timesheetdetails/{timesheetDetailId}")]
        public async Task<TimesheetEntry> GetTimesheetDetail(int timesheetDetailId)
        {
            return await _timesheetService.GetTimesheetDetail(timesheetDetailId);
        }



        [HttpGet("employees/{employeeId}/workduration/{intervalType}/projects/{projectId}")]
        public async Task<List<WorkTimeUtilizationResponse>> GetActivityWiseHours(
            int employeeId,
            string intervalType,
            int projectId
        )
        {
            return await _timesheetService.GetActivityWiseHours(employeeId, intervalType, projectId);
        }

        [HttpGet("projects/workinghours/employees/{employeeId}/from/{fromDate}/to/{toDate}")]
        public async Task<List<ProjectWorkHoursResponse>> GetProjectWiseTimeSpentByEmployee(
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
        public async Task<bool > AddTimesheet(Timesheet timesheet)
        {
            return await _timesheetService.AddTimesheet(timesheet);
        }

        [HttpPost("timesheetdetails")]
        public async Task<bool> AddTimesheetDetail([FromBody] TimesheetEntry timesheetEntry)
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
            TimesheetEntry timesheetEntry
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
