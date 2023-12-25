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
    public async Task<List<Activity>> GetActivitiesByProject(int projectId)
    {
        List<Activity> activities = await _service.GetActivitiesByProject(projectId);
        return activities;
    }


     [HttpGet]
    public async Task<List<Activity>> GetAllActivities()
    {
        List<Activity> activities = await _service.GetAllActivities();
        return activities;
    }


//this method gives all activities of employee.
   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<Activity>> GetAllActivitiesOfEmployee(int employeeId)
    {
        List<Activity> activities = await _service.GetAllActivitiesOfEmployee(employeeId);
        return activities;
    }
   
    [HttpGet("projects/{projectId}/type/{activityType}")]
    public async Task<List<Activity>>GetProjectActivitiesByType(int projectId, string activityType)
    {
        List<Activity> activities = await _service.GetProjectActivitiesByType(projectId,activityType);
        return activities;
    }

     [HttpGet("projects/{projectId}/employees/{employeeId}")]
    public async Task<List<Activity>> GetProjectActivitiesByEmployee(int projectId,int employeeId)
    {
        List<Activity> activities = await _service.GetProjectActivitiesByEmployee(projectId,employeeId);
        return activities;
    }

     
     [HttpGet("projects/{projectId}/employees/{assignedTo}/type/{activityType}")]
    public async Task<List<Activity>> GetProjectActivitiesOfEmployee(int projectId, int employeeId,string activityType)
    {
        List<Activity> activities = await _service.GetProjectActivitiesOfEmployee(projectId,employeeId,activityType);
        return activities;
    }

    [HttpGet("projects/{activityId}")]
    public async Task<ActivityDetails> GetActivityDetails(int activityId)
    {
        ActivityDetails activity = await _service.GetActivityDetails(activityId);
        return activity;
    }

    [HttpPost]
    public async Task<bool> AddActivity(Activity activity)
    {
        bool status = await _service.AddActivity(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<Activity>> GetActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<Activity> activities = await _service.GetActivitiesBetweenDates(fromAssignedDate,toAssignedDate);
        return activities;
    }

    

    [HttpGet("employees/{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<Activity>> GetActivitiesOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<Activity> activities = await _service.GetActivitiesOfEmployeeBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return activities;
    }
 


   [HttpPut("project/{activityId}/status/{Status}")]
    public async Task<bool> UpdateActivity(string Status,int activityId)
    {
        bool status = await _service.UpdateActivity(Status, activityId);
        return status;

    }


  [HttpGet("activity/todo/{projectId}/{assignedTo}")]
    public async Task<List<ActivityDetails>> GetAllActivities(int projectId,int assignedTo)
    {
        List<ActivityDetails> activities = await _service.GetAllActivities(projectId,assignedTo);
        return activities;
    }


 [HttpGet("ActivitySp")]
    public async Task<ActivityStatusCount> GetActivitiesCount()
    {
        ActivityStatusCount activities = await _service.GetActivitiesCount();
        return activities;
    }

    [HttpGet("project/{projectId}/date/{date}")]
    public async Task<List<Activity>> GetTodayActivities(int projectId,DateTime date)
    {
        List<Activity> activities = await _service.GetTodayActivities(projectId,date);
        return activities;
    }

   
}
