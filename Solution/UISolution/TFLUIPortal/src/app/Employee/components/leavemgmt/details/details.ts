import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveApplication } from 'src/app/employee/Models/LeaveMgmt/LeaveApplication';
import { LeaveService } from 'src/app/employee/Services/leave.service';

@Component({
  selector: 'details',
  templateUrl: './details.html', 
})

export class Details implements OnInit {

  leaveId:number=0;
  leave:LeaveApplication |undefined;

  constructor(private router:Router,private route:ActivatedRoute,private service:LeaveService){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((res)=>{
      this.leaveId=Number(res.get('id'))
      this.service.getLeaveApplication(this.leaveId).subscribe((res)=>{
        this.leave=res;
      })
    })
  }
}
