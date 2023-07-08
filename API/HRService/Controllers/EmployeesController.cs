using HRService.Models;
using HRService.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PMS.Helpers;


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
    
    // httpGet : http://localhost:5230/api/employees/employees
    [Authorize]
    [HttpGet]
    [Route ("employees")]
    public async Task<IEnumerable<Employee>> GetAll()
    {
        IEnumerable<Employee> employees =await _service.GetAll();
        return employees;
    }
   
    //httpGet http://localhost:5230/api/employees/2
    [Authorize]
    [HttpGet] 
    [Route ("{id}")]
    public async Task<Employee> GetById(int id)
    {
        Employee employees =await _service.GetById(id);
        return employees;
    }

    //httpPost : http://localhost:5230/api/employees/employee
    [Authorize]
    [HttpPost]
    [Route ("Employee")]
    public async Task<bool> InsertUser(Employee employees)
    {
        bool status =await _service.Insert(employees);
        return status;
    }

    //httpPut : http://localhost:5230/api/employees/employee
    [Authorize]
    [HttpPut]
    [Route ("Employee")]
    public async Task<bool> UpdateEmployee(Employee emp)
    {
        bool status =await _service.Update(emp);
        return status;
    }

    //httpDelete : http://localhost:5230/api/employees/12
    [Authorize]
    [HttpDelete]
    [Route ("{id}")]
    public async Task<bool> DeleteEmployee(int id)
    {
        bool status =await _service.Delete(id);
        return status;
    }

    //httpGet : http://localhost:5230/api/employees/role/manager
    [Authorize]
    [HttpGet]
    [Route ("role/{role}")] 
    public async Task<IEnumerable<Employee>> GetByRole(string role)
    {
        IEnumerable<Employee> employees =await _service.GetByRole(role);
        return employees;
    }
}
