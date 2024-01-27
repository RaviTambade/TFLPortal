using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IHRService {

    Task<Employee> GetEmployeeById(int employeeId); 

    Task<List<Employee>> GetEmployees(string employeeIds); 

    Task<Employee> GetEmployeeByUserId(int userId); 


 }
