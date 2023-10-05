using Transflower.PMSApp.Tasks.Services.Interfaces;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Entities;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
namespace Transflower.PMSApp.Tasks.Services;

    public class TaskAllocationService:ITaskAllocationService
    {
        private readonly ITaskAllocationRepository _taskAllocationRepository;
        public TaskAllocationService(ITaskAllocationRepository taskAllocationRepository)
        {
            _taskAllocationRepository=taskAllocationRepository;
        }

      public async Task<bool> Insert(TaskAllocation taskAllocation)=>await _taskAllocationRepository.Insert(taskAllocation);
    
    }