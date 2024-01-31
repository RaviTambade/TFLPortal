import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential } from '../Models/icredential';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  serviceUrl=environment.commonUrl

  signIn(credential: ICredential): Observable<any> {
    let url = `${this.serviceUrl}/auth/signin`;
    return this.httpClient.post<any>(url, credential);
  }

  
}
