namespace Transflower.PMSApp.Tasks.Models;
public class MyTaskList{
    public int TaskId{get;set;}
    public int ProjectId{get;set;}
    public string? Title{get;set;}
    public DateTime AssignedOn{get;set;}
    public string? ProjectName{get;set;}
    public string? Status{get;set;}
}