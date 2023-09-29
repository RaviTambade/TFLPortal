using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Repositories.Contexts;
namespace Transflower.PMSApp.Tasks.Repositories;
public class TaskRepository : ITaskRepository
{
    private readonly TaskContext _taskContext;
    public TaskRepository(TaskContext taskContext)
    {
        _taskContext = taskContext;
    }
    public async Task<ProjectTaskCount> GetProjectTaskCount(int projectId)
    {
        try
        {
            var projectTaskCount = await (
                                 from task in _taskContext.Tasks
                                     //  where task.ProjectId == projectId
                                 select new ProjectTaskCount()
                                 {
                                     CompletedTaskCount = _taskContext.Tasks.Count(t => t.ProjectId == projectId && t.Status == "Completed"),
                                     TotalTaskCount = _taskContext.Tasks.Count(t => t.ProjectId == projectId)
                                 }).FirstOrDefaultAsync();
            return projectTaskCount;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<MyTaskList>> GetMyTasksList(int teamMemberId, string timePeriod)
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

            var myTaskList = await (
                from project in _taskContext.Projects
                join task in _taskContext.Tasks
                on project.Id equals task.ProjectId
                join assignedTask in _taskContext.AssignedTasks
                on task.Id equals assignedTask.TaskId
                where assignedTask.TeamMemberId == teamMemberId  && assignedTask.AssignedOn.Date >= startDate.Date
        && assignedTask.AssignedOn.Date <= endDate.Date orderby assignedTask.AssignedOn descending
                select new MyTaskList()
                {
                    TaskId = task.Id,
                    ProjectId = task.ProjectId,
                    Title = task.Title,
                    AssignedOn=assignedTask.AssignedOn,
                    ProjectName = project.Title,
                    Status = task.Status
                }).ToListAsync();

            return myTaskList;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<TaskDetail> GetTaskDetail(int taskId)
    {
        try
        {
            var taskDetail = await (
                           from project in _taskContext.Projects
                           join task in _taskContext.Tasks
                           on project.Id equals task.ProjectId
                           where task.Id == taskId
                           select new TaskDetail()
                           {
                               TaskId = task.Id,
                               Task = task.Title,
                               Status = task.Status,
                               ProjectId = task.ProjectId,
                               ProjectName = project.Title
                           }).FirstOrDefaultAsync();
            return taskDetail;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<MoreTaskDetail> GetMoreTaskDetail(int taskId)
    {
        try
        {
            var moreTaskDetail = await (
                           from task in _taskContext.Tasks
                           join assignedTask in _taskContext.AssignedTasks
                           on task.Id equals assignedTask.TaskId
                           where task.Id == taskId
                           select new MoreTaskDetail()
                           {
                               TaskId = task.Id,
                               Date = task.Date,
                               Description = task.Description,
                               FromTime = task.FromTime,
                               ToTime = task.ToTime,
                               AssignedTaskDate=assignedTask.AssignedOn
                           }).FirstOrDefaultAsync();
            return moreTaskDetail;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<AllTaskList>> GetAllTaskList(int employeeId, string timePeriod)
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
            var allTaskList = await (from employee in _taskContext.Employees
                                     join projectMember in _taskContext.ProjectMembers
                                     on employee.Id equals projectMember.TeamMemberId
                                     join task in _taskContext.Tasks
                                     on projectMember.ProjectId equals task.ProjectId
                                     join project in _taskContext.Projects
                                     on task.ProjectId equals project.Id
                                     join assignedTask in _taskContext.AssignedTasks
                                     on task.Id equals assignedTask.TaskId
                                     join employee2 in _taskContext.Employees
                                     on assignedTask.TeamMemberId equals employee2.Id
                                     where employee.Id == employeeId &&
                                      assignedTask.AssignedOn.Date >= startDate.Date && assignedTask.AssignedOn.Date <= endDate.Date orderby assignedTask.AssignedOn descending
                                     select new AllTaskList()
                                     {
                                         ProjectName = project.Title,
                                         TaskTitle = task.Title,
                                         TeamMemberId = assignedTask.TeamMemberId,
                                         TaskId = task.Id,
                                         TeamMemberUserId = employee2.UserId,
                                         AssignedTaskDate=assignedTask.AssignedOn
                                     }).ToListAsync();
            return allTaskList;
        }
        catch (Exception)
        {
            throw;
        }
    }


    public async Task<List<TaskIdWithTitle>> GetTaskIdWithTitle(int employeeId, int projectId, string status)
    {
        try
        {
            var taskIdWithTitle = await (
                                from task in _taskContext.Tasks
                                join assignedTask in _taskContext.AssignedTasks
                                on task.Id equals assignedTask.TaskId
                                where task.ProjectId == projectId &&
                                assignedTask.TeamMemberId == employeeId &&
                                task.Status == status
                                select new TaskIdWithTitle()
                                {
                                    TaskId = task.Id,
                                    Title = task.Title
                                }).ToListAsync();
            return taskIdWithTitle;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<bool> AddTask(Transflower.PMSApp.Tasks.Entities.Task task)
    {
        try
        {
            bool status = false;
            await _taskContext.AddAsync(task);
            status = await SaveChangesAsync(_taskContext);
            status = true;
            return status;
        }
        catch (Exception)
        {
            throw;
        }
    }

    private async Task<bool> SaveChangesAsync(TaskContext taskContext)
    {
        int rowsAffected = await taskContext.SaveChangesAsync();
        if (rowsAffected > 0)
        {
            return true;
        }
        return false;
    }


    public async Task<Transflower.PMSApp.Tasks.Entities.Task> GetDetailsById(int taskId)
    {
        try
        {
            var taskDetail=await _taskContext.Tasks.FindAsync(taskId);
            return taskDetail;
        }
        catch(Exception)
        {
            throw;
        }
    }

    public async Task<bool> UpdateTaskStatus(int taskId,UpdateStatus updateStatus)
    {
         bool status = false;
        try
        {
            var task=await _taskContext.Tasks.FindAsync(taskId);
            if(task == null)
            {
                return false;
            }
            task.Status=updateStatus.Status;
            status=await SaveChangesAsync(_taskContext);
        }
        catch(Exception)
        {
            throw;
        }
        return status;
    }






}

