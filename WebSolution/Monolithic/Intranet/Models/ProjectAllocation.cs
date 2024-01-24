namespace TFLPortal.Models;

public class ProjectAllocation
{
    public int AllocationId { get; set; }
    public int ProjectId { get; set; }//ProjectId
    public int MemberId { get; set; } //EmployeeId
    public string? MembershipRole {get; set;}
    public DateTime AssignedDate { get; set; }
    public DateTime ReleaseDate { get; set; }
    public string? Status { get; set; }
}
