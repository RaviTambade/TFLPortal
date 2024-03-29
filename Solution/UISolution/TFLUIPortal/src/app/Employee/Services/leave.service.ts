import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnualLeaves } from 'src/app/shared/Entities/Leavemgmt/AnnualLeaves';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { environment } from 'src/environments/environment';
import { RoleLeaveAllocation } from '../Models/LeaveMgmt/LeaveAllocation';
import { LeaveCount } from '../Models/LeaveMgmt/LeaveCount';
 

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leaveAPI:string=environment.leaveAPI;

  constructor(private http:HttpClient) { }

  getLeaveAllocationByRole(roleId:number):Observable<RoleLeaveAllocation>{
    let url=`${this.leaveAPI}/allocations/roles/${roleId}` ;
    return this.http.get<RoleLeaveAllocation>(url);
  }
 
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
  
  deleteLeaveApplication(leaveId:number):Observable<LeaveApplication>{
    let url=`${this.leaveAPI}/${leaveId}`;
    return this.http.delete<LeaveApplication>(url);
  }
  
  getAnnualConsumedLeavesOfEmployee(id:number,year:number):Observable<AnnualLeaves>{
    let url=`${this.leaveAPI}/annualconsumedleaves/employees/${id}/year/${year}`;
    return this.http.get<AnnualLeaves>(url);
  }

  getAnnualLeavesOfRole(id:number,year:number):Observable<LeaveCount[]>{
    let url=`${this.leaveAPI}/annualleaves/roles/${id}/year/${year}`;
    return this.http.get<LeaveCount[]>(url);
  }

  calculateDays(from:string,to:string): number {    
    let days:number=0;
    if (from && to) { 
            let dateFrom=new Date(from);
            let dateTo=new Date(to);
            const diff_MiliSecnds =dateTo.getTime() - dateFrom.getTime(); 
            let day_MiliSecnds=86400000;
            const dateInMilliseconds=diff_MiliSecnds+day_MiliSecnds;
            let hours=24;
            let minutes=60;
            let seconds=60;
           days = dateInMilliseconds / (1000 * seconds * minutes * hours); 
    }
    return days; 
  }
}
