namespace Transflower.PMSApp.Projects.Models;
public class AssignedTaskByManager{
    public int TaskId{get;set;}
    public int ProjectId{get;set;}
    public string? TaskTitle{get;set;}
    public string? ProjectTitle{get;set;}
    public DateTime? TaskDate{get;set;}
    public DateTime? AssignedTaskDate{get;set;}
    public int TeamMemberUserId{get;set;}
    public int TeamMemberId{get;set;}


}