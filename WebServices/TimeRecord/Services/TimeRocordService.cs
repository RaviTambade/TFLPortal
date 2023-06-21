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
    public List<Timerecord>GetAll()=>_repo.GetAll();
    public Timerecord Get(int id)=>_repo.Get(id);
    public bool Insert(Timerecord timerecord)=>_repo.Insert(timerecord);
    public bool Update(Timerecord timerecord)=>_repo.Update(timerecord);
    public bool Delete(int id)=>_repo.Delete(id);
     public List<Timerecord>GetAll(int empid)=>_repo.GetAll(empid);

}