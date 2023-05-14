using System;
namespace BankingService.Models;
public class Account
{
    public int AccountId{ get; set; }
    public string AccountNumber{ get; set; }
    public string IFSCCode{ get; set; }
    public string? RegisterDate{ get; set; }
    public double Balance{ get; set; }
}