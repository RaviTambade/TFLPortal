
using Transflower.TFLPortal.Entities.PayrollMgmt;

namespace Transflower.TFLPortal.Repositories.PayrollMgmt.Operations.Interfaces;


public interface IPayrollOperationsRepository
{
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<bool> AddSalarySlip(SalarySlip salarySlip);
}   