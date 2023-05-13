using PMS.Models;

namespace PMS.Repositories.Interfaces;
 
public interface ITimeSheetRepository{



     
     List<Timesheet> GetAll();

     Timesheet GetById(int id);

     bool InsertTimesheet(Timesheet timesheet);

     bool UpdateTimesheet(Timesheet timesheet);

     bool DeleteTimesheet(int id);
     
 }