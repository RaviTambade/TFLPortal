namespace Transflower.TFLPortal.Entities.LeaveMgmt;

public class LeaveAllocation
{
    public int Id { get; set; }
    public int RoleId { get; set; } 
    public int Year { get; set; }
    public int Sick { get; set; }
    public int Casual { get; set; }
    public int Paid { get; set; }
    public int Unpaid { get; set; }
}
