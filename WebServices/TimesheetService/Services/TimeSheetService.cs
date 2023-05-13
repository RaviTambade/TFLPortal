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

    public Timesheet GetById(int id)=>_repo.GetById(id);

    public bool InsertTimesheet(Timesheet timesheet)=>_repo.InsertTimesheet(timesheet);

    public bool UpdateTimesheet(Timesheet timesheet)=>_repo.UpdateTimesheet(timesheet);

    public bool DeleteTimesheet(int id)=>_repo.DeleteTimesheet(id);

 

}