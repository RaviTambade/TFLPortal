using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;
using TFLPortal.Models;
using System.Data;

namespace TFLPortal.Services;
public class PayrollService : IPayrollService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public PayrollService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =_configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }

    
    public async Task<List<Salary>> GetEmployeeSalaryDetails(int employeeId)
    {
        List<Salary> salaryDetails = new List<Salary>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try
        {
            string query="select * from salaries where employeeid=@employeeId";
            MySqlCommand command=new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@employeeId",employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader=command.ExecuteReader();
            while(await reader.ReadAsync()){
                    SalaryDetails details=new SalaryDetails{
                    EmployeeId=reader.GetInt32("employeeid"),
                    PayDate=reader.GetDateTime("paydate"),
                    MonthlyWorkingDays=reader.GetInt32("monthlyworkingdays"),
                    Deduction=reader.GetDouble("deduction"),
                    Tax=reader.GetDouble("tax"),
                    PF=reader.GetDouble("pf"),
                    Amount=reader.GetDouble("amount"),             
                };
                salaryDetails.Add(details);
            }
            await reader.CloseAsync();
        }
        catch(Exception)
        {
          throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return salaryDetails;
    }

    public async Task<SalaryDetails> GetPaidEmployeeSalaryDetails(int salaryId)
    {
        SalaryDetails salaryDetails = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try
        {
            string query="select salaries.*,employees.userid from salaries inner join employees where employees.id=salaries.employeeid where id=@salaryId";
            MySqlCommand command=new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@salaryId",salaryId);
            await connection.OpenAsync();
            MySqlDataReader reader=command.ExecuteReader();
            while(await reader.ReadAsync()){
                    salaryDetails=new SalaryDetails{
                    EmployeeId=reader.GetInt32("employeeid"),
                    UserId=reader.GetInt32("userid"),
                    PayDate=reader.GetDateTime("paydate"),
                    MonthlyWorkingDays=reader.GetInt32("monthlyworkingdays"),
                    Deduction=reader.GetDouble("deduction"),
                    Tax=reader.GetDouble("tax"),
                    PF=reader.GetDouble("pf"),
                    Amount=reader.GetDouble("amount"),             
                };
            }
            await reader.CloseAsync();
        }
        catch(Exception)
        {
          throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return salaryDetails;

    }
    public async Task<List<SalaryDetails>> GetSalaryDetails(int month,int year)
    {
        List<SalaryDetails> salaryDetails = new List<SalaryDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try
        {
            string query="select salaries.*,employees.userid from salaries inner join employees on salaries.employeeid=employees.id where MONTH(paydate)=@month and YEAR(paydate)=@year";
            MySqlCommand command=new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@month",month);
            command.Parameters.AddWithValue("@year",year);
            await connection.OpenAsync();
            MySqlDataReader reader=command.ExecuteReader();
            while(await reader.ReadAsync()){
                    SalaryDetails details=new SalaryDetails{
                    EmployeeId=reader.GetInt32("employeeid"),
                    UserId=reader.GetInt32("userid"),
                    PayDate=reader.GetDateTime("paydate"),
                    MonthlyWorkingDays=reader.GetInt32("monthlyworkingdays"),
                    Deduction=reader.GetDouble("deduction"),
                    Tax=reader.GetDouble("tax"),
                    PF=reader.GetDouble("pf"),
                    Amount=reader.GetDouble("amount"),             
                };
                salaryDetails.Add(details);
            }
            await reader.CloseAsync();
        }
        catch(Exception)
        {
          throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return salaryDetails;
    }

    
    public async Task<bool> AddSalaryStructure(SalaryStructure salaryStructure)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate =DateTime.Now;

        try
        {
            string query = "Insert Into salarystructure(employeeid,basicsalary,hra,da,lta,variablepay,deduction) values(@employeeId,@basicSalary,@hra,@da,@lta,@variablePay,@deduction)";
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

    public async Task<SalaryStructure> GetSalary(int employeeId)
        {
            SalaryStructure salary = null;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "select * from salarystructure where employeeid=@employeeId";
                MySqlCommand command = new MySqlCommand(query, connection);
                command.Parameters.AddWithValue("@employeeId", employeeId);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                if (await reader.ReadAsync())
                {
                    salary = new SalaryStructure
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
            return salary;
        }


      public async  Task<MonthSalary> CalculateSalary(int employeeId,int month,int year){
        MonthSalary salary = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "CALL calculatesalary(@employee_Id,@month,@year)";
        try
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employee_Id", employeeId);
            command.Parameters.AddWithValue("@month", month);
            command.Parameters.AddWithValue("@year", year);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                 salary = new MonthSalary()
                {
                    TotalAmount = reader.GetDouble("totalamount"),
                    MonthlyBasicsalary = reader.GetDouble("monthlybasicsalary"),
                    HRA =reader.GetDouble("monthlyhra"),
                    DA =reader.GetDouble("dailyallowance"),
                    LTA=reader.GetDouble("leaveTravelallowance"),
                    VariablePay=reader.GetDouble("variablepayamount"),
                    Deduction=reader.GetDouble("deduction"),
                    Pf=reader.GetDouble("Pf"),
                    Tax=reader.GetDouble("tax"),
                    ConsumedPaidLeaves=reader.GetInt32("consumedpaidleaves"),
                    WorkingDays=reader.GetInt32("workingdays"),
                };
            }
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await connection.CloseAsync();
        }
        return salary;
    }

    public async Task<bool> InsertSalary(Salary salary)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate =DateTime.Now;

        try
        {
            string query = "Insert Into salaries(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(@employeeId,@payDate,@monthlyWorkingDays,@deduction,@tax,@pf,@amount)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@employeeId",salary.EmployeeId);
            cmd.Parameters.AddWithValue("@payDate", salary.PayDate);
            cmd.Parameters.AddWithValue("@monthlyWorkingDays", salary.MonthlyWorkingDays);
            cmd.Parameters.AddWithValue("@deduction", salary.Deduction);
            cmd.Parameters.AddWithValue("@tax", salary.Tax);
            cmd.Parameters.AddWithValue("@pf", salary.PF);
            cmd.Parameters.AddWithValue("@amount", salary.Amount);
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

    public async Task<List<int>> GetUnPaidEmployees(int month, int year)
    {
            List<int>? userIds=new();
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                   @"SELECT employees.userid
                         FROM employees
                         LEFT JOIN salaries ON employees.id = salaries.employeeid
                         AND MONTH(salaries.paydate) = @month
                         AND YEAR(salaries.paydate) = @year
                         WHERE salaries.employeeid IS NULL";
                MySqlCommand command = new MySqlCommand(query, connection);
                System.Console.WriteLine(month);
                System.Console.WriteLine(year);
                command.Parameters.AddWithValue("@month", month);
                command.Parameters.AddWithValue("@year", year);
                await connection.OpenAsync();
                MySqlDataReader reader = command.ExecuteReader();
                while(await reader.ReadAsync())
                {
                     userIds.Add(reader.GetInt32(reader.GetOrdinal("userid")));
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
            return userIds;
    }
}


