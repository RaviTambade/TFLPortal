using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimeSheetService
{
    Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId);
    Task<TimeSheet> GetTimeSheetOfEmployee(int employeeId, string date);
    Task<List<TimeSheetEntry>> GetTimeSheetEntries(int timeSheetId);
    Task<bool> InsertTimeSheet(int employeeId, DateTime date);
    Task<bool> ChangeTimeSheetStatus(int timeSheetId, TimeSheet timeSheet);
    Task<bool> InsertTimeSheetEntry(TimeSheetEntry timeSheetEntry);
    Task<bool> UpdateTimeSheetEntry(int timeSheetEntryId,TimeSheetEntry timeSheetEntry);
    Task<bool> RemoveTimeSheetEntry(int timeSheetEntryId);
    Task<bool> RemoveAllTimeSheetEntry(int timeSheetId);

}
