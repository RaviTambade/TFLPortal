import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { Timesheet } from './timesheets/timesheet';

@Injectable({
  providedIn: 'root'
})
export class ManagerviewService {
  constructor(private http :HttpClient) { }

  getAllProjects():Observable<any>{
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.get<any>(url);
  }
  
  getProjectById(projectId:number):Observable<Project>{
    let url = "http://localhost:5294/api/projects/"+projectId;
    return this.http.get<Project>(url);
  }

  getAllTimesheets(id :any,date:string):Observable<any>{
    let url = "http://localhost:5161/api/Timesheet/"+id+"/"+date;
    return this.http.get<any>(url,id);
  }

   addTimesheet(timesheet:Timesheet):Observable<any>{
    let url = "http://localhost:5161/api/Timesheet/timesheet";
    return this.http.post<Timesheet>(url,timesheet);
  }

   updateTimesheet(theSheet=Timesheet):Observable<any>{
    let url = "http://localhost:5161/api/Timesheet/";
    return this.http.put<Timesheet>(url,theSheet);
  }

   deleteTimesheet(id:any):Observable<any>{
    let url="http://localhost:5161/api/Timesheet/"+id;
    return this.http.delete<Timesheet>(url);
  }

   getEmployee(id:any):Observable<any>{
    let url ="http://localhost:5230/api/employees/"+id;
    return this.http.get<any>(url,id);
   }

}
