using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Models;

namespace Transflower.PMSApp.BIService.Repositories.Interfaces
{
    public interface ITeamMemberRepository
    {
         Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamMemberId,string fromtime,string totime);
    }
}