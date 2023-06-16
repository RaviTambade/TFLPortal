
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace users.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TimesheetController : ControllerBase
{

    private readonly ITimeSheetServices _service;

    public TimesheetController(ITimeSheetServices service)
    {
        _service = service;
    }

    //
    [HttpGet]
    [Route("getall")]
    public IEnumerable<Timesheet> GetAll()
    {
        List<Timesheet> timesheets = _service.GetAll();
        return timesheets;
    }
    
    //http://localhost:5161/api/Timesheet/get/2
    [HttpGet("Get/{id}")]
    public Timesheet Get(int id)
    {
        Timesheet user = _service.Get(id);


        return user;
    }

    [HttpPost("timesheet")]
    public bool Insert(Timesheet timesheet)
    {
        bool status = _service.Insert(timesheet);
        return status;
    }
    
    //http://localhost:5161/api/Timesheet/2
    [HttpPut("{id}")]
    public bool Update(Timesheet timesheets)
    {
        bool status = _service.Update(timesheets);

        return status;
    }

    //http://localhost:5161/api/Timesheet/2
    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);
        return status;
    }

    //http://localhost:5161/api/Timesheet/2
    [HttpGet ("{empid}/{theDate}")]
    public IEnumerable<TimesheetsDetail> GetAllDetails(int empid,string theDate)
    {
        List<TimesheetsDetail> timesheets = _service.GetAllDetails(empid,theDate);
        return timesheets;
    }


     //http://localhost:5161/api/Timesheet/get
    [HttpGet ("Getdetails/{timesheetId}")]
    public TimesheetsDetail GetDetails(int timesheetId)
    {
        TimesheetsDetail timesheets = _service.GetDetails(timesheetId);
        return timesheets;
    }


}



