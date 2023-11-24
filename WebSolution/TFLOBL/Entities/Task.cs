namespace Transflower.TFLPortal.TFLOBL.Entities;
public class Task
{
   public int Id{get;set;}
   public string? Title{get;set;}
   public string? Description{get;set;}
   public DateTime AssignDate{get;set;}
   public DateTime StartDate{get;set;}
   public DateTime DueDate{get;set;}
   public int AssignedTo{get;set;}
   public int ProjectId{get;set;}
   public string? Status{get;set;}
}
