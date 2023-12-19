import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TflportalService {

  loginSuccess=new Subject();
  loginSuccess$=this.loginSuccess.asObservable();

  constructor() { }
  
  onSucess(){
    this.loginSuccess.next({});
  }


}
