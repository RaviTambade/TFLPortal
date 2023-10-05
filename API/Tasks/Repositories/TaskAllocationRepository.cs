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
    public class TaskAllocationRepository:ITaskAllocationRepository
    {
        private readonly TaskContext _taskContext;
        public TaskAllocationRepository(TaskContext taskContext){
            _taskContext=taskContext;
        }
      public async Task<bool> Insert(TaskAllocation taskAllocation)
      {
        try
        {
            bool status = false;
            await _taskContext.TaskAllocations.AddAsync(taskAllocation);
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