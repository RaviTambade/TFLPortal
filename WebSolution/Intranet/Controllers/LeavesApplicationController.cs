using Microsoft.AspNetCore.Mvc;
using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Intranet.Controllers;

[ApiController]
[Route("/api/leaves")]
public class LeavesApplicationController : ControllerBase
{
    private readonly ILeaveApplicationService _service;

    public LeavesApplicationController(ILeaveApplicationService service)
    {
        _service = service;
    }

    [HttpPost]
    [Route ("addleave")]
    public async Task<bool> AddLeave(Leave leave)
    {
        bool status =await _service.AddLeave(leave);
        return status;
    }


    [HttpGet]
    [Route ("pendingleave/{employeeId}")]
    public async Task<PendingLeave> GetPendingLeaves(int employeeId)
    {
        PendingLeave leave =await _service.GetPendingLeaves(employeeId);
        return leave;
    }

    [HttpGet]
    [Route ("{employeeId}")]
    public async Task<List<Leave>> GetEmployeeLeaves(int employeeId)
    {
        List<Leave> leaves =await _service.GetEmployeeLeaves(employeeId);
        Console.WriteLine(leaves);
        return leaves;
    }
}