using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IProjectMembershipService {

    Task<bool> AssignEmployeeToProject(int employeeId,int projectId,ProjectMembership project);

    Task<bool> ReleaseEmployeeFromProject(int projectId,int employeeId,ProjectMembership project);

    Task<List<Employee>> GetUnassignedEmployees();

    Task<List<ProjectMembershipDetails>> GetAllocatedEmployees(string status);

    Task<List<ProjectMembership>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);

    Task<List<ProjectMembershipDetails>> GetEmployeesOfProject(int projectId,string status);

    Task<List<ProjectMembership>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

}