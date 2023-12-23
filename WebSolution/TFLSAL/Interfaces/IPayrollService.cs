
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IPayrollService
{
    Task<bool> AddSalary(Salary salary); 

    Task<Salary> GetSalary(int employeeId);
}   