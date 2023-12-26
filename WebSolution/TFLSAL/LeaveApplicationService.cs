using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;
using System.Data;
using Transflower.TFLPortal.TFLOBL.Entities.LeaveMgmt;
using Transflower.TFLPortal.TFLOBL.Entities;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class LeaveManagementService : ILeaveManagementService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public LeaveManagementService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<EmployeeLeave>> GetLeaveDetails(int employeeId)
    {
        List<EmployeeLeave> leaveApplications = new List<EmployeeLeave>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeeleaves where employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                EmployeeLeave leave = new EmployeeLeave()
                {
                    Id = id,
                    EmployeeId = employeeId,
                    ApplicationDate=applicationDate,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    Year=year,
                    LeaveType = leaveType
                };
                leaveApplications.Add(leave);
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
        return leaveApplications;
    }

    public async Task<List<EmployeeLeave>> GetTeamLeaveDetails(int projectId, string status)
    {
        List<EmployeeLeave> leaveApplications = new List<EmployeeLeave>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select projectmembership.employeeid,employeeleaves.status,employeeleaves.leavetype,employeeleaves.applicationdate,employeeleaves.year,employeeleaves.fromdate,employeeleaves.todate from projects inner join projectallocations on projects.id=projectallocations.projectid  inner join employeeleaves on employeeleaves.employeeid=projectallocations.employeeid  where projects.id=@projectId and employeeleaves.status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                EmployeeLeave leave = new EmployeeLeave()
                {
                    EmployeeId = employeeId,
                    ApplicationDate=applicationDate,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    Year=year,
                    LeaveType = leaveType
                };
                leaveApplications.Add(leave);
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
        return leaveApplications;
    }

    public async Task<List<LeaveDetails>> GetAnnualLeavesCountByMonth(int employeeId, int year)
    {
        List<LeaveDetails> leaves = new List<LeaveDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"WITH Months AS (
    SELECT '2023-01-01' AS month_start
    UNION SELECT '2023-02-01'
    UNION SELECT '2023-03-01'
    UNION SELECT '2023-04-01'
    UNION SELECT '2023-05-01'
    UNION SELECT '2023-06-01'
    UNION SELECT '2023-07-01'
    UNION SELECT '2023-08-01'
    UNION SELECT '2023-09-01'
    UNION SELECT '2023-10-01'
    UNION SELECT '2023-11-01'
    UNION SELECT '2023-12-01'
)
SELECT 
    MONTHNAME(m.month_start) AS monthname,
    COALESCE(COUNT(l.employeeid), 0) AS leavecount
    FROM Months m LEFT JOIN 
    leaves l ON l.employeeid = @employeeId AND (
                (l.fromdate BETWEEN m.month_start AND LAST_DAY(m.month_start))
                OR 
                (l.todate BETWEEN m.month_start AND LAST_DAY(m.month_start))
                OR 
                (LAST_DAY(m.month_start) BETWEEN l.fromdate AND l.todate))
                GROUP BY m.month_start ORDER BY m.month_start";

            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int leaveCount = int.Parse(reader["leavecount"].ToString());
                int month = int.Parse(reader["monthname"].ToString());

                LeaveDetails leave = new LeaveDetails()
                {
                    ConsumedLeaves = leaveCount,
                    Month = month
                };
                leaves.Add(leave);
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
        return leaves;
    }

    public async Task<PendingLeaveDetails> GetPendingLeaves(int employeeId, int roleId, int year)
    {
        PendingLeaveDetails leaves = null;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            await con.OpenAsync();

            MySqlCommand cmd = new MySqlCommand("getAvailableLeavesOfEmployee", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@employee_Id", employeeId);
            cmd.Parameters.AddWithValue("@role_id", roleId);
            cmd.Parameters.AddWithValue("@year", year);
            cmd.Parameters.AddWithValue("@remainingSickLeaves", MySqlDbType.Int32);
            cmd.Parameters["@remainingSickLeaves"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@remainingCasualLeaves", MySqlDbType.Int32);
            cmd.Parameters["@remainingCasualleaves"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@remainingPaidLeaves", MySqlDbType.Int32);
            cmd.Parameters["@remainingPaidLeaves"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@remainingUnpaidLeaves", MySqlDbType.Int32);
            cmd.Parameters["@remainingUnpaidLeaves"].Direction = ParameterDirection.Output;

            await cmd.ExecuteNonQueryAsync();

            int sickLeaves = Convert.ToInt32(cmd.Parameters["@remainingSickLeaves"].Value);
            int casualLeaves = Convert.ToInt32(cmd.Parameters["@remainingCasualLeaves"].Value);
            int paidLeaves = Convert.ToInt32(cmd.Parameters["@remainingPaidLeaves"].Value);
            int unPaidLeaves = Convert.ToInt32(cmd.Parameters["@remainingUnpaidLeaves"].Value);

            leaves = new PendingLeaveDetails()
            {
                Sick = sickLeaves,
                Casual = casualLeaves,
                Paid = paidLeaves,
                Unpaid = unPaidLeaves
            };
        }
        catch (Exception)
        {
            throw;
        }
        finally
        {
            await con.CloseAsync();
        }

        return leaves;
    }

    public async Task<bool> AddNewLeaveApplication(EmployeeLeave employeeLeave)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Insert into employeeleaves(employeeid,applicationdate,fromdate,todate,status,year,leavetype) values(@employeeId,@applicationDate,@fromDate,@toDate,@status,@year,@leaveType)";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@employeeId", employeeLeave.EmployeeId);
            command.Parameters.AddWithValue("@applicationDate", employeeLeave.ApplicationDate);
            command.Parameters.AddWithValue("@fromDate", employeeLeave.FromDate);
            command.Parameters.AddWithValue("@toDate", employeeLeave.ToDate);
            command.Parameters.AddWithValue("@status", employeeLeave.Status);
            command.Parameters.AddWithValue("@year", employeeLeave.Year);
            command.Parameters.AddWithValue("@leaveType", employeeLeave.LeaveType);

            int rowsAffected = await command.ExecuteNonQueryAsync(); // Execute the query asynchronously

            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            connection.Close();
        }

        return status;
    }

    public async Task<bool> UpdateLeaveApplication(EmployeeLeave employeeLeave)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update employeeleaves set status=@status where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id", employeeLeave.Id);
            cmd.Parameters.AddWithValue("@status", employeeLeave.Status);
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
