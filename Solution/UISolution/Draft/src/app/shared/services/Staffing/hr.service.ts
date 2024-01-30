import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/Models/User';
import { SalaryStructure } from 'src/app/hrmanager/components/payroll/models/SalaryStructure';
import { EmployeeDetails } from 'src/app/user/Models/EmployeeDetails';
import { Employee } from 'src/app/Entities/Employee';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private httpClient: HttpClient) {}

  private HrAPI: string = environment.HrAPI;

  getEmployeeByUserId(userId:number):Observable<Employee>{
    let url = `${this.HrAPI}/users/${userId}`;
    return this.httpClient.get<Employee>(url);
  }

  getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
    let url = `${this.HrAPI}/${employeeId}`;
    return this.httpClient.get<EmployeeDetails>(url);
  }
}
