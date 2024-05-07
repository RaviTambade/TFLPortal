using System.Data;
using MySql.Data.MySqlClient;
using  Transflower.TFLPortal.Entities.LeaveMgmt;
using Transflower.TFLPortal.Responses;
using Transflower.TFLPortal.Helpers;
using Transflower.TFLPortal.Services.LeaveMgmt.Analytics.Interfaces;
using Transflower.TFLPortal.Repositories.LeaveMgmt.Analytics.Interfaces;
namespace Transflower.TFLPortal.Services.LeaveMgmt.Analytics;

public class LeaveAnalyticsService : ILeaveAnalyticsService
{
    private readonly ILeaveAnalyticsRepository _repository;

    public LeaveAnalyticsService(ILeaveAnalyticsRepository repository){
        _repository=repository;
    }

    public async Task<List<LeaveApplication>> GetLeaveApplications(){
        return await _repository.GetLeaveApplications();
    }
    public async Task<List<LeaveApplication>> GetLeaveApplications(DateOnly date){
         return await _repository.GetLeaveApplications(date);
    }
    public async Task<List<LeaveApplication>> GetLeaveApplications(string status){
         return await _repository.GetLeaveApplications(status);
    }    
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId){
         return await _repository.GetLeaveApplications(employeeId);
    }
    public async Task<List<LeaveApplication>> GetLeaveApplications(int employeeId, string status){
         return await _repository.GetLeaveApplications(employeeId,status);
    }
    public async Task<List<LeaveApplication>> GetTeamLeaveDetails(int projectId, string status){
         return await _repository.GetTeamLeaveDetails(projectId,status);
    }
    public async Task<LeaveApplication> GetLeaveApplication(int id){
         return await _repository.GetLeaveApplication(id);
    }
    public async Task<List<MonthlyLeaves>> GetAnnualLeavesCount(int employeeId,int year){
         return await _repository.GetAnnualLeavesCount(employeeId,year);
    }
    public async Task<List<LeaveCount>> GetMonthlyLeaveCount(int employeeId,int month,int year){
         return await _repository.GetMonthlyLeaveCount(employeeId,month,year);
    }

    public async Task<AnnualLeaves> GetAnnualAvailableLeaves(int employeeId, int roleId, int year){
         return await _repository.GetAnnualAvailableLeaves(employeeId,roleId,year);
    }
    public async Task<AnnualLeaves> GetAnnualConsumedLeaves(int employeeId, int year){
         return await _repository.GetAnnualConsumedLeaves(employeeId,year);
    }
    public async Task<List<LeaveCount>> GetAnnualLeaves(int roleId, int year){
         return await _repository.GetAnnualLeaves(roleId,year);
    }

    public async Task<List<LeaveAllocation>> GetLeaveAllocations(){
         return await _repository.GetLeaveAllocations();
    }
    public async Task<LeaveAllocation> GetRoleLeavesDetails(int id){
         return await _repository.GetRoleLeavesDetails(id);
    }
}
