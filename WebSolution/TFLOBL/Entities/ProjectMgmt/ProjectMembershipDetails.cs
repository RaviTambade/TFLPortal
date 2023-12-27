namespace Transflower.TFLPortal.TFLOBL.Entities;

public class ProjectMembershipDetails : ProjectMembership
{
    public int UserId { get; set; }
    public DateTime HireDate { get; set; }
    public int ReportingId { get; set; }
    public double Salary { get; set; }
    public int EmployeeId { get; set; }
    
}