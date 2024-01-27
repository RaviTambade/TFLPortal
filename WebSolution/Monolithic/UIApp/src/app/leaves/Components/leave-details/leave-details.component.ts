import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveApplication } from '../../Models/LeaveApplication';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';
import { LeaveStatus } from '../../Models/LeaveStatus';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent {

  updateStatus:LeaveStatus={
    id: 0,
    status: ''
  }
  leaveId:number=0;
  leaveDetails:LeaveDetails |undefined;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private leaveService:LeavesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.leaveId=Number(params.get('id'));
        console.log(this.leaveId);
    this.leaveService.getEmployeeLeavesDetails(this.leaveId).subscribe((res)=>{
      console.log(res);
      this.leaveDetails=res;
       })
      }
    );
  }

  onApproved(id:number){
    this.updateStatus.status="sanctioned";
    this.leaveService.updateLeaveApplication(id,this.updateStatus.status).subscribe((res)=>{
      console.log(res);
    });
  }

  onReject(id:number){
    this.updateStatus.status="notsanctioned";
    this.leaveService.updateLeaveApplication(id,this.updateStatus.status).subscribe((res)=>{
      console.log(res);
    });
  }
}
