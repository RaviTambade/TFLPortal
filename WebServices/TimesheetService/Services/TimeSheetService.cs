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
    public List<Timesheet> GetAll()=>_repo.GetAll();

    public Timesheet Get(int id)=>_repo.Get(id);

    public bool Insert(Timesheet timesheet)=>_repo.Insert(timesheet);

    public bool Update(Timesheet timesheet)=>_repo.Update(timesheet);

    public bool Delete(int id)=>_repo.Delete(id);

    public List<TimesheetsDetail> GetAllDetails(int empid,string theDate)=> _repo.GetAllDetails(empid,theDate);
}