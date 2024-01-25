namespace TFLPortal.Models;

public class Member
{
    public int Id { get; set; }
    public int ProjectId { get; set; }//ProjectId
    public int EmployeeId { get; set; } //EmployeeId
    public string? Title {get; set;}
    public DateTime AssignedOn { get; set; }
    public DateTime ReleasedOn { get; set; }
    public string? Status { get; set; }
}
