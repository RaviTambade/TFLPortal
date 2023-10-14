using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Transflower.PMSApp.BIService.Models
{
    public class OverDueTask

    {
        public DateTime DueDate { get; set; }
        public string Status { get; set; }
        public string ProjectTitle { get; set; }
        public int UserId { get; set; }
        public string TaskTitle { get; set; }
    }
}