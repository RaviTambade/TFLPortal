import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
import { RoleLeaveAllocation } from '../../Entities/Leavemgmt/LeaveAllocation';
 

@Injectable({
  providedIn: 'root'
})
export class LeaveAllocationService {

  dateDifference: number|any; 
  leaveAPI:string=environment.leaveAPI;

  constructor(private http:HttpClient) { }
    
  getLeaveAllocationsByRole():Observable<RoleLeaveAllocation[]>{
    let url=`${this.leaveAPI}/allocations`;
    return this.http.get<RoleLeaveAllocation[]>(url);
  }

  getLeaveAllocationOfRole(id:number):Observable<RoleLeaveAllocation>{
    let url=`${this.leaveAPI}/allocations/roles/${id}` ;
    return this.http.get<RoleLeaveAllocation>(url);
  }
  

  addNewLeaveAllocationForRole(leave:RoleLeaveAllocation):Observable<boolean>{
    let url=`${this.leaveAPI}/leaveallocation`;
    return this.http.post<boolean>(url,leave);
  }

   
  updateLeaveAllocation(appln:RoleLeaveAllocation):Observable<RoleLeaveAllocation>{
    let url=`${this.leaveAPI}/leaveallocation`;
    return this.http.put<RoleLeaveAllocation>(url,appln);
  }

   
}
 
