using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.Tasks.Entities;
namespace Transflower.PMSApp.Tasks.Repositories.Contexts;
public class TaskContext:DbContext{
    public DbSet<Task> Tasks{get;set;}
    public TaskContext(DbContextOptions options):base(options){
        Tasks=Set<Tasks>();
    }
}