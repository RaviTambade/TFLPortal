using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.Projects.Models;
using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Repositories.Context;
using Transflower.PMSApp.Projects.Repositories.Interfaces;

namespace Transflower.PMSApp.Projects.Repositories;
public class ProjectRepository : IProjectRepository
{
    private readonly ProjectContext _projectContext;
    public ProjectRepository(ProjectContext projectContext)
    {
        _projectContext = projectContext;
    }
    public async Task<List<Project>> GetAll()
    {
        try
        {
            List<Project> projects = await _projectContext.Projects.ToListAsync();
            return projects;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<Project?> GetById(int projectId)
    {
        try
        {
            var project = await _projectContext.Projects.FindAsync(projectId);
            return project;
        }
        catch (Exception)
        {
            throw;
        }
    }
    public async Task<List<ProjectList>> GetProjectsList(int teamMemberId)
    {
        try
        {
            var projects = await (
                         from employee in _projectContext.Employees
                         join project in _projectContext.Projects
                         on employee.Id equals project.TeamManagerId
                         join projectmember in _projectContext.ProjectMembers
                         on project.Id equals projectmember.ProjectId
                         where projectmember.TeamMemberId == teamMemberId
                         select new ProjectList()
                         {
                             Id = project.Id,
                             Title = project.Title,
                             StartDate = project.StartDate,
                             TeamManagerId = project.TeamManagerId,
                             Status = project.Status,
                             TeamManagerUserId = employee.UserId
                         }
                         ).ToListAsync();

            return projects;

        }
        catch (Exception)
        {
            throw;
        }
    }


    public async Task<bool> Insert(Project project)
    {
        try
        {
            bool status = false;
            await _projectContext.Projects.AddAsync(project);
            status = await SaveChangesAsync(_projectContext);
            return status;
        }
        catch (Exception)
        {
            throw;
        }
    }
    public async Task<bool> Update(Project project)
    {
        try
        {
            bool status = false;
            var oldProject = await _projectContext.Projects.FindAsync(project.Id);
            if (oldProject is not null)
            {
                oldProject.Title = project.Title;
                oldProject.StartDate = project.StartDate;
                oldProject.EndDate = project.EndDate;
                oldProject.Description = project.Description;
                oldProject.TeamManagerId = project.TeamManagerId;
                oldProject.Status = project.Status;
                status = await SaveChangesAsync(_projectContext);
            }
            return status;
        }
        catch (Exception)
        {
            throw;
        }
    }
    public async Task<bool> Delete(int projectId)
    {
        try
        {
            bool status = false;
            var project = await _projectContext.Projects.FindAsync(projectId);
            if (project is not null)
            {
                _projectContext.Projects.Remove(project);
                status = await SaveChangesAsync(_projectContext);
            }
            return status;
        }
        catch (Exception)
        {
            throw;
        }
    }
    private async Task<bool> SaveChangesAsync(ProjectContext projectContext)
    {
        int rowsAffected = await projectContext.SaveChangesAsync();
        if (rowsAffected > 0)
        {
            return true;
        }
        return false;
    }

    public async Task<List<int>> GetProjectMembers(int projectId)
    {
        try
        {
            var teamMembers = await (
                            from employee in _projectContext.Employees
                            join projectmember in _projectContext.ProjectMembers
                            on employee.Id equals projectmember.TeamMemberId
                            where projectmember.ProjectId == projectId
                            select (employee.UserId)).ToListAsync();
            return teamMembers;

        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<ProjectTaskList>> GetTasksOfProject(int projectId, string timePeriod)
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

            var projectTasks = await (
                             from employee in _projectContext.Employees
                             join taskallocation in _projectContext.TasksAllocations
                             on employee.Id equals taskallocation.TeamMemberId
                             join projecttask in _projectContext.ProjectTasks
                             on taskallocation.ProjectTaskId equals projecttask.Id
                             join task in _projectContext.Tasks
                             on projecttask.TaskId equals task.Id
                             where projecttask.ProjectId == projectId &&
                               taskallocation.AssignedOn.Date >= startDate.Date && taskallocation.AssignedOn.Date <= endDate.Date orderby taskallocation.AssignedOn descending
                             select new ProjectTaskList()
                             {
                                 TaskId = task.Id,
                                 Title = task.Title,
                                 TeamMemberUserId = employee.UserId,
                                 Status = projecttask.Status,
                                 TaskAllocationDate=taskallocation.AssignedOn
                             }).ToListAsync();
            return projectTasks;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<ProjectName>> GetProjectNames(int employeeId)
    {
        try
        {
            var projectNames = await (
                             from project in _projectContext.Projects
                             join projectmember in _projectContext.ProjectMembers
                             on project.Id equals projectmember.ProjectId
                             where projectmember.TeamMemberId == employeeId
                             select new ProjectName()
                             {
                                 ProjectId = project.Id,
                                 Title = project.Title
                             }).ToListAsync();
            return projectNames;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<ProjectList>> GetManagerProjects(int managerId)
    {
        try
        {
            var projects = await (
                         from employee in _projectContext.Employees
                         join project in _projectContext.Projects
                         on employee.Id equals project.TeamManagerId
                         where project.TeamManagerId == managerId
                         select new ProjectList()
                         {
                             Id = project.Id,
                             Title = project.Title,
                             StartDate = project.StartDate,
                             TeamManagerId = project.TeamManagerId,
                             Status = project.Status,
                             TeamManagerUserId = employee.UserId
                         }
                         ).ToListAsync();

            return projects;

        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<UnAssignedTask>> GetUnAssignedTasks(int projectId, string timePeriod)
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
            var unAssignedTask = await (
                               from project in _projectContext.Projects
                               join projecttask in _projectContext.ProjectTasks
                               on project.Id equals projecttask.ProjectId
                               join task in _projectContext.Tasks
                               on projecttask.TaskId equals task.Id
                               join taskallocation in _projectContext.TasksAllocations
                               on projecttask.Id equals taskallocation.ProjectTaskId 
                               into istaskallocated
                               from taskallocation in istaskallocated.DefaultIfEmpty()
                               where taskallocation == null && project.Id == projectId
                               && projecttask.Date.Date >= startDate.Date && projecttask.Date.Date <= endDate.Date orderby projecttask.Date descending
                               select new UnAssignedTask()
                               {
                                   TaskId = projecttask.Id,
                                   ProjectId = project.Id,
                                   Title = task.Title,
                                   ProjectName = project.Title,
                                   Status = projecttask.Status
                               }).ToListAsync();
            return unAssignedTask;
        }

        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<AssignedTaskByManager>> GetAssignedTasksByManager(int managerId, string timePeriod)
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
            var assignedTaskByManager = await (
                                      from employee in _projectContext.Employees
                                      join project in _projectContext.Projects
                                      on employee.Id equals project.TeamManagerId
                                      join projecttask in _projectContext.ProjectTasks
                                      on project.Id equals projecttask.ProjectId
                                      join taskallocation in _projectContext.TasksAllocations
                                      on task.Id equals taskallocation.TaskId
                                      join employee2 in _projectContext.Employees
                                      on taskallocation.TeamMemberId equals employee2.Id
                                      where project.TeamManagerId == managerId
 && taskallocation.AssignedOn.Date >= startDate.Date
        && taskallocation.AssignedOn.Date <= endDate.Date     orderby taskallocation.AssignedOn descending
                                      select new AssignedTaskByManager()
                                      {
                                          TaskId = task.Id,
                                          ProjectId = projecttask.Id,
                                          TaskTitle = task.Title,
                                          ProjectTitle = project.Title,
                                          TaskDate = projecttask.Date,
                                          AssignedTaskDate = taskallocation.AssignedOn,
                                          TeamMemberId = taskallocation.TeamMemberId,
                                          TeamMemberUserId = employee2.UserId
                                      }).ToListAsync();
            return assignedTaskByManager;
        }
        catch (Exception)
        {
            throw;
        }
    }
//     public async Task<List<UnAssignedTaskByManager>> GetUnAssignedTasksByManager(int managerId, string timePeriod)
//     {
//         try
//         {
//             DateTime currentDate = DateTime.Now.Date;
//             DateTime startDate = currentDate;
//             DateTime endDate = currentDate;

//             switch (timePeriod)
//             {
//                 case "today":
//                     startDate = currentDate;
//                     endDate = currentDate;
//                     break;
//                 case "yesterday":
//                     startDate = currentDate.AddDays(-1);
//                     endDate = currentDate.AddDays(-1);
//                     break;
//                 case "lastweek":
//                     startDate = currentDate.AddDays(-7);
//                     endDate = currentDate;
//                     break;
//                 case "lastmonth":
//                     startDate = currentDate.AddMonths(-1);
//                     endDate = currentDate;
//                     break;
//                 case "lastyear":
//                     startDate = currentDate.AddYears(-1);
//                     endDate = currentDate;
//                     break;
//             }
//             var unassignedTaskByManager = await (
//                 from project in _projectContext.Projects
//                 join task in _projectContext.Tasks
//                 on project.Id equals task.ProjectId
//                 join assignedTask in _projectContext.AssignedTasks
//                 on task.Id equals assignedTask.TaskId
//                 into assignedTasks
//                 from assignedTask in assignedTasks.DefaultIfEmpty()
//                 where assignedTask == null && project.TeamManagerId == managerId
//                       && task.Date >= startDate && task.Date <= endDate
//                 select new UnAssignedTaskByManager()
//                 {
//                     TaskId = task.Id,
//                     ProjectId = project.Id,
//                     TaskTitle = task.Title,
//                     ProjectTitle = project.Title,
//                     TaskDate = task.Date
//                 }).ToListAsync();
//             return unassignedTaskByManager;
//         }
//         catch (Exception)
//         {
//             throw;
//         }
//     }
//     public async Task<List<EmployeeIdWithUserId>> GetEmployeeIdWithUserId(int projectId)
//     {
//         try
//         {
//             var employeesWithUserId = await (
//                                 from employee in _projectContext.Employees
//                                 join projectMember in _projectContext.ProjectMembers
//                                 on employee.Id equals projectMember.TeamMemberId
//                                 where projectMember.ProjectId == projectId
//                                 select new EmployeeIdWithUserId()
//                                 {
//                                     TeamMemberId = projectMember.TeamMemberId,
//                                     UserId = employee.UserId
//                                 }).ToListAsync();
//             return employeesWithUserId;

//         }
//         catch (Exception)
//         {
//             throw;
//         }
//     }

//     public async Task<string> GetProjectName(int projectId)
//     {
//         try
//         {
//             var project = await _projectContext.Projects
//                         .Where(p => p.Id == projectId)
//                         .Select(p => p.Title)
//                         .FirstOrDefaultAsync();
//             return project;
//         }
//         catch (Exception)
//         {
//             throw;
//         }
    }








