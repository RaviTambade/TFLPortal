using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.Projects.Entities;
namespace Transflower.PMSApp.Projects.Repositories.Context;
public class ProjectContext:DbContext{
    public DbSet<Project> Projects{get;set;}
    public DbSet<Employee> Employees{get;set;}
    public DbSet<ProjectMember> ProjectMembers{get;set;}
    public DbSet<AssignedTask> AssignedTasks{get;set;}
    public DbSet<Transflower.PMSApp.Projects.Entities.Task> Tasks{get;set;}

    public ProjectContext(DbContextOptions options):base(options){
        Projects=Set<Project>();
        ProjectMembers=Set<ProjectMember>();
        Employees=Set<Employee>();
        Tasks=Set<Transflower.PMSApp.Projects.Entities.Task>();
        AssignedTasks=Set<AssignedTask>();
    }
}