using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/workmgmt/activities")]
public class ActivityController : ControllerBase
{
    private readonly IActivityService _service;
   
    public ActivityController(IActivityService service)
    {
        _service = service;

    }

    [HttpGet("selectedProject/{projectId}")]
    public async Task<List<EmployeeWork>> GetActivitiesByProject(int projectId)
    {
        List<EmployeeWork> activities = await _service.GetActivitiesByProject(projectId);
        return activities;
    }


     [HttpGet]
    public async Task<List<EmployeeWork>> GetAllActivities()
    {
        List<EmployeeWork> activities = await _service.GetAllActivities();
        return activities;
    }


//this method gives all activities of employee.
   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<EmployeeWork>> GetAllActivitiesOfEmployee(int employeeId)
    {
        List<EmployeeWork> activities = await _service.GetAllActivitiesOfEmployee(employeeId);
        return activities;
    }
   
    [HttpGet("projects/{projectId}/type/{activityType}")]
    public async Task<List<EmployeeWork>>GetProjectActivitiesByType(int projectId, string activityType)
    {
        List<EmployeeWork> activities = await _service.GetProjectActivitiesByType(projectId,activityType);
        return activities;
    }

     [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<List<EmployeeWork>> GetProjectActivitiesByEmployee(int projectId,int employeeId)
    {
        List<EmployeeWork> activities = await _service.GetProjectActivitiesByEmployee(projectId,employeeId);
        return activities;
    }

     
     [HttpGet("projects/{projectId}/employees/{assignedTo}/type/{activityType}")]
    public async Task<List<EmployeeWork>> GetProjectActivitiesOfEmployee(int projectId, int employeeId,string activityType)
    {
        List<EmployeeWork> activities = await _service.GetProjectActivitiesOfEmployee(projectId,employeeId,activityType);
        return activities;
    }

    [HttpGet("projects/{activityId}")]
    public async Task<EmployeeWorkDetails> GetActivityDetails(int activityId)
    {
        EmployeeWorkDetails activity = await _service.GetActivityDetails(activityId);
        return activity;
    }

    [HttpPost]
    public async Task<bool> AddActivity(EmployeeWork activity)
    {
        bool status = await _service.AddActivity(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<EmployeeWork>> GetActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<EmployeeWork> activities = await _service.GetActivitiesBetweenDates(fromAssignedDate,toAssignedDate);
        return activities;
    }

    

    [HttpGet("employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<EmployeeWork>> GetActivitiesOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<EmployeeWork> activities = await _service.GetActivitiesOfEmployeeBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return activities;
    }
 


   [HttpPut("project/{activityId}/status/{Status}")]
    public async Task<bool> UpdateActivity(string Status,int activityId)
    {
        bool status = await _service.UpdateActivity(Status, activityId);
        return status;

    }


  [HttpGet("activity/todo/{projectId}/{assignedTo}")]
    public async Task<List<EmployeeWorkDetails>> GetAllActivities(int projectId,int assignedTo)
    {
        List<EmployeeWorkDetails> activities = await _service.GetAllActivities(projectId,assignedTo);
        return activities;
    }


 [HttpGet("ActivitySp")]
    public async Task<ActivityStatusCount> GetActivitiesCount()
    {
        ActivityStatusCount activities = await _service.GetActivitiesCount();
        return activities;
    }

    [HttpGet("project/{projectId}/date/{date}")]
    public async Task<List<EmployeeWork>> GetTodayActivities(int projectId,DateTime date)
    {
        List<EmployeeWork> activities = await _service.GetTodayActivities(projectId,date);
        return activities;
    }

   
}
