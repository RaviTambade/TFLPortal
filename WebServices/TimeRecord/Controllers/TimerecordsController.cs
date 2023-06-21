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
        _service=service;
    }

    // http://localhost:5121/api/Timerecords/getall
    [HttpGet]
    [Route ("getall")]
    public IEnumerable<Timerecord> GetAll()
    {
        List<Timerecord>timerecords=_service.GetAll();
        Console.WriteLine(timerecords);
        return timerecords;
    }

 // http://localhost:5121/api/Timerecords/get/1
    [HttpGet]
    [Route ("get/{id}")]
    public Timerecord Get(int id )
    {
        Timerecord timerecords=_service.Get(id);
        return timerecords;
    }
 // http://localhost:5121/api/timerecords/timerecord
   [HttpPost("timerecord")]
    public bool Insert(Timerecord timerecord)
    {
        bool status = _service.Insert(timerecord);
        return status;
    }

     //http://localhost:5121/api/Timerecords/1
    [HttpPut("{id}")]
    public bool Update(Timerecord timerecord)
    {
        bool status = _service.Update(timerecord);

        return status;
    }

  //http://localhost:5121/api/Timerecords/1
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);
        return status;
    }
    
    //
    [HttpGet]
    [Route ("getall/{empid}")]
    public IEnumerable<Timerecord> GetAll(int empid)
    {
        List<Timerecord>timerecords=_service.GetAll(empid);
        Console.WriteLine(timerecords);
        return timerecords;
    }
}
