// using Microsoft.AspNetCore.Mvc;
// using TFLPortal.Models;
// using TFLPortal.Services;
// using TFLPortal.Helpers;



// namespace Transflower.TFLPortal.Intranet.Controllers;

// [ApiController]
// [Route("/api/hr/employees")]
// public class HRController : ControllerBase
// {
//     private readonly IHRService _service;
//     private readonly IPayrollService _payrollService;

//     public HRController(IHRService service,IPayrollService payrollService)
//     {
//         _service = service;
//         _payrollService=payrollService;
//     }


//     [Authorize(RoleTypes.HRManager)]
//     [HttpGet("salaries/unpaid/month/{month}/year/{year}")]
//     public async Task<List<Employee>> GetUnPaidSalaries(int month,int year)
//     {
//         List<Employee> employees=await _service.GetUnPaidSalaries(month,year);
//         return employees;
//     }

//     [Authorize(RoleTypes.HRManager)]
//     [HttpGet("{id}")]
//     public async Task<Employee> GetEmployeeById(int id)
//     {
//         Employee employee = await _service.GetEmployeeById(id);
//         return employee;
//     }

//     [Authorize(RoleTypes.HRManager)]
//    [HttpGet("employeeIds/{employeeIds}")]
//     public async Task<List<Employee>> GetEmployees(string employeeIds)
//     {
//         List<Employee> employees = await _service.GetEmployees(employeeIds);
//         return employees;
//     } 
// }
