namespace Transflower.TFLPortal.Intranet.Models;

public class ProjectMembership
{
    public int ProjectMembershipId { get; set; }
    public Project Project { get; set; }//ProjectId
    public Employee Employee { get; set; } //EmployeeId
    public string? ProjectRole {get; set;}
    public DateTime ProjectAssignDate { get; set; }
    public DateTime ProjectReleaseDate { get; set; }
    public string? CurrentProjectWorkingStatus { get; set; }
}
