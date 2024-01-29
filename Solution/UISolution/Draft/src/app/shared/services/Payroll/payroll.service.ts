import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MonthSalary } from 'src/app/hrmanager/components/payroll/models/MonthSalary';
import { Salary } from 'src/app/hrmanager/components/payroll/models/Salary';
import { SalaryStructure } from 'src/app/hrmanager/components/payroll/models/SalaryStructure';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  private serviceurl: string = environment.apiUrl;
  private commonUrl:string =environment.commonUrl;
  constructor(private httpClient:HttpClient) { }

  getEmployeeSalary(employeeId:number,month:number,year:number):Observable<MonthSalary>{
    let url="http://localhost:5263/api/payroll/salaries/employee/"+employeeId+"/month/"+month+"/year/"+year;
    return this.httpClient.get<MonthSalary>(url);
  }

  AddSalary(salary:Salary):Observable<Salary>{
    let url="http://localhost:5263/api/payroll/salaries";
    return this.httpClient.post<Salary>(url,salary);
  }

  getAllPaidEmployees(month:number,year:number):Observable<Salary[]>{
    let url="http://localhost:5263/api/payroll/salaries/paid/month/"+month+"/year/"+year;
    return this.httpClient.get<Salary[]>(url);
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
