using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface ITimeSheetService{

     public Task<List<TimeSheet>> GetTimeSheetsOfEmployee(int employeeId);

     
}