namespace Transflower.TFLPortal.Intranet.Models;


public class TimesheetEntry
{
   public int TimesheetEntryId { get; set; }
   public TimeOnly FromTime { get; set; }
   public TimeOnly ToTime { get; set; }
   public Timesheet Timesheet { get; set; } //TimesheetId
   public Task EmployeeWork { get; set; } //EmployeeWorkId
   
}
