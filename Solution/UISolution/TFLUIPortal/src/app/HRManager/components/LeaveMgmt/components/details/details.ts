import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';
import { LeaveAnalyticsService } from 'src/app/shared/services/Leave/leaveanalytics.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.html',
})

export class Details implements OnInit {

  leaveId:number=2;
  leave:LeaveApplication |undefined;
  constructor(private router:Router,private route:ActivatedRoute,private service:LeaveAnalyticsService){}
  ngOnInit(): void {
    // this.route.paramMap.subscribe((res)=>{
    //   this.leaveId=Number(res.get('id'))
      this.service.getLeaveApplication(this.leaveId).subscribe((res)=>{
        this.leave=res;
      })
    // })
  }
}
