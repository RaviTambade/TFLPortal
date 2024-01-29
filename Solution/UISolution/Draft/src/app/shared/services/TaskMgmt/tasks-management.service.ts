import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksManagementService {

  constructor(private http: HttpClient) { }

  private serviceurl: string = environment.apiUrl;

  // private serviceurl: string = 'http://localhost:5263/api';

  AddTask(task:Task): Observable<boolean> {
    let url = this.serviceurl + '/tasks/';
    console.log('service called');
    return this.http.post<boolean>(url, task);
  }

  fetchTasksByProject(projectId: number): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/projects/' + projectId;
    console.log(url);
    return this.http.get<Task[]>(url);
  }

 fetchTodaysTasks(projectId: number,date:string): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/projects/' + projectId+'/date/'+date;
    console.log(url);
    return this.http.get<Task[]>(url);
  }
  
  fetchAllTasks(assignedTo: number): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/members/' + assignedTo;
    console.log(url);
    return this.http.get<Task[]>(url);
  }


  fetchAllNotStartedTasks(projectId: number, memberId: number): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/projects/' + projectId + '/members/' + memberId;
    return this.http.get<Task[]>(url);
  }


  updateTask(taskId: number,status: string): Observable<boolean> {
    let url = this.serviceurl +'/tasks/'+ taskId+'/status/'+status ;
    return this.http.put<boolean>(url, status);
  }

  getTasks(memberId:number,projectId:number,status:string):Observable<Task[]>{
    let url=`${this.serviceurl}/tasks/projects/${projectId}/members/${memberId}/status/${status}`;
    return this.http.get<Task[]>(url);
  }

  fetchTasks(sprintId:number,memberId:number,status:string):Observable<Task[]>{
    let url=`${this.serviceurl}/tasks/sprints/${sprintId}/members/${memberId}/status/${status}`;
    return this.http.get<Task[]>(url);
  }


  getAllTasks(projectId:number,memberId:number){
  let url =this.serviceurl +'/tasks/projects/'+projectId+'/members/'+memberId;
    return this.http.get<any>(url);
  }

  fetchAllTasksCount(): Observable<any> {
    let url =this.serviceurl +'/tasks/Count';
    return this.http.get<any>(url);
  }
  

  fetchTasksDetailsById(taskId:number):Observable<Task>{
    let url=this.serviceurl+'/tasks/projects/'+taskId;
    return this.http.get<Task>(url);
  }


}
