using PMS.Models;
using PMS.Repositories.Interfaces;
using PMS.Services.Interfaces;
namespace PMS.Services;


public class TImeSheetService : ITimeSheetServices
{

     private readonly ITimeSheetRepository _repo ;
   
    public TImeSheetService(ITimeSheetRepository repo){
        _repo=repo;
    }
    public async Task <IEnumerable<Timesheet>> GetAll()=>await _repo.GetAll();

    public async Task <Timesheet> Get(int id)=>await _repo.Get(id);

    public async Task <bool> Insert(Timesheet timesheet)=>await _repo.Insert(timesheet);

    public async Task <bool> Update(Timesheet timesheet)=>await _repo.Update(timesheet);

    public async Task <bool> Delete(int id)=>await _repo.Delete(id);

   public async Task <IEnumerable<TimesheetsDetail>> GetAllDetails(int empid,string theDate)=> await _repo.GetAllDetails(empid,theDate);

   public async Task <TimesheetsDetail> GetDetails(int timesheetId)=> await _repo.GetDetails(timesheetId);

    public async Task <WorkingTime> GetTotalWorkingTime(int empid,string theDate)=> await _repo.GetTotalWorkingTime(empid,theDate);

}