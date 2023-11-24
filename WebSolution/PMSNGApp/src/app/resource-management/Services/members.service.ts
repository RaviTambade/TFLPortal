import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Models/Member';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  membersAPIUrl = environment.membersAPIUrl;
  constructor(private httpClient: HttpClient) {}

  getProjectMembers(projectId: number): Observable<Member[]> {
    let url = this.membersAPIUrl + '/members/projects/' + projectId;
    return this.httpClient.get<Member[]>(url);
  }
}
