import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, map, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MembershipService } from '../Membership/membership.service';
import { Employee } from '../../Entities/Employee';
import { EmployeeDetails } from '../../Entities/EmployeeDetails';

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

  getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
    let url = `${this.HrAPI}/${employeeId}`;
    return this.httpClient.get<any>(url).pipe(
      switchMap((employeeResponse) => {
        console.log(employeeResponse);
        return this.membershipSvc.getUser(employeeResponse.userId).pipe(
          map((userResponse) => {
            return new EmployeeDetails(
              employeeResponse.id,
              employeeResponse.userId,
              userResponse.aadharId,
              employeeResponse.hiredOn,
              userResponse.firstName,
              userResponse.lastName,
              userResponse.email,
              userResponse.gender,
              userResponse.imageUrl,
              userResponse.birthDate,
              userResponse.contactNumber
            );
          })
        );
      })
    );
  }
}
