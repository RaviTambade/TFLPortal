using HRService.Models;
namespace HRService.Repositories.Interfaces;
public interface IEmployeeRepository
{
    List<Employee> GetAll();
    Employee GetById(int Id);
    bool Insert(Employee emp);
    bool Update(Employee emp);
    bool Delete(int empId);
}