using Transflower.PMSApp.TimeSheets.Models;
namespace Transflower.PMSApp.TimeSheets.Repositories.Interfaces;
public interface ITimeSheetRepository
{
    Task<List<MyTimeSheetList>> GetMyTimeSheets(int employeeId,string timePeriod);
    Task<TimeSheetDetail> GetTimeSheetDetails(int timeSheetId);

}