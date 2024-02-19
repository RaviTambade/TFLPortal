import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leaveAPI:string=environment.leaveAPI;

  constructor(private http:HttpClient) { }

    
 
  getAllLeaveApplications(leaveId:number):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/employees/${leaveId}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveApplication(leaveId:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/applications/${leaveId}`;
    return this.http.get<LeaveApplication>(url);
  }

  getLeaveApplications(id:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/employees/${id}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }

     
  addNewLeaveApplication(leave:LeaveApplication):Observable<boolean>{
    return this.http.post<boolean>(this.leaveAPI,leave);
  }

  updateLeaveApplication(leave:LeaveApplication):Observable<LeaveApplication>{
    return this.http.put<LeaveApplication>(this.leaveAPI,leave);
  }
  
  deleteLeaveApplication(id:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/${id}`;
    return this.http.delete<LeaveApplication>(url);
  }
  
  getAnnualConsumedLeavesOfEmployee(id:number,year:number):Observable<AnnualLeaves>{
    let url=`${this.leaveAPI}/annualconsumedleaves/employees/${id}/year/${year}`;
    return this.http.get<AnnualLeaves>(url);
  }
}
