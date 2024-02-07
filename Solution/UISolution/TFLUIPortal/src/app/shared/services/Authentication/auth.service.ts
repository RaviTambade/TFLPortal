import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { environment } from 'src/environments/environment';
import { UpdatePassword } from 'src/app/Entities/UpdatePassword';
import { updateContact } from 'src/app/Entities/UpdateContact';
import { Credential } from 'src/app/Entities/credential';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authAPIUrl = environment.authenticationAPI;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  signIn(credential: Credential): Observable<any> {
    let url = `${this.authAPIUrl}/signin`;
    return this.httpClient
      .post<any>(url, credential)
      .pipe(tap((res) => console.log('service', res)));
  }

  changePassword(credential: UpdatePassword): Observable<boolean> {
    let url = `${this.authAPIUrl}/updatepassword`;
    return this.httpClient.put<boolean>(url, credential);
  }

  updateContactNumber(credential: updateContact): Observable<boolean> {
    let url = `${this.authAPIUrl}/updatecontactnumber`;
    return this.httpClient.put<boolean>(url, credential);
  }

  getClaimFromToken(claim: TokenClaims) {
    let token = localStorage.getItem(LocalStorageKeys.jwt);
    if (token !=null && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);
      return decodedToken[claim];
    }
    return null;
  }
}
