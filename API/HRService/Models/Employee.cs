namespace Transflower.PMS.HRService.Models;
public class Employee
{
    public int Id{get;set;}
    public int UserId{get;set;}
    public string? Department{get;set;}
    public string? Position{get;set;}
    public string? HireDate{get;set;}
    public int DirectorId{get;set;}
    public int ManagerId{get ; set;}
  
}