using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimeSheetService
{
    Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId);

    Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId);

    Task<List<TimeSheetEntry>> GetDatewiseTimeSheetsOfEmployee(DateTime date, int employeeId);

    Task<bool> InsertTimeSheet(TimeSheet timeSheet);
    Task<int> GetTimeSheetId(TimeSheet timeSheet);
}
