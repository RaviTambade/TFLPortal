using Transflower.PMSApp.Tasks.Services.Interfaces;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Entities;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
namespace Transflower.PMSApp.Tasks.Services;

    public class AssignedTaskService:IAssignedTaskService
    {
        private readonly IAssignedTaskRepository _assignedTaskRepository;
        public AssignedTaskService(IAssignedTaskRepository assignedTaskRepository)
        {
            _assignedTaskRepository=assignedTaskRepository;
        }

      public async Task<bool> Insert(AssignedTask assignedTask)=>await _assignedTaskRepository.Insert(assignedTask);
    
    }