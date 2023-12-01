import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Activity } from '../../Models/Activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit{

  constructor(private service :ActivityService){}
  activities:Activity[]=[];
  projectId:number=1;
  assignedTo:number=19;
  ngOnInit(): void {
   this.service.getAllActivities(this.projectId,this.assignedTo).subscribe((res)=>{
   this.activities=res;
   console.log("hi",res);
   })
  }

}
