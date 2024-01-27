import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeWork } from 'src/app/activity/Models/EmployeeWork';
import { SprintDetails } from 'src/app/project-manager/Model/SprintDetails';
import { Sprint } from 'src/app/time-sheet/models/sprint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private httpClient:HttpClient) { }
  private serviceurl: string = environment.apiUrl;
  getSprintsWork(sprintId:number):Observable<SprintDetails[]>{
     let url=`${this.serviceurl}/workmgmt/sprints/project/employeeWork/`+sprintId;
    return this.httpClient.get<SprintDetails[]>(url);
  }
}
