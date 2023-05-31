namespace PMS.Models;

public class Tasks{
 
      public int Id{get;set;}
      public string? Title{get;set;}
      public int ProjectId{get;set;}
      public string? Description{get;set;}
      public DateTime StartDate{get;set;}
      public DateTime EndDate{get;set;}

}