import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http:HttpClient) { }
serviceUrl:string="";
  getAllActivities():Observable<Activity[]>{
    let url=this.serviceUrl+
  }
}
