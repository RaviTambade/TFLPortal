using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class EmployeeService : IEmployeeService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public EmployeeService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<Employee> GetEmployeeDetails( int employeeId)
        {
            Employee employee = null;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "select * from employees where id=@employeeId";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", employeeId);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (await reader.ReadAsync())
                {
                    employee = new Employee
                    {
                        Id = reader.GetInt32("id"),
                        UserId = reader.GetInt32("userid"),
                        HireDate = reader.GetDateTime("hiredate"),
                        ReportingId = reader.GetInt32("reportingid"),
                        Salary = reader.GetInt32("salary"),
                    };
                }
                await reader.CloseAsync();
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                await connection.CloseAsync();
            }
            return employee;
        }
   
   
   
   }
