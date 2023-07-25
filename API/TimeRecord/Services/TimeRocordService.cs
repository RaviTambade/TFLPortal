using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;

namespace PMS.Services;

public class TimeRecordService : ITimeRecordService
{
    private readonly ITimeRecordRepository _repo;
    public TimeRecordService(ITimeRecordRepository repo){
        _repo=repo;
    }
    public async Task<IEnumerable<Timerecord>> GetAll()=>await _repo.GetAll();
    public async Task <Timerecord> Get(int id)=>await _repo.Get(id);
    public async Task<bool> Insert(Timerecord timerecord)=>await _repo.Insert(timerecord);
    public async Task<bool> Update(Timerecord timerecord)=>await _repo.Update(timerecord);
    public async Task<bool> Delete(int id)=>await _repo.Delete(id);
     public  async Task<IEnumerable<Timerecord>> GetAll(int empid)=>await _repo.GetAll(empid);
     public async Task <TotalWorkingTime> GetTotalWorkingTime(int empid,string fromDate,string toDate)=> await _repo.GetTotalWorkingTime(empid,fromDate,toDate);

  
}