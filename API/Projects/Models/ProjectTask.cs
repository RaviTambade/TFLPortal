namespace Transflower.PMSApp.Projects.Models;
public class ProjectTask{
    public int TaskId{get;set;}
    public string? Title{get;set;}
    public int TeamMemberUserId{get;set;}
    public DateTime AssignedTaskDate{get;set;}
    public string? Status{get;set;}
}