import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Models/project';
import { environment } from 'src/environments/environment';
import { ProjectAllocation } from '../Models/projectallocation';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  private serviceurl :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  getAllProjects(): Observable<Project[]> {
    let url = `${this.serviceurl}/projects`;
    return this.httpClient.get<Project[]>(url)
  }

  getProjectOfEmployee(employeeId: number): Observable<Project[]> {
    let url = this.serviceurl+"/projectmgmt/projects/employees/" + employeeId
    return this.httpClient.get<Project[]>(url)
  }
 

  getProjectDetailsById(projectId :number):Observable<Project>{
    let url=this.serviceurl+"projects/"+ projectId
    return this.httpClient.get<Project>(url);
  }

  assignedEmployeeToProject(projectId:number,employeeId:number,project:ProjectAllocation):Observable<ProjectAllocation>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/assignproject/"+ projectId +"/"+employeeId;
    return this.httpClient.post<ProjectAllocation>(url,project);
  }

  releaseEmployeeFromProject(projectId:number,employeeId:number,project:any):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/releaseproject/"+ projectId +"/"+employeeId;
    return this.httpClient.post<any>(url,project);
  }

  getAllUnassignedEmployees(status:string):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/unassignedemployees/"+ status ;
    return this.httpClient.get<any>(url);
  }

  getAllAssignedEmployees(status:string):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/assignedemployees/"+ status ;
    return this.httpClient.get<any>(url);
  }

  getAllProjectsBetweenDates(fromAssignedDate:string,toAssignedDate:string):Observable<ProjectAllocation[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectAllocation[]>(url);
  }

  getAllProjectsOfEmployeeBetweenDates(fromAssignedDate:string,toAssignedDate:string,employeeId:number):Observable<ProjectAllocation[]>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/projects/"+employeeId+"/fromassigneddate/"+ fromAssignedDate+"/toassigneddate"+toAssignedDate ;
    return this.httpClient.get<ProjectAllocation[]>(url);
  }

  getAssignedEmployeesOfProject(projectId:number):Observable<any>{
    let url=this.serviceurl+"/projectmgmt/projectallocation/employees/" +projectId;  
    return this.httpClient.get<any>(url);
  }

  getUnssignedEmployeesOfProject(projectId:number){
    let url=this.serviceurl+"/projectmgmt/projectallocation/unassignemployees/" +projectId;  
    return this.httpClient.get<any>(url);
  }
}
