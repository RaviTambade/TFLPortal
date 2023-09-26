using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.Projects.Services.Interfaces;
using Transflower.PMSApp.Projects.Repositories.Interfaces;
using Transflower.PMSApp.Projects.Entities;
namespace Transflower.PMSApp.Projects.Services
{
    public class ProjectMemberService : IProjectMemberService
    {
        private readonly IProjectMemberRepository _projectMemberRepository;
        public ProjectMemberService(IProjectMemberRepository projectMemberRepository)
        {
            _projectMemberRepository = projectMemberRepository;
        }
        public async Task<bool> Insert(ProjectMember projectmember)
        {
            return await _projectMemberRepository.Insert(projectmember);
        }
    }
}
