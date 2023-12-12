namespace Transflower.TFLPortal.TFLOBL.Entities;

public class Leave
{
    public int Id { get; set; }
    public int EmployeeId { get; set; }
    public DateTime FromDate { get; set; }
    public DateTime ToDate { get; set; }
    public string? Status { get; set; }
    public string? LeaveType { get; set; }
}