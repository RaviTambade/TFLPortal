import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient:HttpClient) { }
  
  getUserByContact(contactNumber: string): Observable<User> {
    let url = "http://localhost:5102/api/users/username/" + contactNumber;
    return this.httpClient.get<User>(url);
  }

  getUserRole(userId:number):Observable<string[]>{
    let url="http://localhost:5031/api/userroles/roles/" + userId;
    return this.httpClient.get<string[]>(url);
  }
}
