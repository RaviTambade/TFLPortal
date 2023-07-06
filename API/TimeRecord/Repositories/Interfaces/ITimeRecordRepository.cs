using PMS.Models;

namespace PMS.Repositories.Interfaces;

public interface ITimeRecordRepository{
     Task<IEnumerable<Timerecord>> GetAll();
     Task<Timerecord> Get(int id);
     Task<bool> Insert(Timerecord timerecord);
     Task<bool> Update(Timerecord timerecord);
     Task <bool> Delete(int id);
     Task<IEnumerable<Timerecord>> GetAll(int id);
     Task<TotalWorkingTime> GetTotalWorkingTime(int empid,string startDate,string toDate); 


     
}