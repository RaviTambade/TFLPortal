using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.DTO;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.DTO;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/payroll")]
public class PayrollController : ControllerBase
{
    private readonly IPayrollService _payrollService;
    private readonly IHRService _hrService;
    private readonly ExternalApiService _apiService;

    public PayrollController(
        IPayrollService payrollService,
        IHRService hrService,
        ExternalApiService apiService
    )
    {
        _payrollService = payrollService;
        _hrService = hrService;
        _apiService = apiService;
    }

    [HttpGet("salaries/employees/{employeeId}")]
    public async Task<SalaryResponse> GetSalaryStructure(int employeeId)
    {
        Salary salaryStructure = await _payrollService.GetSalary(employeeId);
        Employee employee = await _hrService.GetEmployeeById(salaryStructure.EmployeeId);
        BankAccount account = await _apiService.GetUserBankAccount(employee.UserId, "I");
        var user = await _apiService.GetUser(employee.UserId);
        SalaryResponse salaryDetails = new SalaryResponse()
        {
            EmployeeId = employeeId,
            FirstName = user.FirstName,
            LastName = user.LastName,
            ContactNumber = user.ContactNumber,
            BirthDate = user.BirthDate,
            AccountNumber = account.AccountNumber,
            IFSC = account.IFSCCode,
            HRA = salaryStructure.HRA,
            BasicSalary = salaryStructure.BasicSalary,
            DA = salaryStructure.DA,
            LTA = salaryStructure.LTA,
            VariablePay = salaryStructure.VariablePay,
            Deduction = salaryStructure.Deduction
        };

        return salaryDetails;
    }

    [HttpPost("employees/salary")]
    public async Task<bool> InsertSalaryStructure(Salary salary)
    {
        return await _payrollService.AddSalary(salary);
    }
}
