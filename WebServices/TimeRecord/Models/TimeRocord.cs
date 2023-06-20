namespace PMS.Models;

public class Timerecord{
 
     public int TimeRecordId {get;set;} 
     public int EmpId{get;set;}
     public DateTime Date {get;set;}
     public string? TotalTime{get;set;}
     

}