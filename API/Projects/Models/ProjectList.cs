namespace Transflower.PMSApp.Projects.Models;
public class ProjectList{
     public int Id { get; set; }
    public string? Title { get; set; }
    public string? StartDate { get; set; }
    public string? Status { get; set; }
    public int TeamManagerId { get; set; }
    public int TeamManagerUserId{get;set;}
}