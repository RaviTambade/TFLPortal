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
    public async Task<Transflower.TFLPortal.TFLOBL.Entities.Activity> GetActivityDetails(int activityId)
    {
        Transflower.TFLPortal.TFLOBL.Entities.Activity activity = await _service.GetActivityDetails(activityId);
        return activity;
    }

    [HttpPost("insert")]
    public async Task<bool> Insert(Transflower.TFLPortal.TFLOBL.Entities.Activity activity)
    {
        bool status = await _service.Insert(activity);
        return status;

    }
 





}
