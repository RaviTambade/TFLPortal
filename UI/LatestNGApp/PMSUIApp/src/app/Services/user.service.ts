import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { NameId } from '../Models/name-id';
import { Userinfo } from '../Models/userinfo';
import { TokenClaims } from '../Models/Enums/tokenClaims';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private roles: string[] = [];
  constructor(private httpClient: HttpClient, private authservice:AuthenticationService) {
    this.loadUserRole();
  }

  getUserByContact(contactNumber: string): Observable<User> {
    let url = 'http://localhost:5142/api/users/username/' + contactNumber;
    return this.httpClient.get<User>(url);
  }


  getUserNamesWithId(userId: string): Observable<NameId[]> {
    let url = 'http://localhost:5142/api/users/name/' + userId;
    return this.httpClient.get<NameId[]>(url);
  }
  getUser(id: number): Observable<Userinfo> {
    let url = 'http://localhost:5142/api/users/' + id;
    return this.httpClient.get<Userinfo>(url);
  }
  
  private loadUserRole() {
  this.roles=this.authservice.getRolesFromToken();
  }

  isUserHaveRequiredRole(role: string): boolean {
    const userRole = this.roles[0];
    return userRole === role;
  }
}
  