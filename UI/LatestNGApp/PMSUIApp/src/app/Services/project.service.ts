import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Projectlist } from '../Models/projectlist';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Models/project';
import { Projecttask } from '../Models/projecttask';
import { Projectname } from '../Models/projectname';
import { Addproject } from '../Models/addproject';
import { Unassignedtask } from '../Models/unassignedtask';
import { Assignedtaskbymanager } from '../Models/assignedtaskbymanager';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private httpClient: HttpClient) { }
  private selectedProjectIdSubject = new BehaviorSubject<any>(null);
  selectedProjectId$ = this.selectedProjectIdSubject.asObservable();

  setSelectedProjectId(id: number | null) {
    this.selectedProjectIdSubject.next(id)
  }

  getProjectsList(teamMemberId: number): Observable<Projectlist[]> {
    let url = "http://localhost:5248/api/projects/list/" + teamMemberId
    return this.httpClient.get<Projectlist[]>(url)
  }

  getProjectDetails(projectId: number): Observable<Project> {
    let url = "http://localhost:5248/api/projects/" + projectId
    return this.httpClient.get<Project>(url)
  }

  getProjectMembers(projectId: number): Observable<number[]> {
    let url = "http://localhost:5248/api/projects/teammembers/" + projectId
    return this.httpClient.get<number[]>(url)
  }

  getTasksOfProject(projectId: number, timePeriod: string): Observable<Projecttask[]> {
    let url = "http://localhost:5248/api/projects/tasks/" + projectId + "/" + timePeriod
    return this.httpClient.get<Projecttask[]>(url)
  }
  getProjectNames(employeeId: number): Observable<Projectname[]> {
    let url = "http://localhost:5248/api/projects/employee/" + employeeId
    return this.httpClient.get<Projectname[]>(url)
  }

  getManagerProjects(managerId: number): Observable<Projectlist[]> {
    let url = "http://localhost:5248/api/projects/manager/" + managerId
    return this.httpClient.get<Projectlist[]>(url)
  }

  addProject(project: Addproject): Observable<boolean> {
    let url = "http://localhost:5248/api/projects/addproject"
    return this.httpClient.post<boolean>(url, project)
  }
  updateProject(project: Project): Observable<boolean> {
    let url = "http://localhost:5248/api/projects"
    return this.httpClient.put<boolean>(url, project)
  }
  deleteProject(projectId: number): Observable<boolean> {
    let url = "http://localhost:5248/api/projects/" + projectId
    return this.httpClient.delete<boolean>(url)
  }     

  unAssignedTask(projectId: number, timePeriod: string): Observable<Unassignedtask[]> {
    let url = "http://localhost:5248/api/projects/unassignedtask/" + projectId + "/" + timePeriod
    return this.httpClient.get<Unassignedtask[]>(url)
  }
  assignedTasksByManager(managerId:number,timePeriod:string):Observable<Assignedtaskbymanager[]>{
    let url="http://localhost:5248/api/projects/assignedtasksbymanager/" + managerId + "/" +timePeriod
    return this.httpClient.get<Assignedtaskbymanager[]>(url)
  }
}
