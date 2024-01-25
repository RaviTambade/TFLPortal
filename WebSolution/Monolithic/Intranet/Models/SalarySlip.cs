namespace TFLPortal.Models;

public class SalarySlip
{
    public int SalaryId { get; set; }
    public int EmployeeId { get; set; } // EmployeeId
    public DateTime PayDate { get; set; }
    public int MonthlyWorkingDays { get; set; }
    public double Deduction { get; set; }
    public double Tax { get; set; }
    public double PF { get; set; }
    public double Amount { get; set; }
}