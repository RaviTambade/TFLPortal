namespace TFLPortal.Models;

public class Employee
{
    public int Id { get; set; }
    public int UserId { get; set; } 
    public DateTime HiredOn { get; set; }
    public int ReportingId { get; set; } 
}
