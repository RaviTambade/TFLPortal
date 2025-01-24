using MySql.Data.MySqlClient;
using System.Data;
using TFLPortal.Models;
using TFLPortal.Responses;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class LeaveService : ILeaveService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public LeaveService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<LeaveApplication>> GetLeaveApplications()
    {
        List<LeaveApplication> leaveApplications = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leaveapplications";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    Id = id,
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
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

    public async Task<List<LeaveAllocation>> GetLeaveAllocation()
    {
        List<LeaveAllocation> leaves = new List<LeaveAllocation>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leavesallocations";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int roleId = int.Parse(reader["roleid"].ToString());
                int sick = int.Parse(reader["sick"].ToString());
                int casual = int.Parse(reader["casual"].ToString());
                int paid = int.Parse(reader["paid"].ToString());
                int unpaid = int.Parse(reader["unpaid"].ToString());
                int year = int.Parse(reader["financialyear"].ToString());

                LeaveAllocation leave = new LeaveAllocation()
                {
                    Id = id,
                    RoleId = roleId,
                    Sick = sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid,
                    Year = year,
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

    public async Task<List<ConsumedLeaveResponse>> GetMonthlyLeaveCount(int employeeId, int month, int year)
    {
        List<ConsumedLeaveResponse> leaves = new List<ConsumedLeaveResponse>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = @"SELECT leavetype,coalesce(sum(datediff(todate,fromdate)+1),0) as leavecount From leaveapplications
                           WHERE employeeid = @employeeId AND MONTH(fromdate)=@month AND YEAR(fromdate)=@year AND status=@status group by leavetype";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@month", month);
            command.Parameters.AddWithValue("@year", year);
            command.Parameters.AddWithValue("@status", "sanctioned");
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string leaveType = reader["leavetype"].ToString();
                int leaveCount = int.Parse(reader["leavecount"].ToString());

                ConsumedLeaveResponse leave = new ConsumedLeaveResponse()
                {
                    LeaveType = leaveType,
                    Count = leaveCount
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

    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId)
    {
        List<LeaveApplication> leaveApplications = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leaveapplications where employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    Id = id,
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
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

    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId, string status)
    {
        List<LeaveApplication> leaveApplications = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leaveapplications where employeeid =@employeeId and status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    Id = id,
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
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

    public async Task<List<LeaveApplication>> GetLeaveApplications(DateOnly date)
    {
        List<LeaveApplication> employeeLeaves = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string formateddate = date.ToString("yyyy-MM-dd");
            string query = "select * from leaveapplications where status=@status and fromdate<=@formateddate and todate>=@formateddate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@status", "sanctioned");
            command.Parameters.AddWithValue("@date", formateddate);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int Id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication employeeLeave = new LeaveApplication()
                {
                    Id = Id,
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    LeaveType = leaveType
                };
                employeeLeaves.Add(employeeLeave);

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
        return employeeLeaves;
    }
    public async Task<LeaveAllocation> GetRoleLeavesDetails(int id)
    {
        LeaveAllocation roleLeave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leavesallocated where id =@Id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int roleId = int.Parse(reader["roleid"].ToString());
                int sick = int.Parse(reader["sick"].ToString());
                int casual = int.Parse(reader["casual"].ToString());
                int paid = int.Parse(reader["paid"].ToString());
                int unpaid = int.Parse(reader["unpaid"].ToString());
                int year = int.Parse(reader["financialyear"].ToString());

                roleLeave = new LeaveAllocation()
                {
                    Id = id,
                    RoleId = roleId,
                    Sick = sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid,
                    Year = year,
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
        return roleLeave;
    }

    public async Task<LeaveApplication> GetLeaveApplication(int id)
    {
        LeaveApplication leaveApplication = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leaveapplications where id=@leaveId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@leaveId", id);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();

                leaveApplication = new LeaveApplication()
                {
                    Id = id,
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    LeaveType = leaveType
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
        return leaveApplication;
    }

    public async Task<List<LeaveApplication>> GetLeaveApplications(string status)
    {
        List<LeaveApplication> employeeLeaves = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leaveapplications where status=@leaveStatus";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@leaveStatus", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication employeeLeave = new LeaveApplication()
                {
                    Id = id,
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    LeaveType = leaveType
                };
                employeeLeaves.Add(employeeLeave);
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
        return employeeLeaves;
    }

    public async Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId, string status)
    {
        List<LeaveApplication> leaveApplications = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"select projectmembers.employeeid,leaveapplications.status,leaveapplications.leavetype,
                leaveapplications.createdon,leaveapplications.fromdate,leaveapplications.todate from projects
                inner join projectmembers on projects.id=projectmembers.projectid
                inner join leaveapplications on leaveapplications.employeeid=projectmembers.employeeid 
                inner join employees on leaveapplications.employeeid=employees.id where projects.id=@projectId 
                and leaveapplications.status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    EmployeeId = employeeId,
                    CreatedOn = createdOn,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
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

    public async Task<List<ConsumedLeaveResponse>> GetAnnualLeavesCount(int employeeId, int year)
    {
        List<ConsumedLeaveResponse> leaves = new List<ConsumedLeaveResponse>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "SELECT leavetype,COALESCE(SUM(DATEDIFF(todate, fromdate) + 1), 0) AS consumedleaves,MONTH(fromdate) AS month FROM leaveapplications WHERE employeeId = @employeeId AND status = @status AND YEAR(fromdate) = @year GROUP BY leavetype,MONTH(fromdate)";

            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@status", "sanctioned");
            command.Parameters.AddWithValue("@year", year);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string leaveType = reader["leavetype"].ToString();
                int consumedLeaves = int.Parse(reader["consumedleaves"].ToString());
                int month = int.Parse(reader["month"].ToString());

                ConsumedLeaveResponse leave = new ConsumedLeaveResponse()
                {
                    LeaveType = leaveType,
                    Count = consumedLeaves,
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

    public async Task<LeavesCountResponse> GetAnnualAvailableLeaves(int employeeId, int roleId, int year)
    {
        LeavesCountResponse leaves = null;
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

            leaves = new LeavesCountResponse()
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

    public async Task<LeavesCountResponse> GetAnnualConsumedLeaves(int employeeId, int roleId, int year)
    {
        LeavesCountResponse leaves = null;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            await con.OpenAsync();
            MySqlCommand cmd = new MySqlCommand("getConsumedLeavesOfEmployee", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@employee_Id", employeeId);
            cmd.Parameters.AddWithValue("@role_id", roleId);
            cmd.Parameters.AddWithValue("@year", year);
            cmd.Parameters.AddWithValue("@sickLeaves", MySqlDbType.Int32);
            cmd.Parameters["@sickLeaves"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@casualLeaves", MySqlDbType.Int32);
            cmd.Parameters["@casualLeaves"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@paidLeaves", MySqlDbType.Int32);
            cmd.Parameters["@paidLeaves"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@unpaidLeaves", MySqlDbType.Int32);
            cmd.Parameters["@unpaidLeaves"].Direction = ParameterDirection.Output;

            await cmd.ExecuteNonQueryAsync();

            int sickLeaves = Convert.ToInt32(cmd.Parameters["@sickLeaves"].Value);
            int casualLeaves = Convert.ToInt32(cmd.Parameters["@casualLeaves"].Value);
            int paidLeaves = Convert.ToInt32(cmd.Parameters["@paidLeaves"].Value);
            int unPaidLeaves = Convert.ToInt32(cmd.Parameters["@unpaidLeaves"].Value);

            leaves = new LeavesCountResponse()
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

    public async Task<LeavesCountResponse> GetAnnualLeaves(int roleId, int year)
    {
        LeavesCountResponse leave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select sick,casual,paid,unpaid from leavesallocated where roleid=@roleId and financialyear=@financialYear";

            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@roleId", roleId);
            command.Parameters.AddWithValue("@financialYear", year);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int sick = int.Parse(reader["sick"].ToString());
                int casual = int.Parse(reader["casual"].ToString());
                int paid = int.Parse(reader["paid"].ToString());
                int unpaid = int.Parse(reader["unpaid"].ToString());

                leave = new LeavesCountResponse()
                {
                    Sick = sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid
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
        return leave;
    }

    public async Task<bool> AddNewLeaveApplication(LeaveApplication leaveApplication)
    {
        bool status = false;

        using (MySqlConnection connection = new MySqlConnection(_connectionString))
        {
            using (MySqlCommand command = new MySqlCommand())
            {
                command.CommandText =
                    "INSERT INTO leaveapplications (employeeid, createdon, fromdate, todate, status, leavetype) " +
                    "VALUES (@employeeId, @createdOn, @fromDate, @toDate, @status, @leaveType)";
                command.Connection = connection;
                command.Parameters.AddWithValue("@employeeId", leaveApplication.EmployeeId);
                command.Parameters.AddWithValue("@createdOn", leaveApplication.CreatedOn);
                command.Parameters.AddWithValue("@fromDate", leaveApplication.FromDate);
                command.Parameters.AddWithValue("@toDate", leaveApplication.ToDate);
                command.Parameters.AddWithValue("@status", leaveApplication.Status);
                command.Parameters.AddWithValue("@leaveType", leaveApplication.LeaveType);

                try
                {
                    await connection.OpenAsync();
                    int rowsAffected = await command.ExecuteNonQueryAsync();
                    status = rowsAffected > 0;
                }
                catch (MySqlException ex)
                {
                    // Handle the exception (log it, rethrow it, etc.)
                    // For now, we just rethrow it
                    throw new Exception("An error occurred while adding a new leave application.", ex);
                }
            }
        }

        return status;
    }



    public async Task<bool> AddNewLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Insert into leavesallocated(roleid,sick,casual,paid,unpaid,financialyear) values(@roleId,@sick,@casual,@paid,@unpaid,@financialyear)";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@roleId", leaveAllocation.RoleId);
            command.Parameters.AddWithValue("@sick", leaveAllocation.Sick);
            command.Parameters.AddWithValue("@casual", leaveAllocation.Casual);
            command.Parameters.AddWithValue("@paid", leaveAllocation.Paid);
            command.Parameters.AddWithValue("@unpaid", leaveAllocation.Unpaid);
            command.Parameters.AddWithValue("@financialyear", leaveAllocation.Year);

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

    public async Task<bool> UpdateLeaveMaster(LeaveAllocation leaveAllocation)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update leavesallocated set roleid=@roleId,sick=@sick,casual=@casual,paid=@paid,unpaid=@unpaid,financialyear=@financialYear where id =@Id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", leaveAllocation.Id);
            command.Parameters.AddWithValue("@roleId", leaveAllocation.RoleId);
            command.Parameters.AddWithValue("@sick", leaveAllocation.Sick);
            command.Parameters.AddWithValue("@casual", leaveAllocation.Casual);
            command.Parameters.AddWithValue("@paid", leaveAllocation.Paid);
            command.Parameters.AddWithValue("@unpaid", leaveAllocation.Unpaid);
            command.Parameters.AddWithValue("@financialyear", leaveAllocation.Year);
            await connection.OpenAsync();
            int rowsAffected = command.ExecuteNonQuery();
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
    public async Task<bool> UpdateLeaveApplication(int leaveId, string leaveStatus)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update leaveapplications set status=@status where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id", leaveId);
            cmd.Parameters.AddWithValue("@status", leaveStatus);
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

    public async Task<bool> Update(LeaveApplication leaveApplication)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update leaveapplications set employeeid=@employeeId,createdon=@createdOn,fromdate=@fromDate,todate=@toDate,leavetype=@leaveType where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id", leaveApplication.Id);
            cmd.Parameters.AddWithValue("@employeeId", leaveApplication.EmployeeId);
            cmd.Parameters.AddWithValue("@createdOn", leaveApplication.CreatedOn);
            cmd.Parameters.AddWithValue("@fromDate", leaveApplication.FromDate);
            cmd.Parameters.AddWithValue("@toDate", leaveApplication.ToDate);
            cmd.Parameters.AddWithValue("@leaveType", leaveApplication.LeaveType);
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

    public async Task<bool> DeleteLeaveMaster(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Delete from leavesallocated where id=@id";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id", id);

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



    public async Task<bool> Delete(int leaveId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Delete from leaveapplications where id=@id";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id", leaveId);

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


}
