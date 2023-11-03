using Microsoft.EntityFrameworkCore;
using Transflower.PMS.HRService.Entities;
using Transflower.PMS.HRService.Models;
using Transflower.PMS.HRService.Repositories.Interfaces;
using Transflower.PMS.HRService.Repositories.Contexts;
namespace Transflower.PMS.HRService.Repositories;
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


public async Task<List<int>> GetEmployees()
  {
    try
    {
      List<int> userid = await _employeeContext.Employees.Select(emp => emp.UserId).ToListAsync();

      return userid ;
    }
    catch (Exception)
    {
      throw;
    }
  
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
  public async Task<EmployeeInfo> GetEmployeeInfo(int employeeId)
  {
    try
    {
      var employeeinfo = await (
                        from e in _employeeContext.Employees
                        where e.Id == employeeId
                        select new EmployeeInfo()
                        {
                          Department = e.Department,
                          Position = e.Position,
                          HireDate = e.HireDate
                        }).FirstOrDefaultAsync();
      return employeeinfo;
    }
    catch (Exception)
    {
      throw;
    }
  }

  public async Task<List<int>> GetEmployeeUserId(int managerId)
  {
    try{
    var userids=await _employeeContext.Employees
             .Where(e => e.ManagerId == managerId)
             .Select(e => e.UserId).ToListAsync();
             return userids;
    }
    catch(Exception){
      throw;
    }

  }
  
}