import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../../Entities/Leavemgmt/LeaveApplication';
import { RoleLeaveAllocation } from '../../Entities/Leavemgmt/LeaveAllocation';
import { MonthLeave } from '../../Entities/Leavemgmt/MonthLeave';
import { LeavesCount } from '../../Entities/Leavemgmt/LeavesCount';
import { AnnualLeaves } from '../../Entities/Leavemgmt/AnnualLeaves';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
  dateDifference: number|any; 
  leaveAPI:string=environment.leaveAPI;

  constructor(private http:HttpClient) { }

  getAllLeaveApplications():Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications`;
    return this.http.get<LeaveApplication[]>(url);
  }
  
  getLeaveApplication(leaveId:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/applications/${leaveId}`;
    return this.http.get<LeaveApplication>(url);
  }
  
  getEmployeeLeaveApplications(employeeId:number):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/employees/${employeeId}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveApplicationsOfEmployee(employeeId:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/employees/${employeeId}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveApplications(leaveStatus:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/status/${leaveStatus}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveApplicationsByDate(date:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/date/${date}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getTeamLeaveDetails(projectId:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/projects/${projectId}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getAnnualLeaveCount(employeeId:number,month:number,year:number): Observable<MonthLeave[]> {
    let url =`${this.leaveAPI}/employees/${employeeId}/month/${month}/year/${year}`;
    return this.http.get<MonthLeave[]>(url);
  }

  getAnnualAvailableLeaves(employeeId:number,roleId:number,year:number):Observable<LeavesCount>{
    let url=`${this.leaveAPI}/annualavailable/employees/${employeeId}/roles/${roleId}/year/${year}`;
    return this.http.get<LeavesCount>(url);
  }

  getAnnualConsumedLeaves(employeeId:number,year:number):Observable<AnnualLeaves>{
    let url=`${this.leaveAPI}/annualconsumedleaves/employees/${employeeId}/year/${year}`;
    return this.http.get<AnnualLeaves>(url);
  }

  getAnnualLeaves(roleId:number,year:number):Observable<LeavesCount>{
    let url=`${this.leaveAPI}/annualleaves/roles/${roleId}/year/${year}`;
    return this.http.get<LeavesCount>(url);
  }

  getAllRoleLeaveAllocations():Observable<RoleLeaveAllocation[]>{
    let url=`${this.leaveAPI}/allocations`;
    return this.http.get<RoleLeaveAllocation[]>(url);
  }

  getRoleLeaveAllocation(roleId:number):Observable<RoleLeaveAllocation>{
    let url=`${this.leaveAPI}/allocations/roles/${roleId}` ;
    return this.http.get<RoleLeaveAllocation>(url);
  }

  addLeaveApplication(leave:LeaveApplication):Observable<boolean>{
    return this.http.post<boolean>(this.leaveAPI,leave);
  }

  addRoleLeaveAllocation(leave:RoleLeaveAllocation):Observable<boolean>{
    let roleBasedLeaveUrl=`${this.leaveAPI}/leaveallocation`;
    return this.http.post<boolean>(roleBasedLeaveUrl,leave);
  }

  updateLeaveApplication(leaveApplication:LeaveApplication):Observable<LeaveApplication>{
    return this.http.put<LeaveApplication>(this.leaveAPI,leaveApplication);
  }

  updateLeaveAllocation(roleBasedLeave:RoleLeaveAllocation):Observable<RoleLeaveAllocation>{
    let url=`${this.leaveAPI}/leaveallocation`;
    return this.http.put<RoleLeaveAllocation>(url,roleBasedLeave);
  }

  deleteLeaveApplication(leaveId:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/${leaveId}`;
    return this.http.delete<LeaveApplication>(url);
  }

  calculateDays(fromDate:string,toDate:string) {     
    if (fromDate && toDate) {     
        const diffInMilliseconds = (new Date(toDate)).getTime() - (new Date(fromDate)).getTime(); 
        console.log(diffInMilliseconds);  
        const dateInMilliseconds=diffInMilliseconds+86400000;
            const dateDifference = dateInMilliseconds / (1000 * 60 * 60 * 24); 
            return dateDifference;
          } 
          else {       
          return 0; 
    }
  }
}
