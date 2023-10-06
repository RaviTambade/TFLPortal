using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.TimeSheets.Entities;
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
                                join projecttask in _timeSheetContext.ProjectTasks
                                on task.Id equals projecttask.TaskId
                                join taskallocation in _timeSheetContext.TaskAllocations
                                on projecttask.Id equals taskallocation.ProjectTaskId
                                join timesheet in _timeSheetContext.TimeSheets
                                on taskallocation.Id equals timesheet.TaskAllocationId
                                where taskallocation.TeamMemberId == employeeId &&
                             timesheet.Date.Date >= startDate.Date && timesheet.Date.Date <= endDate.Date orderby timesheet.Date descending
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
                from projecttask in  _timeSheetContext.ProjectTasks
                join task in _timeSheetContext.Tasks
                on projecttask.TaskId equals task.Id
                join taskallocation in _timeSheetContext.TaskAllocations
                on projecttask.Id equals taskallocation.ProjectTaskId
                join timesheet in _timeSheetContext.TimeSheets
                 on taskallocation.Id equals timesheet.TaskAllocationId
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

    public async Task<bool> AddTimeSheet(TimeSheet timeSheet)
    {
        try
        {
            bool status=false;
            await _timeSheetContext.AddAsync(timeSheet);
            status=await SaveChanges(_timeSheetContext);
            return status;
        }
         catch (Exception)
        {
            throw;
        }
    }

      private async Task<bool> SaveChanges(TimeSheetContext context)
    {
        int rowsAffected = await context.SaveChangesAsync();
        if (rowsAffected > 0)
        {
            return true;
        }
        return false;
    }

    public async Task<List<TimeSheetList>> GetTimeSheetList(int managerId,string timePeriod)
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
            var timeSheetList= await (
                               from project in _timeSheetContext.Projects
                               join projecttask in _timeSheetContext.ProjectTasks
                               on project.Id equals projecttask.ProjectId
                               join task in _timeSheetContext.Tasks
                               on projecttask.TaskId equals task.Id
                               join taskallocation in _timeSheetContext.TaskAllocations
                               on projecttask.Id equals taskallocation.ProjectTaskId
                               join timesheet in _timeSheetContext.TimeSheets
                               on taskallocation.Id equals timesheet.TaskAllocationId
                               join employee in _timeSheetContext.Employees
                               on taskallocation.TeamMemberId equals employee.Id
                               where project.TeamManagerId == managerId &&
                               timesheet.Date.Date >= startDate.Date && timesheet.Date.Date <= endDate.Date orderby timesheet.Date descending
                               select new TimeSheetList()
                               {
                                TaskId=taskallocation.ProjectTaskId,
                                ProjectId=project.Id,
                                TaskTitle=task.Title,
                                EmployeeUserId=employee.UserId,
                                TimeSheetDate=timesheet.Date,
                                TimeSheetId=timesheet.Id
                               }).ToListAsync();
                               return timeSheetList;
        }
        catch(Exception)
        {
            throw;
        }
    }


}
