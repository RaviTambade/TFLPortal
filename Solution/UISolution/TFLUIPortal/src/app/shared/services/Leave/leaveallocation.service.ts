import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
import { LeaveAllocation } from '../../Entities/Leavemgmt/LeaveAllocation';
 

@Injectable({
  providedIn: 'root'
})
export class LeaveAllocationService {

  dateDifference: number|any; 
  leaveAPI:string=environment.leaveAPI;

  constructor(private http:HttpClient) { }
    
  getAllLeaveAllocations():Observable<LeaveAllocation[]>{
    let url=`${this.leaveAPI}/allocations`;
    return this.http.get<LeaveAllocation[]>(url);
  }

  getLeaveAllocationOfRole(id:number):Observable<LeaveAllocation>{
    let url=`${this.leaveAPI}/allocations/roles/${id}` ;
    return this.http.get<LeaveAllocation>(url);
  }
  

  addNewLeaveAllocationForRole(leave:LeaveAllocation):Observable<boolean>{
    let url=`${this.leaveAPI}/leaveallocation`;
    return this.http.post<boolean>(url,leave);
  }
   
  updateLeaveAllocation(appln:LeaveAllocation):Observable<LeaveAllocation>{
    let url=`${this.leaveAPI}/leaveallocation`;
    return this.http.put<LeaveAllocation>(url,appln);
  }

   
}
 
