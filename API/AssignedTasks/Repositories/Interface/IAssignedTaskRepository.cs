using Transflower.PMS.AssignedTask.Models;

namespace Transflower.PMS.AssignedTask.Repositories.Interfaces;
public interface IAssignedTaskRepository
{
     Task <IEnumerable<Assignedtask>> GetAll();
    
    Task<Assignedtask> GetById(int Id);
    Task<bool> Insert(Assignedtask assignedtask);
    Task<bool> Update(Assignedtask assignedtask);
    Task<bool> Delete(int assignedtaskId);



}