

namespace Transflower.TFLPortal.Intranet.Responses;

public class EmployeeResponse
{
    public int EmployeeId { get; set; }
    public DateTime HireDate { get; set; }
    public string? FirstName { get; set; }

    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? ContactNumber { get; set; }

}