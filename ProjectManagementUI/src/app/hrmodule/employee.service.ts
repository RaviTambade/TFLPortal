import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {}

  public getEmployees():Observable<Employee[]>{
    let url= "http://localhost:5230/api/employees/getall";
    return this.http.get<Employee[]>(url);
  }

  public insert(employee:Employee):Observable<any>{
    let url = "http://localhost:5230/api/employees/InsertEmployee";
    return this.http.post<Employee>(url,employee);
  }


  
}
