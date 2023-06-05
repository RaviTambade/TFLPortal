import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from './Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  public getProjects():Observable<Projects[]>{
    let url= "http://localhost:5294/api/projects/projects";
    return this.http.get<Projects[]>(url);
  }

  public getProjectById(projId:number):Observable<Projects>{
    let url = "http://localhost:5294/api/projects/"+projId;
    return this.http.get<Projects>(url);
  }

  public insert(project:Projects):Observable<any>{
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.post<Projects>(url,project);
  }

  public update(project:Projects):Observable<any>{
    let url="http://localhost:5294/api/projects/project"
  return this.http.put<any>(url,project);
}

delete(projId:number):Observable<any>{
  let url="http://localhost:5294/api/projects/"+projId;
  return this.http.delete<any>(url);
}


}
