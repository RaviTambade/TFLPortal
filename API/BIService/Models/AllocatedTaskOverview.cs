using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Transflower.PMSApp.BIService.Models
{
    public class AllocatedTaskOverview
    {
        public int UserId{get;set;}
        public int TaskAllocationCount{get;set;}
        public string? Title{get;set;}
        public string? Status{get;set;}
    }
}