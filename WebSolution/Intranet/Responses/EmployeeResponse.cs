
using Transflower.TFLPortal.TFLSAL.DTO;

namespace Transflower.TFLPortal.Intranet.Responses;

public class EmployeeResponse:UserDTO
{
    public int EmployeeId { get; set; }
    public DateTime HireDate { get; set; }
    public double Salary { get; set; }

}