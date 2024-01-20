using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
 public interface IEmployeeTaskService
{
      Task<List<EmployeeWork>> GetAllEmployeeWork();
      Task<List<EmployeeWork>> GetEmployeeWorkByProject(int projectId);
      Task<List<EmployeeWork>> GetProjectEmployeeWorkByWorkType(int projectId, string ProjectWorkType);
      Task<List<EmployeeWork>> GetProjectEmployeeWorks(int projectId, int employeeId);
      Task<List<EmployeeWork>> GetProjectEmployeeWorks(int projectId, int employeeId, string status);
      Task<List<EmployeeWork>> GetSprintEmployeeWorks(int sprintId, int employeeId, string status);
      Task<EmployeeWorkDetails> GetEmployeeWorkDetails(int employeeWorkId);
      Task<bool> AddEmployeeWork(EmployeeWork employeeWork);
      Task<bool> UpdateEmployeeWork(string status,int employeeWorkId);
     Task<List<EmployeeWork>> GetAllEmployeeWorks(int employeeId);

     Task<List<EmployeeWork>> GetAllEmployeesWorksBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);
     
     Task<List<EmployeeWork>> GetEmployeeWorksBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

      Task<List<EmployeeWorkDetails>> GetAllEmployeeWorks(int projectId,int employeeId);

      Task<EmployeeWorkStatusCount> GetEmployeesWorkCount();

     Task<List<EmployeeWork>> GetTodayEmployeesWork(int projectId,DateTime date);


}