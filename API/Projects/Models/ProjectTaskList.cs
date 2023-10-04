namespace Transflower.PMSApp.Projects.Models;
public class ProjectTaskList{
    public int TaskId{get;set;}
    public string? Title{get;set;}
    public int TeamMemberUserId{get;set;}
    public DateTime TaskAllocationDate{get;set;}
    public string? Status{get;set;}
}