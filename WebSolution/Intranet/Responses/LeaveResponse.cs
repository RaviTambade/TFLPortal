
namespace Transflower.TFLPortal.Intranet.Responses;

public class LeaveResponse
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int EmployeeId { get; set; }
    public DateTime FromDate { get; set; }
    public DateTime ToDate { get; set; }   
    public DateTime ApplicationDate { get; set; } 
    public int Year{ get; set; }
    public string? Status { get; set; }
    public string? LeaveType { get; set; }
    public string? FullName{ get; set;}

    

}