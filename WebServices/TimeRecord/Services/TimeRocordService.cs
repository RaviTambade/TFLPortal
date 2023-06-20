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




    
}