using API.Models;
using API.Repositories;
using API.Repositories.Interfaces;
using API.Services.Interfaces;

namespace API.Services;


public class PaymentGatewayService:IPaymentGatewayService
{
    private IPaymentGatewayRepo _repo;

   public PaymentGatewayService(IPaymentGatewayRepo repo)
   {
     _repo =repo;
   }
   public async  Task<int> FundTransfer(PaymentGateWay info){
    return await _repo.FundTransfer(info);
   }
}