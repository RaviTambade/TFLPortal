import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from 'src/app/activity/Models/Activity';
import { Employee } from 'src/app/activity/Models/Employee';

@Injectable({
  providedIn: 'root',
})
export class WorkmgmtService {
  constructor(private httpClient: HttpClient) {}

  private serviceurl: string = environment.apiUrl;

  // http://localhost:5263/api/workmgmt/activities/1

  addActivity(addactivity: Activity): Observable<boolean> {
    let url = this.serviceurl + '/workmgmt/activities/insert';
    console.log('service called');
    return this.httpClient.post<boolean>(url, addactivity);
  }

  fetchActivitiesByProject(projectId: number): Observable<Activity[]> {
    let url = this.serviceurl + '/workmgmt/activities/' + projectId;
    console.log(url);
    return this.httpClient.get<Activity[]>(url);
  }

  fetchActivitiesByProjectAndAssigner(projectId: number,assignedTo: number ): Observable<Activity[]> {
    let url =this.serviceurl + '/workmgmt/activities/activity' + '/' + projectId +'/' +assignedTo;
    console.log(url);
    return this.httpClient.get<Activity[]>(url);
  }

 
  // http://localhost:5263/api/workmgmt/activities/activity/todo/4/15

  getAllNotStartedActivities(projectId: number, employeeId: number ): Observable<Activity[]> {
    let url =this.serviceurl +'/workmgmt/activities/activity/todo/' + projectId +'/' + employeeId;
    return this.httpClient.get<Activity[]>(url);
  }

  // http://localhost:5263/api/workmgmt/activities/Update/1/4/15

  updateActivity(status: string, activityId: number): Observable<boolean> {
    let url = this.serviceurl +'/workmgmt/activities/Update/' +status +'/' + activityId;
    return this.httpClient.put<boolean>(url, status);
  }
}
