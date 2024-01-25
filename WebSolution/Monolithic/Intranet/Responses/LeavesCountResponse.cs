namespace TFLPortal.Responses;

public class LeavesCountResponse
{
    public int Sick { get; set; }
    public int Casual { get; set; }
    public int Paid { get; set; }
    public int Unpaid { get; set; }
}
