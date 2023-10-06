using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Models;

namespace Transflower.PMSApp.BIService.Repositories.Interfaces
{
    public interface ITeamManagerRepository
    {
         Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamManagerId);
    }
}