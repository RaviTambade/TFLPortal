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

    public TimeSheetsController(ExternalApiService apiservice, ITimeSheetService service)
    {
        _apiservice = apiservice;
        _service = service;
    }

    [HttpGet("{employeeId}")]
    public async Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId)
    {
        List<TimeSheet> timesheets = await _service.GetTimeSheetsOfEmployee(employeeId);
        return timesheets;
    }

    [HttpGet("{employeeId}/date/{date}")]
    public async Task<TimeSheet> GetTimeSheetOfEmployee(int employeeId, string date)
    {
        TimeSheet timesheet = await _service.GetTimeSheetOfEmployee(employeeId, date);
        return timesheet;
    }

    [HttpGet("timesheetentries/{timeSheetId}")]
    public async Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId)
    {
        return await _service.GetTimeSheetDetails(timeSheetId);
    }

    [HttpPost]
    public async Task<bool> InsertTimeSheetEntry([FromBody] TimeSheetEntry timeSheet)
    {
        return await _service.InsertTimeSheetEntry(timeSheet);
    }

    [HttpGet("timesheet/id/{employeeId}/{date}")]
    public async Task<int> GetTimeSheetId(int employeeId, DateTime date)
    {
        return await _service.GetTimeSheetId(employeeId, date);
    }

    [HttpPut("{timeSheetId}")]
    public async Task<bool> ChangeTimeSheetStatus(int timeSheetId, TimeSheet timeSheet)
    {
        return await _service.ChangeTimeSheetStatus(timeSheetId,timeSheet);
    }
}
