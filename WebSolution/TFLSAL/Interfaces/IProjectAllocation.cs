using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IProjectAllocationService {

    Task<bool> AssignMemberToProject(int employeeId,int projectId,ProjectAllocation project);

    Task<bool> ReleaseMemberFromProject(int projectId,int employeeId);

    Task<List<ProjectAllocation>> GetAllUnassignedEmployees(string status);

    Task<List<ProjectAllocation>> GetAllAssignedEmployees(string status);

    Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);

    Task<List<ProjectAllocation>> GetAllEmployeesOfProject(int projectId);

    Task<List<ProjectAllocation>> GetAllProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);


}