
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs'
  //import { User } from './user';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthenticateServiceService {
  
    constructor(private http:HttpClient) { }
  
    public ValidateUser(form:any):Observable<any>{
      let url = "http://localhost:5084/users/validateuser";
      return this.http.post<any>(url,form);
    }
  
  
  }