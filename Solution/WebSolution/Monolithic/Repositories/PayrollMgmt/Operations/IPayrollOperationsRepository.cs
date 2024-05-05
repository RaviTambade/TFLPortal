
using TFLPortal.Models;

namespace TFLPortal.Repositories.PayrollMgmt.Operations;

public interface IPayrollOperationsRepository
{
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<bool> AddSalarySlip(SalarySlip salarySlip);
}   