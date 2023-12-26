namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

public class TimesheetViewModel : Timesheet
{
    public Employee? Employee { get; set; }
    public List<TimesheetDetailViewModel>? TimeSheetDetails { get; set; }
}
