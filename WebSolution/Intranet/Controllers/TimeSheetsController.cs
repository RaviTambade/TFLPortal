using System.Net.Mime;
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

    [HttpGet("timesheetentries/{timeSheetId}")]
    public async Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId)
    {
        return await _service.GetTimeSheetDetails(timeSheetId);
    }

    [HttpPost]
    public async Task<bool> InsertTimeSheet([FromBody] TimeSheet timeSheet)
    {
        return await _service.InsertTimeSheet(timeSheet);
    }
}
