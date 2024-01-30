import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveAllocation } from 'src/app/Entities/LeaveAllocation';
import { LeaveApplication } from 'src/app/Entities/LeaveApplication';
import { LeavesCount } from 'src/app/Entities/LeavesCount';
import { MonthLeave } from 'src/app/Entities/MonthLeave';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  leaveAPI:string=environment.leaveAPI;

  constructor(private http:HttpClient) { }

  addLeave(leave:LeaveApplication):Observable<boolean>{
    return this.http.post<boolean>(this.leaveAPI,leave);
  }

  addRoleBasedLeave(leave:LeaveAllocation):Observable<boolean>{
    let roleBasedLeaveUrl=`${this.leaveAPI}/leaveallocation`;
    return this.http.post<boolean>(roleBasedLeaveUrl,leave);
  }

  getEmployeeMonthLeaves(employeeId:number,month:number,year:number): Observable<MonthLeave[]> {
    let url =`${this.leaveAPI}/employees/${employeeId}/month/${month}/year/${year}`;
    return this.http.get<MonthLeave[]>(url);
  }

  getAnnualAvailableLeaves(employeeId:number,year:number):Observable<LeavesCount>{
    let url=`${this.leaveAPI}/annualavailableleaves/employee/${employeeId}/year/${year}`;
    return this.http.get<LeavesCount>(url);
  }

  getAnnualConsumedLeaves(employeeId:number,year:number):Observable<LeavesCount>{
    let url=`${this.leaveAPI}/annualconsumedleaves/employee/${employeeId}/year/${year}`;
    return this.http.get<LeavesCount>(url);
  }

  getAnnualLeaves(employeeId:number,year:number):Observable<LeavesCount>{
    let url=`${this.leaveAPI}/annualleaves/employee/${employeeId}/year/${year}`;
    return this.http.get<LeavesCount>(url);
  }

  getEmployeeLeaves(employeeId:number):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/employees/${employeeId}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getRoleBasedLeaveDetails(id:number):Observable<LeaveAllocation>{
    let url=`${this.leaveAPI}/${id}` ;
    return this.http.get<LeaveAllocation>(url);
  }

  getTeamLeaveDetails(projectId:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/projects/${projectId}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveDetailsOfEmployee(employeeId:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/employees/${employeeId}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getEmployeeLeavesDetails(leaveId:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/leave/${leaveId}`;
    return this.http.get<LeaveApplication>(url);
  }

  getAllEmployeeLeaves():Observable<LeaveApplication[]>{
    return this.http.get<LeaveApplication[]>(this.leaveAPI);
  }

  getAllRoleBasedLeaves():Observable<LeaveAllocation[]>{
    let url=`${this.leaveAPI}/leaveallocations`;
    return this.http.get<LeaveAllocation[]>(url);
  }

  getLeaveDetails(leaveStatus:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/status/${leaveStatus}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveDetailsByDate(date:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/employees/date/${date}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  updateEmployeeLeave(leaveApplication:LeaveApplication):Observable<LeaveApplication>{
    return this.http.put<LeaveApplication>(this.leaveAPI,leaveApplication);
  }

  updateLeaveApplication(leaveId:number,status:string):Observable<any>{
    let url=`${this.leaveAPI}/${leaveId}/updatestatus/${status}`;
    return this.http.put<any>(url,{});
  }

  updateRoleBasedLeave(roleBasedLeave:LeaveAllocation):Observable<LeaveAllocation>{
    let url=`${this.leaveAPI}/leaveallocation`;
    return this.http.put<LeaveAllocation>(url,roleBasedLeave);
  }

  deleteEmployeeLeave(leaveId:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/${leaveId}`;
    return this.http.delete<LeaveApplication>(url);
  }
}
