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
    let url="http://localhost:5263/api/payroll/salaries/employees/"+employeeId+"/month/"+month+"/year/"+year;
    return this.httpClient.get<MonthSalary>(url);
  }

  insertSalary(salary:Salary):Observable<Salary>{
    let url="http://localhost:5263/api/payroll/insertsalary";
    return this.httpClient.post<Salary>(url,salary);
  }

  getAllEmployee(month:number,year:number):Observable<SalaryDetails[]>{
    let url="http://localhost:5263/api/payroll/employees/salary/month/"+month+"/year/"+year;
    return this.httpClient.get<SalaryDetails[]>(url);
  }
}
