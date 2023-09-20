import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient :HttpClient) {}


  getEmployeeId(userId:number):Observable<number>{
    let url= "http://localhost:5230/api/Employees/employeeid/" +userId
    return this.httpClient.get<number>(url)
  }
  getUserId(employeeId:string):Observable<string[]>{
    let url= "http://localhost:5230/api/Employees/userid/" + employeeId
    return this.httpClient.get<string[]>(url)
  }
}