import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, map, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MembershipService } from '../Membership/membership.service';
import { Employee } from '../../Entities/ResourcePool/Employee';


@Injectable({
  providedIn: 'root',
})
export class HrService {
  constructor(
    private httpClient: HttpClient,
    private membershipSvc: MembershipService
  ) {}

  private HrAPI: string = environment.HrAPI;

  getEmployeeByUserId(userId: number): Observable<Employee> {
    let url = `${this.HrAPI}/users/${userId}`;
    return this.httpClient.get<Employee>(url);
  }

  getEmployeeDetails(employeeId: number): Observable<Employee> {
    let url = `${this.HrAPI}/${employeeId}`;
    return this.httpClient.get<any>(url);
  }

  addInOutTime(InOutTime:any ): Observable<any> {
    let url = `${this.HrAPI}/inouttime`;
    return this.httpClient.post<any>(url,InOutTime);
  }
}
