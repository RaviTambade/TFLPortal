using PMS.Models;

namespace PMS.Repositories.Interfaces;

public interface ITimeRecordRepository{
    List <Timerecord> GetAll();
     Timerecord Get(int id);
     bool Insert(Timerecord timerecord);
     bool Update(Timerecord timerecord);
     bool Delete(int id);
     List <Timerecord> GetAll(int id);

     TotalWorkingTime GetTotalWorkingTime(int empid,string startDate,string toDate);  
}