namespace TFLPortal.Responses;

public class MonthlyLeaves
{
    public int Month { get; set; }
    public  List<LeaveCount> Leaves {get;set;}
}
