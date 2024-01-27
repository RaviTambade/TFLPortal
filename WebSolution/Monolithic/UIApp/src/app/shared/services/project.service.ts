import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/projects/Models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private serviceurl :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getProjectDetailsById(projectId :number):Observable<Project>{
    let url=this.serviceurl+"projects/"+ projectId
    return this.httpClient.get<Project>(url);
  }

  getProjectsOfEmployee(employeeId: number): Observable<Project[]> {
    let url = this.serviceurl+"/projectmgmt/projects/employees/" + employeeId
    return this.httpClient.get<Project[]>(url)
  }

  fetchAllProject():Observable<Project[]>{
    let url=this.serviceurl+"/projectmgmt/projects";
    return this.httpClient.get<Project[]>(url);
  }

  getProjectDetails(projectId:number):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projects"+"/"+projectId;
    console.log(url);
    return this.httpClient.get<any>(url);
  }

  getAllEmployees(projectId:number):Observable<any[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/employees/"+projectId;
    return this.httpClient.get<any[]>(url);
  }


  fetchAllProjectOfProjectManager(managerId:number):Observable<Project[]>{
    let url=this.serviceurl+"/projectmgmt/projects/projectmanager/"+managerId;
    return this.httpClient.get<Project[]>(url);
  }
}
