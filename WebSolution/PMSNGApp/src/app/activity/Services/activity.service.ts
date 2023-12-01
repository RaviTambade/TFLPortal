import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/Activity';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient:HttpClient) { }


private serviceurl :string=environment.apiUrl;

getAllActivities(projectId:number,assignedTo:number):Observable<Activity[]>{
  let url=this.serviceurl+"/workmgmt/activities/activity"+"/"+projectId+"/"+assignedTo;
  console.log(url);
  return this.httpClient.get<Activity[]>(url);
}

getEmployeeDetails(employeeId:number):Observable<Employee>{
  let url=this.serviceurl+"/hr/employees/employee"+"/"+employeeId;
  console.log(url);
  return this.httpClient.get<Employee>(url);
}

getProjectDetails(projectId:number):Observable<any>{
  let url=this.serviceurl+"/projectmgmt/projects"+"/"+projectId;
  console.log(url);
  return this.httpClient.get<any>(url);
}


}
