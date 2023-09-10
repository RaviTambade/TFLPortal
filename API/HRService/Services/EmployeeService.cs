
using Transflower.PMS.HRService.Models;
using Transflower.PMS.HRService.Repositories.Interfaces;
using Transflower.PMS.HRService.Services.Interfaces;

namespace HRService.Services;
public class EmployeeService : IEmployeesService
{
    private readonly IEmployeeRepository _repo;
    public EmployeeService(IEmployeeRepository repo)
    {
        _repo = repo;
    }
    public async Task<IEnumerable<Employee>> GetAll()
    {
        var employees = await _repo.GetAll();
        return employees;
    }

    public async Task<Employee> GetById(int Id) => await _repo.GetById(Id);
    public async Task<bool> Insert(Employee employee) => await _repo.Insert(employee);
    public async Task<bool> Update(Employee emp) => await _repo.Update(emp);
    public async Task<bool> Delete(int id) => await _repo.Delete(id);
    // public async Task<IEnumerable<Employee>> GetByRole(string role) =>await _repo.GetByRole(role);

}

