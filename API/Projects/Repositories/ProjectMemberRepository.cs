using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.Projects.Entities;
using Transflower.PMSApp.Projects.Repositories.Interfaces;
using Transflower.PMSApp.Projects.Repositories.Context;

namespace Transflower.PMSApp.Projects.Repositories
{
    public class ProjectMemberRepository:IProjectMemberRepository
    {
        private readonly ProjectContext _projectContext;
        public ProjectMemberRepository(ProjectContext projectContext){
            _projectContext=projectContext;
        }

    public async Task<bool> Insert(ProjectMember projectMember)
    {
        try
        {
            bool status=false;
           await _projectContext.ProjectMembers.AddAsync(projectMember);
           status= await SaveChangesAsync(_projectContext);
           return status;
        }
        catch(Exception){
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
}