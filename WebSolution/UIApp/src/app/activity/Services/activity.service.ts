import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Models/Activity';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/Employee';
import { Project } from 'src/app/projects/Models/project';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient:HttpClient) { }


private serviceurl :string=environment.apiUrl;

// http://localhost:5263/api/workmgmt/activities/1


addActivity(addactivity:Activity):Observable<boolean>{
  let url=this.serviceurl+"/workmgmt/activities/insert";
  console.log("service called");
  return this.httpClient.post<boolean>(url,addactivity);
}

fetchActivitiesByProject(projectId:number):Observable<Activity[]>{
  let url=this.serviceurl+"/workmgmt/activities/"+projectId;
  console.log(url);
  return this.httpClient.get<Activity[]>(url);
}


fetchActivitiesByProjectAndAssigner(projectId:number,assignedTo:number):Observable<Activity[]>{
  let url=this.serviceurl+"/workmgmt/activities/activity"+"/"+projectId+"/"+assignedTo;
  console.log(url);
  return this.httpClient.get<Activity[]>(url);
}

getEmployeeDetails(employeeId:number):Observable<Employee>{
  let url=this.serviceurl+"/hr/employees/employee"+"/"+employeeId;
  console.log(url);
  return this.httpClient.get<Employee>(url);
}


getAllEmployees(projectId:number):Observable<any[]>{
  let url=this.serviceurl+"/projectmgmt/projectallocation/employees/"+projectId;
  return this.httpClient.get<any[]>(url);
}



getProjectDetails(projectId:number):Observable<any>{
  let url=this.serviceurl+"/projectmgmt/projects"+"/"+projectId;
  console.log(url);
  return this.httpClient.get<any>(url);
}

getAllProject():Observable<Project[]>{
  let url=this.serviceurl+"/projectmgmt/projects";
  return this.httpClient.get<Project[]>(url);
}






// http://localhost:5263/api/workmgmt/activities/activity/todo/4/15

getAllNotStartedActivities(projectId:number,employeeId:number):Observable<Activity[]>{
  let url=this.serviceurl+"/workmgmt/activities/activity/todo/"+projectId+"/"+employeeId;
  return this.httpClient.get<Activity[]>(url);
}



// http://localhost:5263/api/workmgmt/activities/Update/1/4/15

updateActivity(status:string,activityId:number):Observable<boolean>{
  let url=this.serviceurl+"/workmgmt/activities/Update/"+status+"/"+activityId;
  return this.httpClient.put<boolean>(url,status);
}


// http://localhost:5263/api/projectmgmt/projects

getAllProjects():Observable<Project[]>{
  let url=this.serviceurl+"/projectmgmt/projects";
  return this.httpClient.get<Project[]>(url);

}



}
