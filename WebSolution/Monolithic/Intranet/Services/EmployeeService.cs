using MySql.Data.MySqlClient;
using TFLPortal.Models;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class HRService : IHRService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public HRService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<Employee> GetEmployeeById(int employeeId)
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

        public async Task<List<Employee>> GetEmployees(string employeeIds)
        {
            List<Employee> employees = new List<Employee>();
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    $"select * from employees where id IN ({employeeIds})";
                MySqlCommand command = new MySqlCommand(query, connection);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (await reader.ReadAsync())
                {
                    Employee employee = new Employee
                    {
                        Id = reader.GetInt32("id"),
                        UserId = reader.GetInt32("userid"),
                        HireDate = reader.GetDateTime("hiredate"),
                        ReportingId = reader.GetInt32("reportingid"),
                    };
                    employees.Add(employee);
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
            return employees;
        }
    public async Task<Employee> GetEmployeeByUserId(int userId)
        {
            Employee employee = null;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "select * from employees where userid=@userId";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@userId", userId);
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
   
   
   
   
