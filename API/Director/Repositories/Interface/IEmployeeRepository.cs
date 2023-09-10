using Transflower.PMS.Director.Models;

namespace Transflower.PMS.Director.Repositories.Interfaces;
public interface IDirectorRepository
{
    Task <IEnumerable<Directors>> GetAll();
    Task<Directors> GetById(int Id);
    // Task<bool> Insert(Directors emp);
    // Task<bool> Update(Directors emp);
    // Task<bool> Delete(int empId);



    // Task<IEnumerable<Employee>> GetByRole(string role);
}