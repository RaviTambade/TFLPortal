using Transflower.PMSApp.TimeSheets.Models;
using Transflower.PMSApp.TimeSheets.Entities;
namespace Transflower.PMSApp.TimeSheets.Repositories.Interfaces;
public interface ITimeSheetRepository
{
    Task<List<MyTimeSheetList>> GetMyTimeSheets(int employeeId,string timePeriod);
    Task<TimeSheetDetail> GetTimeSheetDetails(int timeSheetId);
    Task<bool> AddTimeSheet(TimeSheet timeSheet);
    Task<List<TimeSheetList>> GetTimeSheetList(int managerId,string timePeriod);
    

}