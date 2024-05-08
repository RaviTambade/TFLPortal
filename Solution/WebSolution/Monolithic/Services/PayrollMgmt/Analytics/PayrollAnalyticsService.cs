using Transflower.TFLPortal.Entities.PayrollMgmt;
using Transflower.TFLPortal.Repositories.PayrollMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Responses;
using Transflower.TFLPortal.Services.PayrollMgmt.Analytics.Interfaces;


namespace Transflower.TFLPortal.Services.PayrollMgmt.Analytics;

public class PayrollAnalyticsService : IPayrollAnalyticsService
{
    private readonly IPayrollAnalyticsRepository _repository;

    public PayrollAnalyticsService(IPayrollAnalyticsRepository repository)
    {
        _repository=repository;
    }

    public async Task<List<SalarySlip>> GetSalaries(int employeeId)
    {
       return await _repository.GetSalaries(employeeId);   
    }

    public async Task<SalarySlip> GetSalary(int salaryId)
    {
        return await _repository.GetSalary(salaryId); 
    }

    public async Task<List<SalarySlip>> GetPaidSalaries(int month, int year)
    {
        return await _repository.GetPaidSalaries(month,year); 
    }

    public async Task<SalaryStructure> GetSalaryStructure(int employeeId)
    {
        return await _repository.GetSalaryStructure(employeeId); 
    }

    public async Task<PaySlip> GetSalary(int employeeId, int month, int year)
    {
        return await _repository.GetSalary(employeeId,month,year); 
    }
}
