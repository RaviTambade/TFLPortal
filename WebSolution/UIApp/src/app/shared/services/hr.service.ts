import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/activity/Models/Employee';
import { User } from 'src/app/resource-management/Models/User';
import { SalaryStructure } from 'src/app/resource-management/Models/SalaryStructure';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private httpClient: HttpClient) {}

  private serviceurl: string = environment.apiUrl;
  private commonUrl:string ="http://localhost:5142/api";

  getEmployeeId(userId:number):Observable<number>{
    let url = this.serviceurl + '/hr/employees/users/'+userId;
    return this.httpClient.get<number>(url);
  }

  getEmployeeDetails(employeeId: number): Observable<Employee> {
    let url = this.serviceurl + '/hr/employees/employee' + '/' + employeeId;
    return this.httpClient.get<Employee>(url);
  }

  getAllEmployees(projectId:number):Observable<any[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/employees/"+projectId;
    return this.httpClient.get<any[]>(url);
  }

  getEmployee(contactNumber:string):Observable<User>{
    let url=this.commonUrl+"/users/contact/"+contactNumber;
    return this.httpClient.get<User>(url);
  }

  getEmployeeSalaryStructure(salaryStructure:SalaryStructure):Observable<SalaryStructure>{
    let url=this.serviceurl+"/hr/employees/employee/salary";
    return this.httpClient.post<SalaryStructure>(url,salaryStructure);
 
    // http://localhost:5142/api/hr/employees/employee/salary
 
  }
}
