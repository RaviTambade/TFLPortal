import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../models/project';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any> {
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.get<any>(url);
  }

  getProjectById(projectId: number): Observable<Project> {
    let url = "http://localhost:5294/api/projects/" + projectId;
    return this.http.get<Project>(url);
  }


  addProject(project: Project): Observable<any> {
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.post<Employee>(url, project);
  }

  updateProject(form: any): Observable<any> {
    let url = "http://localhost:5294/api/projects/project/" ;
    return this.http.put<Project>(url, form);
  }
  
  deleteProject(id: any): Observable<any> {
    let url = "http://localhost:5294/api/projects/" + id;
    return this.http.delete<Project>(url);
  }


  getTotalDetails(projectId: number): Observable<Project> {
    let url = "http://localhost:5294/api/projects/projectdetails/" + projectId;
    return this.http.get<Project>(url);
  }

}
