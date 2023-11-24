using Transflower.TFLPortal.TFLOBL.Repositories;

public class TaskService{
     private readonly ITaskRepository _repo;

    public TaskService(ITaskRepository repo){
          _repo=repo;
         }

       public async Task<List<Task>> GetTaskOfEmployee(int projectid, int assignedto){
        return await _repo.GetTaskOfEmployee(projectid,assignedto);
    }   
}