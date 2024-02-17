import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../Models/Member';
import { Project } from '../Models/Project';



@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectApi: string = environment.projectAPI;

  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    let url = this.projectApi + '/projects';
    return this.httpClient.get<Project[]>(url);
  }

  getProjects(memberId: number): Observable<Project[]> {
    let url = this.projectApi + '/projects/members/' + memberId;
    return this.httpClient.get<Project[]>(url);
  }

  getProject(projectId: number): Observable<Project> {
    let url = this.projectApi + '/projects/' + projectId;
    return this.httpClient.get<Project>(url);
  }

  getAllProjectMembers(projectId: number): Observable<any[]> {
    let url = this.projectApi + '/projects/' + projectId + '/members';
    return this.httpClient.get<any[]>(url);
  }

  getEmployeesOnBench(): Observable<any[]> {
    let url = this.projectApi + '/employeesonbench';
    return this.httpClient.get<any[]>(url);
  }

  assignMember(member: Member): Observable<boolean> {
    let url = this.projectApi;
    return this.httpClient.post<boolean>(url, member);
  }

  releaseMember(member: Member): Observable<boolean> {
    let url = this.projectApi;
    return this.httpClient.put<boolean>(url, member);
  }

  
}
