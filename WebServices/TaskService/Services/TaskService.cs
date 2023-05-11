using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;
namespace PMS.Services;


public class TaskServices : ITaskServices
{

     private readonly ITaskRepository _repo ;
   
    public TaskServices(ITaskRepository repo){
        _repo=repo;
    }
    public List<Tasks> GetAll()=>_repo.GetAll();

    public Tasks GetById(int id)=>_repo.GetById(id);

    public bool Insert(Tasks tasks)=>_repo.Insert(tasks);

    public bool Update(Tasks tasks)=>_repo.Update(tasks);

    public bool Delete(int id)=>_repo.Delete(id);



}