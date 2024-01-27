namespace TFLPortal.Models;

public class SalaryStructure
{
    public int Id { get; set; }
    public int EmployeeId { get; set; } //EmployeeId
    public double BasicSalary { get; set; }
    public double HRA { get; set; }
    public double DA { get; set; }
    public double LTA { get; set; }
    public double VariablePay { get; set; }
 
}