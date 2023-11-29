import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userstories } from '../Models/userstories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectplanningService {

  constructor(private httpClient:HttpClient) { }
     serviceurl:string="http://localhost:5263/api/ProjectPlanning/";

  getAllUserStories(projectId: number): Observable<userstories[]> {
    let url = this.serviceurl + 'userstories/' + projectId;
    return this.httpClient.get<userstories[]>(url);
  }

}
