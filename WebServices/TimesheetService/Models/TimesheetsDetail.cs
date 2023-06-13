namespace PMS.Models;

public class TimesheetsDetail{
 
     public int TimesheetId {get;set;} 
     public string? EmpFirstName{get;set;}
     public string? EmpLastName{get;set;}
     public string? TaskTitle{get;set;}
      public string? ProjectTitle{get;set;}
     public DateTime Starttime{get;set;}
     public DateTime Endtime{get;set;}


}