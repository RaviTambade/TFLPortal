
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
    public IEnumerable<Employee> GetAll()
    {

        List<Employee> employees = _service.GetAll();

        return employees;

    }
   
    // http://localhost:5230/api/employees/2
    [HttpGet ("{id}")] 
    public Employee GetById(int id)
    {
        Employee employees = _service.GetById(id);


        return employees;
    }

    // http://localhost:5230/api/employees/employee
    [HttpPost ("Employee")]
    public bool InsertUser(Employee employees)
    {
        bool status = _service.Insert(employees);


        return status;
    }

    //http://localhost:5230/api/employees/employee
    [HttpPut ("Employee")]
    public bool UpdateEmployee(Employee emp)
    {
        bool status = _service.Update(emp);

        return status;
    }

    // http://localhost:5230/api/employees/12
    [HttpDelete ("{id}")]
    public bool DeleteEmployee(int id)
    {
        bool status = _service.Delete(id);
        return status;
    }

    //http://localhost:5230/api/employees/role/manager
    [HttpGet ("role/{role}")] 
    public List<Employee> GetByRole(string role)
    {
        List<Employee> employees = _service.GetByRole(role);
        return employees;
    }
}
