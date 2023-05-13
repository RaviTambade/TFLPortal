
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace payrollcycles.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class PayRollCyclesController : ControllerBase
{

    private readonly IPayRollCycleServices _service;

    public PayRollCyclesController(IPayRollCycleServices service)
    {
        _service = service;
    }

    [HttpGet]
    [Route("getall")]
    public IEnumerable<PayRollCycle> GetAll()
    {

        List<PayRollCycle> payrolls = _service.GetAll();

        return payrolls;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public PayRollCycle GetById(int id)
    {
        PayRollCycle payroll = _service.GetById(id);


        return payroll;
    }

    [HttpPost]
    [Route("Insertpayroll")]
    public bool InsertPayRoll(PayRollCycle payroll)
    {
        bool status = _service.InsertPayRoll(payroll);


        return status;
    }

    [HttpPut]
    [Route("updatepayroll/{id}")]

    public bool UpdatePayRoll(PayRollCycle payroll)
    {
        bool status = _service.UpdatePayRoll(payroll);

        return status;
    }


    [HttpDelete]
    [Route("Deletepayroll/{id}")]
    public bool DeletePayroll(int id)
    {
        bool status = _service.DeletePayRoll(id);

        return status;
    }


}



