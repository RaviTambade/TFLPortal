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
     
  addNewLeaveApplication(leave:LeaveApplication):Observable<boolean>{
    return this.http.post<boolean>(this.leaveAPI,leave);
  }

  updateLeaveApplication(appln:LeaveApplication):Observable<LeaveApplication>{
    return this.http.put<LeaveApplication>(this.leaveAPI,appln);
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
