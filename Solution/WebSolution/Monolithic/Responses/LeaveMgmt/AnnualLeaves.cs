namespace TFLPortal.Responses;

public class AnnualLeaves
{
    public int EmployeeId{get;set;}
    public List<LeaveCount> Leaves {get; set;}
}