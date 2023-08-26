import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { UpdateContactnumber } from '../models/update-contactnumber';
import { UpdatePassword } from '../models/update-password';
import { Router } from '@angular/router';
import { LocalStorageKey } from '../models/Enum/local-storage-key';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new Subject<any>();
  httpClient: any;
  jwtHelper: any;
  router: any;
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
  
  updatePassword(credential: UpdatePassword): Observable<boolean> {
    let url = 'http://localhost:5077/api/authentication/update/password';
    return this.http.put<any>(url, credential);
  }

  updateContact(credential: UpdateContactnumber): Observable<boolean> {
    let url = 'http://localhost:5077/api/authentication/update/contactnumber';
    return this.http.put<any>(url, credential);
  }

  getRolesFromToken(): string[] {
    const token = localStorage.getItem(LocalStorageKey.jwt);
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const roles = decodedToken.role;

      if (Array.isArray(roles)) {
        return roles;
      } else if (typeof roles === 'string') {
        return [roles];
      }
    }
    return [];
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(LocalStorageKey.jwt);
    return !this.jwtHelper.isTokenExpired(token);
  }
  getUserIdFromToken(): number | null {
    const token = localStorage.getItem(LocalStorageKey.jwt);
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.userId;
    }
    return null;
  }

  redirectToLogin() {
    return this.router.navigateByUrl('/auth/login');
  }

  isTokenHaveRequiredRole(role: string): boolean {
    const roles = this.getRolesFromToken();
    return roles.includes(role);
  }
}


