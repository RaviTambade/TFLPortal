import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }
}
