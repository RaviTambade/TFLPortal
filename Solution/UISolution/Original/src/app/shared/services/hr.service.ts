import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/Models/User';
import { SalaryStructure } from 'src/app/resource-management/Models/SalaryStructure';
import { EmployeeDetails } from 'src/app/activity/Models/EmployeeDetails';
import { Employee } from 'src/app/activity/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private httpClient: HttpClient) {}

  private serviceurl: string = environment.apiUrl;
  private commonUrl:string =environment.commonUrl;

  getEmployeeByUserId(userId:number):Observable<Employee>{
    let url = this.serviceurl + '/hr/employees/users/'+userId;
    console.log(url)
    return this.httpClient.get<Employee>(url);
  }

  getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
    let url = this.serviceurl + '/hr/employees/employee' + '/' + employeeId;
    return this.httpClient.get<EmployeeDetails>(url);
  }

  getEmployee(contactNumber:string):Observable<User>{
    let url=this.commonUrl+"/users/contact/"+contactNumber;
    return this.httpClient.get<User>(url);
  }

  getEmployeeSalaryStructure(salaryStructure:SalaryStructure):Observable<SalaryStructure>{
    let url=this.serviceurl+"/hr/employees/employee/salary";
    return this.httpClient.post<SalaryStructure>(url,salaryStructure); 
  }
  
  getSalaryStructure(employeeId:number):Observable<any>{
    let url=this.serviceurl+"/payroll/salaries/employees/"+employeeId;
    return this.httpClient.get<any>(url);
  }

  getSalaryHistory(employeeId:number):Observable<any>{
    let url=this.serviceurl+"/payroll/salaries/employee/"+employeeId;
    return this.httpClient.get<any>(url);
  }

  paySalary(employeeId: number,month:number,year:number): Observable<any> {
    let url = this.serviceurl + '/hr/employees/employee/salary/'+ employeeId+'/month/'+month+'/year/'+year;
    return this.httpClient.post<any>(url,employeeId);
  }
}
