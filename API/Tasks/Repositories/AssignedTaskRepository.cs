using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Transflower.PMSApp.Tasks.Repositories.Interfaces;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Entities;
using Transflower.PMSApp.Tasks.Repositories.Contexts;
namespace Transflower.PMSApp.Tasks.Repositories
{
    public class AssignedTaskRepository:IAssignedTaskRepository
    {
        private readonly TaskContext _taskContext;
        public AssignedTaskRepository(TaskContext taskContext){
            _taskContext=taskContext;
        }
      public async Task<bool> Insert(AssignedTask assignedTask)
      {
        try
        {
            bool status = false;
            await _taskContext.AssignedTasks.AddAsync(assignedTask);
            status=await SaveChangesAsync(_taskContext);
            status=true;    
            return status;
        }
        catch(Exception)
        {
            throw;
        }
      }


       private async Task<bool> SaveChangesAsync(TaskContext taskContext)
    {
        int rowsAffected = await taskContext.SaveChangesAsync();
        if (rowsAffected > 0)
        {
            return true;
        }
        return false;
    }

    
    }
}