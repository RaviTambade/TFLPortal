import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../Models/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  serviceurl :string=environment.apiUrl

  getTaskOfMembers(projectId:number,memberId:number): Observable<task[]> {
    let url = this.serviceurl+"tasks/" + projectId +"/"+ memberId;
    return this.httpClient.get<task[]>(url);
  }


  getTaskDetails(taskId:number): Observable<task> {
    let url = this.serviceurl+"tasks/taskdetails/" +taskId;
    return this.httpClient.get<task>(url);
  }
}
