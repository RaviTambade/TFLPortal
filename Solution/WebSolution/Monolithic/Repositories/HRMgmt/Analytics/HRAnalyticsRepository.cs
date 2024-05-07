using MySql.Data.MySqlClient;
using Transflower.TFLPortal.Entities.HRMgmt;
using Microsoft.Extensions.Configuration;
using System.Text.Json;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Repositories.HRMgmt.Analytics.Interfaces;
namespace Transflower.TFLPortal.Repositories.HRMgmt.Analytics;

public class HRAnalyticsRepository : IHRAnalyticsRepository
{
    private static string jsonFile = "inout.json";

    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public HRAnalyticsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<Employee> GetEmployee(int employeeId)
    {
        Employee employee = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employees where id=@Id";
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
        List<Employee> employees = new List<Employee>();
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

    public async Task<List<Employee>> GetEmployeesOnBench()
    {
        List<Employee> employees = new List<Employee>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"SELECT * FROM employees
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

    public List<InOutTimeRecord> GetTimeRecords()
    {
        JsonRepositoryManager manager =new JsonRepositoryManager();
        List<InOutTimeRecord> timeRecords= manager.DeSerialize<List<InOutTimeRecord>>(jsonFile);
        CsvRepositoryManager csvRepositoryManager=new CsvRepositoryManager();
        csvRepositoryManager.GenerateCSVFile(timeRecords,"mycsv");
        return timeRecords;
    }

     public List<InOutTimeRecord> GetTimeRecords(int employeeId)
    {
        JsonRepositoryManager manager =new JsonRepositoryManager();
        var timeRecords= manager.DeSerialize<List<InOutTimeRecord>>(jsonFile);
        List<InOutTimeRecord> records= (from record in timeRecords where record.EmployeeId==employeeId select record).ToList();
        // return timeRecords.Where(t => t.EmployeeId == employeeId).ToList();

       return records;
      }
}
