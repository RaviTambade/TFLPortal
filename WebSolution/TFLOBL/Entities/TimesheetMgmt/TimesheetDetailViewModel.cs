namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

public class TimesheetDetailViewModel : TimesheetDetail
{
    public int projectId { get; set; }
    public string? ProjectName { get; set; }
    public string? WorkTitle { get; set; }
    public string? WorkType { get; set; }
}
