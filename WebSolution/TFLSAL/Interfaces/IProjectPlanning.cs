using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IProjectPlanningService{

    Task<List<UserStories>> GetAllUserStories(int projectId);
    

}