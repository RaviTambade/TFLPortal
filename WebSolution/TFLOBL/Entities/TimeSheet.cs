using System.ComponentModel.DataAnnotations;

namespace Transflower.TFLPortal.TFLOBL.Entities;
public class TimeSheet
{
   public int Id{get;set;}
   public string? Status{get;set;}
   public int EmployeeId{get; set;}
   public DateTime TimeSheetDate{get;set;}
   public DateTime StatusChangedDate{get;set;}

   public List<TimeSheetEntry> TimeSheetEntries {get;set;}  
}
