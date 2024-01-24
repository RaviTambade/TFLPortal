namespace Transflower.TFLPortal.Intranet.Models;

public class Timesheet
{
    public int TimeSheetId { get; set; }
    public string? Status { get; set; }
    public DateTime TimesheetDate { get; set; }
    public DateTime? StatusChangedDate { get; set; }

    public Employee TheEmployee { get; set; } //employeeId
    public double? TotalHours { get; set; }
    public List<TimesheetEntry> Entries { get; set; } 
}
