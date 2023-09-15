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
    public async Task<List<ProjectList>> GetProjects()
    {
        try
        {
            var projects = await (
                         from project in _projectContext.Projects
                         select new ProjectList()
                         {
                           Id= project.Id,
                            Title= project.Title,
                            StartDate= project.StartDate,
                            TeamManagerId= project.TeamManagerId
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
}