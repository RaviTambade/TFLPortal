namespace HRService.Models;
public class Employee
{
    public int EmpId{get;set;}
    public string? EmpFirstName{get;set;}
    public string? EmpLastName{get;set;}
    public DateTime BirthDate{get;set;}
    public DateTime HireDate{get;set;}
    public string? ContactNumber{get;set;}
    public string? Email{get;set;}
    public string? Password{get;set;}
    
    public override string ToString()
    {
        return EmpId+" "+EmpFirstName+" "+EmpLastName+" "+BirthDate+" "+HireDate+" "+ContactNumber+" "+Email+" "+Password;
    }
}