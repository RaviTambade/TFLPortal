using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;
namespace PMS.Services;


public class PayRollCycleService : IPayRollCycleServices
{

     private readonly IPayRollCycleRepository _repo ;
   
    public PayRollCycleService(IPayRollCycleRepository repo){
        _repo=repo;
    }
    public async Task<IEnumerable<PayRollCycle>> GetAll()=>await _repo.GetAll();

    public async Task<PayRollCycle> GetById(int id)=>await _repo.GetById(id);

    public async Task<bool> InsertPayRoll(PayRollCycle payroll)=>await _repo.InsertPayRoll(payroll);

    public async Task<bool> UpdatePayRoll(PayRollCycle payroll)=>await _repo.UpdatePayRoll(payroll);

    public async Task<bool> DeletePayRoll(int id)=>await _repo.DeletePayRoll(id);



}