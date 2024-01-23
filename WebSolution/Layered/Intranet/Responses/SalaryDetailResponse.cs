using Transflower.TFLPortal.TFLOBL.Entities;

public class SalaryDetailResponse:SalaryDetails
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }

    public int UserId{get; set;}
    
}