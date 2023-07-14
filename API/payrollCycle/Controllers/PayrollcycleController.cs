
using PMS.Models;
using PMS.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PMS.Helpers;

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


    // httpGet : http://localhost:5181/api/payrolecycle/getall
     //  [Authorize]
    [HttpGet]
    [Route("getall")]
    public async Task<IEnumerable<PayRollCycle>> GetAll()
    {
        IEnumerable<PayRollCycle> payrolls = await _service.GetAll();
        return payrolls;
    }

    // httpGet : http://localhost:5181/api/payrolecycle/getbyid/1
       //[Authorize]
    [HttpGet]
    [Route("getbyid/{id}")]
    public async Task<PayRollCycle> GetById(int id)
    {
        PayRollCycle payroll = await _service.GetById(id);
        return payroll;
    }

    // httpPost : http://localhost:5181/api/payrolecycle/insertpayroll
       //[Authorize]
    [HttpPost]
    [Route("Insertpayroll")]
    public async Task<bool> InsertPayRoll(PayRollCycle payroll)
    {
        bool status = await _service.InsertPayRoll(payroll);
        return status;
    }

    // httpPut : http://localhost:5181/api/payrolecycle/updateparyroll/1
      // [Authorize]
    [HttpPut]
    [Route("updatepayroll/{id}")]
    public async Task<bool> UpdatePayRoll(PayRollCycle payroll)
    {
        bool status = await _service.UpdatePayRoll(payroll);
        return status;
    }

    // httpDelete : http://localhost:5181/api/payrolecycle/deletepayroll/1
     //  [Authorize]
    [HttpDelete]
    [Route("Deletepayroll/{id}")]
    public async Task<bool> DeletePayroll(int id)
    {
        bool status = await _service.DeletePayRoll(id);
        return status;
    }


}



