using TFLPortal.Models;
namespace TFLPortal.Services.Interfaces;

public interface IProjectAllocationService {

    Task<bool> AssignMemberToProject(int employeeId,int projectId,ProjectAllocation project);

    Task<bool> ReleaseMemberFromProject(int projectId,int employeeId,ProjectAllocation project);

    Task<List<Employee>> GetUnassignedEmployees();

    Task<List<ProjectAllocation>> GetAllocatedEmployees(string status);

    Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromDate,DateTime toDate);

    Task<List<ProjectAllocation>> GetEmployeesOfProject(int projectId,string status);
    Task<ProjectAllocation> GetProjectMemberDetails(int employeeId,int projectId);

    Task<List<ProjectAllocation>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

}