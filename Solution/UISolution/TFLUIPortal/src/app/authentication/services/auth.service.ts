import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { updateContact } from 'src/app/shared/Entities/UserMgmt/UpdateContact';
import { Credential } from 'src/app/shared/Entities/UserMgmt/credential';
import { UpdatePassword } from 'src/app/shared/Entities/UserMgmt/UpdatePassword';


@Injectable()
export class AuthService {
  authAPIUrl = environment.authenticationAPI;

  constructor(
    private httpClient: HttpClient,
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

}
