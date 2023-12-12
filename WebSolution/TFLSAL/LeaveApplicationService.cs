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
}