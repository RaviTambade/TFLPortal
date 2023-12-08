import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Activity } from '../../Models/Activity';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit{
  @Output() selectedActivities=new EventEmitter<Activity>()
  constructor(private workMgmtSvc :WorkmgmtService){}
  activities:Activity[]=[];
  projectId:number=2;
  assignedto:number=11;
  ngOnInit(): void {
   this.workMgmtSvc.fetchActivitiesByProjectAndAssigner(this.projectId,this.assignedto).subscribe((res)=>{
   this.activities=res;
   this.selectedActivities.emit(this.activities[0]);
   })
  }



  sendEvent(activity:Activity){
    this.selectedActivities.emit(activity);
  }

}
