import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../Models/Leave';
import { PendingLeave } from '../Models/PendingLeave';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http :HttpClient) { }

  addLeave(leave:Leave):Observable<boolean>{
    let url="http://localhost:5263/api/leaves/addleave";
    return this.http.post<boolean>(url,leave);
  }

  getPendingLeaves(employeeId:number):Observable<PendingLeave>{
    let url="http://localhost:5263/api/leaves/pendingleave/"+employeeId;
    return this.http.get<PendingLeave>(url);
  }

  getEmployeeLeaves(employeeId:number):Observable<Leave[]>{
    let url="http://localhost:5263/api/leaves/"+employeeId;
    return this.http.get<Leave[]>(url);
  }
}
