namespace Transflower.TFLPortal.TFLOBL.Entities;

public class SalaryStructure
{
    public int Id { get; set; }
    public int EmployeeId { get; set; }
    public double BasicSalary { get; set; }
    public double HRA { get; set; }
    public double DA { get; set; }
    public double LTA { get; set; }
    public double VariablePay { get; set; }
    public double Deduction { get; set; }
 
}