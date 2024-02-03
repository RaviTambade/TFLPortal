using MySql.Data.MySqlClient;
using TFLPortal.Models;

namespace TFLPortal.Services.ProjectMgmt.Operations;

public class ProjectOperationsService:IProjectOperationsService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public ProjectOperationsService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<bool> AddProject(Project project)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            MySqlCommand command = new MySqlCommand();
            command.CommandText =
                "Insert into projects (title,startdate,enddate,description,managerid,status) values(@title,@startdate,@enddate,@description,@managerid,@status)";
            command.Connection = connection;
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@title", project.Title);
            command.Parameters.AddWithValue("@startdate", project.StartDate);
            command.Parameters.AddWithValue("@enddate", project.EndDate);
            command.Parameters.AddWithValue("@description", project.Description);
            command.Parameters.AddWithValue("@status", project.Status);

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

    public async Task<bool> Insert(Sprint theSprint)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();

        connection.ConnectionString = _connectionString;

        try
        {
            string query =
                "Insert into sprints(title,goal,startdate,enddate,projectid) values (@title,@goal,@startdate,@enddate,@projectId)";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@title", theSprint.Title);
            command.Parameters.AddWithValue("@goal", theSprint.Goal);
            command.Parameters.AddWithValue("@startdate", theSprint.StartDate);
            command.Parameters.AddWithValue("@enddate", theSprint.EndDate);
            command.Parameters.AddWithValue("@projectId", theSprint.ProjectId);
            int rowsAffected = await command.ExecuteNonQueryAsync();

            if (rowsAffected > 0)
            {
                status = true;
            }
        }
        catch (Exception ee)
        {
            Console.WriteLine(ee.Message);
            throw ee;
        }
        finally
        {
            await connection.CloseAsync();
        }

        return status;
    }

    public async Task<bool> Delete(int sprintId)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        try
        {
            string query = "delete from sprints where id = @sprintId ";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@sprintId", sprintId);

            int rowsAffected = await command.ExecuteNonQueryAsync();

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
            await connection.CloseAsync();
        }

        return status;
    }

    public async Task<bool> Update(int sprintId, Sprint theSprint)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;

        try
        {
            string query =
                "Update sprints set title=@title,startdate=@startdate,enddate=@enddate,projectid=@projectid where id = @sprintId ";
            MySqlCommand command = new MySqlCommand(query, connection);
            await connection.OpenAsync();
            command.Parameters.AddWithValue("@sprintId", sprintId);
            command.Parameters.AddWithValue("@title", theSprint.Title);
            command.Parameters.AddWithValue("@goal", theSprint.Goal);
            command.Parameters.AddWithValue("@startdate", theSprint.StartDate);
            command.Parameters.AddWithValue("@enddate", theSprint.EndDate);
            command.Parameters.AddWithValue("@projectId", theSprint.ProjectId);

            int rowsAffected = await command.ExecuteNonQueryAsync();

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
            await connection.CloseAsync();
        }

        return status;
    }

    public async Task<bool> Assign(Member member)
    {
        {
            bool status = false;
            MySqlConnection connection = new MySqlConnection();
            connection.ConnectionString = _connectionString;
            try
            {
                string query =
                    "INSERT INTO projectallocations(projectid,employeeid,title,assignedon,status) VALUES(@projectId,@employeeId,@title,@assignedOn,@status)";
                MySqlCommand cmd = new MySqlCommand(query, connection);
                cmd.Parameters.AddWithValue("@projectId", member.ProjectId);
                cmd.Parameters.AddWithValue("@employeeId", member.EmployeeId);
                cmd.Parameters.AddWithValue("@title", member.Title);
                cmd.Parameters.AddWithValue("@assignedOn", member.AssignedOn);
                cmd.Parameters.AddWithValue("@status", member.Status);
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

    public async Task<bool> Release(Member member)
    {
        bool status = false;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "Update projectallocations set releasedon=@releasedOn,status=@status where id=@Id";
            MySqlCommand cmd = new MySqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@releasedOn", member.ReleasedOn);
            cmd.Parameters.AddWithValue("@status", member.Status);
            cmd.Parameters.AddWithValue("@Id", member.Id);
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
