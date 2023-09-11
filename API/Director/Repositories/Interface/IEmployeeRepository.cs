using Transflower.PMS.Director.Models;

namespace Transflower.PMS.Director.Repositories.Interfaces;
public interface IDirectorRepository
{
    Task <IEnumerable<Directors>> GetAll();
    Task<Directors> GetById(int Id);
    Task<bool> Insert(Directors director);
    Task<bool> Update(Directors director);
    Task<bool> Delete(int empId);



}