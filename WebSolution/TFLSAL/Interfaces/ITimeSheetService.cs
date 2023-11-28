using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface ITimeSheetService{

     public Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId);

     public Task<List<TimeSheetEntry>> GetTimeSheetDetails(int timeSheetId);

     public Task<List<TimeSheetEntry>> GetDatewiseTimeSheetsOfEmployee(DateTime date,int employeeId);

     public Task<bool> InsertTimeSheet(TimeSheetEntry timeSheet);

     public Task<bool> InsertTimeSheetEntry(TimeSheetEntry timeSheet);

}