import { Component } from '@angular/core';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';

@Component({
  selector: 'todays-leave-applications',
  templateUrl: './todays-leave-applications.html',
})
export class TodaysLeaveApplications {

  date:string=new Date().toISOString().slice(0,10);
  leaves:LeaveApplication[]=[];
  constructor(private leaveService:LeaveAnalyticsService){}
  
  ngOnInit(): void { 
    console.log(this.date);
    this.leaveService.getLeaveApplicationsOfDate(this.date).subscribe((res)=>{
      this.leaves=res;
      console.log(this.leaves);
    }); 
  }
}
