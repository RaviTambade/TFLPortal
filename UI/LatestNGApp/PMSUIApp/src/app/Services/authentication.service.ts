import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential } from '../Models/credential';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient,
    private jwtHelper: JwtHelperService,
    ) { }
  validate(credential: Credential): Observable<any> {
    let url = 'http://localhost:5077/api/authentication/signin';
    return this.httpClient.post<any>(url, credential);
  }

  getContactNumberFromToken(): string | null {
    const token = localStorage.getItem("JWT");
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.contactNumber;
    }
    return null;
  }

}
