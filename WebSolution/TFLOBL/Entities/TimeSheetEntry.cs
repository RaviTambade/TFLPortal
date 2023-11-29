namespace Transflower.TFLPortal.TFLOBL.Entities;
public class TimeSheetEntry
{
   public int Id{get;set;}
   public string? Title{get;set;}
   public string? ActivityType{get;set;}
   public string? Description{get;set;}
   public TimeOnly FromTime{get;set;}
   public TimeOnly ToTime{get;set;}

}
