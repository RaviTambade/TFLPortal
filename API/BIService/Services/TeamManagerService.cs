using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.BIService.Services.Interfaces;
using Transflower.PMSApp.BIService.Repositories.Interfaces;
using Transflower.PMSApp.BIService.Models;
namespace Transflower.PMSApp.BIService.Services
{
    public class TeamManagerService:ITeamManagerService
    {
    public readonly ITeamManagerRepository _repository;
    public TeamManagerService(ITeamManagerRepository repository)
    {
        _repository = repository;
    } 
        public async Task<List<TotalProjectWork>> GetTotalProjectWorkHours(int teamManagerId)=>
        await _repository.GetTotalProjectWorkHours(teamManagerId);
                    
    }
}