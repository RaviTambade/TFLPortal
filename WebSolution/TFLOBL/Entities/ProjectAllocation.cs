namespace Transflower.TFLPortal.TFLOBL.Entities;

public class ProjectAllocation
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public int EmployeeId { get; set; }
    public string? Membership { get; set; }
    public DateTime AssignDate { get; set; }
    public DateTime ReleaseDate { get; set; }
    public string? Status { get; set; }
    // public Employee? Employee{get;set;}
}
