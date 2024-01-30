import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';
import { environment } from 'src/environments/environment';
import { ICredential } from '../../draft/authentication/Models/icredential';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  membershipAPIUrl = environment.membershipUrl;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  signIn(credential: ICredential): Observable<any> {
    let url = `${this.membershipAPIUrl}/auth/signin`;
    return this.httpClient.post<any>(url, credential);
  }

  getClaimFromToken(claim: TokenClaims) {
    let token = localStorage.getItem(LocalStorageKeys.jwt);
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken[claim];
    }
    return null;
  }
}
