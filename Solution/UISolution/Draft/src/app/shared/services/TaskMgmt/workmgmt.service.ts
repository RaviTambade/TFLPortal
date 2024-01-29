import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TimeSheetDetails } from 'src/app/time-sheet/models/timesheetdetails';
import { Timesheet } from 'src/app/time-sheet/models/timesheet';
import { ProjectWorkHour } from 'src/app/time-sheet/models/projectworkhour';
import { TimeSheetDetailView } from 'src/app/time-sheet/models/timesheet-detail-view';
import { TimesheetView } from 'src/app/time-sheet/models/timesheetview';
import { WorkCategoryDetails } from 'src/app/time-sheet/models/workcategorydetails';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { TimesheetDuration } from 'src/app/time-sheet/models/timesheetduratiom';
import { Week } from 'src/app/time-sheet/models/Week';
import { Sprint } from 'src/app/time-sheet/models/sprint';
import { EmployeeWorkDetails } from 'src/app/project-manager/Model/EmployeeWorkDetails';


@Injectable({
  providedIn: 'root',
})
export class WorkmgmtService {
  constructor(private http: HttpClient) { }

  private serviceurl: string = environment.apiUrl;

  // private serviceurl: string = 'http://localhost:5263/api';


  // http://localhost:5263/api/workmgmt/activities/1

  addActivity(addactivity: EmployeeWork): Observable<boolean> {
    let url = this.serviceurl + '/workmgmt/employeeworks';
    console.log('service called');
    return this.http.post<boolean>(url, addactivity);
  }

  fetchEmployeeWorkByProject(projectId: number): Observable<EmployeeWorkDetails[]> {
    let url = this.serviceurl + '/workmgmt/employeeworks/selectedProject/' + projectId;
    console.log(url);
    return this.http.get<EmployeeWorkDetails[]>(url);
  }


  fetchTodaysEmployeeWork(projectId: number,date:string): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeworks/project/' + projectId+'/date/'+date;
    console.log(url);
    return this.http.get<EmployeeWork[]>(url);
  }
  fetchAllEmployeeWorkOfEmployee(assignedTo: number): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeworks/employees/' + assignedTo;
    console.log(url);
    return this.http.get<EmployeeWork[]>(url);
  }


  // http://localhost:5263/api/workmgmt/activities/activity/todo/4/15

  getAllNotStartedEmployeeWork(projectId: number, employeeId: number): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeworks/activity/todo/' + projectId + '/' + employeeId;
    return this.http.get<EmployeeWork[]>(url);
  }

  // http://localhost:5263/api/workmgmt/activities/Update/1/4/15

  updateEmployeeWork(activityId: number,status: string): Observable<boolean> {
    let url = this.serviceurl +'/workmgmt/employeeworks/project/'+ activityId+'/status/'+status ;
    return this.http.put<boolean>(url, status);

    // let url = this.serviceurl +'/workmgmt/activities/Update/' +status +'/' + activityId;
    // return this.http.put<boolean>(url, status);

  }

  getEmployeeWorkByProjectAndStatus(employeeId:number,projectId:number,status:string):Observable<EmployeeWork[]>{
    let url=`${this.serviceurl}/workmgmt/employeeworks/projects/${projectId}/employees/${employeeId}/status/${status}`;
    return this.http.get<EmployeeWork[]>(url);
  }

  getEmployeeWorkBySprintAndStatus(sprintId:number,employeeId:number,status:string):Observable<EmployeeWork[]>{
    let url=`${this.serviceurl}/workmgmt/employeeworks/sprints/${sprintId}/employees/${employeeId}/status/${status}`;
    return this.http.get<EmployeeWork[]>(url);
  }


  getOngoingSprints(projectId:number,date:string):Observable<Sprint[]>{
    let url=`${this.serviceurl}/workmgmt/sprints/projects/${projectId}/date/${date}`;
    return this.http.get<Sprint[]>(url);
  }

 
  getAllEmployeeWorkCount(): Observable<any> {
    let url =this.serviceurl +'/workmgmt/employeeworks/ActivitySp';
    return this.http.get<any>(url);
  }

}