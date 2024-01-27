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

    public async Task<List<EmployeeLeaveDetails>> GetAllEmployeeLeaves()
    {
        List<EmployeeLeaveDetails> leaveApplications = new List<EmployeeLeaveDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select employeeleaves.*,employees.userid from employeeleaves inner join employees on employees.id=employeeleaves.employeeid";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int userId = int.Parse(reader["userid"].ToString());
                int id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                EmployeeLeaveDetails leave = new EmployeeLeaveDetails()
                {
                    Id = id,
                    UserId=userId,
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

     public async Task<List<RoleBasedLeave>> GetAllRoleBasedLeaves()
    {
        List<RoleBasedLeave> leaves = new List<RoleBasedLeave>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from rolebasedleaves";
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
                RoleBasedLeave leave = new RoleBasedLeave()
                {
                    Id = id,
                    RoleId = roleId,
                    Sick=sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid,
                    FinancialYear=year,
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

    public async Task<List<LeaveDetails>> GetEmployeeLeaves(int employeeId,int month,int year)
    {
        List<LeaveDetails> leaves = new List<LeaveDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = @"SELECT leavetype,coalesce(sum(datediff(todate,fromdate)+1),0) as leavecount From employeeleaves
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

                LeaveDetails leave = new LeaveDetails()
                {
                    LeaveType = leaveType,
                    ConsumedLeaves=leaveCount
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

    public async Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId)
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

    public async Task<List<EmployeeLeave>> GetLeaveDetailsOfEmployee(int employeeId,string status)
    {
        List<EmployeeLeave> leaveApplications = new List<EmployeeLeave>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeeleaves where employeeid =@employeeId and status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
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

    public async Task<List<EmployeeLeaveDetails>> GetLeaveDetailsByDate(string date)
    {
        List<EmployeeLeaveDetails> employeeLeaves = new List<EmployeeLeaveDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select employeeleaves.*,userid from employeeleaves inner join employees on employeeleaves.employeeid=employees.id where employeeleaves.status=@status and  employeeleaves.fromdate<=@date and employeeleaves.todate>=@date";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@status", "sanctioned");
            command.Parameters.AddWithValue("@date", date);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int userId = int.Parse(reader["userid"].ToString());
                int Id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                EmployeeLeaveDetails employeeLeave = new EmployeeLeaveDetails()
                {
                    Id = Id,
                    UserId=userId,
                    EmployeeId = employeeId,
                    ApplicationDate=applicationDate,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    Year=year,
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
    public async Task<RoleBasedLeave> GetRoleBasedLeaveDetails(int Id)
    {
        RoleBasedLeave roleBasedLeave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from rolebasedleaves where id =@Id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", Id);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if(await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int roleId = int.Parse(reader["roleid"].ToString());
                int sick = int.Parse(reader["sick"].ToString());
                int casual = int.Parse(reader["casual"].ToString());
                int paid = int.Parse(reader["paid"].ToString());
                int unpaid = int.Parse(reader["unpaid"].ToString()); 
                int year = int.Parse(reader["financialyear"].ToString());
                
                roleBasedLeave = new RoleBasedLeave()
                {
                    Id = id,
                    RoleId = roleId,
                    Sick=sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid,
                    FinancialYear=year,
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
        return roleBasedLeave;
    }

    public async Task<EmployeeLeaveDetails> GetLeaveDetails(int leaveId)
    {
        EmployeeLeaveDetails employeeLeave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select employeeleaves.*,userid from employeeleaves inner join employees on employeeleaves.employeeid=employees.id where employeeleaves.id=@leaveId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@leaveId", leaveId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int userId = int.Parse(reader["userid"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                employeeLeave = new EmployeeLeaveDetails()
                {
                    Id = leaveId,
                    UserId=userId,
                    EmployeeId = employeeId,
                    ApplicationDate=applicationDate,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    Year=year,
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
        return employeeLeave;
    }

     public async Task<List<EmployeeLeaveDetails>> GetLeaveDetails(string leaveStatus)
    {
        List<EmployeeLeaveDetails> employeeLeaves = new List<EmployeeLeaveDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select employeeleaves.*,userid from employeeleaves inner join employees on employeeleaves.employeeid=employees.id where employeeleaves.status=@leaveStatus";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@leaveStatus", leaveStatus);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int userId= int.Parse(reader["userId"].ToString());
                int id= int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                EmployeeLeaveDetails employeeLeave = new EmployeeLeaveDetails()
                {
                    Id=id,
                    UserId=userId,
                    EmployeeId = employeeId,
                    ApplicationDate=applicationDate,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = leaveStatus,
                    Year=year,
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

    public async Task<List<EmployeeLeaveDetails>> GetTeamLeaveDetails(int projectId, string status)
    {
        List<EmployeeLeaveDetails> leaveApplications = new List<EmployeeLeaveDetails>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                @"select projectmembership.employeeid,employeeleaves.status,employees.userid,employeeleaves.leavetype,
                employeeleaves.applicationdate,employeeleaves.year,employeeleaves.fromdate,employeeleaves.todate from projects
                inner join projectmembership on projects.id=projectmembership.projectid
                inner join employeeleaves on employeeleaves.employeeid=projectmembership.employeeid 
                inner join employees on employeeleaves.employeeid=employees.id where projects.id=@projectId 
                and employeeleaves.status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int userId = int.Parse(reader["userid"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                EmployeeLeaveDetails leave = new EmployeeLeaveDetails()
                {
                    UserId=userId,
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
            string query ="SELECT leavetype,COALESCE(SUM(DATEDIFF(todate, fromdate) + 1), 0) AS consumedleaves,MONTH(fromdate) AS month FROM employeeleaves WHERE employeeId = @employeeId AND status = @status AND YEAR(fromdate) = @year GROUP BY leavetype,MONTH(fromdate)";
    

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

                LeaveDetails leave = new LeaveDetails()
                {
                    LeaveType=leaveType,
                    ConsumedLeaves = consumedLeaves,
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

    public async Task<PendingLeaveDetails> GetAnnualAvailableLeaves(int employeeId, int roleId, int year)
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

    public async Task<PendingLeaveDetails> GetAnnualConsumedLeaves(int employeeId, int roleId, int year)
    {
        PendingLeaveDetails leaves = null;
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

    public async Task<PendingLeaveDetails> GetAnnualLeaves(int roleId, int year)
    {
        PendingLeaveDetails leave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select sick,casual,paid,unpaid from rolebasedleaves where rolebasedleaves.roleid=@roleId and rolebasedleaves.financialyear=@financialYear";
    
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

                leave = new PendingLeaveDetails()
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


    public async Task<bool> AddNewRoleBasedLeave(RoleBasedLeave roleBasedLeave)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Insert into rolebasedleaves(roleid,sick,casual,paid,unpaid,financialyear) values(@roleId,@sick,@casual,@paid,@unpaid,@financialyear)";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@roleId", roleBasedLeave.RoleId);
            command.Parameters.AddWithValue("@sick", roleBasedLeave.Sick);
            command.Parameters.AddWithValue("@casual", roleBasedLeave.Casual);
            command.Parameters.AddWithValue("@paid", roleBasedLeave.Paid);
            command.Parameters.AddWithValue("@unpaid", roleBasedLeave.Unpaid);
            command.Parameters.AddWithValue("@financialyear", roleBasedLeave.FinancialYear);

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

    public async Task<bool> UpdateRoleBasedLeave(RoleBasedLeave roleBasedLeave)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update rolebasedleaves set roleid=@roleId,sick=@sick,casual=@casual,paid=@paid,unpaid=@unpaid,financialyear=@financialYear where id =@Id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", roleBasedLeave.Id);
            command.Parameters.AddWithValue("@roleId", roleBasedLeave.RoleId);
            command.Parameters.AddWithValue("@sick", roleBasedLeave.Sick);
            command.Parameters.AddWithValue("@casual", roleBasedLeave.Casual);
            command.Parameters.AddWithValue("@paid", roleBasedLeave.Paid);
            command.Parameters.AddWithValue("@unpaid", roleBasedLeave.Unpaid);
            command.Parameters.AddWithValue("@financialyear", roleBasedLeave.FinancialYear);
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
    public async Task<bool> UpdateLeaveApplication(int leaveId ,string leaveStatus)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update employeeleaves set status=@status where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id", leaveId);
            cmd.Parameters.AddWithValue("@status",leaveStatus);
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

    public async Task<bool> UpdateEmployeeLeave(EmployeeLeave employeeLeave)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            
            string query = "Update employeeleaves set employeeid=@employeeId,applicationdate=@applicationDate,fromdate=@fromDate,todate=@toDate,year=@year,leavetype=@leaveType where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id", employeeLeave.Id);
            cmd.Parameters.AddWithValue("@employeeId", employeeLeave.EmployeeId);
            cmd.Parameters.AddWithValue("@applicationDate", employeeLeave.ApplicationDate);
            cmd.Parameters.AddWithValue("@fromDate", employeeLeave.FromDate);
            cmd.Parameters.AddWithValue("@toDate", employeeLeave.ToDate);
            cmd.Parameters.AddWithValue("@year", employeeLeave.Year);
            cmd.Parameters.AddWithValue("@leaveType", employeeLeave.LeaveType);
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

    public async Task<bool> DeleteRoleBasedLeave(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Delete from rolebasedleaves where id=@id";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id",id);

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

    

    public async Task<bool> DeleteEmployeeLeave(int id)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Delete from employeeleaves where id=@id";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@id",id);

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
