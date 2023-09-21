using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.TimeSheets.Models;
using Transflower.PMSApp.TimeSheets.Repositories.Interfaces;
using Transflower.PMSApp.TimeSheets.Repositories.Contexts;
namespace Transflower.PMSApp.TimeSheets.Repositories;
public class TimeSheetRepository : ITimeSheetRepository
{
    private readonly TimeSheetContext _timeSheetContext;
    public TimeSheetRepository(TimeSheetContext timeSheetContext)
    {
        _timeSheetContext = timeSheetContext;
    }

    public async Task<List<MyTimeSheetList>> GetMyTimeSheets(int employeeId, string timePeriod)
    {
        try
        {
            DateTime currentDate = DateTime.Now.Date;
            DateTime startDate = currentDate;
            DateTime endDate = currentDate;

            switch (timePeriod)
            {
                case "today":
                    startDate = currentDate;
                    endDate = currentDate;
                    break;
                case "yesterday":
                    startDate = currentDate.AddDays(-1);
                    endDate = currentDate.AddDays(-1);
                    break;
                case "lastweek":
                    startDate = currentDate.AddDays(-7);
                    endDate = currentDate;
                    break;
                case "lastmonth":
                    startDate = currentDate.AddMonths(-1);
                    endDate = currentDate;
                    break;
                case "lastyear":
                    startDate = currentDate.AddYears(-1);
                    endDate = currentDate;
                    break;
            }
            var myTimeSheetList = await (
                                from task in _timeSheetContext.Tasks
                                join timesheet in _timeSheetContext.TimeSheets
                                on task.Id equals timesheet.TaskId
                                where timesheet.EmployeeId == employeeId &&
                                timesheet.Date >= startDate && timesheet.Date <= endDate
                                select new MyTimeSheetList()
                                {
                                    TimeSheetId = timesheet.Id,
                                    Date = timesheet.Date,
                                    Status = timesheet.Status,
                                    TaskTitle = task.Title
                                }).ToListAsync();
            return myTimeSheetList;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<TimeSheetDetail> GetTimeSheetDetails(int timeSheetId)
    {
        try
        {
            var timeSheetDetails = await (
                 from task in _timeSheetContext.Tasks
                 join timesheet in _timeSheetContext.TimeSheets
                 on task.Id equals timesheet.TaskId
                 where timesheet.Id == timeSheetId
                 select new TimeSheetDetail()
                 {
                     TimeSheetId = timesheet.Id,
                     Date = timesheet.Date,
                     FromTime =(TimeSpan?) timesheet.FromTime,
                     ToTime = (TimeSpan?)timesheet.ToTime,
                     Description = timesheet.Description,
                     Status = timesheet.Status,
                     TaskTitle = task.Title
                 }).FirstOrDefaultAsync();
            return timeSheetDetails;
        }
        catch(Exception)
        {
            throw;
        }
    }
}
