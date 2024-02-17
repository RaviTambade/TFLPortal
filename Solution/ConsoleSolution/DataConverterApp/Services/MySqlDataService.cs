namespace TFL.Data.Services;
using System.Reflection;
using System.Text;
using System.Globalization;

using CsvHelper;

using  TFL.Data.Entities;
public class  MySqlDataService:IDataService{

    public bool Serialize(string fileName, List<Employee> employees){
        bool status=false;
        
        status=true;
        return status;
    }
     public List<Employee> DeSerialize(string fileName){
        List<Employee> employees=new List<Employee>();
        
        return employees;
    }
}