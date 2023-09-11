
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
   
    public async Task<Directors> GetById(int Id)=>await _repo.GetById(Id);

    public async Task<bool> Insert (Directors director) =>await _repo.Insert(director);

    public async Task<bool> Update(Directors director)=>await _repo.Update(director);
    public async Task<bool> Delete(int id)=>await _repo.Delete(id);

}

