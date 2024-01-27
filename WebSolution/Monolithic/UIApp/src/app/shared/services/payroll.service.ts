import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MonthSalary } from 'src/app/resource-management/Models/MonthSalary';
import { Salary } from 'src/app/resource-management/Models/Salary';
import { SalaryDetails } from 'src/app/resource-management/Models/SalaryDetails';
import { SalaryStructure } from 'src/app/resource-management/Models/SalaryStructure';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private httpClient:HttpClient) { }

  getEmployeeSalary(employeeId:number,month:number,year:number):Observable<MonthSalary>{
    let url="http://localhost:5263/api/payroll/salaries/employee/"+employeeId+"/month/"+month+"/year/"+year;
    return this.httpClient.get<MonthSalary>(url);
  }

  AddSalary(salary:Salary):Observable<Salary>{
    let url="http://localhost:5263/api/payroll/salaries";
    return this.httpClient.post<Salary>(url,salary);
  }

  getAllPaidEmployees(month:number,year:number):Observable<SalaryDetails[]>{
    let url="http://localhost:5263/api/payroll/salaries/paid/month/"+month+"/year/"+year;
    return this.httpClient.get<SalaryDetails[]>(url);
  }
}
