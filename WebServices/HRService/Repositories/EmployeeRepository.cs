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
  public List<Employee>  GetAll(){
     
        List<Employee> employees=new List<Employee>();
        MySqlConnection connection=new MySqlConnection(_conString);
        try{
            MySqlCommand command=new MySqlCommand();
            command.CommandText="SELECT * FROM employees";
            command.Connection= connection;
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                int id = Int32.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate = Convert.ToDateTime(reader["hiredate"].ToString());
                string contact=reader["contactnumber"].ToString();
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


   public Employee  GetById(int Id)
   {
          Employee employee =new Employee();
          MySqlConnection connection=new MySqlConnection(_conString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT * FROM employees where id=@employeeId";
              command.Connection=connection;
              command.Parameters.AddWithValue("@employeeId",Id);
              connection.Open();
              MySqlDataReader reader = command.ExecuteReader();
              if (reader.Read())
              {
                int id = Int32.Parse(reader["id"].ToString());
                string firstname = reader["firstname"].ToString();
                string lastname = reader["lastname"].ToString();
                DateTime birthdate = Convert.ToDateTime(reader["birthdate"].ToString());
                DateTime hiredate =  Convert.ToDateTime(reader["hiredate"].ToString());
                string contactNumber=reader["contactnumber"].ToString(); 
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
   public  bool Insert(Employee emp)
   {    
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
              string query =$"INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,accountnumber,userid)VALUES"+
                                                  "(@EmpFirstName,@EmpLastName,@BirthDate,@HireDate,@ContactNumber,@AccountNumber,@userId)";
             Console.WriteLine(query);
             con.Open();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@EmpFirstName",emp.FirstName);             
             command.Parameters.AddWithValue("@EmpLastName",emp.LastName);
             command.Parameters.AddWithValue("@BirthDate",emp.BirthDate);
             command.Parameters.AddWithValue("@HireDate",emp.HireDate);
             command.Parameters.AddWithValue("@ContactNumber",emp.ContactNumber);
             command.Parameters.AddWithValue("@AccountNumber",emp.AccountNumber);
             command.Parameters.AddWithValue("@userId",emp.UserId);
         
             command.ExecuteNonQuery(); 
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

   public bool Update(Employee emp){       
          bool status=false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
            string query = "UPDATE employees SET firstname=@EmpFirstName, lastname=@EmpLastName, birthdate=@BirthDate, hiredate=@HireDate, contactnumber=@ContactNumber,  accountnumber=@AccountNumber, userid=@userId  WHERE id=@EmployeeId";   
             Console.WriteLine(query);
             con.Open();
             MySqlCommand command=new MySqlCommand(query,con) ;
              command.Parameters.AddWithValue("@EmployeeId",emp.Id); 
             command.Parameters.AddWithValue("@EmpFirstName",emp.FirstName);             
             command.Parameters.AddWithValue("@EmpLastName",emp.LastName);
             command.Parameters.AddWithValue("@BirthDate",emp.BirthDate);
             command.Parameters.AddWithValue("@HireDate",emp.HireDate);
             command.Parameters.AddWithValue("@ContactNumber",emp.ContactNumber);
             command.Parameters.AddWithValue("@AccountNumber",emp.AccountNumber);
             command.Parameters.AddWithValue("@userId",emp.UserId);

             command.ExecuteNonQuery();               
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
   public  bool  Delete(int Id){
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_conString;
          try{
            string query = "DELETE FROM employees WHERE id=@employeeId";
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@employeeId",Id);
             con.Open();
             command.ExecuteNonQuery();              
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
   }
}
