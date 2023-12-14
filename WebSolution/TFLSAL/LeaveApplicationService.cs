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
}