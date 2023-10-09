using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Models;

namespace Transflower.PMSApp.BIService.Repositories.Interfaces
{
    public interface ITeamManagerRepository
    {
         Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamManagerId,DateFilter dateFilter);
         Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourByMembers(int projectId);
         Task<List<ProjectTaskStatus>> GetProjectStatusCount(int teamManagerId);
         Task<List<AllocatedTaskOverview>> GetAllocatedTaskOverview(string teamMemberId,DateFilter dateFilter);
         Task<List<TotalProjectWorkingByMember>> GetTotalTimeSpendByMembers(string teamMemberId,DateFilter dateFilter);
         Task<List<double>> GetCompletionPercentage(string projectId);

    }
}