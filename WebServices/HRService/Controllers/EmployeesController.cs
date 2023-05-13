
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

    [HttpGet]
    [Route("getall")]
    public IEnumerable<Employee> GetAll()
    {

        List<Employee> employees = _service.GetAll();

        return employees;

    }

    [HttpGet]
    [Route("getbyid/{id}")]
    public Employee GetById(int id)
    {
        Employee employees = _service.GetById(id);


        return employees;
    }

    [HttpPost]
    [Route("InsertEmployee")]
    public bool InsertUser(Employee employees)
    {
        bool status = _service.Insert(employees);


        return status;
    }

    [HttpPut]
    [Route("updateEmployee")]

    public bool UpdateEmployee(Employee emp)
    {
        bool status = _service.Update(emp);

        return status;
    }


    [HttpDelete]
    [Route("DeleteEmployee/{id}")]
    public bool DeleteEmployee(int id)
    {
        bool status = _service.Delete(id);

        return status;
    }


}
