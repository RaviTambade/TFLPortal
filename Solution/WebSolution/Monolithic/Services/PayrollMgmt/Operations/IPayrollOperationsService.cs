
using TFLPortal.Models;

namespace TFLPortal.Services.PayrollMgmt.Operations;

public interface IPayrollOperationsService
{
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<bool> AddSalarySlip(SalarySlip salarySlip);
}   