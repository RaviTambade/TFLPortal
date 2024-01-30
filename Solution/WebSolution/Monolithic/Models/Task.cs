namespace TFLPortal.Models;
public class Task
{
   public int Id{get;set;}
   public string? Title{get;set;}
   public string? TaskType{get;set;}
   public string? Description{get;set;}
   public DateTime AssignedOn{get;set;}
   public DateTime StartDate{get;set;}
   public DateTime DueDate{get;set;}
   public DateTime CreatedOn{get;set;}
   public string? Status{get;set;}

   public int AssignedTo{get;set;}  
   public int AssignedBy{get;set;}  
   public int ProjectId{get;set;}  
   public int SprintId{get;set;}
}
