import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }
  getAllTasks(): Observable<any> {
    let url = "http://localhost:5034/api/Task/getall";
    return this.http.get<any>(url);
  }

  getTask(id: any): Observable<any> {
    let url = "http://localhost:5034/api/task/get/" + id;
    return this.http.get<any>(url, id);
  }

  getTotalTime(id: any, date: string): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/totaltime/" + id + "/" + date;
    return this.http.get<any>(url, id);
  }

  updateTask(id: any): Observable<any> {
    let url = "http://localhost:5034/api/task/"+id ;
    return this.http.put<any>(url, id);
  }


  
  deleteTask(id: any): Observable<any> {
    let url = "http://localhost:5034/api/task/" + id;
    return this.http.delete<any>(url);
  }


 addTask(task:Task):Observable<any>{
  let url ="http://localhost:5034/api/task/task"
  return this.http.post<any>(url,task)
 }
}
