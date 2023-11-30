using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/activity")]
public class ActivityController : ControllerBase
{
    private readonly IActivityService _service;
   
    public ActivityController(IActivityService service)
    {
        _service = service;

    }

    [HttpGet("{projectId}/{memberId}")]
    public async Task<List<Transflower.TFLPortal.TFLOBL.Entities.Activity>> GetTasksOfMember(int projectId, int memberId)
    {
        List<Transflower.TFLPortal.TFLOBL.Entities.Activity> activities = await _service.GetTasksOfMember(projectId,memberId);
        return activities;
    }

    [HttpGet("activity/{activityId}")]
    public async Task<Transflower.TFLPortal.TFLOBL.Entities.Activity> GetTaskDetails(int activityId)
    {
        Transflower.TFLPortal.TFLOBL.Entities.Activity activity = await _service.GetTaskDetails(activityId);
        return activity;
    }

    [HttpGet("insert")]
    public async Task<bool> Insert(Transflower.TFLPortal.TFLOBL.Entities.Activity activity)
    {
        bool status = await _service.Insert(activity);
        return status;

    }
}
