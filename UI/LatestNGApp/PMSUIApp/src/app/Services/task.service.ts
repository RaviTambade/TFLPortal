import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { Projecttaskcount } from '../Models/projecttaskcount';
import { Mytasklist } from '../Models/mytasklist';
import { Taskdetail } from '../Models/taskdetail';
import { Moretaskdetail } from '../Models/moretaskdetail';
import { Alltasklist } from '../Models/alltasklist';
import { Taskidwithtitle } from '../Models/taskidwithtitle';
import { Addtask } from '../Models/addtask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private projectService: ProjectService,private httpClient:HttpClient) {}
  private selectedTaskIdSubject = new BehaviorSubject<any>(null);
  selectedTaskId$ = this.selectedTaskIdSubject.asObservable();

  setSelectedTaskId(id: number | null) {
    this.selectedTaskIdSubject.next(id);
  }
 
  GetProjectTaskCount(projectId:number):Observable<Projecttaskcount>{
    let url="http://localhost:5283/api/tasks/count/" +projectId
    return this.httpClient.get<Projecttaskcount>(url)
  } 
  
  GetMyTaskList(teamMemberId:number,timePeriod:string):Observable<Mytasklist[]>{
    let url="http://localhost:5283/api/tasks/mytasks/" +teamMemberId +"/" +timePeriod
    return this.httpClient.get<Mytasklist[]>(url)
  }
  getTaskDetails(taskId:number):Observable<Taskdetail>{
    let url="http://localhost:5283/api/tasks/taskDetail/" +taskId
    return this.httpClient.get<Taskdetail>(url)
  }
  getMoreTaskDetails(taskId:number):Observable<Moretaskdetail>{
    let url="http://localhost:5283/api/tasks/moretaskDetail/" +taskId
    return this.httpClient.get<Moretaskdetail>(url)
  }
  getAllTaskList(employeeId:number,timePeriod:string):Observable<Alltasklist[]>{
    let url="http://localhost:5283/api/tasks/alltasks/" + employeeId + "/" +timePeriod
    return this.httpClient.get<Alltasklist[]>(url)
  }
  getTaskIdWithTitle(employeeId :number,projectId :number,status :string):Observable<Taskidwithtitle[]>{
    let url="http://localhost:5283/api/tasks/tasktitle/ " + employeeId + "/" + projectId + "/" + status
    return this.httpClient.get<Taskidwithtitle[]>(url)
  }

  addTask(task:Addtask):Observable<boolean>{
    let url="http://localhost:5283/api/tasks/addtask"
    return this.httpClient.post<boolean>(url,task)
  }


}
