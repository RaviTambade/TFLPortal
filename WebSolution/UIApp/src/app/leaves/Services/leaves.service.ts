import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PendingLeave } from '../Models/PendingLeave';
import { LeaveDetails } from '../Models/LeaveDetails';
import { LeaveApplication } from '../Models/LeaveApplication';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http :HttpClient) { }

  addLeave(leave:LeaveApplication):Observable<boolean>{
    let url="http://localhost:5263/api/leaves";
    return this.http.post<boolean>(url,leave);
  }

  getPendingLeaves(employeeId:number,year:number):Observable<PendingLeave>{
    let url="http://localhost:5263/api/leaves/pendingleaves/employees/"+employeeId+"/year/"+year;
    return this.http.get<PendingLeave>(url);
  }

  getEmployeeLeaves(employeeId:number):Observable<LeaveApplication[]>{
    let url="http://localhost:5263/api/leaves/"+employeeId;
    return this.http.get<LeaveApplication[]>(url);
  }

  getTeamLeaveDetails(projectId:number,status:string):Observable<LeaveDetails[]>{
    let url="http://localhost:5263/api/leaves/projects/"+projectId+"/status/"+status;
    return this.http.get<LeaveDetails[]>(url);
  }

  getEmployeeLeavesDetails(leaveId:number):Observable<LeaveApplication>{
    let url="http://localhost:5263/api/leaves/details/"+leaveId;
    return this.http.get<LeaveApplication>(url);
  }
}
