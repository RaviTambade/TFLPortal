using System.ComponentModel.DataAnnotations;

namespace Transflower.TFLPortal.TFLOBL.Entities;

public class TimeSheet
{
    public int Id { get; set; }
    public string? Status { get; set; }
    public int EmployeeId { get; set; }
    public DateTime TimeSheetDate { get; set; }
    public DateTime StatusChangedDate { get; set; }

    //navigational property
    public Employee? Employee { get; set; }
    public List<TimeSheetEntry>? TimeSheetEntries { get; set; }

    public TimeSheet() { 
      
    }

    public TimeSheet(
        int id,
        string? status,
        int employeeId,
        DateTime timeSheetDate,
        DateTime statusChangedDate,
        Employee? employee,
        List<TimeSheetEntry>? timeSheetEntries
    )
    {
        Id = id;
        Status = status;
        EmployeeId = employeeId;
        TimeSheetDate = timeSheetDate;
        StatusChangedDate = statusChangedDate;
        Employee = employee;
        TimeSheetEntries = timeSheetEntries;
    }

}
