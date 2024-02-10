import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../../Entities/UserMgmt/NewUser';
import { User } from '../../Entities/UserMgmt/User';
import { Role } from '../../Entities/UserMgmt/Role';
import { UserDetails } from '../../Entities/UserMgmt/UserDetails';




@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  membershipUrl:string=environment.membershipUrl;
  
  constructor(private httpClient: HttpClient) { }


  getAllUsers():Observable<User[]>{
    let url=`${this.membershipUrl}/users`;
    return this.httpClient.get<User[]>(url);
  }
  
  getAllRoles(lob:string):Observable<Role[]>{
    let url=`${this.membershipUrl}/roles/lob/${lob}`;
    return this.httpClient.get<Role[]>(url);
  }

  addNewRole(role:Role):Observable<Role[]>{
    let url=`${this.membershipUrl}/roles/role`;
    return this.httpClient.post<Role[]>(url,role);
  }

  uploadFile(filename: string, formData: FormData): Observable<any> {
    let url = `${this.membershipUrl}/files/fileupload/${filename}`;
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  getUser(userId: number): Observable<User> {
    let url = `${this.membershipUrl}/users/${userId}`;
    return this.httpClient.get<User>(url);
  }


  updateUser(id: number, user: User): Observable<any> {
    let url = `${this.membershipUrl}/users/${id}`;
    return this.httpClient.put<any>(url, user);
  }


  addUser(newUser: NewUser): Observable<boolean> {
    let url = `${this.membershipUrl}/users`;
    return this.httpClient.post<boolean>(url, newUser);
  }

  getUserDetails(userIds: string): Observable<UserDetails[]> {
    let url = `${this.membershipUrl}/users/details/ids/${userIds}`;
    return this.httpClient.get<UserDetails[]>(url);
  }
}
