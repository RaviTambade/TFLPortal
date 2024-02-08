import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenClaims } from '../../enums/tokenclaims';
import { LocalStorageKeys } from '../../enums/local-storage-keys';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private jwtHelper: JwtHelperService) {}

  getClaimFromToken(claim: TokenClaims) {
    let token = localStorage.getItem(LocalStorageKeys.jwt);
    if (token != null && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);
      return decodedToken[claim];
    }
    return null;
  }
}
