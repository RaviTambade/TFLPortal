import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ManagerviewService {
  constructor(private http :HttpClient) { }

  getAllProjects():Observable<any>{
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.get<any>(url);
  }
  
  getProjectById(projectId:number):Observable<Project>{
    let url = "http://localhost:5294/api/projects/"+projectId;
    return this.http.get<Project>(url);

  }

}
