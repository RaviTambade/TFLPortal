import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private httpClient:HttpClient) { }
  serviceurl :string="http://localhost:5263/api/"

  getActivitiesOfMembers(projectId:number,memberId:number): Observable<Activity[]> {
    let url = this.serviceurl+"activity/" + projectId +"/"+ memberId;
    return this.httpClient.get<Activity[]>(url);
  }


  getTaskDetails(taskId:number): Observable<Activity> {
    let url = this.serviceurl+"activity/activitydetails/" +taskId;
    return this.httpClient.get<Activity>(url);
  }
}
