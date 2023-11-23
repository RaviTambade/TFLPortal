import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';
import { UserDetail } from '../Models/UserDetail';

@Injectable({
  providedIn: 'root',
})
export class ResourceManagementService {
  constructor(private httpClient: HttpClient) {}

  serviceurl: string = 'http://localhost:5230/api/';
  svcurl: string = 'http://localhost:5248/api/';
  membershipSvcUrl: string = 'http://localhost:5142/api';

  getEmployeeId(userId: number): Observable<number> {
    let url = this.serviceurl + 'Employees/employeeid/' + userId;
    return this.httpClient.get<number>(url);
  }
  getUserId(employeeId: string): Observable<string[]> {
    let url = this.serviceurl + 'Employees/userid/' + employeeId;
    return this.httpClient.get<string[]>(url);
  }
  getEmployee(employeeId: number): Observable<Employee> {
    let url = this.serviceurl + '/Employees/employeeinfo/' + employeeId;
    return this.httpClient.get<Employee>(url);
  }

  getUserIdByManagerId(managerId: number): Observable<number[]> {
    let url = this.serviceurl + 'Employees/useridbymanager/' + managerId;
    return this.httpClient.get<number[]>(url);
  }

  getProjectMembers(projectId: number): Observable<number[]> {
    let url = this.svcurl + 'projects/teammembers/' + projectId;
    return this.httpClient.get<number[]>(url);
  }

  getUserDetails(ids: string): Observable<UserDetail[]> {
    let url = `${this.membershipSvcUrl}/users/name/${ids}`;
    return this.httpClient.get<UserDetail[]>(url);
  }
}
