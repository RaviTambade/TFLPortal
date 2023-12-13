using Transflower.TFLPortal.TFLOBL.Entities;
namespace Transflower.TFLPortal.TFLSAL.Services.Interfaces;

public interface IEmployeeService {

    Task<Employee> GetEmployeeDetails(int employeeId); 

    Task<Employee> GetEmployee(int userId); 

    Task<bool> InsertSalaryStructure(SalaryStructure salaryStructure); 
 }
