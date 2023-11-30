import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Activity } from '../../Models/Activity';
import { ActivitiesService } from '../../Services/activities.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit{
 
  @Output() activities = new EventEmitter<Activity>();
constructor(private service:ActivitiesService){}
projectId:number=1;
memberId:number=2;
activity:Activity[]=[]
  ngOnInit(): void {
    this.service.getActivitiesOfMembers(this.projectId,this.memberId).subscribe((res)=>{
this.activity=res;
    })
  }

}
