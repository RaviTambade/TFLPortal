import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivityService } from '../../Services/activity.service';
import { Activity } from '../../Models/Activity';
import { WorkmgmtService } from 'src/app/shared/services/workmgmt.service';
import { LocalStorageKeys } from 'src/app/shared/Enums/local-storage-keys';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit{
  @Output() selectedActivities=new EventEmitter<Activity>()
  assignedto:number|any;
  constructor(private workMgmtSvc :WorkmgmtService){this.assignedto=localStorage.getItem(LocalStorageKeys.employeeId);}
  activities:Activity[]=[];
  projectId:number=4;

  
  ngOnInit(): void {
   this.workMgmtSvc.fetchAllActivitiesOfEmployee(this.assignedto).subscribe((res)=>{
   this.activities=res;
   console.log(res);
   this.selectedActivities.emit(this.activities[0]);
   console.log("hii"+this.selectedActivities);
   })
  }



  sendEvent(activity:Activity){
    this.selectedActivities.emit(activity);
  }

}
