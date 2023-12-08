import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Models/project';
import { environment } from 'src/environments/environment';
import { ProjectAllocation } from '../Models/projectallocation';
import { ReleaseEmployee } from '../Models/ReleaseEmployee';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  private serviceurl :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  assignedEmployeeToProject(projectId:number,employeeId:number,project:ProjectAllocation):Observable<ProjectAllocation>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+ projectId +"/allocate/employee/"+employeeId;
    return this.httpClient.post<ProjectAllocation>(url,project);
  }

  releaseEmployeeFromProject(projectId:number,employeeId:number,project:ReleaseEmployee):Observable<boolean>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+ projectId +"/release/employee/"+employeeId;
    return this.httpClient.put<boolean>(url,project);
  }


  getAllUnassignedEmployees():Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/release/employees";
    return this.httpClient.get<any>(url);
  }

  getAllAssignedEmployees(status:string):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/allocated/employees/"+ status ;
    return this.httpClient.get<any>(url);
  }

  getAllProjectsBetweenDates(fromAssignedDate:string,toAssignedDate:string):Observable<ProjectAllocation[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectAllocation[]>(url);
  }

  getAllProjectsOfEmployeeBetweenDates(fromAssignedDate:string,toAssignedDate:string,employeeId:number):Observable<ProjectAllocation[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/employees/"+employeeId+"/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectAllocation[]>(url);
  }

  getAssignedEmployeesOfProject(projectId:number):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/" +projectId +"/allocatedemployees";  
    return this.httpClient.get<any>(url);
  }

  getUnssignedEmployeesOfProject(projectId:number){
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/" +projectId +"/releaseemployees";  
    return this.httpClient.get<any>(url);
  }
}
