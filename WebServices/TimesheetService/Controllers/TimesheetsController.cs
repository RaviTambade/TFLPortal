
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

    [HttpGet ("timesheet/{id}")]
    public Timesheet Get(int id)
    {
        Timesheet user = _service.Get(id);


        return user;
    }

    [HttpPost ("timesheet")]
    public bool Insert(Timesheet timesheet)
    {
        bool status = _service.Insert(timesheet);


        return status;
    }

    [HttpPut ("timesheet/{id}")]

    public bool Update(Timesheet timesheets)
    {
        bool status = _service.Update(timesheets);

        return status;
    }


    [HttpDelete ("timesheet/{id}")]
    public bool Delete(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }

}



