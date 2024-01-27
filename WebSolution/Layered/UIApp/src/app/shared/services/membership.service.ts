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

  commonSvcUrl=environment.commonUrl;
  constructor(private httpClient: HttpClient) { }

  getAllRoles(lob:string):Observable<UserRole[]>{
    let url=`${this.commonSvcUrl}/roles/lob/${lob}`;
    return this.httpClient.get<UserRole[]>(url);
  }

  uploadFile(filename: string, formData: FormData): Observable<any> {
    let url = `${this.commonSvcUrl}/files/fileupload/${filename}`;
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  getUser(id: number): Observable<User> {
    let url = `${this.commonSvcUrl}/users/${id}`;
    return this.httpClient.get<User>(url);
  }

  updateUser(id: number, user: User): Observable<any> {
    let url = `${this.commonSvcUrl}/users/${id}`;
    return this.httpClient.put<any>(url, user);
  }
}
