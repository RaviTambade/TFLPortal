namespace Transflower.TFLPortal.TFLOBL.Entities;
public class EmployeeWorkDetails:EmployeeWork
{
   
   public  Employee AssigntoEmployee{get;set;}
   public  Employee AssignByEmployee{get;set;}
   public  Project Project{get;set;}
    public string? ProjectName{get;set;}
}
