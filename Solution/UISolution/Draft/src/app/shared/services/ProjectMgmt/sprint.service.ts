import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sprint } from '../../models/sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private httpClient:HttpClient) { }
  private serviceurl: string = environment.apiUrl;
  getSprintsTasks(sprintId:number):Observable<Sprint[]>{
     let url=this.serviceurl+'/sprints/'+sprintId+'/tasks';
    return this.httpClient.get<Sprint[]>(url);
  }

 getCurrentSprint(projectId:number,date:string):Observable<Sprint>{
    let url=`${this.serviceurl}/sprints/projects/${projectId}/date/${date}`;
    return this.httpClient.get<Sprint>(url);
  }
}
