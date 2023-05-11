namespace PMS.Models;

public class Tasks{
 
      public int TaskId{get;set;}

      public int ProjectId{get;set;}

      public string? TaskName{get;set;}

      public string? Description{get;set;}

      public DateTime StartDate{get;set;}

      public DateTime EndDate{get;set;}

}