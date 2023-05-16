
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';
import { tasks } from 'googleapis/build/src/apis/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  public getTasks():Observable<Task[]>{
    let url= "http://localhost:5034/api/task/getall";
    return this.http.get<Task[]>(url);
  }

   public getTaskById(taskId:number):Observable<Task>{
     let url = "http://localhost:5034/api/task/getbyid/"+taskId;
     return this.http.get<Task>(url);
  }



  public insert(task:Task):Observable<any>{
    let url = "http://localhost:5034/api/task/Inserttask";
    return this.http.post<Task>(url,task);
  }

  public update(task:Task):Observable<any>{
    let url="http://localhost:5034/api/task/updateTask/"
  return this.http.put<any>(url,task);
}

// delete(projId:number):Observable<any>{
//   let url="http://localhost:5294/api/projects/delete/"+projId;
//   return this.http.delete<any>(url);
// }
}

