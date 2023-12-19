
namespace Transflower.TFLPortal.TFLSAL.DTO;

public class SalaryStructureDTO
{
    public int EmployeeId { get; set; }
    public double BasicSalary { get; set; }
    public double HRA { get; set; }
    public double DA { get; set; }
    public double LTA { get; set; }
    public double VariablePay { get; set; }
    public double Deduction { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? ContactNumber { get; set; }
    public DateOnly BirthDate { get; set; }
    public string? AccountNumber { get; set; }
    public string? IFSC { get; set; }

    
}