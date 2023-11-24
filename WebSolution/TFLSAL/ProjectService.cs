

using Transflower.TFLPortal.TFLOBL.Entities;
using Transflower.TFLPortal.TFLOBL.Repositories;
using Transflower.TFLPortal.TFLOBL.Services;
namespace Transflower.TFLPortal.TFLSAL.Services;

public class ProjectService : IProjectService

{

    private readonly IProjectRepository _repo;

    public ProjectService(IProjectRepository repo){
          _repo=repo;
         }
    public async Task<List<Project>> GetAllProject(){
        return await _repo.GetAllProject();
    }


     public async Task<List<Project>> GetProjectsOfEmployee(int employeeid){
        return await _repo.GetProjectsOfEmployee(employeeid);
    }
    
}
