namespace Transflower.TFLPortal.TFLOBL.Entities.TimesheetMgmt;


public class Timesheet
{
    public int Id { get; set; }
    public string? Status { get; set; }
    public int EmployeeId { get; set; }
    public DateTime TimesheetDate { get; set; }
    public DateTime? StatusChangedDate { get; set; }

    //navigational property
   public Employee? Employee { get; set; }
   public List<TimesheetEntry>? TimeSheetDetails { get; set; }

   
}
