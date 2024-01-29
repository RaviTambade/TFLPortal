import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectallocationService {
  
  private serviceurl :string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

}
