
using Transflower.PMS.AssignedTask.Models;
using Transflower.PMS.AssignedTask.Repositories.Interfaces;
using Transflower.PMS.AssignedTask.Services.Interfaces;

namespace Transflower.PMS.AssignedTask.Services;
public class AssignedTaskService : IAssignedTaskService
{
    private readonly IAssignedTaskRepository _repo;
    public AssignedTaskService(IAssignedTaskRepository repo)
    {
        _repo = repo;
    }
    public async Task<IEnumerable<Assignedtask>> GetAll(){
        var assignedtask =await _repo.GetAll();
        return  assignedtask;
    } 
   
    public async Task<Assignedtask> GetById(int Id)=>await _repo.GetById(Id);

    public async Task<bool> Insert (Assignedtask assignedtask) =>await _repo.Insert(assignedtask);

    public async Task<bool> Update(Assignedtask assignedtask)=>await _repo.Update(assignedtask);
    public async Task<bool> Delete(int id)=>await _repo.Delete(id);

}

