
namespace TFLPortal.IProjectOperationsService;
public interface IProjectOperationsService{
     Task<bool> AddProject(Project project);

    Task<bool> Insert(Sprint theSprint);

    Task<bool> Delete(int sprintId);
     Task<bool> Update(int sprintId,Sprint theSprint);


    Task<bool> Assign(Member member);
    Task<bool> Release(Member member);
}