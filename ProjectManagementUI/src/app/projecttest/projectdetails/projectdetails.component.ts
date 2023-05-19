import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProjectService } from '../project.service';



@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {
  
  // subscription: Subscription|undefined;
  // message: string|undefined;
   
  // projects : any [];
 

  // constructor(private svc : ProjectService) { }

  // ngOnInit(): void {
  //   let theObservable:Observable<any> = this.svc.getData();
  //   this.subscription =theObservable.subscribe(
  //     msg => { 
  //       this.projects = msg;
  //       console.log(this.projects);
  //       //console.log(this.message.cityName);
  //       console.log(" Detail Component :event handler is called")   
  //   


  // }

  subscription: Subscription|undefined;
  message: string|undefined;
   
  projects : any [];
  project:string;
 

  constructor(private svc : ProjectService) { }

  ngOnInit(): void {
    // let theObservable:Observable<any> = this.svc.getData();
    // this.subscription =theObservable.subscribe(
    //   msg => { 
    //     this.cities = msg;
    //     console.log(this.cities);
    //     //console.log(this.message.cityName);
    //     console.log(" Detail Component :event handler is called")   
    //  });
    this.subscription = this.svc.getData().subscribe((response) =>{
      this.project = response.project;
      this.projects = response.data;
      console.log(this.project);
      console.log(response);
    })
  }

  ngOnDestroy(){
    if(this.subscription != undefined)
    this.subscription.unsubscribe();
  }

}
