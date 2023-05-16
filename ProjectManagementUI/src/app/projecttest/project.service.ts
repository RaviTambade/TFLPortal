import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
 //target
  private subject = new Subject<any>();

  sendData(data : any){
    this.subject.next(data);
    //it is publishing this value to all subscriber
    //that have already subscribed to this message
  }

  clearData(){
    this.subject.next(" ");
  }

  getData() : Observable<any>{
    return this.subject.asObservable();
  }
}
