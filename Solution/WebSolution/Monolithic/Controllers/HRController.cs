using Microsoft.AspNetCore.Mvc;
using TFLPortal.Responses;
using TFLPortal.Models;
using TFLPortal.Helpers;
using TFLPortal.Services.HRMgmt.Analytics;

 namespace Transflower.TFLPortal.Intranet.Controllers;

[ApiController]
[Route("/api/hr/employees")]
public class HRController : ControllerBase
{
    private readonly IHRAnalyticsService _hrService;


    public HRController(IHRAnalyticsService hrService)
    {
        _hrService = hrService;

    }


    [Authorize(RoleTypes.HRManager)]
    [HttpGet("salaries/unpaid/month/{month}/year/{year}")]
    public async Task<List<Employee>> GetUnPaidSalaries(int month,int year)
    {
        List<Employee> employees=await _hrService.GetUnPaidSalaries(month,year);
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
}
