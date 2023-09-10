
using Transflower.PMS.Director.Models;
using Transflower.PMS.Director.Repositories.Interfaces;
using Transflower.PMS.Director.Services.Interfaces;

namespace Transflower.PMS.Director.Services;
public class DirectorService : IDirectorService
{
    private readonly IDirectorRepository _repo;
    public DirectorService(IDirectorRepository repo)
    {
        _repo = repo;
    }
    public async Task<IEnumerable<Directors>> GetAll(){
        var employees =await _repo.GetAll();
        return  employees;
    } 
   
    // public async Task<Employee> GetById(int Id)=>await _repo.GetById(Id);
    // public async Task<bool> Insert (Employee employee) =>await _repo.Insert(employee);
    // public async Task<bool> Update(Employee emp)=>await _repo.Update(emp);
    // public async Task<bool> Delete(int id)=>await _repo.Delete(id);








    // public async Task<IEnumerable<Employee>> GetByRole(string role) =>await _repo.GetByRole(role);

}

