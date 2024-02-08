import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveApplication } from 'src/app/hrmanager/LeaveMgmt/models/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})


export class DetailsComponent implements OnInit {

  leaveId:number=0;
  leave:LeaveApplication |undefined;
  constructor(private router:Router,private route:ActivatedRoute,private service:LeavesService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((res)=>{
      this.leaveId=Number(res.get('id'))
      this.service.getEmployeeLeavesDetails(this.leaveId).subscribe((res)=>{
        this.leave=res;
      })
    })
  }
}
