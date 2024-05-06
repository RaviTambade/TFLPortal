
using MySql.Data.MySqlClient;
using TFLPortal.Models;
using TFLPortal.Repositories.TimesheetMgmt.Operations;

namespace TFLPortal.Services.TimesheetMgmt.Operations;

public class TimesheetOperationsService:ITimesheetOperationsService
{
    private readonly ITimesheetOperationsRepository _repository;

    public TimesheetOperationsService(ITimesheetOperationsRepository repository)
    {
        _repository=repository;
    }
    
     public async Task<bool> AddTimesheet(Timesheet timesheet)
    {
       return await _repository.AddTimesheet(timesheet);
    }

    public async Task<bool> AddTimesheetEntry(TimesheetEntry timesheetEntry)
    {
       return await _repository.AddTimesheetEntry(timesheetEntry); 
    }

    public async Task<bool> ChangeTimesheetStatus(int timesheetId, Timesheet timesheet)
    {
       return await _repository.ChangeTimesheetStatus( timesheetId,  timesheet);
    }

    public async Task<bool> UpdateTimesheetEntry( int timesheetEntryId, TimesheetEntry timesheetEntry)
    {
       return await _repository.UpdateTimesheetEntry(  timesheetEntryId,  timesheetEntry); 
    }

    public async Task<bool> RemoveTimesheetEntry(int timesheetEntryId)
    {
       return await _repository.RemoveTimesheetEntry( timesheetEntryId); 
    }

    public async Task<bool> RemoveAllTimesheetEntries(int timesheetId)
    {
        return await _repository.RemoveAllTimesheetEntries(timesheetId);
    }
}