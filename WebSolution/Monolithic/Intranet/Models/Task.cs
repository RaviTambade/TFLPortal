namespace Transflower.TFLPortal.Intranet.Models;
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

   public Employee Assignee{get;set;}  //AssignedTo
   public Employee Assigner{get;set;}  //AssignedBy
   // public Project CurrentProject{get;set;}  //ProjectId
   public Sprint CurrentSprint{get;set;}//SprintId    
}
