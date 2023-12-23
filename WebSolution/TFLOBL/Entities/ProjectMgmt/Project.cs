namespace Transflower.TFLPortal.TFLOBL.Entities;

public class Project
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public int TeamManagerId { get; set; }

    public string? Status { get; set; }
}
