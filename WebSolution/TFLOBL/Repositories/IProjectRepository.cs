using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLOBL.Repositories;

public interface IProjectRepository
{
    Task<List<Project>> GetAllProject();
    Task<List<Project>> GetProjectsOfEmployee(int employeeid);
}
