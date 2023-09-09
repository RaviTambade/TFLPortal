
using Transflower.PMS.HRService.Models;
namespace Transflower.PMS.HRService.Repositories.Interfaces;
public interface IEmployeeRepository
{
    Task <IEnumerable<Employee>> GetAll();
    Task<Employee> GetById(int Id);
    Task<bool> Insert(Employee emp);
    Task<bool> Update(Employee emp);
    Task<bool> Delete(int empId);
    // Task<IEnumerable<Employee>> GetByRole(string role);
}