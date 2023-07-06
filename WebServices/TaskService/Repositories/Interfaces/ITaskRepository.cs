using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface ITaskRepository{
 
     Task<IEnumerable<Tasks>> GetAll();

     Task<Tasks> Get(int id);

     Task<bool> Insert(Tasks task);

     Task<bool> Update(Tasks task);

     Task <bool> Delete(int id);
     
 }