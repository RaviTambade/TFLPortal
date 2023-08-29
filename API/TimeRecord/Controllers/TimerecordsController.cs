using Transflower.PMS.TimeRecordService.Models;
using Transflower.PMS.TimeRecordService.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.TimeRecordService.Helpers;

namespace Transflower.PMS.TimeRecordService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TimerecordsController : ControllerBase
{
    private readonly ITimeRecordService _service;
    public TimerecordsController(ITimeRecordService service)
    {
        _service = service;
    }

    //httpGet : http://localhost:5121/api/Timerecords/getall
    //[Authorize]
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<Timerecord>> GetAll()
    {
        IEnumerable<Timerecord> timerecords = await _service.GetAll();
        Console.WriteLine(timerecords);
        return timerecords;
    }

    //httpGet : http://localhost:5121/api/Timerecords/get/1
    //[Authorize]
    [HttpGet]
    [Route("get/{id}")]
    public async Task<Timerecord> Get(int id)
    {
        Timerecord timerecords = await _service.Get(id);
        return timerecords;
    }

    //httpPost : http://localhost:5121/api/timerecords/timerecord
    //[Authorize]
    [HttpPost]
    [Route("timerecord")]
    public async Task<bool> Insert(Timerecord timerecord)
    {
        bool status = await _service.Insert(timerecord);
        return status;
    }

    //httpPut : http://localhost:5121/api/Timerecords/1
    //[Authorize]
    [HttpPut]
    [Route("{id}")]
    public async Task<bool> Update(Timerecord timerecord)
    {
        bool status = await _service.Update(timerecord);
        return status;
    }

    //httpDelete : http://localhost:5121/api/Timerecords/1
    //[Authorize]
    [HttpDelete]
    [Route("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);
        return status;
    }

    //httpGet : http://localhost:5121/api/Timerecords/getall/1
    //[Authorize]
    [HttpGet]
    [Route("getall/{empid}")]
    public async Task<IEnumerable<Timerecord>> GetAll(int empid)
    {
        IEnumerable<Timerecord> timerecords = await _service.GetAll(empid);
        return timerecords;
    }

    // httpGet : http://localhost:5121/api/Timerecords/totaltime/2/2023-06-06/2023-06-10
    //[Authorize]
    [HttpGet]
    [Route("totaltime/{empid}/{fromDate}/{toDate}")]
    public async Task<TotalWorkingTime> GetTotalWorkingTime(int empid, string fromDate, string toDate)
    {
        TotalWorkingTime time = await _service.GetTotalWorkingTime(empid, fromDate, toDate);
        return time;
    }


}
