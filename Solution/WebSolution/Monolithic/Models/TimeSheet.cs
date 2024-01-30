namespace TFLPortal.Models;

public class Timesheet
{
    public int Id { get; set; }
    public string Status { get; set; }
    public DateTime CreatedOn { get; set; }
    public DateTime ModifiedOn { get; set; }
    public int CreatedBy { get; set; } 
    public double TotalHours { get; set; } =0;
}
