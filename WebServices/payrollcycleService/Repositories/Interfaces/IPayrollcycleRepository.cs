using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface IPayRollCycleRepository{


     
     List<PayRollCycle> GetAll();

     PayRollCycle GetById(int id);

     bool InsertPayRoll(PayRollCycle payroll);

     bool UpdatePayRoll(PayRollCycle payroll);

     bool DeletePayRoll(int id);
     
 }