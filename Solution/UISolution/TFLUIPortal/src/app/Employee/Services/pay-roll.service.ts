import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaySlip } from '../Models/Payroll/PaySlip';
import { Salary } from '../Models/Payroll/Salary';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

    private payrollAPI: string = environment.payrollAPI;

    constructor(private httpClient:HttpClient) { }
  
    //method to return  PaySlip to generate PDF 
    getEmployeeSalary(employeeId:number,month:number,year:number):Observable<PaySlip>{
        let url=`${this.payrollAPI}/employees/${employeeId}/month/${month}/year/${year}`;
        return this.httpClient.get<PaySlip>(url);
    }

    getEmployeeSalaryDetails(salaryId:number):Observable<Salary>{
        let url=`${this.payrollAPI}/employee/salary/${salaryId}`;
        return this.httpClient.get<Salary>(url);
    }

    getAllEmployeeSalaries(employeeId:number):Observable<Salary[]>{
        let url=`${this.payrollAPI}/salaries/employees/${employeeId}`;
        return this.httpClient.get<Salary[]>(url);
    } 
}