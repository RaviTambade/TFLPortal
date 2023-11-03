using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Transflower.PMS.HRService.Entities;
[Table("employees")]
public class Employee
{
    [Key]
    public int Id{get;set;}
    [Column("userid")]
    public int UserId{get;set;}
    public string? Department{get;set;}
    public string? Position{get;set;}
    public DateTime HireDate{get;set;}
    public int DirectorId{get;set;}
    public int ManagerId{get;set;}
}
