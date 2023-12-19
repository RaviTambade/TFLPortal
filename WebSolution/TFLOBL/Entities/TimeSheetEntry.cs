namespace Transflower.TFLPortal.TFLOBL.Entities;

public class TimeSheetEntry
{
   public int Id { get; set; }
   public required string Work{get;set;}
   public required string WorkCategory{get;set;}
   public  required string Description{get;set;}
   public TimeOnly FromTime { get; set; }
   public TimeOnly ToTime { get; set; }
   public int TimeSheetId { get; set; }
   public int ProjectId { get; set; }


   public string ProjectName{get;set;}

   
}
