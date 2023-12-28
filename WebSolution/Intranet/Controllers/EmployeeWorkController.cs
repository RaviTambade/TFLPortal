using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/employeework")]
public class EmployeeWorkController : ControllerBase
{
    private readonly IEmployeeWorkService _service;
   
    public EmployeeWorkController(IEmployeeWorkService service)
    {
        _service = service;

    }

    [HttpGet("selectedProject/{projectId}")]
    public async Task<List<EmployeeWork>> GetEmployeeWorkByProject(int projectId)
    {
        List<EmployeeWork> employeeWork = await _service.GetEmployeeWorkByProject(projectId);
        return employeeWork;
    }


     [HttpGet]
    public async Task<List<EmployeeWork>> GetAllEmployeeWork()
    {
        List<EmployeeWork> employeeWorks = await _service.GetAllEmployeeWork();
        return employeeWorks;
    }


//this method gives all activities of employee.     
   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<EmployeeWork>> GetAllEmployeeWorks(int employeeId)
    {
        List<EmployeeWork> employeeWorks = await _service.GetAllEmployeeWorks(employeeId);
        return employeeWorks;
    }
   
    [HttpGet("projects/{projectId}/type/{projectWorkType}")]
    public async Task<List<EmployeeWork>>GetProjectEmployeeWorkByWorkType(int projectId, string projectWorkType)
    {
        List<EmployeeWork> employeeWorks = await _service.GetProjectEmployeeWorkByWorkType(projectId,projectWorkType);
        return employeeWorks;
    }

     [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<List<EmployeeWork>> GetProjectEmployeeWorks(int projectId,int employeeId)
    {
        List<EmployeeWork> employeeWorks = await _service.GetProjectEmployeeWorks(projectId,employeeId);
        return employeeWorks;
    }

     
      [HttpGet("projects/{projectId}/employees/{employeeId}/status/{status}")]
    public async Task<List<EmployeeWork>> GetProjectEmployeeWorks(int projectId, int employeeId,string status)
    {
        List<EmployeeWork> employeeWorks = await _service.GetProjectEmployeeWorks(projectId,employeeId,status);
        return employeeWorks;
    }

    [HttpGet("projects/{employeeWorkId}")]
    public async Task<EmployeeWorkDetails> GetEmployeeWorkDetails(int employeeWorkId)
    {
        EmployeeWorkDetails employeeWork = await _service.GetEmployeeWorkDetails(employeeWorkId);
        return employeeWork;
    }

    [HttpPost]
    public async Task<bool> AddEmployeeWork(EmployeeWork activity)
    {
        bool status = await _service.AddEmployeeWork(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<EmployeeWork>> GetAllEmployeesWorksBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<EmployeeWork> employeeWorks = await _service.GetAllEmployeesWorksBetweenDates(fromAssignedDate,toAssignedDate);
        return employeeWorks;
    }

    

    [HttpGet("employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<EmployeeWork>> GetEmployeeWorksBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<EmployeeWork> employeeWorks = await _service.GetEmployeeWorksBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return employeeWorks;
    }
 


   [HttpPut("project/{employeeWorkId}/status/{Status}")]
    public async Task<bool> UpdateEmployeeWork(string Status,int employeeWorkId)
    {
        bool status = await _service.UpdateEmployeeWork(Status, employeeWorkId);
        return status;

    }


  [HttpGet("employeework/todo/{projectId}/{assignedTo}")]
    public async Task<List<EmployeeWorkDetails>> GetAllEmployeeWorks(int projectId,int assignedTo)
    {
        List<EmployeeWorkDetails> employeeWorks = await _service.GetAllEmployeeWorks(projectId,assignedTo);
        return employeeWorks;
    }


 [HttpGet("EmployeeWorkCount")]
    public async Task<EmployeeWorkStatusCount> GetEmployeesWorkCount()
    {
        EmployeeWorkStatusCount employeeWorks = await _service.GetEmployeesWorkCount();
        return employeeWorks;
    }

    [HttpGet("project/{projectId}/date/{date}")]
    public async Task<List<EmployeeWork>> GetTodayEmployeesWork(int projectId,DateTime date)
    {
        List<EmployeeWork> employeeWorks = await _service.GetTodayEmployeesWork(projectId,date);
        return employeeWorks;
    }

   
}
