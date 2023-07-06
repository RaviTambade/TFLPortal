using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IPayRollCycleRepository{


     
     Task<IEnumerable<PayRollCycle>> GetAll();

     Task<PayRollCycle> GetById(int id);

     Task<bool> InsertPayRoll(PayRollCycle payroll);

     Task<bool> UpdatePayRoll(PayRollCycle payroll);

     Task<bool> DeletePayRoll(int id);
     
 }