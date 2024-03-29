import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService {
 
  private  loginSuccess=new Subject();
  loginSuccess$=this.loginSuccess.asObservable();
  
  constructor() { }
  
  onSucess(){
    this.loginSuccess.next({});
  }
}
