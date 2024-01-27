
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.Intranet.Responses;

public class SalaryResponse:MonthSalary
{
    public int EmployeeId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? ContactNumber { get; set; }
    public DateOnly BirthDate { get; set; }
    public string? AccountNumber { get; set; }
    public string? IFSC { get; set; }
    
    
}