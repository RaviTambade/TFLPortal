using HRService.Models;
using HRService.Repositories.Interfaces;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

namespace HRService.Repositories
{
public class EmployeeRepository : IEmployeeRepository
{
  private IConfiguration _configuration;
  private string _conString;

  public EmployeeRepository(IConfiguration configuration){
       _configuration= configuration;
      _conString=this._configuration.GetConnectionString("DefaultConnection");

  }
  public async Task<IEnumerable<Employee>>  GetAll(){
     
        List<Employee> employees=new List<Employee>();
        MySqlConnection connection=new MySqlConnection(_conString);
        try{
            MySqlCommand command=new MySqlCommand();
            command.CommandText="SELECT * FROM employees";
            command.Connection= connection;
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = Int32.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate = Convert.ToDateTime(reader["hiredate"].ToString());
                string contact=reader["contactnumber"].ToString();
                string img = reader["image"].ToString();
                string accountNo = reader["accountnumber"].ToString();
                int userId = Int32.Parse(reader["userid"].ToString());
               
               Employee employee = new Employee
                {
                    Id=id,
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate.ToShortDateString(),
                    HireDate=hiredate.ToShortDateString(),
                    ContactNumber=contact,
                    Image=img,
                    AccountNumber=accountNo,
                    UserId= userId
                };
                employees.Add(employee);
            }
            reader.Close();
        }
        catch(Exception e){
            throw e;
        }
        finally{
            connection.Close();
        }  
        return employees;
}


   public async Task<Employee>  GetById(int Id)
   {
          Employee employee =new Employee();
          MySqlConnection connection=new MySqlConnection(_conString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT * FROM employees where id=@employeeId";
              command.Connection=connection;
              command.Parameters.AddWithValue("@employeeId",Id);
              await connection.OpenAsync();
              MySqlDataReader reader = command.ExecuteReader();
              if (await reader.ReadAsync())
              {
                int id = Int32.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate =  Convert.ToDateTime(reader["hiredate"].ToString());
                string contactNumber=reader["contactnumber"].ToString(); 
                string img = reader["image"].ToString();
                string accountNo = reader["accountnumber"].ToString();
                int userId = Int32.Parse(reader["userid"].ToString());
        
                employee = new Employee
                  {
                    Id=id, 
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate.ToShortDateString(),
                    HireDate=hiredate.ToShortDateString(),
                    ContactNumber=contactNumber,
                    Image=img,
                    AccountNumber=accountNo,
                    UserId=userId     
              };
              reader.Close();
              }
          }    
          catch(Exception e){
              throw e;
          }
          finally{
              connection.Close();
          }
          return employee;
   }
   public  async Task<bool> Insert(Employee emp)
   {    
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
              string query =$"INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,accountnumber,userid)VALUES"+
                                                  "(@EmpFirstName,@EmpLastName,@BirthDate,@HireDate,@ContactNumber,@image,@AccountNumber,@userId)";
             Console.WriteLine(query);
             await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@EmpFirstName",emp.FirstName);             
             command.Parameters.AddWithValue("@EmpLastName",emp.LastName);
             command.Parameters.AddWithValue("@BirthDate",emp.BirthDate);
             command.Parameters.AddWithValue("@HireDate",emp.HireDate);
             command.Parameters.AddWithValue("@ContactNumber",emp.ContactNumber);
             command.Parameters.AddWithValue("@image",emp.Image);
             command.Parameters.AddWithValue("@AccountNumber",emp.AccountNumber);
             command.Parameters.AddWithValue("@userId",emp.UserId);
         
             await command.ExecuteNonQueryAsync(); 
             status=true;              

          }catch(Exception e )
          {
            throw e;
          }
          finally {
               con.Close();
          } 
          return status;
   }

   public async Task<bool> Update(Employee emp){       
          bool status=false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
            string query = "UPDATE employees SET firstname=@EmpFirstName, lastname=@EmpLastName, birthdate=@BirthDate, hiredate=@HireDate, contactnumber=@ContactNumber,image=@image  accountnumber=@AccountNumber, userid=@userId  WHERE id=@EmployeeId";   
             Console.WriteLine(query);
            await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
              command.Parameters.AddWithValue("@EmployeeId",emp.Id); 
             command.Parameters.AddWithValue("@EmpFirstName",emp.FirstName);             
             command.Parameters.AddWithValue("@EmpLastName",emp.LastName);
             command.Parameters.AddWithValue("@BirthDate",emp.BirthDate);
             command.Parameters.AddWithValue("@HireDate",emp.HireDate);
             command.Parameters.AddWithValue("@ContactNumber",emp.ContactNumber);
             command.Parameters.AddWithValue("@image",emp.Image);
             command.Parameters.AddWithValue("@AccountNumber",emp.AccountNumber);
             command.Parameters.AddWithValue("@userId",emp.UserId);

             await command.ExecuteNonQueryAsync();               
             status=true;
          }catch(Exception e )
          {
            throw e;
          }
          finally {
            con.Close();
          }
          return status;
   }
   public  async Task<bool>  Delete(int Id){
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
            string query = "DELETE FROM employees WHERE id=@employeeId";
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@employeeId",Id);
             await con.OpenAsync();
             await command.ExecuteNonQueryAsync();              
             status = true;
          }catch(Exception e )
          {
            throw e;
          }
          finally {
            con.Close();
          }
          return status;
   }

        public async Task<IEnumerable<Employee>> GetByRole(string role)
        {
          List<Employee> employees =new List<Employee>();
          MySqlConnection connection=new MySqlConnection(_conString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT e.id, e.firstname, e.lastname, e.birthdate, e.hiredate, e.contactnumber, e.image, e.accountnumber FROM employees e JOIN userroles ur ON e.userid = ur.userid JOIN roles r ON ur.roleid = r.id WHERE r.rolename=@role";
              command.Connection=connection;
              command.Parameters.AddWithValue("@role",role);
              await connection.OpenAsync();
              MySqlDataReader reader = command.ExecuteReader();
              while (await reader.ReadAsync())
              {
                int id = Int32.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate =  Convert.ToDateTime(reader["hiredate"].ToString());
                string contactNumber=reader["contactnumber"].ToString(); 
                string img = reader["image"].ToString();
                string accountNo = reader["accountnumber"].ToString();
        
                Employee employee = new Employee
                  {
                    Id=id, 
                    FirstName=firstname,
                    LastName=lastname,
                    BirthDate=birthdate.ToShortDateString(),
                    HireDate=hiredate.ToShortDateString(),
                    ContactNumber=contactNumber,
                    Image=img,
                    AccountNumber=accountNo,    
                 };
                 employees.Add(employee);
              }
              reader.Close();
          }    
          catch(Exception e){
              throw e;
          }
          finally{
              connection.Close();
          }
          return employees;
            
        }
    }

   
}
