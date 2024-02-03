namespace TFLPortal.Responses;

public class MonthlyLeaves
{
    public int Month { get; set; }
    List<LeaveCount> Leaves {get;set;}
}
