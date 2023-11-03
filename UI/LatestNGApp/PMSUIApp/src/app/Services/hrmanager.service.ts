import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrmanagerService {

  constructor(private httpClient: HttpClient) { }


  getEmployeesUserId(): Observable<any> {
    let url = "http://localhost:5230/api/Employees/users"
    return this.httpClient.get<any>(url)
  }
}
