using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Repositories.Interfaces;
using Transflower.PMSApp.Projects.Services.Interfaces;

namespace Transflower.EAgroServices.Merchants.Services;
public class ProjectService : IProjectService
{
    private readonly IProjectRepository _repository;

    public ProjectService(IProjectRepository repository)
    {
        _repository = repository;
    }
    public Task<List<Project>> GetAll()
    {
        return _repository.GetAll();
    }

    public Task<Project> GetById(int projectId)
    {
        return _repository.GetById(projectId);
    }

    public Task<bool> Insert(Project project)
    {
        return _repository.Insert(project);
    }

    public Task<bool> Update(Project project)
    {
        return _repository.Update(project);
    }
        public Task<bool> Delete(int projectId)
    {
        return _repository.Delete(projectId);
    }

}

