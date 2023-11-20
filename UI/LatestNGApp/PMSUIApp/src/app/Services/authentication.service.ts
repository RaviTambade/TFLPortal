import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Credential } from '../Models/credential';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageKeys } from '../Models/Enums/local-storage-keys';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  reloadSubject = new Subject<void>();
  reloadSubject$ = this.reloadSubject.asObservable();

  constructor(private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
  ) { }
  getRolesFromToken(): string[] {
    const token = localStorage.getItem(LocalStorageKeys.jwt);
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

}
