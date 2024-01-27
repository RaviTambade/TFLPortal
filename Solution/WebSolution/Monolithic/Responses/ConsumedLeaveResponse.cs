namespace TFLPortal.Responses;

public class ConsumedLeaveResponse
{
    public int EmployeeId{get;set;}
    public int Month { get; set; }
    public int Count { get; set; }
    public string? LeaveType { get; set; }
}
