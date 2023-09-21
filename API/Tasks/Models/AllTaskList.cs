namespace Transflower.PMSApp.Tasks.Models;
public class AllTaskList
{
    public int TaskId{get;set;}
    public string? ProjectName{get;set;}   
    public string? TaskTitle{get;set;}
    public int TeamMemberId{get;set;}
    public int TeamMemberUserId{get;set;}
}