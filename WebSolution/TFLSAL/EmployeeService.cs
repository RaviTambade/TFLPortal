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

    public async Task<bool> InsertSalaryStructure(SalaryStructure salaryStructure)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate =DateTime.Now;

        try
        {
            string query = "Insert Into salaries(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(@employeeId,@basicSalary,@hra,@da,@lta,@variablePay,@deduction)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@employeeId",salaryStructure.EmployeeId);
            cmd.Parameters.AddWithValue("@basicSalary", salaryStructure.BasicSalary);
            cmd.Parameters.AddWithValue("@hra", salaryStructure.HRA);
            cmd.Parameters.AddWithValue("@da", salaryStructure.DA);
            cmd.Parameters.AddWithValue("@lta", salaryStructure.LTA);
            cmd.Parameters.AddWithValue("@variablePay", salaryStructure.VariablePay);
            cmd.Parameters.AddWithValue("@deduction", salaryStructure.Deduction);
            await connection.OpenAsync();
            int rowsAffected = cmd.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                status = true;
            }
            await connection.CloseAsync();

        }
        catch (Exception e)
        {
            throw e;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return status;
    }

    public async Task<Employee> GetEmployee( int userId)
        {
            Employee employee = null;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "select * from employees where id=@userId";
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

        
    public async Task<SalaryStructure> GetSalaryStructure( int employeeId)
        {
            SalaryStructure salaryStructure = null;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "select * from salaries where employeeid=@employeeId";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", employeeId);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (await reader.ReadAsync())
                {
                    salaryStructure = new SalaryStructure
                    {
                        Id = reader.GetInt32("id"),
                        EmployeeId = reader.GetInt32("employeeid"),
                        BasicSalary= reader.GetInt32("basicsalary"),
                        HRA = reader.GetInt32("hra"),
                        DA = reader.GetInt32("da"),
                        LTA = reader.GetInt32("lta"),
                        VariablePay = reader.GetInt32("variablepay"),
                        Deduction = reader.GetInt32("deduction")
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
            return salaryStructure;
        }
}
   
   
   
   
