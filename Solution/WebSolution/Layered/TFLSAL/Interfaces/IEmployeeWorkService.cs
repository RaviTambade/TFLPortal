using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
 public interface IEmployeeWorkService
{
      Task<List<EmployeeWork>> GetAllWorks();
      Task<List<EmployeeWork>> GetWorkByProject(int projectId);
      Task<List<EmployeeWork>> GetWorkByType(int projectId, string ProjectWorkType);
      Task<List<EmployeeWork>> GetWorks(int projectId, int employeeId);
      Task<List<EmployeeWork>> GetWorks(int projectId, int employeeId, string status);
      Task<List<EmployeeWork>> GetSprintWorks(int sprintId, int employeeId, string status);
      Task<EmployeeWorkDetails> GetWorkDetails(int employeeWorkId);
      Task<bool> AddWork(EmployeeWork employeeWork);
      Task<bool> UpdateWork(string status,int employeeWorkId);
     Task<List<EmployeeWork>> GetAllWorks(int employeeId);

     Task<List<EmployeeWork>> GetAllWorksBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);
     
     Task<List<EmployeeWork>> GetWorksBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

      Task<List<EmployeeWorkDetails>> GetAllWorks(int projectId,int employeeId);

      Task<EmployeeWorkStatusCount> GetWorksCount();

     Task<List<EmployeeWork>> GetTodayWork(int projectId,DateTime date);


}