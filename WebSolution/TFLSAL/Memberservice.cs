using MySql.Data.MySqlClient;
using Transflower.TFLPortal.TFLOBL.Entities;
using Microsoft.Extensions.Configuration;
using Transflower.TFLPortal.TFLSAL.Services.Interfaces;

namespace Transflower.TFLPortal.TFLSAL.Services;

public class MemberService : IMemberService
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;

    public MemberService(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new ArgumentNullException("connectionString");
    }

    public async Task<List<Member>> GetProjectMembers(int projectId)
    {
        List<Member> members = new List<Member>();
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "SELECT members.*, employees.userid as userid FROM members INNER JOIN employees on members.employeeid =employees.id  WHERE projectid=@projectId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                Member member = new Member
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Membership = reader.GetString("membership"),
                    MembershipDate = reader.GetDateTime("membershipdate"),
                    Employee = new Employee { UserId = reader.GetInt32("userid") }
                };
                members.Add(member);
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
        return members;
    }

    public async Task<Member> GetMember(int projectId, int employeeId)
    {
        Member member = null;
        MySqlConnection connection = new MySqlConnection();
        connection.ConnectionString = _connectionString;
        try
        {
            string query =
                "SELECT members.*, employees.userid as userid FROM members INNER JOIN employees on members.employeeid =employees.id  WHERE projectid=@ProjectId and employeeid=@employeeId";
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@projectId", projectId);
            command.Parameters.AddWithValue("@employeeId", employeeId);
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            if (await reader.ReadAsync())
            {
                member = new Member
                {
                    Id = reader.GetInt32("id"),
                    ProjectId = reader.GetInt32("projectid"),
                    EmployeeId = reader.GetInt32("employeeid"),
                    Membership = reader.GetString("membership"),
                    MembershipDate = reader.GetDateTime("membershipdate"),
                    Employee = new Employee { UserId = reader.GetInt32("userid") }
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
        return member;
    }

   

    public async Task<Member> AssignMemberToProject(int employeeId,int projectId, ){

    }

    public async Task<Member> RleaseMemberFromProject(int employeeId,int projectId, ){

    }
    


}
