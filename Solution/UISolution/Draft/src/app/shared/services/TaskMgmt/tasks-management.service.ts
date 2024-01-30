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

  getAllTasks(projectId: number): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/projects/' + projectId;
    console.log(url);
    return this.http.get<Task[]>(url);
  }

 getAllTodaysTasks(projectId: number,date:string): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/projects/' + projectId+'/date/'+date;
    console.log(url);
    return this.http.get<Task[]>(url);
  }
  
  getAllTasksOfMember(assignedTo: number): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/members/' + assignedTo;
    console.log(url);
    return this.http.get<Task[]>(url);
  }


  getAllTasksOfProjectMember(projectId: number, memberId: number): Observable<Task[]> {
    let url = this.serviceurl + '/tasks/projects/' + projectId + '/members/' + memberId;
    return this.http.get<Task[]>(url);
  }


  updateTask(taskId: number,status: string): Observable<boolean> {
    let url = this.serviceurl +'/tasks/'+ taskId+'/status/'+status ;
    return this.http.put<boolean>(url, status);
  }

  getAllTasksOfProject(memberId:number,projectId:number,status:string):Observable<Task[]>{
    let url=`${this.serviceurl}/tasks/projects/${projectId}/members/${memberId}/status/${status}`;
    return this.http.get<Task[]>(url);
  }

  getAllTasksOfSprintAndMember(sprintId:number,memberId:number,status:string):Observable<Task[]>{
    let url=`${this.serviceurl}/tasks/sprints/${sprintId}/members/${memberId}/status/${status}`;
    return this.http.get<Task[]>(url);
  }


  getProjectTasksOfMember(projectId:number,memberId:number){
  let url =this.serviceurl +'/tasks/projects/'+projectId+'/members/'+memberId;
    return this.http.get<any>(url);
  }

  getAllTasksCount(): Observable<any> {
    let url =this.serviceurl +'/tasks/Count';
    return this.http.get<any>(url);
  }
  

  getTaskDetails(taskId:number):Observable<Task>{
    let url=this.serviceurl+'/tasks/'+taskId;
    return this.http.get<Task>(url);
  }
}
