
namespace Transflower.TFLPortal.Intranet.Responses;

public class EmployeeResponse:User
{
    public int EmployeeId { get; set; }
    public DateTime HireDate { get; set; }
    public double Salary { get; set; }
}