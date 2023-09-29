import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employeeinfo } from '../Models/employeeinfo';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }


  getEmployeeId(userId: number): Observable<number> {
    let url = "http://localhost:5230/api/Employees/employeeid/" + userId
    return this.httpClient.get<number>(url)
  }
  getUserId(employeeId: string): Observable<string[]> {
    let url = "http://localhost:5230/api/Employees/userid/" + employeeId
    return this.httpClient.get<string[]>(url)
  }
  getEmployeeInfo(employeeId: number): Observable<Employeeinfo> {
    let url = "http://localhost:5230/api/Employees/employeeinfo/" + employeeId
    return this.httpClient.get<Employeeinfo>(url)
  }

  getUserIdByManagerId(managerId: number): Observable<number[]> {
    let url = "http://localhost:5230/api/Employees/useridbymanager/" + managerId
    return this.httpClient.get<number[]>(url)
  }
}