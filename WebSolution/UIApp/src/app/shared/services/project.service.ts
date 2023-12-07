import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/app/projects/Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }
 
   
  private serviceurl :string=environment.apiUrl;

  fetchAllProject():Observable<Project[]>{
    let url=this.serviceurl+"/projectmgmt/projects";
    return this.httpClient.get<Project[]>(url);
  }
  
  // getAllProjects():Observable<Project[]>{
  //   let url=this.serviceurl+"/projectmgmt/projects";
  //   return this.httpClient.get<Project[]>(url);
  
  // }

  getProjectDetails(projectId:number):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projects"+"/"+projectId;
    console.log(url);
    return this.httpClient.get<any>(url);
  }

 
  
}
