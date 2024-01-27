namespace TFLPortal.Models;

public class Employee
{
    public int EmployeeId { get; set; }
    public int UserId { get; set; } 
    public DateTime HireDate { get; set; }
    public int ReportingId { get; set; } 
}
