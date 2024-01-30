using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using TFLPortal.Services.Interfaces;
using TFLPortal.Models;
using System.Data;
using TFLPortal.Responses;

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

    
    public async Task<List<SalarySlip>> GetSalaries(int employeeId)
    {
        List<SalarySlip> salaryDetails = new List<SalarySlip>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try
        {
            string query="select * from salaryslips where employeeid=@employeeId";
            MySqlCommand command=new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@employeeId",employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader=command.ExecuteReader();
            while(await reader.ReadAsync()){
                    SalarySlip details=new SalarySlip{
                     Id=reader.GetInt32("id"),
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

    public async Task<SalarySlip> GetSalary(int salaryId)
    {
        SalarySlip salaryDetails = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try
        {
            string query="select * from salaryslips where id=@salaryId";
            MySqlCommand command=new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@salaryId",salaryId);
            await connection.OpenAsync();
            MySqlDataReader reader=command.ExecuteReader();
            while(await reader.ReadAsync()){
                    salaryDetails=new SalarySlip{
                     Id=reader.GetInt32("id"),
                    EmployeeId=reader.GetInt32("employeeid"),
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
    public async Task<List<SalarySlip>> GetPaidSalaries(int month,int year)
    {
        List<SalarySlip> salaryDetails = new List<SalarySlip>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try
        {
            string query="select * from salaryslips where MONTH(paydate)=@month and YEAR(paydate)=@year";
            MySqlCommand command=new MySqlCommand(query,connection);
            command.Parameters.AddWithValue("@month",month);
            command.Parameters.AddWithValue("@year",year);
            await connection.OpenAsync();
            MySqlDataReader reader=command.ExecuteReader();
            while(await reader.ReadAsync()){
                    SalarySlip details=new SalarySlip{
                    Id=reader.GetInt32("id"),
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

    public async Task<List<int>> GetUnPaidSalaries(int month, int year)
    {
            List<int>? userIds=new();
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                   @"SELECT employees.userid
                         FROM employees
                         LEFT JOIN salaryslips ON employees.id = salaryslips.employeeid
                         AND MONTH(salaryslips.paydate) = @month
                         AND YEAR(salaryslips.paydate) = @year
                         WHERE salaryslips.employeeid IS NULL";
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

    public async Task<SalaryStructure> GetSalaryStructure(int employeeId)
        {
            SalaryStructure salary = null;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "select * from salarystructures where employeeid=@employeeId";
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
                        VariablePay = reader.GetInt32("variablepay")
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
    public async  Task<MonthSalaryResponse> GetSalary(int employeeId,int month,int year){
        MonthSalaryResponse salary = null;
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
                 salary = new MonthSalaryResponse()
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
    
    public async Task<bool> AddSalaryStructure(SalaryStructure salaryStructure)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate =DateTime.Now;

        try
        {
            string query = "Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay) values(@employeeId,@basicSalary,@hra,@da,@lta,@variablePay)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@employeeId",salaryStructure.EmployeeId);
            cmd.Parameters.AddWithValue("@basicSalary", salaryStructure.BasicSalary);
            cmd.Parameters.AddWithValue("@hra", salaryStructure.HRA);
            cmd.Parameters.AddWithValue("@da", salaryStructure.DA);
            cmd.Parameters.AddWithValue("@lta", salaryStructure.LTA);
            cmd.Parameters.AddWithValue("@variablePay", salaryStructure.VariablePay);
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

    public async Task<bool> AddSalarySlip(SalarySlip salarySlip)
    {
        bool status=false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate =DateTime.Now;

        try
        {
            string query = "Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) values(@employeeId,@payDate,@monthlyWorkingDays,@deduction,@tax,@pf,@amount)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@employeeId",salarySlip.EmployeeId);
            cmd.Parameters.AddWithValue("@payDate", salarySlip.PayDate);
            cmd.Parameters.AddWithValue("@monthlyWorkingDays", salarySlip.MonthlyWorkingDays);
            cmd.Parameters.AddWithValue("@deduction", salarySlip.Deduction);
            cmd.Parameters.AddWithValue("@tax", salarySlip.Tax);
            cmd.Parameters.AddWithValue("@pf", salarySlip.PF);
            cmd.Parameters.AddWithValue("@amount", salarySlip.Amount);
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
}


