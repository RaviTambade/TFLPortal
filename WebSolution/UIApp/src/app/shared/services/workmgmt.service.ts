import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from 'src/app/activity/Models/Activity';
import { TimeSheetDetails } from 'src/app/time-sheet/models/TimeSheetDetails';
import { TimesheetView } from 'src/app/time-sheet/models/TimesheetView';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { WorkCategory } from 'src/app/time-sheet/models/workCategory';
import { workCategoryDetails } from 'src/app/time-sheet/models/workCategoryDetails';

@Injectable({
  providedIn: 'root',
})
export class WorkmgmtService {
  constructor(private http: HttpClient) { }

  private serviceurl: string = environment.apiUrl;

  private timeSheetUrl: string = 'http://localhost:5263/api/workmgmt/timesheets';


  // http://localhost:5263/api/workmgmt/activities/1

  addActivity(addactivity: Activity): Observable<boolean> {
    let url = this.serviceurl + '/workmgmt/activities';
    console.log('service called');
    return this.http.post<boolean>(url, addactivity);
  }

  fetchActivitiesByProject(projectId: number): Observable<Activity[]> {
    let url = this.serviceurl + '/workmgmt/activities/projects/' + projectId;
    console.log(url);
    return this.http.get<Activity[]>(url);
  }


  fetchTodaysActivities(projectId: number,date:string): Observable<Activity[]> {
    let url = this.serviceurl + '/workmgmt/activities/project/' + projectId+'/date/'+date;
    console.log(url);
    return this.http.get<Activity[]>(url);
  }
  fetchAllActivitiesOfEmployee(assignedTo: number): Observable<Activity[]> {
    let url = this.serviceurl + '/workmgmt/activities/employees/' + assignedTo;
    console.log(url);
    return this.http.get<Activity[]>(url);
  }


  // http://localhost:5263/api/workmgmt/activities/activity/todo/4/15

  getAllNotStartedActivities(projectId: number, employeeId: number): Observable<Activity[]> {
    let url = this.serviceurl + '/workmgmt/activities/activity/todo/' + projectId + '/' + employeeId;
    return this.http.get<Activity[]>(url);
  }

  // http://localhost:5263/api/workmgmt/activities/Update/1/4/15

  updateActivity(status: string, activityId: number): Observable<boolean> {
    let url = this.serviceurl +'/workmgmt/activities/project/'+ activityId+'/status/'+status ;
    return this.http.put<boolean>(url, status);

    // let url = this.serviceurl +'/workmgmt/activities/Update/' +status +'/' + activityId;
    // return this.http.put<boolean>(url, status);

  }



  getAllTimeSheets(employeeId: number): Observable<TimeSheet[]> {
    let url = `${this.timeSheetUrl}/employees/${employeeId}`;
    return this.http.get<TimeSheet[]>(url);
  }
  getTimeSheet(employeeId: number, date: string): Observable<TimesheetView> {
    let url = `${this.timeSheetUrl}/employees/${employeeId}/date/${date}`;
    return this.http.get<TimesheetView>(url);
  }

  getTimeSheetDetails(timeSheetId: number): Observable<TimeSheetDetails[]> {
    let url = `${this.timeSheetUrl}/timesheetentries/${timeSheetId}`;
    return this.http.get<TimeSheetDetails[]>(url);
  }

  getWorkDurationOfEmployee(employeeId: number, fromDate: string, toDate: string): Observable<WorkCategory> {
    let url = `${this.timeSheetUrl}/workduration/employees/${employeeId}/from/${fromDate}/to/${toDate}`;
    return this.http.get<any>(url);
  }
  getActivityWiseHours(intervalType: string): Observable<workCategoryDetails[]> {
    let url = `${this.timeSheetUrl}/workduration/${intervalType}`;
    return this.http.get<any>(url);
  }



  addTimeSheet(timeSheet: any): Observable<boolean> {
    let url = `${this.timeSheetUrl}`;
    return this.http.post<boolean>(url, timeSheet);
  }

  addTimeSheetDetails(TimeSheetDetails: TimeSheetDetails): Observable<any> {
    let url = `${this.timeSheetUrl}/timesheetentries`;
    return this.http.post(url, TimeSheetDetails);
  }

  changeTimeSheetStatus(timeSheetId: number, timesheet: TimeSheet): Observable<boolean> {
    let url = `${this.timeSheetUrl}/${timeSheetId}`;
    return this.http.put<boolean>(url, timesheet);
  }

  updateTimeSheetDetails(TimeSheetDetailsId: number, TimeSheetDetails: TimeSheetDetails): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/${TimeSheetDetailsId}`;
    return this.http.put<boolean>(url, TimeSheetDetails);
  }

  removeTimeSheetDetails(TimeSheetDetailsId: number): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/remove/${TimeSheetDetailsId}`;
    return this.http.delete<boolean>(url);
  }

  removeAllTimeSheetDetails(timeSheetId: number): Observable<boolean> {
    let url = `${this.timeSheetUrl}/timesheetentries/removeall/${timeSheetId}`;
    return this.http.delete<boolean>(url);
  }

  //helper functions

  getDurationOfWork(TimeSheetDetails: TimeSheetDetails): TimeSheetDetails {
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


  getAllActivitiesCount(): Observable<any> {
    let url =this.serviceurl +'/workmgmt/activities/ActivitySp';
    return this.http.get<any>(url);
  }



}
