import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class HRService {

private subject=new Subject<any>();
  constructor(private http:HttpClient) {
  }

  getEmployee(id: any): Observable<any> {
    let url = "http://localhost:5230/api/employees/" + id;
    return this.http.get<any>(url, id);
  }

  getAllEmployees(): Observable<any> {
    let url = "http://localhost:5230/api/employees/employees";
    return this.http.get<any>(url);
  }

  addEmployee(employee: Employee): Observable<any> {
    let url = "http://localhost:5230/api/employees/employee";
    return this.http.post<Employee>(url, employee);
  }

  updateEmployee(form: any): Observable<any> {
    let url = "http://localhost:5230/api/employees/employee/" ;
    return this.http.put<Employee>(url, form);
  }

  deleteEmployee(id: any): Observable<any> {
    let url = " http://localhost:5230/api/employees/" + id;
    return this.http.delete<Employee>(url);
  }


}
