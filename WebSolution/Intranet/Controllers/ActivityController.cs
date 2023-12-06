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

    [HttpGet("{projectId}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetAllActivitiesByProject(int projectId)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetAllActivitiesByProject(projectId);
        return activities;
    }


     [HttpGet]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetAllActivities()
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetAllActivities();
        return activities;
    }


//this method gives all activities of employee.
   
    [HttpGet("employees/{employeeId}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetAllActivitiesOfEmployee(int employeeId)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetAllActivitiesOfEmployee(employeeId);
        return activities;
    }
   
    [HttpGet("{projectId}/{activityType}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>>GetAllActivitiesByProject(int projectId, string activityType)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetAllActivitiesByProject(projectId,activityType);
        return activities;
    }

     [HttpGet("activity/{projectId}/{assignedTo}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetActivitiesByProject(int projectId,int assignedTo)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetActivitiesByProject(projectId,assignedTo);
        return activities;
    }

     
     [HttpGet("activity/{projectId}/{assignedTo}/{activityType}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetAllActivitiesByProject(int projectId, int assignedTo,string activityType)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetActivitiesByProject(projectId,assignedTo,activityType);
        return activities;
    }

    [HttpGet("activity/{activityId}")]
    public async Task<ActivityDetails> GetActivityDetails(int activityId)
    {
        ActivityDetails activity = await _service.GetActivityDetails(activityId);
        return activity;
    }

    [HttpPost("insert")]
    public async Task<bool> Insert(Transflower.TFLPortal.TFLOBL.Entities.Activity activity)
    {
        bool status = await _service.Insert(activity);
        return status;

    }

    [HttpGet("fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetAllActivitiesBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetAllActivitiesBetweenDates(fromAssignedDate,toAssignedDate);
        return activities;
    }

    

     [HttpGet("{employeeId}/fromassigneddate/{fromAssignedDate}/toassigneddate/{toAssignedDate}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetAllActivitiesBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetAllActivitiesBetweenDates(employeeId,fromAssignedDate,toAssignedDate);
        return activities;
    }
 


   [HttpPut("Update/{Status}/{activityId}")]
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



}
