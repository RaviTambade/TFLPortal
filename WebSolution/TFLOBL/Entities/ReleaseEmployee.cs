namespace Transflower.TFLPortal.TFLOBL.Entities;

public class ReleaseEmployee
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public int EmployeeId { get; set; }
    public DateTime ReleaseDate { get; set; }
    public string? Status { get; set; }
 
}