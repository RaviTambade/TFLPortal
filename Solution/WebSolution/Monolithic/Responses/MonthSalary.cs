namespace TFLPortal.Responses;

public class MonthSalary
{
  public int EmployeeId { get; set; }
  public int Month { get; set; }
  public int Year { get; set; }
  public double TotalAmount { get; set; }
  public int ConsumedPaidLeaves { get; set; }
  public int WorkingDays { get; set; }
  public PersonalDetails PersonalDetails { get; set; }
  public BankDetails BankDetails { get; set; }
  public SalaryDetails SalaryDetails { get; set; }
  public TaxDetails TaxDetails { get; set; }
}


