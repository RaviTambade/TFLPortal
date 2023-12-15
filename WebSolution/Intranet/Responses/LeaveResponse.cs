
using Transflower.TFLPortal.TFLSAL.DTO;

namespace Transflower.TFLPortal.Intranet.Responses;

public class LeaveResponse
{
    public int EmployeeId { get; set; }
    public DateTime FromDate { get; set; }
    public DateTime ToDate { get; set; }   

    public string? Status { get; set; }
    public string? LeaveType { get; set; }

    public string? FullName{ get; set;}

    

}