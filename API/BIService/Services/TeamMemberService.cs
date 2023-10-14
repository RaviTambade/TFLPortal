using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Services.Interfaces;
using Transflower.PMSApp.BIService.Repositories.Interfaces;
using Transflower.PMSApp.BIService.Models;
namespace Transflower.PMSApp.BIService.Services
{
    public class TeamMemberService : ITeamMemberService
    {
        public readonly ITeamMemberRepository _repository;
        public TeamMemberService(ITeamMemberRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<TotalProjectWorkingByMember>> GetTotalTimeSpendByMembers(
           string teamMemberId,
           DateFilter dateFilter
       ) => await _repository.GetTotalTimeSpendByMembers(teamMemberId, dateFilter);


        public async Task<List<TotalProjectWorkingByMember>> GetTotalProjectWorkHourOfMembers(int teamMemberId, DateTime givenDate, string dateRange) =>
      await _repository.GetTotalProjectWorkHourOfMembers(teamMemberId, givenDate, dateRange);

        public async Task<double> GetCalculateAverageTime(int userId) =>
      await _repository.GetCalculateAverageTime(userId);

    }
}