using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Models;
namespace Transflower.PMSApp.Projects.Repositories.Interfaces;
public interface IProjectRepository{
    Task<List<Project>> GetAll();
    Task<Project> GetById(int projectId);
    Task<List<ProjectList>> GetProjectsList(int teamMemberId);
    Task<List<int>> GetProjectMembers(int projectId);
    Task<bool> Insert(Project project);
    Task<bool> Update(Project project);
    Task<bool> Delete(int projectId);
    Task<List<ProjectTaskList>> GetTasksOfProject(int projectId,string timePeriod);
    Task<List<ProjectName>> GetProjectNames(int employeeId);
    Task<List<ProjectList>> GetManagerProjects(int managerId);
    Task<List<UnAssignedTask>> GetUnAssignedTasks(int projectId,string timePeriod);
    Task<List<AssignedTaskByManager>> GetAssignedTasksByManager(int managerId,string timePeriod);
    Task<List<UnAssignedTaskByManager>> GetUnAssignedTasksByManager(int managerId,string timePeriod);
    Task<List<EmployeeIdWithUserId>> GetEmployeeIdWithUserId(int projectId);
    Task<string> GetProjectName(int projectId);
    Task<List<ProjectName>> GetProjectOfManager(int managerId);
    Task<List<int>> GetTeamMemberIds(int teamManagerId);

}