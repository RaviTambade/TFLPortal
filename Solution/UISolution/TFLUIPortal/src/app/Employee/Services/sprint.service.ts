import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TaskModel } from '../Models/ProjectMgmt/taskModel';
import { Sprint } from '../Models/ProjectMgmt/sprint';
import { SprintTask } from '../Models/ProjectMgmt/sprintTask';


@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private httpClient:HttpClient) { }

  sprintApi: string = environment.sprintAPI;

  getSprintsTasks(sprintId: number): Observable<TaskModel[]> {
    let url = this.sprintApi +"/"+ sprintId + '/tasks';
    return this.httpClient.get<TaskModel[]>(url);
  }

  getCurrentSprint(projectId: number, date: string): Observable<Sprint> {
    let url = this.sprintApi+'/project/'+projectId+'/sprints/date/'+date;
    return this.httpClient.get<Sprint>(url);
  }

  getSprint(sprintId:number): Observable<Sprint> {
    let url = `${this.sprintApi}/${sprintId}`;
    return this.httpClient.get<Sprint>(url);
  }

  getSprintTask(taskId: number): Observable<SprintTask> {
    let url = `${this.sprintApi}/tasks/${taskId}`;
    return this.httpClient.get<SprintTask>(url);
  }


  getSprints(projectId:number): Observable<Sprint[]> {
    let url = `${this.sprintApi}/project/${projectId}/sprints`;
    return this.httpClient.get<Sprint[]>(url);
  }


}
