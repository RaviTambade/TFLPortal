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

    public async Task<List<MyTaskList>> GetMyTasksList(int teamMemberId)
    {
        try
        {
            var myTaskList=await(
                           from project in _taskContext.Projects
                           join task in _taskContext.Tasks
                           on project.Id equals task.ProjectId       
                           join assignedTask in _taskContext.AssignedTasks
                           on task.Id equals assignedTask.TaskId
                           where assignedTask.TeamMemberId == teamMemberId
                           select new MyTaskList(){
                            TaskId=task.Id,
                            ProjectId=task.ProjectId,
                            Title=task.Title,
                            ProjectName=project.Title,
                            Status=task.Status
                            }).ToListAsync();
                return myTaskList;
        }
        catch(Exception){
            throw;
        }
    }


}

