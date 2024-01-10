namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;

public class TimesheetViewModel : TimesheetDuration
{
    public Employee Employee { get; set; } = new Employee() { };
    public List<TimesheetDetailViewModel> TimeSheetDetails { get; set; } =
        new List<TimesheetDetailViewModel>();
}
