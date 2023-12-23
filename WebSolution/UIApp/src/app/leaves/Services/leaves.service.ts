import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../Models/Leave';
import { PendingLeave } from '../Models/PendingLeave';
import { LeaveDetails } from '../Models/LeaveDetails';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http :HttpClient) { }

  addLeave(leave:Leave):Observable<boolean>{
    let url="http://localhost:5263/api/leaves/addleave";
    return this.http.post<boolean>(url,leave);
  }

  getPendingLeaves(employeeId:number,roleId:number,year:number):Observable<PendingLeave>{
    let url="http://localhost:5263/api/leaves/PendingLeaves/employee/"+employeeId+"/role/"+roleId+"/year/"+year;
    return this.http.get<PendingLeave>(url);
  }

  getEmployeeLeaves(employeeId:number):Observable<Leave[]>{
    let url="http://localhost:5263/api/leaves/"+employeeId;
    return this.http.get<Leave[]>(url);
  }

  getEmployeeAppliedLeaves(projectId:number,status:string):Observable<LeaveDetails[]>{
    let url="http://localhost:5263/api/leaves/project/"+projectId+"/status/"+status;
    return this.http.get<LeaveDetails[]>(url);
  }
}
