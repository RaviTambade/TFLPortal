using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using AuthenticationService.Helpers;
using AuthenticationService.Models;
using AuthenticationService.Repositories.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MySql.Data.MySqlClient;

namespace AuthenticationService.Repositories;

public class UserRepository : IUserRepository
{
    private readonly IConfiguration _configuration;
    private readonly string _conString;
    private readonly AppSettings _appsettings;

    public UserRepository(IConfiguration configuration, IOptions<AppSettings> appSettings)
    {
        _configuration = configuration;
        _conString = this._configuration.GetConnectionString("DefaultConnection");
        _appsettings = appSettings.Value;
    }


    public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest request)
    {
        User user = await GetUser(request);
        // return null if user not found
        if (user == null) { return null; }
        // authentication successful so generate jwt token
        var token = await generateJwtToken(user);
        return new AuthenticateResponse(user, token);
    }

    private async Task<string> generateJwtToken(User user)
    {
        // generate token that is valid for 7 days
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = System.Text.Encoding.ASCII.GetBytes(_appsettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(await AllClaims(user)),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
       SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    private async Task<List<Claim>> AllClaims(User user)
    {
        List<Claim> claims = new List<Claim>();
        //you can add custom Claims here
        claims.Add(new Claim("user_id", user.Id.ToString()));
        List<string> roles = await GetRolesOfUser(user.Id);
        foreach(var role in roles ){ Console.WriteLine(role);}
        foreach (string role in roles)
        {
            claims.Add(new Claim("Role", role));
        }
        return claims;
    }

    private async Task<User> GetUser(AuthenticateRequest request)
    {
        User user = null;
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM users where email=@email AND password =@password";
            Console.WriteLine(query);
            await con.OpenAsync();
            MySqlCommand command = new MySqlCommand(query, con);
            command.Parameters.AddWithValue("@email", request.Email);
            command.Parameters.AddWithValue("@password", request.Password);
            MySqlDataReader reader = command.ExecuteReader();

            if (await reader.ReadAsync())
            {
                int userId = int.Parse(reader["user_id"].ToString());
                string userEmail = reader["email"].ToString();
                string userPassword = reader["password"].ToString();
                user = new User
                {
                    Id = userId,
                    Email = userEmail,
                    Password = userPassword
                };
            }
            await reader.CloseAsync();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            await con.CloseAsync();
        }
        return user;
    }

    private async Task<List<string>> GetRolesOfUser(int userId)
    {
        List<string> roles = new List<string>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "select roles.role_name from user_roles inner join roles on user_roles.role_id =roles.role_id where user_roles.user_id=@userId;";
            Console.WriteLine(query);
            await con.OpenAsync();
            MySqlCommand cmd = new MySqlCommand(query, con);
            cmd.Parameters.AddWithValue("@userId", userId);
            MySqlDataReader reader = cmd.ExecuteReader();
            while (await reader.ReadAsync())
            {
                string roleName = reader["role_name"].ToString();
                 Console.WriteLine(roleName);
                roles.Add(roleName);
            }
            await reader.CloseAsync();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            await con.CloseAsync();
        }
        return roles;
    }

    public async Task<List<User>> GetAll()
    {
        List<User> users = new List<User>();
        MySqlConnection con = new MySqlConnection();
        con.ConnectionString = _conString;
        try
        {
            string query = "SELECT * FROM users";
            await con.OpenAsync();
            MySqlCommand cmd = new MySqlCommand(query, con);
            MySqlDataReader reader = cmd.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int userId = int.Parse(reader["user_id"].ToString());
                string email = reader["email"].ToString();
                string password = reader["password"].ToString();
                User user = new User
                {
                    Id = userId,
                    Email = email,
                    Password = password
                };
                users.Add(user);
            }
            await reader.CloseAsync();
        }
        catch (Exception ee)
        {
            throw ee;
        }
        finally
        {
            await con.CloseAsync();
        }
        return users;
    }
}