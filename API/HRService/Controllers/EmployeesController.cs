using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Transflower.PMS.HRService.Entities;
using Transflower.PMS.HRService.Services.Interfaces;
namespace Transflower.PMS.HRService.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly IEmployeesService _service;
    public EmployeesController(IEmployeesService service)
    {
        _service = service;
    }

    [HttpGet("employeeid/{userId}")]
    public async Task<int> GetEmployeeId(int userId)
    {
        return await _service.GetEmployeeId(userId);
    }

    [HttpGet("userId/{employeeId}")]
    public async Task<List<int>> GetUserId(int employeeId)
    {
        return await _service.GetUserId(employeeId);
    }


}
