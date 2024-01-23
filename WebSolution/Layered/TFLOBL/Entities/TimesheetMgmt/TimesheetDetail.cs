namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;


public class TimesheetEntry
{
   public int Id { get; set; }
   public TimeOnly FromTime { get; set; }
   public TimeOnly ToTime { get; set; }
   public int TimesheetId { get; set; }
   public int EmployeeWorkId { get; set; }
   
}
