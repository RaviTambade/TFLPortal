import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MonthSalary } from 'src/app/resource-management/Models/MonthSalary';
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
}
