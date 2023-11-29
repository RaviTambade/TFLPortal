import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberResponse } from '../Models/Member';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  membersAPIUrl = environment.apiUrl;
  employeeAPIUrl =environment.imagerServerUrl;

  constructor(private httpClient: HttpClient) {}

  getProjectMembers(projectId: number): Observable<MemberResponse[]> {
    let url = this.membersAPIUrl + '/members/projects/' + projectId;
    return this.httpClient.get<MemberResponse[]>(url);
  }

  getMember(projectId: number, employeeId: number): Observable<MemberResponse> {
    let url = `${this.membersAPIUrl}/members/projects/${projectId}/employees/${employeeId}`;
    return this.httpClient.get<MemberResponse>(url);
  }

  getEmployeeDetails(employeeId: number): Observable<User> {
    let url = this.employeeAPIUrl + 'api/users/' + employeeId;
    return this.httpClient.get<User>(url);
  }

}
