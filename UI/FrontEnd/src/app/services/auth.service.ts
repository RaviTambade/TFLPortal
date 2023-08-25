import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  validate(credential:Credential):Observable<boolean>{
    let url="http://localhost:5077/api/authentication/signin";
    return this.http.post<any>(url,credential);
  }

  register(credential:Credential):Observable<boolean>{
    let url="http://localhost:5077/api/authentication/register";
    return this.http.post<any>(url,credential);
  }

  newUser(user:User):Observable<boolean>{

    let url="http://localhost:5102/api/users";
    return this.http.post<any>(url,user);
  }

  getUserId(contactNumber:any):Observable<any>{

    let url="http://localhost:5102/api/users/userid/"+contactNumber;
    return this.http.get<any>(url,contactNumber);
  }
  getRolesOfUser(userId:any):Observable<any>{

    let url="http://localhost:5131/api/role/user/"+userId;
    return this.http.get<any>(url,userId);
  }
  }

