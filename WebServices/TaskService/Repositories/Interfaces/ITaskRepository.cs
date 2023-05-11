using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface ITaskRepository{
 
     List<Tasks> GetAll();

     Tasks GetById(int id);

     bool Insert(Tasks task);

     bool Update(Tasks task);

     bool Delete(int id);
     
 }