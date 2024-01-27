using TFLPortal.Models;
namespace TFLPortal.Services.Interfaces;

public interface IProjectMemberService {
    Task<bool> Assign(Member member);
    Task<bool> Release(Member member);
    Task<List<Employee>> GetEmployeesOnBench();
    Task<List<Member>> GetProjectMembers(int projectId);

}