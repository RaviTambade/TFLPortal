using PMS.Models;

namespace PMS.Repositories.Interfaces;

public interface ITimeRecordRepository{
    List <Timerecord> GetAll();

     Timerecord Get(int id);
     bool Insert(Timerecord timerecord);
     
}