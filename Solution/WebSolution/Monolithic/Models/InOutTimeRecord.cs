
namespace TFLPortal.Models;

public class InOutTimeRecord
{
    public DateTime WorkingDate { get; set; }
    public int EmployeeId { get; set; }
    public TimeOnly InTime { get; set; }
    public TimeOnly OutTime { get; set; }
}
