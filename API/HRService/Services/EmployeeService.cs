using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.HRService.Entities;
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
    public async Task<int> GetEmployeeId(int userId)=>await _repo.GetEmployeeId(userId);
    public async Task<List<int>> GetUserId(int employeeId)=>await _repo.GetUserId(employeeId);
  public async Task<EmployeeInfo> GetEmployeeInfo(int employeeId)=>await _repo.GetEmployeeInfo(employeeId);


}

