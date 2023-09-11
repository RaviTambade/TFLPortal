using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using Transflower.PMS.Director.Models;
using Transflower.PMS.Director.Repositories.Interfaces;

namespace Transflower.PMS.Director.Repositories
{
public class DirectorRepository : IDirectorRepository
{
  private IConfiguration _configuration;
  private string _connectionString;

  public DirectorRepository(IConfiguration configuration){
       _configuration= configuration;
      _connectionString=this._configuration.GetConnectionString("DefaultConnection");

  }
  public async Task<IEnumerable<Directors>>  GetAll(){
     
        List<Directors> director=new List<Directors>();
        MySqlConnection connection=new MySqlConnection(_connectionString);
        try{
            MySqlCommand command=new MySqlCommand();
            command.CommandText="SELECT * FROM directors";
            command.Connection= connection;
            await connection.OpenAsync();
            MySqlDataReader reader = command.ExecuteReader();
            while (await reader.ReadAsync())
            {
                int id = int.Parse(reader["id"].ToString());
                int corporateid = int.Parse(reader["corporateid"].ToString());
                int userid = int.Parse(reader["userid"].ToString());
                
               
               Directors directors = new Directors
                {
                    Id=id,
                    CorporateId=corporateid,
                    UserId= userid,   
                };
                director.Add(directors);
            }
            reader.Close();
        }
        catch(Exception e){
            throw e;
        }
        finally{
            connection.Close();
        }  
        return director;
}


   public async Task<Directors>  GetById(int Id)
   {
          Directors director =new Directors();
          MySqlConnection connection=new MySqlConnection(_connectionString);
          try{
              MySqlCommand command=new MySqlCommand();
              command.CommandText="SELECT * FROM directors where id=@Id";
              command.Connection=connection;
              command.Parameters.AddWithValue("@Id",Id);
              await connection.OpenAsync();
              MySqlDataReader reader = command.ExecuteReader();
              if (await reader.ReadAsync())
              {
                int id = int.Parse(reader["id"].ToString());
                int corporateid = int.Parse(reader["corporateid"].ToString());
                int userid = int.Parse(reader["userid"].ToString());
        
                director = new Directors
                  {
                     Id=id,
                    CorporateId=corporateid,
                    UserId= userid,   
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
          return director;
   }


   public  async Task<bool> Insert(Directors director)
   {    
          bool status = false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
              string query ="INSERT INTO directors(corporateid,userid)VALUES"+
                                                  "(@corporateid,@userid)";
             Console.WriteLine(query);
             await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;            
             command.Parameters.AddWithValue("@corporateid",director.CorporateId);
             command.Parameters.AddWithValue("@userid",director.UserId);
        
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

   public async Task<bool> Update(Directors director){       
          bool status=false;
          MySqlConnection con = new MySqlConnection();
          con.ConnectionString=_connectionString;
          try{
            string query = "UPDATE directors SET corporateid=@corporateid, userid=@userid  WHERE id=@Id";   
             Console.WriteLine(query);
            await con.OpenAsync();
             MySqlCommand command=new MySqlCommand(query,con) ;
             command.Parameters.AddWithValue("@Id",director.Id); 
             command.Parameters.AddWithValue("@corporateid",director.CorporateId);             
             command.Parameters.AddWithValue("@userid",director.UserId);
            
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
            string query = "DELETE FROM directors WHERE id=@Id";
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
