import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRole } from '../models/UserRole';
import { User } from 'src/app/user/Models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  membershipUrl:string=environment.commonUrl;
  constructor(private httpClient: HttpClient) { }

  getAllRoles(lob:string):Observable<UserRole[]>{
    let url=`${this.membershipUrl}/roles/lob/${lob}`;
    return this.httpClient.get<UserRole[]>(url);
  }

  uploadFile(filename: string, formData: FormData): Observable<any> {
    let url = `${this.membershipUrl}/files/fileupload/${filename}`;
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  getUser(userId: number): Observable<User> {
    let url = `${this.membershipUrl}/users/${userId}`;
    return this.httpClient.get<User>(url);
  }

  updateUser(id: number, user: User): Observable<any> {
    let url = `${this.membershipUrl}/users/${id}`;
    return this.httpClient.put<any>(url, user);
  }
}
