import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageKeys } from 'src/app/shared/enums/local-storage-keys';
import { TokenClaims } from 'src/app/shared/enums/tokenclaims';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor( private jwtHelper: JwtHelperService) { }

  getClaimFromToken(claim: TokenClaims) {
    let token = localStorage.getItem(LocalStorageKeys.jwt);
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken[claim];
    }
    return null;
  }
}
