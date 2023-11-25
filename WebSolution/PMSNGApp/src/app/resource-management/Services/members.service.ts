import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberResponse } from '../Models/Member';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  membersAPIUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getProjectMembers(projectId: number): Observable<MemberResponse[]> {
    let url = this.membersAPIUrl + '/members/projects/' + projectId;
    return this.httpClient.get<MemberResponse[]>(url);
  }

  getMember(projectId: number, employeeId: number): Observable<MemberResponse> {
    let url = `${this.membersAPIUrl}/members/projects/${projectId}/employees/${employeeId}`;
    return this.httpClient.get<MemberResponse>(url);
  }

}
