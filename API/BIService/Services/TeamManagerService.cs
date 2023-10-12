using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Services.Interfaces;
using Transflower.PMSApp.BIService.Repositories.Interfaces;
using Transflower.PMSApp.BIService.Models;

namespace Transflower.PMSApp.BIService.Services
{
    public class TeamManagerService : ITeamManagerService
    {
        public readonly ITeamManagerRepository _repository;

        public TeamManagerService(ITeamManagerRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(
            int teamManagerId,
            DateFilter dateFilter
        ) => await _repository.GetTotalProjectWorkHours(teamManagerId, dateFilter);

        public async Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourByMembers(
            int projectId
        ) => await _repository.GetTotalProjectWorkHourByMembers(projectId);

        public async Task<List<ProjectTaskStatus>> GetProjectStatusCount(int teamManagerId) =>
            await _repository.GetProjectStatusCount(teamManagerId);

        public async Task<List<AllocatedTaskOverview>> GetAllocatedTaskOverview(
            string teamMemberId,
            DateFilter dateFilter
        ) => await _repository.GetAllocatedTaskOverview(teamMemberId, dateFilter);

        public async Task<List<TotalProjectWorkingByMember>> GetTotalTimeSpendByMembers(
            string teamMemberId,
            DateFilter dateFilter
        ) => await _repository.GetTotalTimeSpendByMembers(teamMemberId, dateFilter);

        public async Task<List<ProjectPercentage>> GetCompletionPercentage(string projectId) =>
            await _repository.GetCompletionPercentage(projectId);
    }
}
