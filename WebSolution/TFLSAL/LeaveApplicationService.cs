using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class LeaveApplicationService : ILeaveApplicationService 
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public LeaveApplicationService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

     public async Task<bool> AddLeave(Leave leave){
        bool status = false;
        MySqlConnection connection =new MySqlConnection();
        connection.ConnectionString=_connectionString;
        try{
            
            MySqlCommand command= new MySqlCommand();
            command.CommandText="Insert into leaves(employeeid,fromdate,todate,status,leavetype) values(@employeeId,@fromDate,@toDate,@status,@leaveType)";
            command.Connection=connection; 
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@employeeId",leave.EmployeeId);
            command.Parameters.AddWithValue("@fromDate",leave.FromDate);
            command.Parameters.AddWithValue("@toDate",leave.ToDate);
            command.Parameters.AddWithValue("@status",leave.Status);
            command.Parameters.AddWithValue("@leaveType",leave.LeaveType);
          
          int rowsAffected = await command.ExecuteNonQueryAsync(); // Execute the query asynchronously

        if (rowsAffected > 0)
        {
            status = true;
        }
        }
        catch(Exception ee){
            throw ee;

        }
        finally{
            connection.Close();
        }

        return status;
    }

    

    public async Task<PendingLeave> GetPendingLeaves(int employeeId)
    {
        PendingLeave pendingLeave = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from leavespending where id =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());

                int sickLeaves = int.Parse(reader["sickleaves"].ToString());
                int casualLeaves = int.Parse(reader["casualleaves"].ToString());
                int paidLeaves = int.Parse(reader["paidleaves"].ToString());
                int unpaidLeaves = int.Parse(reader["unpaidleaves"].ToString());
                
                pendingLeave = new PendingLeave()
                {
                    Id = id,
                    EmployeeId= employeeId,
                    SickLeave = sickLeaves,
                    CasualLeave = casualLeaves,
                    PaidLeave = paidLeaves,
                    UnpaidLeave = unpaidLeaves
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
        return pendingLeave;
    }

    public async Task<List<Leave>> GetEmployeeLeaves(int employeeId)
    {
        List<Leave> leaves = new List<Leave>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "select * from leaves where employeeid =@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string status = reader["status"].ToString();
                string leaveType = reader["leavetype"].ToString();
                
                Leave leave = new Leave()
                {
                    Id = id,
                    EmployeeId= employeeId,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    LeaveType = leaveType
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

    public async Task<List<Leave>> GetEmployeeAppliedLeaves(int projectId,string status)
    {
        List<Leave> leaves = new List<Leave>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =" select projectallocations.employeeid,leaves.status,leaves.leavetype,leaves.fromdate,leaves.todate from projects inner join projectallocations on projects.id=projectallocations.projectid  inner join leaves on leaves.employeeid=projectallocations.employeeid  where projects.id=@projectId and leaves.status=@status";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@status", status);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int employeeId = int.Parse(reader["employeeid"].ToString());
                DateTime fromDate = DateTime.Parse(reader["fromdate"].ToString());
                DateTime toDate = DateTime.Parse(reader["todate"].ToString());
                string leaveType = reader["leavetype"].ToString();
                
                Leave leave = new Leave()
                {         
                    EmployeeId= employeeId,
                    FromDate = fromDate,
                    ToDate = toDate,
                    Status = status,
                    LeaveType = leaveType
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

    public async Task<bool> UpdateLeaveStatus(Leave leave)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update leaves set status=@status where id =@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@Id",leave.Id );
            cmd.Parameters.AddWithValue("@status",leave.Status );
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