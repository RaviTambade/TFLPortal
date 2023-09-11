using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.PMS.AssignedTask.Repositories.Interfaces;
using Transflower.PMS.AssignedTask.Models;

namespace Transflower.PMS.AssignedTask.Repositories
{
public class AssignedTaskRepository : IAssignedTaskRepository
{
  private IConfiguration _configuration;
  private string _connectionString;

  public AssignedTaskRepository(IConfiguration configuration){
       _configuration= configuration;
      _connectionString=this._configuration.GetConnectionString("DefaultConnection");

  }
  public async Task<IEnumerable<Assignedtask>>  GetAll(){
     
        List<Assignedtask> assignedtasks=new List<Assignedtask>();
        MySqlConnection connection=new MySqlConnection(_connectionString);
        try{
            MySqlCommand command=new MySqlCommand();
            command.CommandText="SELECT * FROM assignedtasks";
            command.Connection= connection;
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int taskid = int.Parse(reader["taskid"].ToString());
                int teammemberid = int.Parse(reader["teammemberid"].ToString());
                
               
               Assignedtask assignedtask = new Assignedtask
                {
                    Id=id,
                    TaskId=taskid,
                    TeamMemberId=teammemberid  
                };
                assignedtasks.Add(assignedtask);
            }
            reader.Close();
        }
        catch(Exception e){
            throw e;
        }
        finally{
            connection.Close();
        }  
        return assignedtasks;
}


   public async Task<Assignedtask>  GetById(int Id)
   {
          Assignedtask assignedtask =new Assignedtask();
          MySqlConnection connection=new MySqlConnection(_connectionString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT * FROM assignedtasks where id=@Id";
              command.Connection=connection;
              command.Parameters.AddWithValue("@Id",Id);
              await connection.OpenAsync();
              MySqlDataReader reader = command.ExecuteReader();
              if (await reader.ReadAsync())
              {
               int id = int.Parse(reader["id"].ToString());
                int taskid = int.Parse(reader["taskid"].ToString());
                int teammemberid = int.Parse(reader["teammemberid"].ToString());
        
                assignedtask = new Assignedtask
                  {
                    Id=id,
                    TaskId=taskid,
                    TeamMemberId=teammemberid   
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
          return assignedtask;
   }


   public  async Task<bool> Insert(Assignedtask director)
   {    
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
              string query ="INSERT INTO assignedtasks(taskid,teammemberid)VALUES"+
                                                  "(@taskid,@teammemberid)";
             Console.WriteLine(query);
             await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;            
             command.Parameters.AddWithValue("@taskid",director.TaskId);
             command.Parameters.AddWithValue("@teammemberid",director.TeamMemberId);
        
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

   public async Task<bool> Update(Assignedtask assignedtask){       
          bool status=false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
            string query = "UPDATE assignedtasks SET taskid=@taskid, teammemberid=@teammemberid  WHERE id=@Id";   
             Console.WriteLine(query);
            await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@Id",assignedtask.Id); 
             command.Parameters.AddWithValue("@taskid",assignedtask.TaskId);             
             command.Parameters.AddWithValue("@teammemberid",assignedtask.TeamMemberId);
            
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
          con.ConnectionString=_connectionString;
          try{
            string query = "DELETE FROM assignedtasks WHERE id=@Id";
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@Id",Id);
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


   } 
}
