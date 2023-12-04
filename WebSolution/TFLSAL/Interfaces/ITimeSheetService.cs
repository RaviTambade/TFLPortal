using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimeSheetService
{
    Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId);
    Task<TimeSheet> GetTimeSheetOfEmployee(int employeeId,string date);

    Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId);

    Task<bool> InsertTimeSheet(TimeSheet timeSheet);
    
}
