using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/employeework")]
public class EmployeeWorkController : ControllerBase
{
    private readonly IEmployeeWorkService _service;

     private readonly ExternalApiService _apiService;
   
    public EmployeeWorkController(IEmployeeWorkService service,ExternalApiService apiService)
    {
        _service = service;
        _apiService=apiService;

    }

    [HttpGet("selectedProject/{projectId}")]
   public async Task<List<EmployeeWorkResponse>> GetEmployeeWorkByProject(int projectId)
    {
 
        List<EmployeeWork> employeeWorks = await _service.GetEmployeeWorkByProject(projectId);
        string userIds = string.Join(',', employeeWorks.SelectMany(m => new []{m.AssignedTo,m.AssignedBy}).Distinct().ToList());
        var users = await _apiService.GetUserDetails(userIds);

        List<EmployeeWorkResponse> employeeWorksResponses = new List<EmployeeWorkResponse>();

        foreach (var employee in employeeWorks)
        {
            var userDetail = users.FirstOrDefault(u => u.Id == employee.AssignedTo);
            var userDetailsAssignBy = users.FirstOrDefault(u => u.Id == employee.AssignedBy);

            if (userDetail != null && userDetailsAssignBy != null)
            {
                var employeeWorksResponse = new EmployeeWorkResponse
                {
                    AssignedToEmployee = $"{userDetail.FirstName} {userDetail.LastName}",
                    AssignedByEmployee = $"{userDetailsAssignBy.FirstName} {userDetailsAssignBy.LastName}",
                    Id = employee.Id,
                    Title=employee.Title,
                    ProjectWorkType=employee.ProjectWorkType,
                    Description=employee.Description,
                    AssignDate=employee.AssignDate,
                    StartDate=employee.StartDate,
                    DueDate=employee.DueDate,
                    CreatedDate=employee.CreatedDate,
                    AssignedTo=employee.AssignedTo,
                    ProjectId=employee.ProjectId,
                    SprintId=employee.SprintId,
                    Status=employee.Status,
                    AssignedBy=employee.AssignedBy
                };
                employeeWorksResponses.Add(employeeWorksResponse);
            }
        }

        return employeeWorksResponses;
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

    [HttpGet("sprints/{sprintId}/employees/{employeeId}/status/{status}")]
    public async Task<List<EmployeeWork>> GetSprintEmployeeWorks(int sprintId, int employeeId, string status)
    {
        return await _service.GetSprintEmployeeWorks(sprintId,employeeId,status);
    }


    [HttpGet("projects/{employeeWorkId}")]
    public async Task<EmployeeWorkResponse> GetEmployeeWorkDetails(int employeeWorkId)
    {
        
    
    
        EmployeeWorkDetails employeeWork = await _service.GetEmployeeWorkDetails(employeeWorkId);
        var user = await _apiService.GetUser(employeeWork.AssignedTo);
        var usersOfAssignBy = await _apiService.GetUser(employeeWork.AssignedBy);

        EmployeeWorkResponse employeeWorksResponses = new ()
                {
                    AssignedToEmployee = $"{user.FirstName} {user.LastName}",
                    AssignedByEmployee = $"{usersOfAssignBy.FirstName} {usersOfAssignBy.LastName}",
                    Id = employeeWork.Id,
                    Title=employeeWork.Title,
                    ProjectWorkType=employeeWork.ProjectWorkType,
                    Description=employeeWork.Description,
                    AssignDate=employeeWork.AssignDate,
                   StartDate=employeeWork.StartDate,
                   DueDate=employeeWork.DueDate,
                   CreatedDate=employeeWork.CreatedDate,
                   AssignedTo=employeeWork.AssignedTo,
                   ProjectId=employeeWork.ProjectId,
                   SprintId=employeeWork.SprintId,
                   Status=employeeWork.Status,
                   AssignedBy=employeeWork.AssignedBy
                };
         
            return employeeWorksResponses;
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
