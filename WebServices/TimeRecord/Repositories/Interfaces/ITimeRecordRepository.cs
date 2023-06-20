using PMS.Models;

namespace PMS.Repositories.Interfaces;

public interface ITimeRecordRepository{
    List <Timerecord> GetAll();
}