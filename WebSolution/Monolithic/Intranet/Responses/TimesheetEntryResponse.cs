namespace TFLPortal.Responses;

public class TimesheetEntryResponse
{
    public int Id { get; set; }
    public TimeOnly FromTime { get; set; }
    public TimeOnly ToTime { get; set; }
    public int TimesheetId { get; set; }
    public int TaskId { get; set; }
    public int ProjectId { get; set; }
}
