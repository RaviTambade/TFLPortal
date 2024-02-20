import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Project } from '../Models/ProjectMgmt/Project';
import { Member } from '../Models/ProjectMgmt/Member';



@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectApi: string = environment.projectAPI;

  constructor(private httpClient: HttpClient) {}

  getProject(projectId: number): Observable<Project> {
    let url = this.projectApi + '/projects/' + projectId;
    return this.httpClient.get<Project>(url);
  }

  getProjects(memberId: number): Observable<Project[]> {
    let url = this.projectApi + '/projects/members/' + memberId;
    return this.httpClient.get<Project[]>(url);
  }

  getAllProjectMembers(projectId: number): Observable<any[]> {
    let url = this.projectApi + '/projects/' + projectId + '/members';
    return this.httpClient.get<any[]>(url);
  }

  
}
