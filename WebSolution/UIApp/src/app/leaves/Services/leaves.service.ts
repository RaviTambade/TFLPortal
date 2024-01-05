import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PendingLeave } from '../Models/PendingLeave';
import { LeaveDetails } from '../Models/LeaveDetails';
import { LeaveApplication } from '../Models/LeaveApplication';
import { RoleBasedLeaveDetails } from '../Models/RoleBasedLeaveDetails';
import { RoleBasedLeave } from '../Models/RoleBasedLeave';
import { LeaveStatus } from '../Models/LeaveStatus';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http :HttpClient) { }

  addLeave(leave:LeaveApplication):Observable<boolean>{
    let url="http://localhost:5263/api/leaves";
    return this.http.post<boolean>(url,leave);
  }

  addRoleBasedLeave(leave:RoleBasedLeave):Observable<boolean>{
    let url="http://localhost:5263/api/leaves/addnewrolebasedleave";
    return this.http.post<boolean>(url,leave);
  }

  getPendingLeaves(employeeId:number,year:number):Observable<PendingLeave>{
    let url="http://localhost:5263/api/leaves/pendingleaves/employees/"+employeeId+"/year/"+year;
    return this.http.get<PendingLeave>(url);
  }

  getConsumedLeaves(employeeId:number,year:number):Observable<PendingLeave>{
    let url="http://localhost:5263/api/leaves/consumedleaves/employees/"+employeeId+"/year/"+year;
    return this.http.get<PendingLeave>(url);
  }

  getTotalLeaves(employeeId:number,year:number):Observable<PendingLeave>{
    let url="http://localhost:5263/api/leaves/totalleaves/employees/"+employeeId+"/year/"+year;
    return this.http.get<PendingLeave>(url);
  }

  getEmployeeLeaves(employeeId:number):Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves/"+employeeId;
    return this.http.get<LeaveApplication[]>(url);
  }

  getRoleBasedLeaveDetails(id:number):Observable<RoleBasedLeave>{
    let url="http://localhost:5263/api/leaves/getrolebasedleavedetails/" +id;
    return this.http.get<RoleBasedLeave>(url);
  }

  getTeamLeaveDetails(projectId:number,status:string):Observable<LeaveDetails[]>{
    let url="http://localhost:5263/api/leaves/projects/"+projectId+"/status/"+status;
    return this.http.get<LeaveDetails[]>(url);
  }

  getLeaveDetailsOfEmployee(employeeId:number,status:string):Observable<LeaveApplication[]>{
    let url=" http://localhost:5263/api/leaves/employee/"+employeeId+"/status/"+status;
    return this.http.get<LeaveApplication[]>(url);
  }

  getEmployeeLeavesDetails(leaveId:number):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves/details/"+leaveId;
    return this.http.get<LeaveApplication>(url);
  }

  getAllEmployeeLeaves():Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves";
    return this.http.get<LeaveApplication[]>(url);
  }

  getAllRoleBasedLeaves():Observable<RoleBasedLeaveDetails[]>{
    let url="http://localhost:5263/api/leaves/rolebasedleaves";
    return this.http.get<RoleBasedLeaveDetails[]>(url);
  }

  updateEmployeeLeave(leaveApplication:LeaveApplication):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves";
    return this.http.put<LeaveApplication>(url,leaveApplication);
  }

  updateLeaveApplication(leaveId:number,status:string):Observable<any>{
    let url="http://localhost:5263/api/leaves/" +leaveId+ "/"+status;
    return this.http.put<any>(url,{});
  }

  updateRoleBasedLeave(roleBasedLeave:RoleBasedLeave):Observable<RoleBasedLeave>{
    let url="http://localhost:5263/api/leaves/updaterolebasedleave";
    return this.http.put<RoleBasedLeave>(url,roleBasedLeave);
  }

  deleteEmployeeLeave(LeaveId:number):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves/"+LeaveId;
    return this.http.delete<LeaveApplication>(url);
  }
}
