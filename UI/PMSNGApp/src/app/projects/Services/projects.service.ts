import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Projectlist } from '../Models/projectlist';
import { Project } from '../Models/project';
import { Projectname } from '../Models/projectname';
import { Employeeidwithuserid } from '../Models/employeeidwithuserid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  private serviceurl :string="http://localhost:5248/api/";
  constructor(private httpClient: HttpClient) { }
  private selectedProjectIdSubject = new BehaviorSubject<any>(null);
  selectedProjectId$ = this.selectedProjectIdSubject.asObservable();

  setSelectedProjectId(id: number | null) {
    this.selectedProjectIdSubject.next(id)
  }

  getProjectsList(teamMemberId: number): Observable<Projectlist[]> {
    let url = this.serviceurl+"projects/list/" + teamMemberId
    return this.httpClient.get<Projectlist[]>(url)
  }

  getProjectDetails(projectId: number): Observable<Project> {
    let url = this.serviceurl+"projects/" + projectId
    return this.httpClient.get<Project>(url)
  }

  getProjectMembers(projectId: number): Observable<number[]> {
    let url = this.serviceurl+"projects/teammembers/" + projectId
    return this.httpClient.get<number[]>(url)
  }

  getProjectNames(employeeId: number): Observable<Projectname[]> {
    let url = this.serviceurl+"projects/employee/" + employeeId
    return this.httpClient.get<Projectname[]>(url)
  }

  getManagerProjects(managerId: number): Observable<Projectlist[]> {
    let url = this.serviceurl+"projects/manager/" + managerId
    return this.httpClient.get<Projectlist[]>(url)
  }

  addProject(project: Project): Observable<boolean> {
    let url = this.serviceurl+"projects/addproject"
    return this.httpClient.post<boolean>(url, project)
  }
  updateProject(project: Project): Observable<boolean> {
    let url = this.serviceurl+"/projects"
    return this.httpClient.put<boolean>(url, project)
  }
  deleteProject(projectId: number): Observable<boolean> {
    let url = this.serviceurl+"projects/" + projectId
    return this.httpClient.delete<boolean>(url)
  }   
  
  getEmployeeIdWithUserId(projectId:number):Observable<Employeeidwithuserid[]>{
    let url=this.serviceurl+"projects/employeeidwithuserid/" +projectId
    return this.httpClient.get< Employeeidwithuserid[]>(url)
  }
  getProjectTitle(projectId:number):Observable<string>{
    let url=this.serviceurl+"projects/title/" + projectId
    return this.httpClient.get(url, { responseType: 'text' })
  }
  getManagerProjectNames(managerId:number):Observable<Projectname[]>{
    let url=this.serviceurl+"projects/managerprojects/" + managerId
    return this.httpClient.get<Projectname[]>(url)
  }

  getTeamMemberIds(teamManagerId:number):Observable<number[]>{
    let url=this.serviceurl+"projects/teammemberids/" +teamManagerId
    return this.httpClient.get<number[]>(url)
  }

  getProjectDetailsById(projectId :number):Observable<Project>{
    let url=this.serviceurl+"projects/"+ projectId
    return this.httpClient.get<Project>(url);
  }
}
