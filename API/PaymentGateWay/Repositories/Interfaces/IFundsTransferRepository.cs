using API.Models;
namespace API.Repositories.Interfaces;

public interface IPaymentGatewayRepo
{
    Task<int> FundTransfer(PaymentGateWay info );
}