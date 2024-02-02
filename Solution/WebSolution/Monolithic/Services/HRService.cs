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
                    "select * from employees where id=@Id";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@Id", employeeId);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (await reader.ReadAsync())
                {
                    employee = new Employee
                    {
                        Id = reader.GetInt32("id"),
                        HiredOn = reader.GetDateTime("hiredon"),
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


    public async Task<List<Employee>> GetUnPaidSalaries(int month, int year)
    {
            List<Employee> employees=new List<Employee>();
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                   @"SELECT *
                         FROM employees
                         LEFT JOIN salaryslips ON employees.id = salaryslips.employeeid
                         AND MONTH(salaryslips.paydate) = @month
                         AND YEAR(salaryslips.paydate) = @year
                         WHERE salaryslips.employeeid IS NULL";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@month", month);
                command.Parameters.AddWithValue("@year", year);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                while(await reader.ReadAsync())
                {
                    Employee employee = new Employee
                    {
                        Id = reader.GetInt32("id"),
                        HiredOn = reader.GetDateTime("hiredon"),
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
                        HiredOn = reader.GetDateTime("hiredon"),
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
    
    public async Task<List<Employee>> GetEmployeesOnBench()
    {
        List<Employee> employees= new List<Employee>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =@"SELECT * FROM employees
           WHERE id not in (SELECT employeeid FROM projectmembers GROUP BY employeeid HAVING COUNT(CASE WHEN status = 'yes' THEN 1 END) > 0)";       
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                Employee employee = new Employee
                {
                    Id = reader.GetInt32("id"),
                    HiredOn = reader.GetDateTime("hiredon"),
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
}
   
   
   
   
