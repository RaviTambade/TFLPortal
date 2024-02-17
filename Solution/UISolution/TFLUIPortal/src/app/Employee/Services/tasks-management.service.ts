import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../Models/Task';
 

@Injectable({
  providedIn: 'root'
})
export class TasksManagementService {

  constructor(private http: HttpClient) { }

  private taskAPIUrl: string = environment.taskAPI;

  AddTask(task:Task): Observable<boolean> {
    return this.http.post<boolean>(this.taskAPIUrl, task);
  }

  getAllTasks(projectId: number): Observable<Task[]> {
    let url = `${this.taskAPIUrl}/projects/${projectId}`;
    return this.http.get<Task[]>(url);
  }

 getAllTodaysTasks(projectId: number,date:string): Observable<Task[]> {
    let url = `${this.taskAPIUrl}/projects/${projectId}/date/${date}`;
    return this.http.get<Task[]>(url);
  }
  
  getAllTasksOfMember(assignedTo: number): Observable<Task[]> {
    let url = `${this.taskAPIUrl}/members/${assignedTo}`;
    return this.http.get<Task[]>(url);
  }


  getAllTasksOfProjectMember(projectId: number, memberId: number): Observable<Task[]> {
    let url = `${this.taskAPIUrl}/projects/${projectId}/members/${memberId}`;
    return this.http.get<Task[]>(url);
  }


  updateTask(taskId: number,status: string): Observable<boolean> {
    let url =`${this.taskAPIUrl}/${taskId}/status/${status}` ;
    return this.http.put<boolean>(url, status);
  }

  getAllTasksOfProject(memberId:number,projectId:number,status:string):Observable<Task[]>{
    let url=`${this.taskAPIUrl}/projects/${projectId}/members/${memberId}/status/${status}`;
    return this.http.get<Task[]>(url);
  }

  getAllTasksOfSprintAndMember(sprintId:number,memberId:number,status:string):Observable<Task[]>{
    let url=`${this.taskAPIUrl}/sprints/${sprintId}/members/${memberId}/status/${status}`;
    return this.http.get<Task[]>(url);
  }

  getAllTasksOfSprint(sprintId:number,memberId:number,status:string,tasktype:string):Observable<Task[]>{
    let url=`${this.taskAPIUrl}/sprints/${sprintId}/members/${memberId}/status/${status}/tasktype/${tasktype}`;
    return this.http.get<Task[]>(url);
  }
  //http://localhost:5263/api/tasks/sprints/1/members/10/status/inprogress

  getProjectTasksOfMember(projectId:number,memberId:number){
  let url =`${this.taskAPIUrl}/projects/${projectId}/members/${memberId}`;
    return this.http.get<any>(url);
  }

  getAllTasksCount(): Observable<any> {
    let url =`${this.taskAPIUrl}/Count`;
    return this.http.get<any>(url);
  }
  

  getTaskDetails(taskId:number):Observable<Task>{
    let url=`${this.taskAPIUrl}/${taskId}`;
    return this.http.get<Task>(url);
  }
}
