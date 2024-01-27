using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.Intranet.Responses;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/employeeworks")]
public class EmployeeWorkController : ControllerBase
{
    private readonly IEmployeeWorkService _service;

     private readonly ExternalApiService _apiService;
   
    public EmployeeWorkController(IEmployeeWorkService service,ExternalApiService apiService)
    {
        _service = service;
        _apiService=apiService;

    }

    [HttpGet("projects/{projectId}")]
   public async Task<List<EmployeeWorkResponse>> GetEmployeeWorkByProject(int projectId)
    {
 
        List<EmployeeWork> employeeWorks = await _service.GetWorkByProject(projectId);
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
    public async Task<List<EmployeeWork>> GetAllWork()
    {
        List<EmployeeWork> employeeWorks = await _service.GetAllWorks();
        return employeeWorks;
    }


//this method gives all activities of employee.     
   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<EmployeeWork>> GetAllWorks(int employeeId)
    {
        List<EmployeeWork> employeeWorks = await _service.GetAllWorks(employeeId);
        return employeeWorks;
    }
   
    [HttpGet("projects/{projectId}/projectworktypes/{projectWorkType}")]
    public async Task<List<EmployeeWork>>GetWorkByType(int projectId, string projectWorkType)
    {
        List<EmployeeWork> employeeWorks = await _service.GetWorkByType(projectId,projectWorkType);
        return employeeWorks;
    }

     [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<List<EmployeeWork>> GetProjectWorks(int projectId,int employeeId)
    {
        List<EmployeeWork> employeeWorks = await _service.GetWorks(projectId,employeeId);
        return employeeWorks;
    }

     
    [HttpGet("projects/{projectId}/employees/{employeeId}/status/{status}")]
    public async Task<List<EmployeeWork>> GetProjectWorks(int projectId, int employeeId,string status)
    {
        List<EmployeeWork> employeeWorks = await _service.GetWorks(projectId,employeeId,status);
        return employeeWorks;
    }

    [HttpGet("sprints/{sprintId}/employees/{employeeId}/status/{status}")]
    public async Task<List<EmployeeWork>> GetSprintWorks(int sprintId, int employeeId, string status)
    {
        return await _service.GetSprintWorks(sprintId,employeeId,status);
    }


    [HttpGet("{employeeWorkId}")]
    public async Task<EmployeeWorkResponse> GetWorkDetails(int employeeWorkId)
    {
        EmployeeWorkDetails employeeWork = await _service.GetWorkDetails(employeeWorkId);
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
    public async Task<bool> AddWork(EmployeeWork activity)
    {
        bool status = await _service.AddWork(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<EmployeeWork>> GetAllWorksBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<EmployeeWork> employeeWorks = await _service.GetAllWorksBetweenDates(fromAssignedDate,toAssignedDate);
        return employeeWorks;
    }

    

    [HttpGet("employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<EmployeeWork>> GetWorksBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<EmployeeWork> employeeWorks = await _service.GetWorksBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return employeeWorks;
    }
 


   [HttpPut("{employeeWorkId}/status/{Status}")]
    public async Task<bool> UpdateWork(string Status,int employeeWorkId)
    {
        bool status = await _service.UpdateWork(Status, employeeWorkId);
        return status;

    }


  [HttpGet("projects/{projectId}/employees/{assignedTo}")]
    public async Task<List<EmployeeWorkDetails>> GetAllWorks(int projectId,int assignedTo)
    {
        List<EmployeeWorkDetails> employeeWorks = await _service.GetAllWorks(projectId,assignedTo);
        return employeeWorks;
    }


 [HttpGet("employeeworkcounts")]
    public async Task<EmployeeWorkStatusCount> GetWorkCount()
    {
        EmployeeWorkStatusCount employeeWorks = await _service.GetWorksCount();
        return employeeWorks;
    }

    [HttpGet("projects/{projectId}/date/{date}")]
    public async Task<List<EmployeeWork>> GetTodayWork(int projectId,DateTime date)
    {
        List<EmployeeWork> employeeWorks = await _service.GetTodayWork(projectId,date);
        return employeeWorks;
    }

   
}
