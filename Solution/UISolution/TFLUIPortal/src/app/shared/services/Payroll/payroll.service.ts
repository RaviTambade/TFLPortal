import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MonthSalary } from '../../Entities/MonthSalary';
import { Salary } from '../../Entities/Salary';
import { SalaryStructure } from '../../Entities/SalaryStructure';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  private payrollAPI: string = environment.payrollAPI;

  constructor(private httpClient:HttpClient) { }

  getEmployeeSalary(employeeId:number,month:number,year:number):Observable<MonthSalary>{
    let url=`${this.payrollAPI}/salaries/employee/${employeeId}/month/${month}/year/${year}`;
    return this.httpClient.get<MonthSalary>(url);
  }

  AddSalary(salary:Salary):Observable<Salary>{
    let url=`${this.payrollAPI}/salaries`;
    return this.httpClient.post<Salary>(url,salary);
  }

  getAllPaidEmployees(month:number,year:number):Observable<Salary[]>{
    let url=`${this.payrollAPI}/salaries/paid/month/${month}/year/${year}`;
    return this.httpClient.get<Salary[]>(url);
  }

  getAllUnPaidEmployees(month:number,year:number):Observable<Salary[]>{
    let url=`${this.payrollAPI}/salaries/unpaid/month/${month}/year/${year}`;
    return this.httpClient.get<Salary[]>(url);
  }

  getSalaryDetails(salaryId:number):Observable<Salary[]>{
    let url=`${this.payrollAPI}/employee/salary/${salaryId}`;
    return this.httpClient.get<Salary[]>(url);
  }

  addSalaryStructure(salaryStructure:SalaryStructure):Observable<SalaryStructure>{
    let url=`${this.payrollAPI}/employees/salarystructure`;
    return this.httpClient.post<SalaryStructure>(url,salaryStructure); 
  }
  
  getSalaryHistory(employeeId:number):Observable<any>{
    let url=`${this.payrollAPI}/salaries/employees/${employeeId}`;
    return this.httpClient.get<any>(url);
  }

  paySalary(employeeId: number,month:number,year:number): Observable<any> {
    let url = `${this.payrollAPI}/hr/employees/employee/salary/${employeeId}/month/${month}/year/${year}`;
    return this.httpClient.post<any>(url,employeeId);
  }
}
