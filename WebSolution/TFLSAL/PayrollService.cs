using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using Transflower.TFLPortal.TFLOBL.Entities;
using System.Data;

namespace Transflower.TFLPortal.TFLSAL.Services;
public class PayrollService : IPayrollService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public PayrollService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =_configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }

    
    public async Task<bool> AddSalary(SalaryStructure salaryStructure)
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
       
       
 }


