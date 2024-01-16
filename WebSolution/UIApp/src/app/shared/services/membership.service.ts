import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRole } from '../models/UserRole';
import { User } from 'src/app/resource-management/Models/User';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private httpClient: HttpClient) { }

  getAllRoles(lob:string):Observable<UserRole[]>{
    let url="http://localhost:5142/api/roles/lob/"+lob;
    return this.httpClient.get<UserRole[]>(url);
  }

  uploadFile(filename: string, formData: FormData): Observable<any> {
    let url = `http://localhost:5142/api/files/fileupload/${filename}`;
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  updateUser(id: number, user: User): Observable<any> {
    let url = `http://localhost:5142/api/users/${id}`;
    return this.httpClient.put<any>(url, user);
  }
}
