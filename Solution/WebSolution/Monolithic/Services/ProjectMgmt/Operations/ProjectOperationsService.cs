using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Repositories.ProjectMgmt.Operations;

namespace TFLPortal.Services.ProjectMgmt.Operations;

public class ProjectOperationsService:IProjectOperationsService
{
   private readonly  IProjectOperationsRepository _repository; 

    public ProjectOperationsService(IProjectOperationsRepository repository)
    {
        _repository = repository;
    }

    public async Task<bool> AddProject(Project project)
    {
        return await _repository.AddProject(project);
    }

    public async Task<bool> Insert(Sprint theSprint)
    {
       return await _repository.Insert(theSprint);
    }

    public async Task<bool> Delete(int sprintId)
    {
        return await _repository.Delete(sprintId);
    }

    public async Task<bool> Update(int sprintId, Sprint theSprint)
    {
       return await _repository.Update(sprintId,theSprint);
    }

    public async Task<bool> Assign(ProjectAllocation projectAllocation)
    {
        return await _repository.Assign(projectAllocation);
    }

    public async Task<bool> Release(ProjectAllocation projectAllocation)
    {
        return await _repository.Release(projectAllocation);
    }
}
