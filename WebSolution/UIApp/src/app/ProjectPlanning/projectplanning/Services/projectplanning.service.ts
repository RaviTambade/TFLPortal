import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userstory } from '../Models/userstory';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectplanningService {

  constructor(private httpClient:HttpClient) { }
     serviceurl:string=environment.apiUrl;

  getAllUserStories(projectId: number): Observable<userstory[]> {
    let url = this.serviceurl + '/ProjectPlanninguserstories/' + projectId;
    return this.httpClient.get<userstory[]>(url);
  }

}
