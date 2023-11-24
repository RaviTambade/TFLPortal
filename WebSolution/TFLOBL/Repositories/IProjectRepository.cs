using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLOBL.Repositories;
public interface IProjectRepository{

    public Task<List<Project>> GetAllProject();
}