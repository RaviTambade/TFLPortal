using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface ITimeSheetRepository{


     List<Timesheet> GetAll();
     Timesheet Get(int id);
     bool Insert(Timesheet timesheet);
     bool Update(Timesheet timesheet);
     bool Delete(int id);
     List<TimesheetsDetail>GetAllDetails();     
 }