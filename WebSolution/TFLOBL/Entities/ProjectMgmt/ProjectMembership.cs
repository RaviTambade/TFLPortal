namespace Transflower.TFLPortal.TFLOBL.Entities;

public class ProjectMembership
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public int EmployeeId { get; set; }
    public string? ProjectRole {get; set;}
    public DateTime ProjectAssignDate { get; set; }
    public DateTime ProjectReleaseDate { get; set; }
    public string? CurrentProjectWorkingStatus { get; set; }
}
