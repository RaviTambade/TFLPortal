using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.Tasks.Entities;
namespace Transflower.PMSApp.Tasks.Repositories.Contexts;
public class TaskContext:DbContext{
    public DbSet<Transflower.PMSApp.Tasks.Entities.Task> Tasks{get;set;}
    public DbSet<Project> Projects{get;set;}
    public DbSet<Employee> Employees{get;set;}
    public DbSet<AssignedTask> AssignedTasks{get;set;}
    public TaskContext(DbContextOptions options):base(options){
        Tasks=Set<Transflower.PMSApp.Tasks.Entities.Task>();
        Projects=Set<Project>();
        AssignedTasks=Set<AssignedTask>();
        Employees=Set<Employee>();
    }
}