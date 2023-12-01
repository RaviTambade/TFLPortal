import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient:HttpClient) { }

serviceUrl:string="http://localhost:5263/api/workmgmt/activities";


getAllActivities(projectId:number,assignedTo:number):Observable<Activity[]>{
  let url=this.serviceUrl+"/activity"+"/"+projectId+"/"+assignedTo;
  console.log(url);
  return this.httpClient.get<Activity[]>(url);
}

}
