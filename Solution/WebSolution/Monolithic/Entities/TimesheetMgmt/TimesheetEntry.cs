using System;

namespace Transflower.TFLPortal.Entities.TimesheetMgmt;

public class TimesheetEntry
{
   public int Id { get; set; }
   public TimeOnly FromTime { get; set; }
   public TimeOnly ToTime { get; set; }
   public int TimesheetId { get; set; }
   public int TaskId { get; set; } 

   public double Hours {get;set;}
   
}
