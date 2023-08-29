using Transflower.PMS.TimeRecordService.Models;

namespace Transflower.PMS.TimeRecordService.Repositories.Interfaces;

public interface ITimeRecordRepository{
     Task<IEnumerable<Timerecord>> GetAll();
     Task<Timerecord> Get(int id);
     Task<bool> Insert(Timerecord timerecord);
     Task<bool> Update(Timerecord timerecord);
     Task <bool> Delete(int id);
     Task<IEnumerable<Timerecord>> GetAll(int id);
    // Task<IEnumerable<Timerecord>>GetDetails(int empid,string theDate);  
     Task<TotalWorkingTime> GetTotalWorkingTime(int empid,string startDate,string toDate); 


     
}