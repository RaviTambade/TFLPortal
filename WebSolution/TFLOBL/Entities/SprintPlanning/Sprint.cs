namespace Transflower.TFLPortal.TFLOBL.Entities;

public class Sprint
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public string? Title { get; set; }
    public string? Goal { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}
