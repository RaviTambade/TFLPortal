import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  serviceurl :string="http://localhost:5263/api/"

  getTaskOfMembers(projectId:number,memberId:number): Observable<task[]> {
    let url = this.serviceurl+"tasks/" + projectId +"/"+ memberId;
    return this.httpClient.get<task[]>(url);
  }
}
