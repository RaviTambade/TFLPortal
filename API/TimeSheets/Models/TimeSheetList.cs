using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Transflower.PMSApp.TimeSheets.Models
{
    public class TimeSheetList
    {
        public int TaskId{get;set;}
        public int TimeSheetId{get;set;}
        public int ProjectId{get;set;}
        public string? TaskTitle{get;set;}
        public int EmployeeUserId{get;set;}
        public DateTime TimeSheetDate{get;set;}
    }
}