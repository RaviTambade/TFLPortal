
using Transflower.PMS.HRService.Entities;
using Transflower.PMS.HRService.Models;
namespace Transflower.PMS.HRService.Repositories.Interfaces;
public interface IEmployeeRepository
{

    Task<int> GetEmployeeId(int userId);
    Task<List<int>> GetEmployees();
    Task<List<int>> GetUserId(int employeeId);
    
    Task<EmployeeInfo> GetEmployeeInfo(int employeeId);
    Task<List<int>> GetEmployeeUserId(int managerId);

    
}