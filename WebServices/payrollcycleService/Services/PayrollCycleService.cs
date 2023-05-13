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
    public List<PayRollCycle> GetAll()=>_repo.GetAll();

    public PayRollCycle GetById(int id)=>_repo.GetById(id);

    public bool InsertPayRoll(PayRollCycle payroll)=>_repo.InsertPayRoll(payroll);

    public bool UpdatePayRoll(PayRollCycle payroll)=>_repo.UpdatePayRoll(payroll);

    public bool DeletePayRoll(int id)=>_repo.DeletePayRoll(id);



}