import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../../Entities/Projectmgmt/Member';
import { Project } from '../../Entities/Projectmgmt/Project';
import { Sprint } from '../../Entities/Projectmgmt/sprint';


import { SprintTask } from '../../Entities/Projectmgmt/sprintTask';
import { TaskModel } from '../../Models/Projectmgmt/taskModel';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectApi: string = environment.projectAPI;
  sprintApi: string = environment.sprintAPI;

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

  getSprintsTasks(sprintId: number): Observable<TaskModel[]> {
    let url = this.projectApi + '/projects/' + sprintId + '/tasks';
    return this.httpClient.get<TaskModel[]>(url);
  }

  getCurrentSprint(projectId: number, date: string): Observable<Sprint> {
    let url = `${this.projectApi}/projects/${projectId}/sprints/date/${date}`;
    return this.httpClient.get<Sprint>(url);
  }

  getSprint(sprintId:number): Observable<Sprint> {
    let url = `${this.projectApi}/projects/sprints/${sprintId}`;
    return this.httpClient.get<Sprint>(url);
  }

  getSprintTask(taskId: number): Observable<SprintTask> {
    let url = `${this.projectApi}/projects/sprints/tasks/${taskId}`;
    return this.httpClient.get<SprintTask>(url);
  }


}
