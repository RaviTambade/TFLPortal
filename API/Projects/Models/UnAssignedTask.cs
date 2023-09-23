namespace Transflower.PMSApp.Projects.Models;
public class UnAssignedTask{
    public int TaskId{get;set;}
    public int ProjectId{get;set;}
    public string? Title{get;set;}
    public string? ProjectName{get;set;}
    public string? Status{get;set;}
}