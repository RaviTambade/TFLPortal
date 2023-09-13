namespace Transflower.PMSApp.Projects.Entities;
public class Project
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? StartDate { get; set; }
    public string? EndDate { get; set; }
    public string? Description { get; set; }
    public int TeamManagerId { get; set; }
    public string? Status { get; set; }
}
