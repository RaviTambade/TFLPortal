
using HRService.Models;
using HRService.Services;
using HRService.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace employees.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class EmployeesController : ControllerBase
{

    private readonly IEmployeesService _service;

    public EmployeesController(IEmployeesService service)
    {
        _service = service;
    }
    
    // http://localhost:5230/api/employees/employees
    [HttpGet ("employees")]
    public async Task<IEnumerable<Employee>> GetAll()
    {

        IEnumerable<Employee> employees =await _service.GetAll();

        return employees;

    }
   
    // http://localhost:5230/api/employees/2
    [HttpGet ("{id}")] 
    public async Task<Employee> GetById(int id)
    {
        Employee employees =await _service.GetById(id);


        return employees;
    }

    // http://localhost:5230/api/employees/employee
    [HttpPost ("Employee")]
    public async Task<bool> InsertUser(Employee employees)
    {
        bool status =await _service.Insert(employees);


        return status;
    }

    //http://localhost:5230/api/employees/employee
    [HttpPut ("Employee")]
    public async Task<bool> UpdateEmployee(Employee emp)
    {
        bool status =await _service.Update(emp);

        return status;
    }

    // http://localhost:5230/api/employees/12
    [HttpDelete ("{id}")]
    public async Task<bool> DeleteEmployee(int id)
    {
        bool status =await _service.Delete(id);
        return status;
    }

    //http://localhost:5230/api/employees/role/manager
    [HttpGet ("role/{role}")] 
    public async Task<IEnumerable<Employee>> GetByRole(string role)
    {
        IEnumerable<Employee> employees =await _service.GetByRole(role);
        return employees;
    }
}
