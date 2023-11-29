namespace Transflower.TFLPortal.TFLOBL.Entities;

public class Employee
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public DateTime HireDate { get; set; }
    public int ReportingId { get; set; }
    public double Salary { get; set; }
}
