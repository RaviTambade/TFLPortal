using System.Data;
using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Responses;


namespace TFLPortal.Services.LeaveMgmt.Analytics;

public class LeaveAnalyticsService : ILeaveAnalyticsService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public LeaveAnalyticsService(IConfiguration configuration)
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
                    CreatedOn=createdOn,
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

     public async Task<List<LeaveAllocation>> GetLeaveAllocations()
    {
        List<LeaveAllocation> leaves = new List<LeaveAllocation>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "select * from leaveallocations";
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

    public async Task<List<LeaveCount>> GetMonthlyLeaveCount(int employeeId,int month,int year)
    {
        List<LeaveCount> leaves = new List<LeaveCount>();
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

                LeaveCount leave = new LeaveCount()
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
                    CreatedOn=createdOn,
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
                    CreatedOn=createdOn,
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
                    CreatedOn=createdOn,
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
            string query = "select * from leaveallocations where id =@Id";
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
                
                roleLeave = new LeaveAllocation()
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
                    CreatedOn=createdOn,
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
                int id= int.Parse(reader["id"].ToString());
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime createdOn = DateTime.Parse(reader["createdon"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());       
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();

                LeaveApplication employeeLeave = new LeaveApplication()
                {
                    Id=id,
                    EmployeeId = employeeId,
                    CreatedOn=createdOn,
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
                    CreatedOn=createdOn,
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

    public async Task<List<MonthlyLeaves>> GetAnnualLeavesCount(int employeeId, int year)
    {
        List<MonthlyLeaves> leaves = new List<MonthlyLeaves>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="SELECT leavetype,COALESCE(SUM(DATEDIFF(todate, fromdate) + 1), 0) AS consumedleaves,MONTH(fromdate) AS month FROM leaveapplications WHERE employeeId = @employeeId AND status = @status AND YEAR(fromdate) = @year GROUP BY leavetype,MONTH(fromdate)";
    
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

                MonthlyLeaves leave = new MonthlyLeaves()
                {
                 Month = month,
                 Leaves  = new List<LeaveCount>()
                {
                    new LeaveCount{
                        LeaveType=leaveType,
                        Count=consumedLeaves
                    }
                },
            
                   
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

    public async Task<AnnualLeaves> GetAnnualAvailableLeaves(int employeeId, int roleId, int year)
    {
        AnnualLeaves leaves = null;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection=con;
            cmd.CommandText="spgetLeavesAvailable";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@pempId", employeeId);
            cmd.Parameters.AddWithValue("@proleId", roleId);
            cmd.Parameters.AddWithValue("@pyear", year);
            cmd.Parameters.AddWithValue("@psick", MySqlDbType.Int32);
            cmd.Parameters["@psick"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@pcasual", MySqlDbType.Int32);
            cmd.Parameters["@pcasual"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@ppaid", MySqlDbType.Int32);
            cmd.Parameters["@ppaid"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@punpaid", MySqlDbType.Int32);
            cmd.Parameters["@punpaid"].Direction = ParameterDirection.Output;
            await con.OpenAsync();
            await cmd.ExecuteNonQueryAsync();

            int sickCount = Convert.ToInt32(cmd.Parameters["@psick"].Value);
            int casualCount = Convert.ToInt32(cmd.Parameters["@pcasual"].Value);
            int paidCount = Convert.ToInt32(cmd.Parameters["@ppaid"].Value);
            int unPaidCount = Convert.ToInt32(cmd.Parameters["@punpaid"].Value);

            leaves = new AnnualLeaves()
            {
                EmployeeId=employeeId,
                Leaves=new List<LeaveCount>()
                {
                    new LeaveCount{
                        LeaveType="sick",
                        Count=sickCount
                    },
                    new LeaveCount{
                        LeaveType="casual",
                        Count=casualCount
                    },
                    new LeaveCount{
                        LeaveType="paid",
                        Count=paidCount
                    },
                    new LeaveCount{
                        LeaveType="unpaid",
                        Count=unPaidCount
                    }
                }
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

    public async Task<AnnualLeaves> GetAnnualConsumedLeaves(int employeeId, int year)
    {
        AnnualLeaves leaves = null;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _connectionString;
        try
        {
            await con.OpenAsync();
            MySqlCommand cmd = new MySqlCommand();
            cmd.Connection=con;
            cmd.CommandText="spgetConsumedLeaves";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@pempId", employeeId);
            cmd.Parameters.AddWithValue("@pyear", year);
            cmd.Parameters.AddWithValue("@psick", MySqlDbType.Int32);
            cmd.Parameters["@psick"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@pcasual", MySqlDbType.Int32);
            cmd.Parameters["@pcasual"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@ppaid", MySqlDbType.Int32);
            cmd.Parameters["@ppaid"].Direction = ParameterDirection.Output;

            cmd.Parameters.AddWithValue("@punpaid", MySqlDbType.Int32);
            cmd.Parameters["@punpaid"].Direction = ParameterDirection.Output;

            await cmd.ExecuteNonQueryAsync();

            int sickCount = Convert.ToInt32(cmd.Parameters["@psick"].Value);
            int casualCount= Convert.ToInt32(cmd.Parameters["@pcasual"].Value);
            int paidCount = Convert.ToInt32(cmd.Parameters["@ppaid"].Value);
            int unPaidCount = Convert.ToInt32(cmd.Parameters["@punpaid"].Value);

            leaves = new AnnualLeaves()
            {
                EmployeeId=employeeId,
                Leaves =new List<LeaveCount>()
                {
                    new LeaveCount{
                        LeaveType="sick",
                        Count=sickCount
                    },
                    new LeaveCount{
                        LeaveType="casual",
                        Count=casualCount
                    },
                    new LeaveCount{
                        LeaveType="paid",
                        Count=paidCount
                    },
                    new LeaveCount{
                        LeaveType="unpaid",
                        Count=unPaidCount
                    }
               }
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

    public async Task<List<LeaveCount>> GetAnnualLeaves(int roleId, int year)
    {
       List<LeaveCount> leaves = new List<LeaveCount>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query ="select sick,casual,paid,unpaid from leaveallocations where roleid=@roleId and financialyear=@financialYear";
    
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
                int unPaid = int.Parse(reader["unpaid"].ToString());
              leaves.Add(new LeaveCount(){
                LeaveType="sick",
                Count=sick
              });
              leaves.Add(new LeaveCount(){
                LeaveType="casual",
                Count=casual
              });
              leaves.Add(new LeaveCount(){
                LeaveType="paid",
                Count=paid
              });
              leaves.Add(new LeaveCount(){
                LeaveType="unpaid",
                Count=unPaid
              });
             };
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
}
