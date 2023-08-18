using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface ITimeSheetRepository{


     Task<IEnumerable<Timesheet>> GetAll();
     Task <Timesheet> Get(int id);
     Task <bool> Insert(Timesheet timesheet);
     Task<bool> Update(Timesheet timesheet);
     Task <bool> Delete(int id);
    
    Task<IEnumerable<TimesheetsDetail>>GetAllDetails(int empid,string theDate);  
     Task <TimesheetsDetail> GetDetails(int empid); 
     Task <WorkingTime> GetTotalWorkingTime(int empid,string theDate);  

     Task<IEnumerable<WeeklyData>> GetWeeklyData(int empid); 
     
 }