using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface ITimeSheetService
{
    Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId);
    Task<TimeSheet> GetTimeSheetOfEmployee(int employeeId, string date);
    Task<List<TimeSheetEntry>> GetTimeSheetEntries(int timeSheetId);
    Task<List<WorkCategoryDetails>> GetActivityWiseHours(int employeeId,string intervalType,int projectId);
    Task<TimeSheetEntry> GetTimeSheetEntry(int timeSheetEntryId);
    Task<bool> InsertTimeSheet(TimeSheet timeSheet);
    Task<bool> InsertTimeSheetEntry(TimeSheetEntry timeSheetEntry);
    Task<bool> ChangeTimeSheetStatus(int timeSheetId, TimeSheet timeSheet);
    Task<bool> UpdateTimeSheetEntry(int timeSheetEntryId,TimeSheetEntry timeSheetEntry);
    Task<bool> RemoveTimeSheetEntry(int timeSheetEntryId);
    Task<bool> RemoveAllTimeSheetEntry(int timeSheetId);


}
