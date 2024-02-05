import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from 'src/app/Entities/Member';
import { Sprint } from 'src/app/Entities/sprint';
import { Project } from 'src/app/Entities/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectApi:string=environment.projectAPI;
  projectAllocation:string=environment.projectAllocation;
  sprintApi:string=environment.sprintAPI;
  
  constructor(private httpClient: HttpClient) { }

  getAllProjects():Observable<Project[]>{
    let url=this.projectApi+"/projects";
    return this.httpClient.get<Project[]>(url);
  }

  getProjects(memberId: number): Observable<Project[]> {
    let url = this.projectApi+"/projects/members/" + memberId
    return this.httpClient.get<Project[]>(url)
  }



  getProject(projectId :number):Observable<Project>{
    let url=this.projectApi+"projects/"+ projectId
    return this.httpClient.get<Project>(url);
  }


  getAllProjectMembers(projectId:number):Observable<any[]>{
    let url=this.projectAllocation+"/projects"+projectId;
    return this.httpClient.get<any[]>(url);
  }

  getEmployeesOnBench():Observable<any[]>{
    let url=this.projectAllocation+"/employeesonbench";
    return this.httpClient.get<any[]>(url);
  }

  assignMember(member:Member):Observable<boolean>{
    let url=this.projectAllocation;
    return this.httpClient.post<boolean>(url,member);
  }

  releaseMember(member:Member):Observable<boolean>{
    let url=this.projectAllocation;
    return this.httpClient.put<boolean>(url,member);
  }


  getSprintsTasks(sprintId:number):Observable<Sprint[]>{
    let url=this.sprintApi+'/sprints/'+sprintId+'/tasks';
   return this.httpClient.get<Sprint[]>(url);
  }

  getCurrentSprint(projectId:number,date:string):Observable<Sprint>{
   let url=`${this.sprintApi}/sprints/projects/${projectId}/date/${date}`;
   return this.httpClient.get<Sprint>(url);
 }
}
