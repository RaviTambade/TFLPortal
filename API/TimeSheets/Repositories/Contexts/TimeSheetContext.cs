using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.TimeSheets.Entities;
namespace Transflower.PMSApp.TimeSheets.Repositories.Contexts;
public class TimeSheetContext:DbContext{
    public DbSet<Transflower.PMSApp.TimeSheets.Entities.Task> Tasks{get;set;}
    public DbSet<TimeSheet> TimeSheets{get;set;}
    public TimeSheetContext(DbContextOptions options):base(options){
        Tasks=Set<Transflower.PMSApp.TimeSheets.Entities.Task>();
        TimeSheets=Set<TimeSheet>();
    }
}