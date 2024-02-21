using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Services.PayrollMgmt.Analytics;

public class PayrollAnalyticsService : IPayrollAnalyticsService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public PayrollAnalyticsService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<SalarySlip>> GetSalaries(int employeeId)
    {
        List<SalarySlip> salaryDetails = new List<SalarySlip>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from salaryslips where employeeid=@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                SalarySlip details = new SalarySlip
                {
                    Id = reader.GetInt32("id"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    PayDate = reader.GetDateTime("paydate"),
                    MonthlyWorkingDays = reader.GetInt32("monthlyworkingdays"),
                    Deduction = reader.GetDouble("deduction"),
                    Tax = reader.GetDouble("tax"),
                    PF = reader.GetDouble("pf"),
                    Amount = reader.GetDouble("amount"),
                };
                salaryDetails.Add(details);
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
        return salaryDetails;
    }

    public async Task<SalarySlip> GetSalary(int salaryId)
    {
        SalarySlip salaryDetails = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from salaryslips where id=@salaryId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@salaryId", salaryId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                salaryDetails = new SalarySlip
                {
                    Id = reader.GetInt32("id"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    PayDate = reader.GetDateTime("paydate"),
                    MonthlyWorkingDays = reader.GetInt32("monthlyworkingdays"),
                    Deduction = reader.GetDouble("deduction"),
                    Tax = reader.GetDouble("tax"),
                    PF = reader.GetDouble("pf"),
                    Amount = reader.GetDouble("amount"),
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
        return salaryDetails;
    }

    public async Task<List<SalarySlip>> GetPaidSalaries(int month, int year)
    {
        List<SalarySlip> salaryDetails = new List<SalarySlip>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from salaryslips where MONTH(paydate)=@month and YEAR(paydate)=@year";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@month", month);
            command.Parameters.AddWithValue("@year", year);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                SalarySlip details = new SalarySlip
                {
                    Id = reader.GetInt32("id"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    PayDate = reader.GetDateTime("paydate"),
                    MonthlyWorkingDays = reader.GetInt32("monthlyworkingdays"),
                    Deduction = reader.GetDouble("deduction"),
                    Tax = reader.GetDouble("tax"),
                    PF = reader.GetDouble("pf"),
                    Amount = reader.GetDouble("amount"),
                };
                salaryDetails.Add(details);
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
        return salaryDetails;
    }

    public async Task<SalaryStructure> GetSalaryStructure(int employeeId)
    {
        SalaryStructure salary = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from salarystructures where employeeid=@employeeId";
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
                    BasicSalary = reader.GetInt32("basicsalary"),
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

    public async Task<MonthSalary> GetSalary(int employeeId, int month, int year)
    {
        MonthSalary salary = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        string query = "CALL spcalculatesalary(@employee_Id,@month,@year)";
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
                    EmployeeId = employeeId,
                    Month = month,
                    Year = year,
                    TotalAmount = reader.GetDouble("totalamount"),
                    ConsumedPaidLeaves = reader.GetInt32("consumedpaidleaves"),
                    WorkingDays = reader.GetInt32("workingdays"),

                    SalaryDetails = new SalaryDetails
                    {
                        MonthlyBasicSalary = reader.GetDouble("monthlybasicsalary"),
                        HRA = reader.GetDouble("monthlyhra"),
                        DA = reader.GetDouble("dailyallowance"),
                        LTA = reader.GetDouble("leaveTravelallowance"),
                        VariablePay = reader.GetDouble("variablepayamount"),
                    },
                    TaxDetails = new TaxDetails
                    {
                        Pf = reader.GetDouble("Pf"),
                        Tax = reader.GetDouble("tax"),
                        Deduction = reader.GetDouble("deduction"),

                    }



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
}
