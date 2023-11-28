namespace Transflower.TFLPortal.TFLOBL.Entities;
public class TimeSheet
{
   public int Id{get;set;}
   public DateTime Date{get;set;}
   public string? Status{get;set;}
   public int EmployeeId{get; set;}

   public List<TimeSheetEntry> TimeSheetEntries{get;set;} 
}
