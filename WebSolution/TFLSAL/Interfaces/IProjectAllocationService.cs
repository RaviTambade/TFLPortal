using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IProjectAllocationService {

    Task<bool> AssignEmployeeToProject(int employeeId,int projectId,ProjectAllocation project);

    Task<bool> ReleaseEmployeeFromProject(int projectId,int employeeId,ReleaseEmployee project);

    Task<List<Employee>> GetUnassignedEmployees();

    Task<List<ProjectAllocationDetails>> GetAssignedEmployees(string status);

    Task<List<ProjectAllocation>> GetAllProjectsBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);

    Task<List<ProjectAllocationDetails>> GetAssignedEmployeesOfProject(int projectId);

    Task<List<ProjectAllocationDetails>> GetRecentEmployeesOfProject(int projectId);

    Task<List<ProjectAllocation>> GetProjectsOfEmployeeBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

}