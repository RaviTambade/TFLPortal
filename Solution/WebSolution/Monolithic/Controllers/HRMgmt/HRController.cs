using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Responses;
using Transflower.TFLPortal.Entities.HRMgmt;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Services.HRMgmt.Analytics.Interfaces;
using Task = System.Threading.Tasks.Task;
using Transflower.TFLPortal.Services.HRMgmt.Operations.Interfaces;

namespace Transflower.TFLPortal.Controllers.HRMgmt;

[ApiController]
[Route("/api/hr/employees")]
public class HRController : ControllerBase
{
    private readonly IHRAnalyticsService _hrService;
    private readonly IHROperationsService _operationsSvc;

    public HRController(IHRAnalyticsService hrService, IHROperationsService operationsSvc)
    {
        _hrService = hrService;
        _operationsSvc = operationsSvc;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("salaries/unpaid/month/{month}/year/{year}")]
    public async Task<List<Employee>> GetUnPaidSalaries(int month, int year)
    {
        List<Employee> employees = await _hrService.GetUnPaidSalaries(month, year);
        return employees;
    }

    [Authorize(RoleTypes.HRManager)]
    [HttpGet("{id}")]
    public async Task<Employee> GetEmployee(int id)
    {
        Employee employee = await _hrService.GetEmployee(id);
        return employee;
    }

    [HttpGet("bench")]
    [Authorize(RoleTypes.HRManager)]
    public async Task<List<Employee>> GetEmployeesOnBench()
    {
        List<Employee> employees = await _hrService.GetEmployeesOnBench();
        return employees;
    }

    [HttpPost("addentry")]
    public void AddEntry(InOutTimeRecord timeRecord)
    {
        _operationsSvc.AddEntry(timeRecord);
    }

    [HttpGet("timerecords")]
     public List<InOutTimeRecord> GetTimeRecords()
    {
        return _hrService.GetTimeRecords();
    }

    [HttpGet("{employeeId}/timerecords")]
     public List<InOutTimeRecord> GetTimeRecords(int employeeId)
    {
        return _hrService.GetTimeRecords(employeeId);
    }
}
