namespace TFLPortal.Models;
public class ProjectAllocation
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public int EmployeeId { get; set; } 
    public string? Title {get; set;}
    public DateTime AssignedOn { get; set; }
    public DateTime ReleasedOn { get; set; }
    public string? Status { get; set; }
}
