using MySql.Data.MySqlClient;
using System.Data;
using TFLPortal.Models;
using TFLPortal.Services.Interfaces;

namespace TFLPortal.Services;

public class LeaveService : ILeaveService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public LeaveService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<LeaveApplication>> GetLeaveApplications()
    {
        List<LeaveApplication> leaveApplications = new List<LeaveApplication>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from employeeleaves";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    Id = id,
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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

     public async Task<List<RoleLeavesCount>> GetRoleLeavesCount()
    {
        List<RoleLeavesCount> leaves = new List<RoleLeavesCount>();
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
                
                RoleLeavesCount leave = new RoleLeavesCount()
                {
                    Id = id,
                    RoleId= roleId,
                    Sick=sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid,
                    Year=year,
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

    public async Task<List<ConsumedLeaveDetails>> GetMonthlyLeaveCount(int employeeId,int month,int year)
    {
        List<ConsumedLeaveDetails> leaves = new List<ConsumedLeaveDetails>();
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

                ConsumedLeaveDetails leave = new ConsumedLeaveDetails()
                {
                    LeaveType = leaveType,
                    Count=leaveCount
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
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    Id = id,
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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

    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId,string status)
    {
        List<LeaveApplication> leaveApplications = new List<LeaveApplication>();
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

                LeaveApplication leave = new LeaveApplication()
                {
                    Id = id,
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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
            string query = "select employeeleaves.*,userid from employeeleaves inner join employees on employeeleaves.employeeid=employees.id where employeeleaves.status=@status and  employeeleaves.fromdate<=@formateddate and employeeleaves.todate>=@formateddate";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@status", "sanctioned");
            command.Parameters.AddWithValue("@date", formateddate);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int Id = int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication employeeLeave = new LeaveApplication()
                {
                    Id = Id,
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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
    public async Task<RoleLeavesCount> GetRoleLeavesDetails(int id)
    {
        RoleLeavesCount roleLeave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from rolebasedleaves where id =@Id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", id);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if(await reader.ReadAsync())
            {
                int roleId = int.Parse(reader["roleid"].ToString());
                int sick = int.Parse(reader["sick"].ToString());
                int casual = int.Parse(reader["casual"].ToString());
                int paid = int.Parse(reader["paid"].ToString());
                int unpaid = int.Parse(reader["unpaid"].ToString()); 
                int year = int.Parse(reader["financialyear"].ToString());
                
                roleLeave = new RoleLeavesCount()
                {
                    Id = id,
                    RoleId = roleId,
                    Sick=sick,
                    Casual = casual,
                    Paid = paid,
                    Unpaid = unpaid,
                    Year=year,
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
            string query = "select * from employeeleaves where id=@leaveId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@leaveId", id);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {  
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                int year = int.Parse(reader["year"].ToString());
                string leaveType = reader["leavetype"].ToString();

                leaveApplication = new LeaveApplication()
                {
                    Id = id,
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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
            string query = "select * from employeeleaves where status=@leaveStatus";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@leaveStatus", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id= int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication employeeLeave = new LeaveApplication()
                {
                    Id=id,
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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
                @"select projectmembership.employeeid,employeeleaves.status,employeeleaves.leavetype,
                employeeleaves.applicationdate,employeeleaves.fromdate,employeeleaves.todate from projects
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
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime applicationDate = DateTime.Parse(reader["applicationdate"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication leave = new LeaveApplication()
                {
                    ApplicantId = employeeId,
                    CreatedOn=applicationDate,
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

    public async Task<List<ConsumedLeaveDetails>> GetAnnualLeavesCount(int employeeId, int year)
    {
        List<ConsumedLeaveDetails> leaves = new List<ConsumedLeaveDetails>();
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

                ConsumedLeaveDetails leave = new ConsumedLeaveDetails()
                {
                    LeaveType=leaveType,
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

    public async Task<LeavesCount> GetAnnualAvailableLeaves(int employeeId, int roleId, int year)
    {
        LeavesCount leaves = null;
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

            leaves = new LeavesCount()
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

    public async Task<LeavesCount> GetAnnualConsumedLeaves(int employeeId, int roleId, int year)
    {
        LeavesCount leaves = null;
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

            leaves = new LeavesCount()
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

    //employeeId 
    public async Task<LeavesCount> GetAnnualLeaves(int roleId, int year)
    {
        LeavesCount leave = null;
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

                leave = new LeavesCount()
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
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Insert into employeeleaves(employeeid,applicationdate,fromdate,todate,status,leavetype) values(@employeeId,@applicationDate,@fromDate,@toDate,@status,@leaveType)";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@employeeId", leaveApplication.ApplicantId);
            command.Parameters.AddWithValue("@applicationDate", leaveApplication.CreatedOn);
            command.Parameters.AddWithValue("@fromDate", leaveApplication.FromDate);
            command.Parameters.AddWithValue("@toDate", leaveApplication.ToDate);
            command.Parameters.AddWithValue("@status", leaveApplication.Status);
            command.Parameters.AddWithValue("@leaveType", leaveApplication.LeaveType);

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


    public async Task<bool> AddNewRoleLeavesCount(RoleLeavesCount roleLeavesCount)
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
            command.Parameters.AddWithValue("@roleId", roleLeavesCount.RoleId);
            command.Parameters.AddWithValue("@sick", roleLeavesCount.Sick);
            command.Parameters.AddWithValue("@casual", roleLeavesCount.Casual);
            command.Parameters.AddWithValue("@paid", roleLeavesCount.Paid);
            command.Parameters.AddWithValue("@unpaid", roleLeavesCount.Unpaid);
            command.Parameters.AddWithValue("@financialyear", roleLeavesCount.Year);

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

    public async Task<bool> UpdateLeaveMaster(RoleLeavesCount roleLeavesCount)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update rolebasedleaves set roleid=@roleId,sick=@sick,casual=@casual,paid=@paid,unpaid=@unpaid,financialyear=@financialYear where id =@Id";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@Id", roleLeavesCount.Id);
            command.Parameters.AddWithValue("@roleId", roleLeavesCount.RoleId);
            command.Parameters.AddWithValue("@sick", roleLeavesCount.Sick);
            command.Parameters.AddWithValue("@casual", roleLeavesCount.Casual);
            command.Parameters.AddWithValue("@paid", roleLeavesCount.Paid);
            command.Parameters.AddWithValue("@unpaid", roleLeavesCount.Unpaid);
            command.Parameters.AddWithValue("@financialyear", roleLeavesCount.Year);
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

    public async Task<bool> Update(LeaveApplication leaveApplication)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update employeeleaves set employeeid=@employeeId,applicationdate=@applicationDate,fromdate=@fromDate,todate=@toDate,leavetype=@leaveType where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id", leaveApplication.Id);
            cmd.Parameters.AddWithValue("@employeeId", leaveApplication.ApplicantId);
            cmd.Parameters.AddWithValue("@applicationDate", leaveApplication.CreatedOn);
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

    

    public async Task<bool> Delete(int leaveId)
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
            command.Parameters.AddWithValue("@id",leaveId);

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
