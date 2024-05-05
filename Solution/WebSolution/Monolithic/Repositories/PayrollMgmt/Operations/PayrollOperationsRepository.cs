using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Repositories.PayrollMgmt.Operations;

namespace TFLPortal.Services.PayrollMgmt.Operations;

public class PayrollOperationsRepository : IPayrollOperationsRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public PayrollOperationsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> AddSalaryStructure(SalaryStructure salaryStructure)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate = DateTime.Now;

        try
        {
            string query =
                @"Insert Into salarystructures(employeeid,basicsalary,hra,da,lta,variablepay)
                 values(@employeeId,@basicSalary,@hra,@da,@lta,@variablePay)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@employeeId", salaryStructure.EmployeeId);
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
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        var assigndate = DateTime.Now;

        try
        {
            string query =
                @"Insert Into salaryslips(employeeid,paydate,monthlyworkingdays,deduction,tax,pf,amount) 
                values(@employeeId,@payDate,@monthlyWorkingDays,@deduction,@tax,@pf,@amount)";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@employeeId", salarySlip.EmployeeId);
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
