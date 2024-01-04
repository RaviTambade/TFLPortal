import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRole } from '../models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private httpClient: HttpClient) { }

  getAllRoles(lob:string):Observable<UserRole[]>{
    let url="http://localhost:5142/api/roles/lob/"+lob;
    return this.httpClient.get<UserRole[]>(url);
  }
}
