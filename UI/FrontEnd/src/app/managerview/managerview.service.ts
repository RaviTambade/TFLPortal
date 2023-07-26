import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../project';
import { Timesheet } from './timesheets/timesheet';
import { TimesheetInfo } from './timesheets/timesheetInfo';
import { Timerecord } from './timerecords/timerecord';
import { Employee } from './employee';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class ManagerviewService {
  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }


//////////// Authentication ////////////////////////

  validate(credential:Credential):Observable<boolean>{
    let url="http://localhost:5077/api/authentication/signin";
    return this.http.post<any>(url,credential);
  }

  register(credential:Credential):Observable<boolean>{

    let url="http://localhost:5077/api/credential/register";
    return this.http.post<any>(url,credential);
  }

  //////////////////   Project   ///////////////////////////
  getAllProjects(): Observable<any> {
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.get<any>(url);
  }

  getProjectById(projectId: number): Observable<Project> {
    let url = "http://localhost:5294/api/projects/" + projectId;
    return this.http.get<Project>(url);
  }


  addProject(project: Project): Observable<any> {
    let url = "http://localhost:5294/api/projects/projects";
    return this.http.post<Employee>(url, project);
  }

  updateProject(form: any): Observable<any> {
    let url = "http://localhost:5294/api/projects/project/" ;
    return this.http.put<Project>(url, form);
  }
  
  deleteProject(id: any): Observable<any> {
    let url = "http://localhost:5294/api/projects/" + id;
    return this.http.delete<Project>(url);
  }


  getTotalDetails(projectId: number): Observable<Project> {
    let url = "http://localhost:5294/api/projects/projectdetails/" + projectId;
    return this.http.get<Project>(url);
  }
 

//////////////////  Time Sheet  ///////////////////
  getAllTimesheets(id: any, date: string): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/" + id + "/" +date;
    return this.http.get<any>(url, id);
  }

  getTimesheet(timesheetid: any): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/getdetails/" + timesheetid;
    return this.http.get<any>(url, timesheetid);
  }

  addTimesheet(timesheet: TimesheetInfo): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/timesheet";
    return this.http.post<TimesheetInfo>(url, timesheet);
  }

  updateTimesheet(id: any): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/" + id;
    return this.http.put<Timesheet>(url, id);
  }

  deleteTimesheet(id: any): Observable<any> {
    let url = "http://localhost:5161/api/Timesheet/" + id;
    return this.http.delete<Timesheet>(url);
  }

  //////////////////   Employee   //////////////////////
  getEmployee(id: any): Observable<any> {
    let url = "http://localhost:5230/api/employees/" + id;
    return this.http.get<any>(url, id);
  }

  getAllEmployees(): Observable<any> {
    let url = "http://localhost:5230/api/employees/employees";
    return this.http.get<any>(url);
  }

  addEmployee(employee: Employee): Observable<any> {
    let url = "http://localhost:5230/api/employees/employee";
    return this.http.post<Employee>(url, employee);
  }

  updateEmployee(form: any): Observable<any> {
    let url = "http://localhost:5230/api/employees/employee/" ;
    return this.http.put<Employee>(url, form);
  }

  deleteEmployee(id: any): Observable<any> {
    let url = " http://localhost:5230/api/employees/" + id;
    return this.http.delete<Employee>(url);
  }


  //////////////   Task   /////////////////////
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

  /////////////////// Time Record  //////////////////////

  getAllTimeRecords(id: any): Observable<any> {
    let url = "http://localhost:5121/api/Timerecords/getall/" + id;
    return this.http.get<any>(url, id);
  }

  addTimeRecord(timerecord: Timerecord): Observable<any> {
    let url = "http://localhost:5121/api/timerecords/timerecord";
    return this.http.post<Timerecord>(url, timerecord);
  }
  getTotalWorkingTime(id: any, fromDate: string, toDate:string): Observable<any> {
    let url = "http://localhost:5121/api/Timerecords/totaltime/" + id + "/" + fromDate +"/"+toDate;
    return this.http.get<any>(url, id);
  }



  ///////////////////////// Salary  ////////////////////////////////////////////////////

  fundTransfer(credential:any){
    let url ="http://localhost:5041/FundTransfer";
    return this.http.post(url,credential);
  }


}
