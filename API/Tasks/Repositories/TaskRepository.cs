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
                                     CompletedTaskCount = _taskContext.ProjectTasks.Count(t => t.ProjectId == projectId && t.Status == "Completed"),
                                     TotalTaskCount = _taskContext.ProjectTasks.Count(t => t.ProjectId == projectId)
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
                join projecttask in _taskContext.ProjectTasks
                on project.Id equals projecttask.ProjectId
                join task in _taskContext.Tasks
                on projecttask.TaskId equals task.Id
                join taskallocation in _taskContext.TaskAllocations
                on projecttask.Id equals taskallocation.ProjectTaskId
                where taskallocation.TeamMemberId == teamMemberId  && taskallocation.AssignedOn.Date >= startDate.Date
        && taskallocation.AssignedOn.Date <= endDate.Date orderby taskallocation.AssignedOn descending
                select new MyTaskList()
                {
                    TaskId = projecttask.Id,
                    ProjectId = projecttask.ProjectId,
                    Title = task.Title,
                    AssignedOn=taskallocation.AssignedOn,
                    ProjectName = project.Title,
                    Status = projecttask.Status
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
                           join projecttask in _taskContext.ProjectTasks
                           on project.Id equals projecttask.ProjectId
                           join task in _taskContext.Tasks
                           on projecttask.TaskId equals task.Id
                           where projecttask.Id == taskId
                           select new TaskDetail()
                           {
                               TaskId = projecttask.Id,
                               Task = task.Title,
                               Status = projecttask.Status,
                               ProjectId = projecttask.ProjectId,
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
                           join projecttask in _taskContext.ProjectTasks
                           on task.Id equals projecttask.TaskId
                           join taskallocation in _taskContext.TaskAllocations
                           on projecttask.Id equals taskallocation.ProjectTaskId
                           where projecttask.Id == taskId
                           select new MoreTaskDetail()
                           {
                               TaskId = projecttask.Id,
                               Date = projecttask.Date,
                               Description = task.Description,
                               FromTime = projecttask.FromTime,
                               ToTime = projecttask.ToTime,
                               AssignedTaskDate=taskallocation.AssignedOn
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
                                     join projecttask in _taskContext.ProjectTasks
                                     on projectMember.ProjectId equals projecttask.ProjectId
                                     join task in _taskContext.Tasks
                                     on projecttask.TaskId equals task.Id
                                     join project in _taskContext.Projects
                                     on projecttask.ProjectId equals project.Id
                                     join taskallocation in _taskContext.TaskAllocations
                                     on projecttask.Id equals taskallocation.ProjectTaskId
                                     join employee2 in _taskContext.Employees
                                     on taskallocation.TeamMemberId equals employee2.Id
                                     where employee.Id == employeeId &&
                                      taskallocation.AssignedOn.Date >= startDate.Date && taskallocation.AssignedOn.Date <= endDate.Date orderby taskallocation.AssignedOn descending
                                     select new AllTaskList()
                                     {
                                         ProjectName = project.Title,
                                         TaskTitle = task.Title,
                                         TeamMemberId = taskallocation.TeamMemberId,
                                         TaskId = projecttask.Id,
                                         TeamMemberUserId = employee2.UserId,
                                         AssignedTaskDate=taskallocation.AssignedOn
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
                                from projecttask in _taskContext.ProjectTasks
                                join taskallocation in _taskContext.TaskAllocations
                                on projecttask.Id equals taskallocation.ProjectTaskId
                                join task in _taskContext.Tasks
                                on projecttask.TaskId equals task.Id
                                where projecttask.ProjectId == projectId &&
                                taskallocation.TeamMemberId == employeeId &&
                                projecttask.Status == status
                                select new TaskIdWithTitle()
                                {
                                    TaskId = projecttask.Id,
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

    public async Task<bool> UpdateTaskStatus(int taskId,string updateStatus)
    {
         bool status = false;
        try
        {
            var projecttask=await _taskContext.ProjectTasks.FindAsync(taskId);
            if(projecttask == null)
            {
                return false;
            }
            projecttask.Status=updateStatus;
            status=await SaveChangesAsync(_taskContext);
        }
        catch(Exception)
        {
            throw;
        }
        return status;
    }






}

