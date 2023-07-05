
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
    public async Task<IEnumerable<PayRollCycle>> GetAll()
    {

        IEnumerable<PayRollCycle> payrolls =await _service.GetAll();

        return payrolls;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public async Task<PayRollCycle> GetById(int id)
    {
        PayRollCycle payroll =await _service.GetById(id);


        return payroll;
    }

    [HttpPost]
    [Route("Insertpayroll")]
    public async Task<bool> InsertPayRoll(PayRollCycle payroll)
    {
        bool status =await _service.InsertPayRoll(payroll);
        return status;
    }

    [HttpPut]
    [Route("updatepayroll/{id}")]

    public async Task<bool> UpdatePayRoll(PayRollCycle payroll)
    {
        bool status =await _service.UpdatePayRoll(payroll);
        return status;
    }


    [HttpDelete]
    [Route("Deletepayroll/{id}")]
    public async Task<bool> DeletePayroll(int id)
    {
        bool status =await _service.DeletePayRoll(id);
        return status;
    }


}



