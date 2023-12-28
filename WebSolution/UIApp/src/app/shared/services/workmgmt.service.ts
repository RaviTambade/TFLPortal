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


@Injectable({
  providedIn: 'root',
})
export class WorkmgmtService {
  constructor(private http: HttpClient) { }

  private serviceurl: string = environment.apiUrl;

  // private serviceurl: string = 'http://localhost:5263/api';


  // http://localhost:5263/api/workmgmt/activities/1

  addActivity(addactivity: EmployeeWork): Observable<boolean> {
    let url = this.serviceurl + '/workmgmt/employeeWork';
    console.log('service called');
    return this.http.post<boolean>(url, addactivity);
  }

  fetchEmployeeWorkByProject(projectId: number): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeWork/selectedProject/' + projectId;
    console.log(url);
    return this.http.get<EmployeeWork[]>(url);
  }


  fetchTodaysEmployeeWork(projectId: number,date:string): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeWork/project/' + projectId+'/date/'+date;
    console.log(url);
    return this.http.get<EmployeeWork[]>(url);
  }
  fetchAllEmployeeWorkOfEmployee(assignedTo: number): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeWork/employees/' + assignedTo;
    console.log(url);
    return this.http.get<EmployeeWork[]>(url);
  }


  // http://localhost:5263/api/workmgmt/activities/activity/todo/4/15

  getAllNotStartedEmployeeWork(projectId: number, employeeId: number): Observable<EmployeeWork[]> {
    let url = this.serviceurl + '/workmgmt/employeeWork/activity/todo/' + projectId + '/' + employeeId;
    return this.http.get<EmployeeWork[]>(url);
  }

  // http://localhost:5263/api/workmgmt/activities/Update/1/4/15

  updateEmployeeWork(status: string, activityId: number): Observable<boolean> {
    let url = this.serviceurl +'/workmgmt/employeeWork/project/'+ activityId+'/status/'+status ;
    return this.http.put<boolean>(url, status);

    // let url = this.serviceurl +'/workmgmt/activities/Update/' +status +'/' + activityId;
    // return this.http.put<boolean>(url, status);

  }

  getEmployeeWorkByProjectAndStatus(employeeId:number,projectId:number,status:string):Observable<EmployeeWork[]>{
    let url=`${this.serviceurl}/workmgmt/employeeWork/projects/${projectId}/employees/${employeeId}/status/${status}`;
    return this.http.get<EmployeeWork[]>(url);
  }




  getAllTimeSheets(employeeId: number): Observable<Timesheet[]> {
    let url = `${this.serviceurl}/workmgmt/timesheets/employees/${employeeId}`;
    return this.http.get<Timesheet[]>(url);
  }
  getTimeSheet(employeeId: number, date: string): Observable<TimesheetView> {
    let url = `${this.serviceurl}/workmgmt/timesheets/employees/${employeeId}/date/${date}`;
    return this.http.get<TimesheetView>(url);
  }

  getTimeSheetById(timesheetId: number): Observable<TimesheetView> {
    let url = `${this.serviceurl}/workmgmt/timesheets/${timesheetId}`;
    return this.http.get<TimesheetView>(url);
  }
  getTimesheetDetail(timeSheetDetailId:number):Observable<TimeSheetDetailView>{
    let url = `${this.serviceurl}/workmgmt/timesheets/timesheetdetails/${timeSheetDetailId}`;
    return this.http.get<TimeSheetDetailView>(url);
    
  }

  getTimeSheetDetails(timesheetId: number): Observable<TimeSheetDetailView[]> {
    let url = `${this.serviceurl}/workmgmt/timesheets/${timesheetId}/timesheetdetails`;
    return this.http.get<TimeSheetDetailView[]>(url);
  }


  getActivityWiseHours(employeeId:number,intervalType: string,projectId:number): Observable<WorkCategoryDetails[]> {
    let url = `${this.serviceurl}/workmgmt/timesheets/employees/${employeeId}/workduration/${intervalType}/${projectId}`;
    return this.http.get<any>(url);
  }
   

  getProjectwiseTimeSpent(employeeId:number):Observable<ProjectWorkHour[]>{
    let url = `${this.serviceurl}/workmgmt/timesheets/projects/workinghours/employees/${employeeId}`;
    return this.http.get<ProjectWorkHour[]>(url);
  }
  getAllEmployeeWorkOfEmployee(projectId:number,employeeId:number){
  let url =this.serviceurl +'/workmgmt/employeeWork/projects/'+projectId+'/employees/'+employeeId;
    return this.http.get<any>(url);
  }


  addTimeSheet(timesheet: any): Observable<boolean> {
    let url = `${this.serviceurl}/workmgmt/timesheets`;
    return this.http.post<boolean>(url, timesheet);
  }

  addTimeSheetDetails(TimeSheetDetails: TimeSheetDetails): Observable<any> {
    let url = `${this.serviceurl}/workmgmt/timesheets/timesheetdetails`;
    return this.http.post(url, TimeSheetDetails);
  }

  changeTimeSheetStatus(timesheetId: number, timesheet: Timesheet): Observable<boolean> {
    let url = `${this.serviceurl}/workmgmt/timesheets/${timesheetId}`;
    return this.http.put<boolean>(url, timesheet);
  }

  updateTimeSheetDetails(TimeSheetDetailsId: number, TimeSheetDetails: TimeSheetDetails): Observable<boolean> {
    let url = `${this.serviceurl}/workmgmt/timesheets/timesheetdetails/${TimeSheetDetailsId}`;
    return this.http.put<boolean>(url, TimeSheetDetails);
  }

  removeTimeSheetDetails(TimeSheetDetailsId: number): Observable<boolean> {
    let url = `${this.serviceurl}/workmgmt/timesheets/timesheetdetails/remove/${TimeSheetDetailsId}`;
    return this.http.delete<boolean>(url);
  }

  removeAllTimeSheetDetails(timesheetId: number): Observable<boolean> {
    let url = `${this.serviceurl}/workmgmt/timesheets/timesheetdetails/removeall/${timesheetId}`;
    return this.http.delete<boolean>(url);
  }

  //helper functions

  getDurationOfWork(TimeSheetDetails: TimeSheetDetailView): TimeSheetDetailView {
    let startTime = TimeSheetDetails.fromTime;
    let endTime = TimeSheetDetails.toTime;

    if (startTime != '' && endTime != '') {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);
      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      TimeSheetDetails.durationInMinutes = durationMilliseconds / (1000 * 60);
      TimeSheetDetails.durationInHours = this.convertMinutesintoHours(TimeSheetDetails.durationInMinutes);
    }
    return TimeSheetDetails;
  }

  convertMinutesintoHours(minutes: number) {
    let str = `${Math.floor(minutes / 60)}h: ${minutes % 60}m`;
    return str;
  }
  
  randomColorPicker(): string {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
  }


  getAllEmployeeWorkCount(): Observable<any> {
    let url =this.serviceurl +'/workmgmt/employeeWork/ActivitySp';
    return this.http.get<any>(url);
  }


}
