namespace  Transflower.PMS.TimesheetService.Models;

public class Timesheet{
 
     public int TimesheetId {get;set;} 
     public int EmployeeId{get;set;}
     public int ProjectId{get;set;}
     public int TaskId{get;set;}
     public DateTime Date{get;set;}
     public string? FromTime{get;set;}
     public string? Totime{get;set;}


}