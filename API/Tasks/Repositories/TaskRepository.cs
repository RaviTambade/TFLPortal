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
                where assignedTask.TeamMemberId == teamMemberId &&
                      task.Date >= startDate && task.Date <= endDate
                select new MyTaskList()
                {
                    TaskId = task.Id,
                    ProjectId = task.ProjectId,
                    Title = task.Title,
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
                           where task.Id == taskId
                           select new MoreTaskDetail()
                           {
                               TaskId = task.Id,
                               Date = task.Date,
                               Description = task.Description,
                               FromTime = task.FromTime,
                               ToTime = task.ToTime
                           }).FirstOrDefaultAsync();
            return moreTaskDetail;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<<List>ProjectTask>> GetTasksOfProject(int projectId)
    {
        try
        {
            var projectTasks=await (
                             from project in _taskContext.Projects
                             join projectmember in _taskContext.ProjectMembers
            )
        }
    }



}

