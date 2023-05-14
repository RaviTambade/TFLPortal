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

  public getById(empId:number):Observable<Employee>{
    let url="http://localhost:5230/api/employees/getbyid/"+empId;
    return this.http.get<Employee>(url);
  }

  public insert(employee:Employee):Observable<any>{
    let url = "http://localhost:5230/api/employees/InsertEmployee";
    return this.http.post<Employee>(url,employee);
  }

  updateEmployee(employee:Employee):Observable<any>{
    let url = "http://localhost:5230/api/employees/updateEmployee";
    return this.http.put<any>(url,employee);
  }

  public deleteEmployee(employeeId:number):Observable<Employee>{
    let url = "http://localhost:5230/api/employees/DeleteEmployee/"+ employeeId;
    return this.http.delete<Employee>(url);
  }

  
  
}
