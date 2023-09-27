namespace Transflower.PMSApp.Projects.Models;
public class UnAssignedTaskByManager{
    public int TaskId{get;set;}
    public int ProjectId{get;set;}
    public string? TaskTitle{get;set;}
    public string? ProjectTitle{get;set;}
    public DateTime? TaskDate{get;set;}
    
}