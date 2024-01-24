namespace Transflower.TFLPortal.Intranet.Models;

public class Employee
{
    public int EmployeeId { get; set; }
    public PersonalDetails Details { get; set; } //userId
    public DateTime HireDate { get; set; }
    public Employee Manager { get; set; } //reportingId
}
