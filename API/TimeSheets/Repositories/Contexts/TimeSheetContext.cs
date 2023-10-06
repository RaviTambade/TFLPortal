using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.TimeSheets.Entities;
namespace Transflower.PMSApp.TimeSheets.Repositories.Contexts;
public class TimeSheetContext:DbContext{
    public DbSet<Transflower.PMSApp.TimeSheets.Entities.Task> Tasks{get;set;}
    public DbSet<TimeSheet> TimeSheets{get;set;}
    public DbSet<ProjectTask> ProjectTasks{get;set;}
    public DbSet<Project> Projects{get;set;}
    public DbSet<Employee> Employees{get;set;}
    public DbSet<TaskAllocation> TaskAllocations{get;set;}

    public TimeSheetContext(DbContextOptions options):base(options){
        Tasks=Set<Transflower.PMSApp.TimeSheets.Entities.Task>();
        TimeSheets=Set<TimeSheet>();
        Projects=Set<Project>();
        Employees=Set<Employee>();
        TaskAllocations=Set<TaskAllocation>();
        ProjectTasks=Set<ProjectTask>();
    }
}