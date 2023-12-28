using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;
public interface IEmployeeWorkService
{
     public Task<List<EmployeeWork>> GetAllEmployeeWork();
     public Task<List<EmployeeWork>> GetEmployeeWorkByProject(int projectId);
     public Task<List<EmployeeWork>> GetProjectEmployeeWorkByWorkType(int projectId, string ProjectWorkType);
     public Task<List<EmployeeWork>> GetProjectEmployeeWorks(int projectId, int employeeId);
     public Task<List<EmployeeWork>> GetProjectEmployeeWorks(int projectId, int employeeId, string status);
     public Task<EmployeeWorkDetails> GetEmployeeWorkDetails(int employeeWorkId);
     public Task<bool> AddEmployeeWork(EmployeeWork employeeWork);
     public Task<bool> UpdateEmployeeWork(string status,int employeeWorkId);

     Task<List<EmployeeWork>> GetAllEmployeeWorks(int employeeId);

     Task<List<EmployeeWork>> GetAllEmployeesWorksBetweenDates(DateTime fromAssignedDate,DateTime toAssignedDate);
     
     Task<List<EmployeeWork>> GetEmployeeWorksBetweenDates(int employeeId,DateTime fromAssignedDate,DateTime toAssignedDate);

      Task<List<EmployeeWorkDetails>> GetAllEmployeeWorks(int projectId,int employeeId);

      Task<EmployeeWorkStatusCount> GetEmployeesWorkCount();

     Task<List<EmployeeWork>> GetTodayEmployeesWork(int projectId,DateTime date);


}