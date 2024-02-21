namespace TFLPortal.Responses;

public class MonthSalary
{


      public employeeId: number,
      public  personDetails:PersonalDetails,
      public bankDetails:BankDetails,
      
      public workingDays:number,
      public consumedPaidLeaves:number,
      public month:number,
      public year:number,
   
      public salaryDetails:SalaryDetails,
      public taxDetails:TaxDetails,
      public totalAmount:number,
      


    public int EmployeeId{get;set;}
    public int Month{get;set;}
    public int Year{get; set;}
    public double TotalAmount { get; set; }
    public double MonthlyBasicSalary { get; set; }
    public double HRA { get; set; }
    public double DA { get; set; }
    public double LTA { get; set; }
    public double VariablePay { get; set; }
    public double Deduction { get; set; }
    public double Pf { get; set; }
    public double Tax { get; set; }
    public int ConsumedPaidLeaves { get; set; }
    public int WorkingDays { get; set; }

}


