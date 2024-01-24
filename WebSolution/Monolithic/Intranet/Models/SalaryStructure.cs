namespace Transflower.TFLPortal.Intranet.Models;

public class SalaryStructure
{
    public int SalaryStructureId { get; set; }
    public Employee Employee { get; set; } //EmployeeId
    public double BasicSalary { get; set; }
    public double HRA { get; set; }
    public double DA { get; set; }
    public double LTA { get; set; }
    public double VariablePay { get; set; }
    public double Deduction { get; set; }
 
}