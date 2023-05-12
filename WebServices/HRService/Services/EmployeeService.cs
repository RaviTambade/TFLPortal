using HRService.Models;
using HRService.Repositories.Interfaces;
using HRService.Services.Interfaces;

namespace HRService.Services;
public class EmployeeService : IEmployeesService
{
    private readonly IEmployeeRepository _repo;
    public EmployeeService(IEmployeeRepository repo)
    {
        _repo = repo;
    }
    public List<Employee> GetAll(){
        var employees = _repo.GetAll();
        return  employees;
    } 
   
    public Employee GetById(int Id)=> _repo.GetById(Id);
    public bool Insert (Employee employee) => _repo.Insert(employee);
    public  bool Update(Employee emp)=> _repo.Update(emp);
    public  bool Delete(int id)=> _repo.Delete(id);

}

