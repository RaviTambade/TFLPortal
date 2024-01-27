
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.Intranet.Responses;

public class SprintResponse:SprintDetails
{
    public int EmployeeId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? ContactNumber { get; set; }
    
    
}