using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IProjectService{

    Task<List<Project>> GetAllProject();
    Task<List<Project>> GetProjectsOfEmployee(int employeeid);

}