using Microsoft.EntityFrameworkCore;
using Transflower.PMS.HRService.Entities;
using Transflower.PMS.HRService.Repositories.Interfaces;
using Transflower.PMS.HRService.Repositories.Contexts;

namespace Transflower.PMS.HRService.Repositories
{
  public class EmployeeRepository : IEmployeeRepository
  {
    private readonly EmployeeContext _employeeContext;
    public EmployeeRepository(EmployeeContext employeeContext)
    {
      _employeeContext = employeeContext;
    }
    public async Task<int> GetEmployeeId(int userId)
    {
      try
      {
        var employeeId = await _employeeContext.Employees
               .Where(e => e.UserId == userId)
               .Select(e => e.Id).FirstOrDefaultAsync();

        if (employeeId != null)
        {
          return employeeId;
        }
      }
      catch (Exception)
      {
        throw;
      }
      return 0;
    }

    public async Task<List<int>> GetUserId(int employeeId)
    {
      try
      {
        var userId = await _employeeContext.Employees
               .Where(e => e.Id == employeeId)
               .Select(e => e.UserId).ToListAsync();

        if (userId != null)
        {
          return userId;
        }
      }
      catch (Exception)
      {
        throw;
      }
      return null;
    }

  }
}