namespace Transflower.PMSApp.Tasks.Models;
public class MoreTaskDetail{

    public int TaskId{get;set;}
    public DateTime? Date{get;set;}  
    public DateTime? AssignedTaskDate{get;set;} 
    public string? Description{get;set;}
    public DateTime? FromTime{get;set;}
    public DateTime? ToTime{get;set;}
}