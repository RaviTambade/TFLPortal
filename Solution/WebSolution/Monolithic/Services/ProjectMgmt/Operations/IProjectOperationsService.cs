using TFLPortal.Models;

namespace TFLPortal.Services.ProjectMgmt.Operations;

public interface IProjectOperationsService
{
    Task<bool> AddProject(Project project);
    Task<bool> Insert(Sprint theSprint);
    Task<bool> Delete(int sprintId);
    Task<bool> Update(int sprintId, Sprint theSprint);
    Task<bool> Assign(ProjectAllocation member);
    Task<bool> Release(ProjectAllocation member);
}
