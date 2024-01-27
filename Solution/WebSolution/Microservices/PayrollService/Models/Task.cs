namespace TFLPortal.Models;
public class Task
{
   public int TaskId{get;set;}
   public string? Title{get;set;}
   public string? TaskType{get;set;}
   public string? Description{get;set;}
   public DateTime AssignDate{get;set;}
   public DateTime StartDate{get;set;}
   public DateTime DueDate{get;set;}
   public DateTime CreatedDate{get;set;}
   public string? Status{get;set;}

   public int AssignedTo{get;set;}  //AssignedTo
   public int AssignedBy{get;set;}  //AssignedBy
   public int ProjectId{get;set;}  //ProjectId
   public int SprintId{get;set;}//SprintId    
}
