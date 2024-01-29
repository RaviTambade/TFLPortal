import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getProjectDetails(projectId :number):Observable<Project>{
    let url=this.url+"projects/"+ projectId
    return this.httpClient.get<Project>(url);
  }

  getProjectsOfMembers(memberId: number): Observable<Project[]> {
    let url = this.url+"/projectmgmt/projects/employees/" + memberId
    return this.httpClient.get<Project[]>(url)
  }

  getAllProjects():Observable<Project[]>{
    let url=this.url+"/projectmgmt/projects";
    return this.httpClient.get<Project[]>(url);
  }

  getProject(projectId:number):Observable<any>{
    let url=this.url+"/projectmgmt/projects"+"/"+projectId;
    console.log(url);
    return this.httpClient.get<any>(url);
  }

  getAllMembers(projectId:number):Observable<any[]>{
    let url=this.url+"/projectmgmt/projectallocation/employees/"+projectId;
    return this.httpClient.get<any[]>(url);
  }


  getAllProjectsOfManager(managerId:number):Observable<Project[]>{
    let url=this.url+"/projectmgmt/projects/projectmanager/"+managerId;
    return this.httpClient.get<Project[]>(url);
  }
}
