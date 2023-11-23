using Transflower.PMSApp.Tasks.Services.Interfaces;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
namespace Transflower.PMSApp.Tasks.Services;
public class TaskService:ITaskService
{
    private readonly ITaskRepository _taskRepository;
    public TaskService(ITaskRepository taskRepository){
        _taskRepository=taskRepository;
    }
    public async Task<ProjectTaskCount> GetProjectTaskCount(int projectId)=>await _taskRepository.GetProjectTaskCount(projectId);
    public async Task<List<MyTaskList>> GetMyTasksList(int teamMemberId,string timePeriod)=>await _taskRepository.GetMyTasksList(teamMemberId,timePeriod);

    public async Task<List<TaskResponse>> GetTasks(int projectId,int teamMemberId)=>await _taskRepository.GetTasks(projectId,teamMemberId);
    public async Task<TaskDetail> GetTaskDetail(int taskId)=>await _taskRepository.GetTaskDetail(taskId );
    public async Task<MoreTaskDetail> GetMoreTaskDetail(int taskId)=>await _taskRepository.GetMoreTaskDetail(taskId);
    public async Task<List<AllTaskList>> GetAllTaskList(int employeeId,string timePeriod)=>await _taskRepository.GetAllTaskList(employeeId,timePeriod);
    public async Task<List<TaskIdWithTitle>> GetTaskIdWithTitle(int employeeId,int projectId,string status)=>await _taskRepository.GetTaskIdWithTitle(employeeId,projectId,status);
    public async Task<bool> AddTask(Transflower.PMSApp.Tasks.Entities.Task task)=>await _taskRepository.AddTask(task);
    public async Task<Transflower.PMSApp.Tasks.Entities.Task> GetDetailsById(int taskId)=>await _taskRepository.GetDetailsById(taskId);
    public async Task<bool> UpdateTaskStatus(int taskId,string updateStatus)=>await _taskRepository.UpdateTaskStatus(taskId,updateStatus);




}