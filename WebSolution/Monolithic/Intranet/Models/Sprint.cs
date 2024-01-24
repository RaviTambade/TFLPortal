namespace Transflower.TFLPortal.Intranet.Models;

public class Sprint
{
    public int SprintId { get; set; }
    public string? Title { get; set; }
    public string? Goal { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public Project CurrentProject { get; set; } //ProjectId
}
