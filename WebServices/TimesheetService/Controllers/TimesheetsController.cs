
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

    [HttpGet]
    [Route("getall")]
    public IEnumerable<Timesheet> GetAll()
    {

        List<Timesheet> timesheets = _service.GetAll();

        return timesheets;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public Timesheet GetById(int id)
    {
        Timesheet user = _service.GetById(id);


        return user;
    }

    [HttpPost]
    [Route("InsertTimesheet")]
    public bool InsertTimesheet(Timesheet timesheet)
    {
        bool status = _service.InsertTimesheet(timesheet);


        return status;
    }

    [HttpPut]
    [Route("updateTimesheet/{id}")]

    public bool UpdateTimesheet(Timesheet timesheets)
    {
        bool status = _service.UpdateTimesheet(timesheets);

        return status;
    }


    [HttpDelete]
    [Route("DeleteTimesheet/{id}")]
    public bool DeleteTimesheet(int id)
    {
        bool status = _service.DeleteTimesheet(id);

        return status;
    }

}



