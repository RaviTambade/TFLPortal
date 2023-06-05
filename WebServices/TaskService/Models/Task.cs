namespace PMS.Models;

public class Tasks{
 
      public int Id{get;set;}
      public string? Title{get;set;}
      public int ProjectId{get;set;}
      public string? Description{get;set;}
      public string? StartDate{get;set;}
      public string? EndDate{get;set;}

}