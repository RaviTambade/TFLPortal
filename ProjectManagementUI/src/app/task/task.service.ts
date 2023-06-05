import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task'; 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  public insert(task:Task):Observable<any>{
    let url = "http://localhost:5034/api/task/task";
    return this.http.post<Task>(url,task);
  }
}
