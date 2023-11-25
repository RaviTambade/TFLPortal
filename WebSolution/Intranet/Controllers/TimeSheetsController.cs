using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/TimeSheets")]
public class TimeSheetsController : ControllerBase
{
    private readonly ITimeSheetService _service;
    public TimeSheetsController(ITimeSheetService service)
    {
        _service = service;
    }

    

    [HttpGet("{employeeId}")]
    public async Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId){
        List<TimeSheet> timesheets=  await _service.GetTimeSheetsOfEmployee(employeeId);
        return timesheets;
    }


    [HttpGet("TimeSheetEntry/{timeSheetId}")]
    public async Task<TimeSheetDetails> GetTimeSheetDetails(int timeSheetId){
        TimeSheetDetails timesheet=  await _service.GetTimeSheetDetails(timeSheetId);
        return timesheet;
    }
    
}
