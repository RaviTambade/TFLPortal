using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace TimeRecord.Controllers;

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
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<Timerecord>> GetAll()
    {
        IEnumerable<Timerecord> timerecords = await _service.GetAll();
        Console.WriteLine(timerecords);
        return timerecords;
    }

    //httpGet : http://localhost:5121/api/Timerecords/get/1
    [HttpGet]
    [Route("get/{id}")]

    public async Task<Timerecord> Get(int id)
    {
        Timerecord timerecords = await _service.Get(id);
        return timerecords;
    }

    //httpPost : http://localhost:5121/api/timerecords/timerecord
    [HttpPost]
    [Route("timerecord")]
    public async Task<bool> Insert(Timerecord timerecord)
    {
        bool status = await _service.Insert(timerecord);
        return status;
    }

    //httpPut : http://localhost:5121/api/Timerecords/1
    [HttpPut]
    [Route("{id}")]
    public async Task<bool> Update(Timerecord timerecord)
    {
        bool status = await _service.Update(timerecord);
        return status;
    }

    //httpDelete : http://localhost:5121/api/Timerecords/1
    [HttpDelete]
    [Route("{id}")]
    public async Task<bool> Delete(int id)
    {
        bool status = await _service.Delete(id);
        return status;
    }

    //httpGet : http://localhost:5121/api/Timerecords/getall/1
    [HttpGet]
    [Route("getall/{empid}")]
    public async Task<IEnumerable<Timerecord>> GetAll(int empid)
    {
        IEnumerable<Timerecord> timerecords = await _service.GetAll(empid);
        return timerecords;
    }

    // httpGet : http://localhost:5121/api/Timerecords/totaltime/2/2023-06-06/2023-06-10
    [HttpGet]
    [Route("totaltime/{empid}/{fromDate}/{toDate}")]
    public async Task<TotalWorkingTime> GetTotalWorkingTime(int empid, string fromDate, string toDate)
    {
        TotalWorkingTime time = await _service.GetTotalWorkingTime(empid, fromDate, toDate);
        return time;
    }


}
