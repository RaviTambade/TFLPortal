import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential } from '../Models/icredential';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  signIn(credential: ICredential): Observable<any> {
    let url = `http://localhost:5142/api/auth/signin`;
    return this.httpClient.post<any>(url, credential);
  }


  

  // getRolesFromToken(): string[] {
  //   const token = localStorage.getItem(LocalStorageKeys.jwt);
  //   if (token) {
  //     const decodedToken = this.jwtHelper.decodeToken(token);
  //     const roles = decodedToken.role;

  //     if (Array.isArray(roles)) {
  //       return roles;
  //     } else if (typeof roles === 'string') {
  //       return [roles];
  //     }
  //   }
  //   return [];
  // }
}
