import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { NameId } from '../Models/name-id';
import { Userinfo } from '../Models/userinfo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private roles: string[] = [];
  constructor(private httpClient: HttpClient) {
    this.loadUserRole();
  }

  getUserByContact(contactNumber: string): Observable<User> {
    let url = 'http://localhost:5102/api/users/username/' + contactNumber;
    return this.httpClient.get<User>(url);
  }

  getUserRole(userId: number): Observable<string[]> {
    let url = 'http://localhost:5031/api/userroles/roles/' + userId;
    return this.httpClient.get<string[]>(url);
  }

  getUserNamesWithId(userId: string): Observable<NameId[]> {
    let url = 'http://localhost:5102/api/users/name/' + userId;
    return this.httpClient.get<NameId[]>(url);
  }
  getUser(id: number): Observable<Userinfo> {
    let url = 'http://localhost:5102/api/users/' + id;
    return this.httpClient.get<Userinfo>(url);
  }
  
  private loadUserRole() {
    const userId = localStorage.getItem('userId');
    if (userId !== null) {
      this.getUserRole(Number(userId)).subscribe((res) => {
        this.roles = res;
      });
    }
  }

  isUserHaveRequiredRole(role: string): boolean {
    const userRole = this.roles[0];
    return userRole === role;
  }
}
  