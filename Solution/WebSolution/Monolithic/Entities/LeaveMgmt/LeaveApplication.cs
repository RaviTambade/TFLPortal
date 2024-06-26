namespace Transflower.TFLPortal.Entities.LeaveMgmt;

public class LeaveApplication
{
    public int Id { get; set; }
    public DateTime CreatedOn { get; set; }
    public DateTime FromDate { get; set; }
    public DateTime ToDate { get; set; } 
    public string? Status { get; set; }
    public string? LeaveType { get; set; }
    public int EmployeeId { get; set; }
}
