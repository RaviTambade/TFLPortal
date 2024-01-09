import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectEmployees } from 'src/app/project-manager/Model/ProjectEmployes';
import { ProjectMembership } from 'src/app/projects/Models/projectmembership';
import { ProjectMembershipDetails } from 'src/app/projects/Models/projectmembershipdetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectallocationService {
  
  private serviceurl :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  assignedEmployeeToProject(projectId:number,employeeId:number,project:ProjectMembership):Observable<ProjectMembership>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+ projectId +"/allocate/employee/"+employeeId;
    return this.httpClient.post<ProjectMembership>(url,project);
  }

  releaseEmployeeFromProject(projectId:number,employeeId:number,project:any):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/releaseproject/"+ projectId +"/"+employeeId;
    return this.httpClient.post<any>(url,project);
  }

  getAllUnassignedEmployees():Observable<ProjectMembershipDetails>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/unassignedemployees";
    return this.httpClient.get<ProjectMembershipDetails>(url);
  }

  getAllAssignedEmployees(status:string):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/assignedemployees/"+ status ;
    return this.httpClient.get<any>(url);
  }

  getAllProjectsBetweenDates(fromAssignedDate:string,toAssignedDate:string):Observable<ProjectMembership[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectMembership[]>(url);
  }

  getAllProjectsOfEmployeeBetweenDates(fromAssignedDate:string,toAssignedDate:string,employeeId:number):Observable<ProjectMembership[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+employeeId+"/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectMembership[]>(url);
  }

  getAssignedEmployeesOfProject(projectId:number):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/employees/" +projectId;  
    return this.httpClient.get<any>(url);
  }

  getUnssignedEmployeesOfProject(projectId:number){
    let url=this.serviceurl+"/projectmgmt/projectallocation/unassignemployees/" +projectId;  
    return this.httpClient.get<any>(url);
  }

  getEmployeesOfProject(projectId:number,status:string){
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+projectId+"/status/"+status+"/employees";  
    return this.httpClient.get<ProjectEmployees[]>(url);
  }
}
