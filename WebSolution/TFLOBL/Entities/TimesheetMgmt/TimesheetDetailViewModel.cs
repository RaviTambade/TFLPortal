namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

public class TimesheetDetailViewModel : TimesheetDetail
{
    public int ProjectId { get; set; }
    public string? ProjectName { get; set; }
    public int SprintId { get; set; }
    public string? SprintName { get; set; }
    public string? WorkTitle { get; set; }
    public string? WorkType { get; set; }
}
