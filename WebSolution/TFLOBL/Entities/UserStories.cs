namespace Transflower.TFLPortal.TFLOBL.Entities;

public class UserStories
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public int ProjectId { get; set; }

    public int AssignedTo { get; set; }
    public int AssignedBy { get; set; }

    public DateTime CreatedDate { get; set; }



}
