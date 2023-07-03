using API.Models;
namespace API.Repositories.Interfaces;

public interface IPaymentGatewayRepo
{
    int FundTransfer(PaymentGateWay info );
}