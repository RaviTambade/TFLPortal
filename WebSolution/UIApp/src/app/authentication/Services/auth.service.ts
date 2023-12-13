import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential } from '../Models/icredential';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signIn(credential: ICredential): Observable<any> {
    let url = `http://localhost:5142/api/auth/signin`;
    return this.httpClient.post<any>(url, credential);
  }
}
