using Transflower.PMSApp.Tasks.Models;
namespace Transflower.PMSApp.Tasks.Repositories.Interfaces;
public interface ITaskRepository{
    Task<ProjectTaskCount> GetProjectTaskCount(int projectId);
    Task<List<MyTaskList>> GetMyTasksList(int teamMemberId,string timePeriod);
    Task<TaskDetail> GetTaskDetail(int taskId ); 
}