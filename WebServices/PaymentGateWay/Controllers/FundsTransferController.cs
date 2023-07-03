using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Services;
using API.Services.Interfaces;

namespace PaymentGateWayService.Controllers;

[ApiController]
[Route("[controller]")]
public class FundTransferController: ControllerBase
{

    private readonly IPaymentGatewayService _svc;
    public FundTransferController(IPaymentGatewayService svc)
    {
        _svc = svc;
    }

    [HttpPost]
    public int PaymentGateWay([FromBody] PaymentGateWay info)
    {
        return _svc.FundTransfer(info);
    }

}
