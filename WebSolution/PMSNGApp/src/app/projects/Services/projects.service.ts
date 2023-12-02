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
}
