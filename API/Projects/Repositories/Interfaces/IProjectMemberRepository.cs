using System;
using System.Collections.Generic;
using System.Linq;
using Transflower.PMSApp.Projects.Entities;
using System.Threading.Tasks;
namespace Transflower.PMSApp.Projects.Repositories.Interfaces;
    public interface IProjectMemberRepository
    {
        Task<bool> Insert(ProjectMember projectMember);
    }
