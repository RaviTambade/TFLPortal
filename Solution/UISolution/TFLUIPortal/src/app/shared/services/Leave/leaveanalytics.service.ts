import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveApplication } from '../../Entities/Leavemgmt/LeaveApplication';
import { MonthLeave } from '../../Entities/Leavemgmt/MonthLeave';
import { LeavesCount } from '../../Entities/Leavemgmt/LeavesCount';
import { AnnualLeaves } from '../../Entities/Leavemgmt/AnnualLeaves';

@Injectable({
  providedIn: 'root'
})
export class LeaveAnalyticsService {

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
  
 
  getLeaveApplicationsOfEmployee(id:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/employees/${id}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }
//get all leave applications applied from date to date

  getAllLeaveApplicationOfStatus(leaveStatus:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/status/${leaveStatus}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getLeaveApplicationsOfDate(date:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/date/${date}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getProjectMembersLeaveApplications(id:number,status:string):Observable<LeaveApplication[]>{
    let url=`${this.leaveAPI}/applications/projects/${id}/status/${status}`;
    return this.http.get<LeaveApplication[]>(url);
  }

  getAnnualLeaveCountOfEmployee(id:number,month:number,year:number): Observable<MonthLeave[]> {
    let url =`${this.leaveAPI}/employees/${id}/month/${month}/year/${year}`;
    return this.http.get<MonthLeave[]>(url);
  }

  getAnnualAvailableLeavesOfEmployee(id:number,roleId:number,year:number):Observable<AnnualLeaves>{
    let url=`${this.leaveAPI}/annualavailable/employees/${id}/roles/${roleId}/year/${year}`;
    return this.http.get<AnnualLeaves>(url);
  }

  getAnnualConsumedLeavesOfEmployee(id:number,year:number):Observable<AnnualLeaves>{
    let url=`${this.leaveAPI}/annualconsumedleaves/employees/${id}/year/${year}`;
    return this.http.get<AnnualLeaves>(url);
  }

  getAnnualLeavesOfRole(id:number,year:number):Observable<LeavesCount>{
    let url=`${this.leaveAPI}/annualleaves/roles/${id}/year/${year}`;
    return this.http.get<LeavesCount>(url);
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
 
