using Microsoft.AspNetCore.Mvc;
using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Models;
using Transflower.PMSApp.Projects.Services.Interfaces;
namespace Transflower.PMSApp.Projects.Controller;
[ApiController]
[Route("api/projects")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;
    public ProjectsController(IProjectService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<List<Project>> GetAll()
    {
        return await _service.GetAll();
    }

    [HttpGet("{projectId}")]
    public async Task<Project> GetById(int projectId)
    {
        return await _service.GetById(projectId);
    }

    [HttpPost("addproject")]
    public async Task<bool> Insert(Project project)
    {
        return await _service.Insert(project);
    }

    [HttpPut]
    public async Task<bool> Update(Project project)
    {
        return await _service.Update(project);
    }

    [HttpDelete("{projectId}")]
    public async Task<bool> Delete(int projectId)
    {
        return await _service.Delete(projectId);
    }

    [HttpGet("list/{teamMemberId}")]
    public async Task<List<ProjectList>> GetProjectsList(int teamMemberId)
    {
        return await _service.GetProjectsList(teamMemberId);
    }

    [HttpGet("teammembers/{projectId}")]
    public async Task<List<int>> GetProjectMembers(int projectId)
    {
        return await _service.GetProjectMembers(projectId);
    }


    [HttpGet("tasks/{projectId}/{timePeriod}")]
    public async Task<List<ProjectTaskList>> GetTasksOfProject(int projectId, string timePeriod)
    {
        return await _service.GetTasksOfProject(projectId, timePeriod);
    }


    [HttpGet("employee/{employeeId}")]
    public async Task<List<ProjectName>> GetProjectNames(int employeeId)
    {
        return await _service.GetProjectNames(employeeId);
    }

    [HttpGet("manager/{managerId}")]
    public async Task<List<ProjectList>> GetManagerProjects(int managerId)
    {
        return await _service.GetManagerProjects(managerId);
    }

    [HttpGet("unassignedtask/{projectId}/{timePeriod}")]
    public async Task<List<UnAssignedTask>> GetUnAssignedTasks(int projectId, string timePeriod)
    {
        return await _service.GetUnAssignedTasks(projectId, timePeriod);
    }

    [HttpGet("assignedtasksbymanager/{managerId}/{timePeriod}")]
      public async Task<List<AssignedTaskByManager>> GetAssignedTasksByManager(int managerId, string timePeriod)
    {
        return await _service.GetAssignedTasksByManager(managerId,timePeriod);
    }

    [HttpGet("unassignedtasksbymanager/{managerId}/{timePeriod}")]
 public async Task<List<UnAssignedTaskByManager>> GetUnAssignedTasksByManager(int managerId,string timePeriod)
 {
    return await _service.GetUnAssignedTasksByManager(managerId,timePeriod);
 }

    [HttpGet("employeeidwithuserid/{projectId}")]
  public async Task<List<EmployeeIdWithUserId>> GetEmployeeIdWithUserId(int projectId)
    {
        return await _service.GetEmployeeIdWithUserId(projectId);
    }

    [HttpGet("title/{projectId}")]
    public async Task<string> GetProjectName(int projectId)
    {
        return await _service.GetProjectName(projectId);
    }

    [HttpGet("managerprojects/{managerId}")]
    public async Task<List<ProjectName>> GetProjectOfManager(int managerId)
     {
        return await _service.GetProjectOfManager(managerId);
     }



}