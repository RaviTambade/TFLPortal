using Microsoft.EntityFrameworkCore;
using Transflower.PMS.HRService.Entities;
namespace Transflower.PMS.HRService.Repositories.Contexts;
public class EmployeeContext:DbContext{
    public DbSet<Employee> Employees{get;set;}
    public EmployeeContext(DbContextOptions options):base(options){
       Employees=Set<Employee>();
    }
}