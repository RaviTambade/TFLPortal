import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberResponse } from '../Models/MemberResponse';
import { Member } from '../Models/Member';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  membersAPIUrl = environment.apiUrl;
  employeeAPIUrl =environment.imagerServerUrl;

  constructor(private httpClient: HttpClient) {}

  getProjectMembers(projectId: number): Observable<MemberResponse[]> {
    let url = this.membersAPIUrl + '/projectmgmt/members/projects/' + projectId;
    return this.httpClient.get<MemberResponse[]>(url);
  }

  getMember(projectId: number, employeeId: number): Observable<MemberResponse> {
    let url = `${this.membersAPIUrl}/projectmgmt/members/projects/${projectId}/employees/${employeeId}`;
    return this.httpClient.get<MemberResponse>(url);
  }

  getEmployeeDetails(employeeId: number): Observable<any> {
    let url = this.membersAPIUrl + '/hr/employees/employee/' + employeeId;
    return this.httpClient.get<any>(url);
  }

  paySalary(employeeId: number): Observable<any> {
    let url = this.membersAPIUrl + '/hr/employees/employee/salary/' + employeeId;
    return this.httpClient.post<any>(url,employeeId);
  }

  insertMember(member: Member): Observable<any> {
    let url = this.membersAPIUrl + '/projectmgmt/members/insertmember';
    return this.httpClient.post<any>(url,member);
  }



}
