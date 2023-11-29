namespace Transflower.TFLPortal.Intranet.Requests;

public class FundTransferRequest
{
    public string? FromAcct{get;set;}
    public string? ToAcct{get;set;}
    public string? FromIfsc{get;set;}
    public string? ToIfsc{get;set;}
    public double Amount{get;set;} 
}