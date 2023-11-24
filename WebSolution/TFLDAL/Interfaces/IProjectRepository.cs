using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLDAL.Repositories.Interfaces;

public interface IProjectRepository
{
    Task<List<Project>> GetAllProject();
    Task<List<Project>> GetProjectsOfEmployee(int employeeid);
}
