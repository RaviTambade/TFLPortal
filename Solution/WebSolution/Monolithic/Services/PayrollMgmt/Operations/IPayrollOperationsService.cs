
using Transflower.TFLPortal.Entities.PayrollMgmt;

namespace Transflower.TFLPortal.Services.PayrollMgmt.Operations.Interfaces;

public interface IPayrollOperationsService
{
    Task<bool> AddSalaryStructure(SalaryStructure salary); 
    Task<bool> AddSalarySlip(SalarySlip salarySlip);
}   