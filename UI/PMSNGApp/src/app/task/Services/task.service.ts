import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unassignedtask } from '../Models/unassignedtask';
import { Projecttask } from '../Models/projecttask';
import { Unassignedtaskbymanager } from '../Models/unassignedtaskbymanager';
import { Assignedtaskbymanager } from '../Models/assignedtaskbymanager';
import { task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  serviceurl :string="http://localhost:5283/api/"

  // unAssignedTask(projectId: number, timePeriod: string): Observable<Unassignedtask[]> {
  //   let url =this.serviceurl+ "projects/unassignedtask/" + projectId + "/" + timePeriod
  //   return this.httpClient.get<Unassignedtask[]>(url)
  // }
  // assignedTasksByManager(managerId:number,timePeriod:string):Observable<Assignedtaskbymanager[]>{
  //   let url=this.serviceurl+"projects/assignedtasksbymanager/" + managerId + "/" +timePeriod
  //   return this.httpClient.get<Assignedtaskbymanager[]>(url)
  // }
  // unAssignedTasksByManager(managerId:number,timePeriod:string):Observable<Unassignedtaskbymanager[]>{
  //   let url=this.serviceurl+"/projects/unassignedtasksbymanager/" + managerId + "/" +timePeriod
  //   return this.httpClient.get<Unassignedtaskbymanager[]>(url)
  // }

  // getTasksOfProject(projectId: number, timePeriod: string): Observable<Projecttask[]> {
  //   let url = this.serviceurl+"projects/tasks/" + projectId + "/" + timePeriod
  //   return this.httpClient.get<Projecttask[]>(url)
  // }

  getTaskDetails(taskId:number): Observable<task> {
    let url = this.serviceurl+"tasks/details/" + taskId 
    return this.httpClient.get<task>(url)
  }
}
