using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Responses;

namespace TFLPortal.Repositories.LeaveMgmt.Operations;

public class LeaveOperationsRepository : ILeaveOperationsRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public LeaveOperationsRepository(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
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
                "Insert into leaveapplications(employeeid,createdon,fromdate,todate,status,leavetype) values(@employeeId,@createdOn,@fromDate,@toDate,@status,@leaveType)";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@employeeId", leaveApplication.EmployeeId);
            command.Parameters.AddWithValue("@createdOn", leaveApplication.CreatedOn);
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


    public async Task<bool> AddNewLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Insert into leaveallocations(roleid,sick,casual,paid,unpaid,financialyear) values(@roleId,@sick,@casual,@paid,@unpaid,@financialyear)";
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

    public async Task<bool> UpdateLeaveAllocation(LeaveAllocation leaveAllocation)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query = "Update leaveallocations set roleid=@roleId,sick=@sick,casual=@casual,paid=@paid,unpaid=@unpaid,financialyear=@financialYear where id =@Id";
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
                "Delete from leaveallocations where id=@id";
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
                "Delete from leaveapplications where id=@id";
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
