using TFLPortal.Models;

namespace TFLPortal.Repositories.ProjectMgmt.Operations;

public interface IProjectOperationsRepository
{
    Task<bool> AddProject(Project project);
    Task<bool> Insert(Sprint theSprint);
    Task<bool> Delete(int sprintId);
    Task<bool> Update(int sprintId, Sprint theSprint);
    Task<bool> Assign(ProjectAllocation member);
    Task<bool> Release(ProjectAllocation member);
}
