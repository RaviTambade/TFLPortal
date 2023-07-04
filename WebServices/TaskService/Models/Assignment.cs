namespace PMS.Models;

public class Assignment{
 
      public int Id{get;set;}
      public string? Title{get;set;}
      public int ProjectId{get;set;}
      public string? Description{get;set;}
      public string? Date{get;set;}
      public string? FromTime{get;set;}
      public string? ToTime{get;set;}

}