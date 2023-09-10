using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.TimesheetService.Models;
using Transflower.PMS.TimesheetService.Services.Interfaces;

namespace Transflower.PMS.TimesheetService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TimesheetController : ControllerBase
{

    private readonly ITimeSheetServices _service;
    private readonly ILogger<TimesheetController> _logger;
    public TimesheetController(ITimeSheetServices service, ILogger<TimesheetController> logger)
    {
        _service = service;
        _logger = logger;
    }

    //httpGet :  http://localhost:5161/api/Timesheet/getall
    //[Authorize]
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<Timesheet>> GetAll()
    {
        IEnumerable<Timesheet> timesheets = await _service.GetAll();
        return timesheets;
    }

    //httpGet ; http://localhost:5161/api/Timesheet/get/2
    //[Authorize]
    [HttpGet]
    [Route("Get/{id}")]
    public async Task<Timesheet> GetTimesheet(int id)
    {
        Timesheet timesheet = await _service.Get(id);
        return timesheet;
    }

    //httpPost ; http://localhost:5161/api/Timesheet/timesheet
    //[Authorize]
    [HttpPost]
    [Route("timesheet")]
    public async Task<bool> Insert(Timesheet timesheet)
    {
        bool status = await _service.Insert(timesheet);
        return status;
    }

    //httpPut : http://localhost:5161/api/Timesheet/2
    //[Authorize]
    [HttpPut]
    [Route("{id}")]
    public async Task<bool> Update(Timesheet timesheets)
    {
        bool status = await _service.Update(timesheets);
        return status;
    }

    //httpDelete : http://localhost:5161/api/Timesheet/2
    //[Authorize]
    [HttpDelete]
    [Route("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);
        return status;
    }

    // //httpGet :  http://localhost:5161/api/Timesheet/2/2023-06-13
    // [HttpGet ("{empid}/{theDate}")]
    //    public async Task<IEnumerable<TimesheetsDetail>>GetAllDetails(int empid,string theDate)
    // {
    //    IEnumerable<TimesheetsDetail> timesheetDetails =await _service.GetAllDetails(empid,theDate);
    //     return timesheetDetails;
    // }


    // //httpGet : http://localhost:5161/api/Timesheet/Getdetails/1
    // //[Authorize]
    // [HttpGet]
    // [Route("Getdetails/{timesheetId}")]
    // public async Task<TimesheetsDetail> Get(int timesheetId)
    // {
    //     TimesheetsDetail timesheetDetails = await _service.GetDetails(timesheetId);
    //     return timesheetDetails;
    // }

    //httpGet ; http://localhost:5161/api/Timesheet/totaltime/2/2023-06-02
    //[Authorize]
    [HttpGet]
    [Route("totaltime/{empid}/{theDate}")]
    public async Task<WorkingTime> GetTotalWorkingTime(int empid, string theDate)
    {
        WorkingTime time = await _service.GetTotalWorkingTime(empid, theDate);
        return time;
    }

//httpGet ; http://localhost:5161/api/Timesheet/weeklydata/2
    //[Authorize]
    [HttpGet]
    [Route("weeklydata/{empid}")]
  public async Task<IEnumerable<WeeklyData>>GetWeeklyData(int empid)
    {
       IEnumerable<WeeklyData> weeklydata =await _service.GetWeeklyData(empid);
        return weeklydata;
    }



}



