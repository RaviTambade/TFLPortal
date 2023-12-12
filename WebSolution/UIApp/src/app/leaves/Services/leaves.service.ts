import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../Models/Leave';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http :HttpClient) { }

  addLeave(leave:Leave):Observable<boolean>{
    let url="http://localhost:5263/api/leaves/addleave";
    return this.http.post<boolean>(url,leave);
  }
}
