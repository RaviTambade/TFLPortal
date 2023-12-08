using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IProjectAllocationService {

    Task<bool> AssignMemberToProject(int employeeId,int projectId,ProjectAllocation project);

    Task<bool> ReleaseMemberFromProject(int projectId,int employeeId,ReleaseEmployee project);

    Task<List<Employee>> GetAllUnassignedEmployees();

    Task<List<ProjectAllocationDetails>> GetAllAssignedEmployees(string status);

    Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);

    Task<List<ProjectAllocationDetails>> GetAssignedEmployeesOfProject(int projectId);

    Task<List<ProjectAllocationDetails>> GetUnassignedEmployeesOfProject(int projectId);

    Task<List<ProjectAllocation>> GetAllProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

}