using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.TimeSheets.Entities;
using Transflower.PMSApp.TimeSheets.Models;
using Transflower.PMSApp.TimeSheets.Services.Interfaces;

namespace Transflower.PMSApp.TimeSheets.Controller;

[ApiController]
[Route("api/timesheets")]
public class TimeSheetsController : ControllerBase
{
    private readonly ITimeSheetService _service;

    public TimeSheetsController(ITimeSheetService service)
    {
        _service = service;
    }

    [HttpGet("list/{employeeId}/{timePeriod}")]
    public async Task<List<MyTimeSheetList>> GetMyTimeSheets(int employeeId, string timePeriod)
    {
        return await _service.GetMyTimeSheets(employeeId, timePeriod);
    }

    [HttpGet("details/{timeSheetId}")]
    public async Task<TimeSheetDetail> GetTimeSheetDetails(int timeSheetId)
    {
        return await _service.GetTimeSheetDetails(timeSheetId);
    }

    [HttpPost("add")]
    public async Task<bool> AddTimeSheet(TimeSheet timeSheet)
    {
        return await _service.AddTimeSheet(timeSheet);
    }


    [HttpGet("timesheetlist/{managerId}/{timePeriod}")]
    public async Task<List<TimeSheetList>> GetTimeSheetList(int managerId, string timePeriod)
    {
        return await _service.GetTimeSheetList(managerId, timePeriod);
    }
}