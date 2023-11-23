namespace Transflower.PMSApp.Tasks.Models;
public class TaskResponse{
    public int TaskId{get;set;}
    public string? Title{get;set;}
    public string? Status{get;set;}
    public DateTime StartDate{get;set;}
    public DateTime EndDate{get;set;}
    
}