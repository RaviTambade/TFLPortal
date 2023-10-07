using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Transflower.PMSApp.BIService.Models
{
    public class ProjectTaskStatus
    {
        public string? ProjectTitle{get;set;}
        public string? Status{get;set;}
        public int TaskStatusCount{get;set;}
    }
}