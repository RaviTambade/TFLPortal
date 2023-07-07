using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Services;
using API.Services.Interfaces;

namespace PaymentGateWayService.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class FundTransferController: ControllerBase
{

    private readonly IPaymentGatewayService _svc;
    public FundTransferController(IPaymentGatewayService svc)
    {
        _svc = svc;
    }

    //httpPost : http://localhost:5041/api/fundtransfer
    [HttpPost]
    public async Task<int> PaymentGateWay([FromBody] PaymentGateWay info)
    {
        return await _svc.FundTransfer(info);
    }

}
