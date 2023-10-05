using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Transflower.PMSApp.Tasks.Models;
using Transflower.PMSApp.Tasks.Entities;
namespace Transflower.PMSApp.Tasks.Repositories.Interfaces;
    public interface ITaskAllocationRepository
    {
        Task<bool> Insert(TaskAllocation taskAllocation);
    }
