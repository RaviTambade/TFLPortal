import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../../Entities/Leavemgmt/LeaveApplication';
import { LeaveAllocation } from '../../Entities/Leavemgmt/LeaveAllocation';
 

@Injectable({
  providedIn: 'root'
})
export class LeaveConsumptionSerivce {

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
}
 
