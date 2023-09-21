using Transflower.PMSApp.TimeSheets.Services.Interfaces;
using Transflower.PMSApp.TimeSheets.Models;
using Transflower.PMSApp.TimeSheets.Repositories.Interfaces;
namespace Transflower.PMSApp.TimeSheets.Services;
public class TimeSheetService:ITimeSheetService
{
    private readonly ITimeSheetRepository _timeSheetRepository;
    public TimeSheetService(ITimeSheetRepository timeSheetRepository){
        _timeSheetRepository=timeSheetRepository;
    }
    public async Task<List<MyTimeSheetList>> GetMyTimeSheets(int employeeId,string timePeriod)=>
    await _timeSheetRepository.GetMyTimeSheets(employeeId,timePeriod);
    public async Task<TimeSheetDetail> GetTimeSheetDetails(int timeSheetId)=>
    await _timeSheetRepository.GetTimeSheetDetails(timeSheetId);

}