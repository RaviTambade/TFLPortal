namespace Transflower.TFLPortal.TFLOBL.Entities;

public class TimeSheetEntry
{
   public int Id { get; set; }
   public TimeOnly FromTime { get; set; }
   public TimeOnly ToTime { get; set; }
   public int ActivityId { get; set; }
   public int TimeSheetId { get; set; }

   public Activity Activity {get;set;}
   
}
