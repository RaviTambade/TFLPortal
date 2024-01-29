import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveAllocation } from 'src/app/hrmanager/LeaveMgmt/models/LeaveAllocation';
import { LeaveApplication } from 'src/app/hrmanager/LeaveMgmt/models/LeaveApplication';
import { LeavesCount } from 'src/app/hrmanager/LeaveMgmt/models/LeavesCount';
import { MonthLeave } from 'src/app/hrmanager/LeaveMgmt/models/MonthLeave';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http:HttpClient) { }

  addLeave(leave:LeaveApplication):Observable<boolean>{
    let url="http://localhost:5263/api/leaves";
    return this.http.post<boolean>(url,leave);
  }

  addRoleBasedLeave(leave:LeaveAllocation):Observable<boolean>{
    let url="http://localhost:5263/api/leaves/rolebasedleave";
    return this.http.post<boolean>(url,leave);
  }

  getEmployeeMonthLeaves(employeeId:number,month:number,year:number): Observable<MonthLeave[]> {
    let url ='http://localhost:5263/api/leaves/employees/'+ employeeId+'/month/'+month+'/year/'+year;
    return this.http.get<MonthLeave[]>(url);
  }

  getAnnualAvailableLeaves(employeeId:number,year:number):Observable<LeavesCount>{
    let url="http://localhost:5263/api/leaves/annualavailableleaves/employee/"+employeeId+"/year/"+year;
    return this.http.get<LeavesCount>(url);
  }

  getAnnualConsumedLeaves(employeeId:number,year:number):Observable<LeavesCount>{
    let url="http://localhost:5263/api/leaves/annualconsumedleaves/employee/"+employeeId+"/year/"+year;
    return this.http.get<LeavesCount>(url);
  }

  getAnnualLeaves(employeeId:number,year:number):Observable<LeavesCount>{
    let url="http://localhost:5263/api/leaves/annualleaves/employee/"+employeeId+"/year/"+year;
    return this.http.get<LeavesCount>(url);
  }

  getEmployeeLeaves(employeeId:number):Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves/employees/"+employeeId;
    return this.http.get<LeaveApplication[]>(url);
  }

  getRoleBasedLeaveDetails(id:number):Observable<LeaveAllocation>{
    let url="http://localhost:5263/api/leaves/" +id;
    return this.http.get<LeaveAllocation>(url);
  }

  getTeamLeaveDetails(projectId:number,status:string):Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves/projects/"+projectId+"/status/"+status;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveDetailsOfEmployee(employeeId:number,status:string):Observable<LeaveApplication[]>{
    let url=" http://localhost:5263/api/leaves/employees/"+employeeId+"/status/"+status;
    return this.http.get<LeaveApplication[]>(url);
  }

  getEmployeeLeavesDetails(leaveId:number):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves/leave/"+leaveId;
    return this.http.get<LeaveApplication>(url);
  }

  getAllEmployeeLeaves():Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves";
    return this.http.get<LeaveApplication[]>(url);
  }

  getAllRoleBasedLeaves():Observable<LeaveAllocation[]>{
    let url="http://localhost:5263/api/leaves/rolebasedleaves";
    return this.http.get<LeaveAllocation[]>(url);
  }

  getLeaveDetails(leaveStatus:string):Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves/status/"+leaveStatus;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveDetailsByDate(date:string):Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves/employees/date/"+date;
    return this.http.get<LeaveApplication[]>(url);
  }

  updateEmployeeLeave(leaveApplication:LeaveApplication):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves";
    return this.http.put<LeaveApplication>(url,leaveApplication);
  }

  updateLeaveApplication(leaveId:number,status:string):Observable<any>{
    let url="http://localhost:5263/api/leaves/" +leaveId+ "/updatestatus/"+status;
    return this.http.put<any>(url,{});
  }

  updateRoleBasedLeave(roleBasedLeave:LeaveAllocation):Observable<LeaveAllocation>{
    let url="http://localhost:5263/api/leaves/rolebasedleave";
    return this.http.put<LeaveAllocation>(url,roleBasedLeave);
  }

  deleteEmployeeLeave(LeaveId:number):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves/"+LeaveId;
    return this.http.delete<LeaveApplication>(url);
  }
}
