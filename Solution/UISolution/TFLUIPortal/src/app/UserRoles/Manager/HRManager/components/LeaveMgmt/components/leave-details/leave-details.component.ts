import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';
import { LeaveStatus } from 'src/app/shared/Entities/Leavemgmt/LeaveStatus';
import { LeaveApplication } from 'src/app/shared/Entities/Leavemgmt/LeaveApplication';


@Component({
  selector: 'leave-details',
  templateUrl: './leave-details.component.html',
})
export class LeaveDetailsComponent {
@Input() applicationId:any;

  updateStatus:LeaveStatus={
    id: 0,
    status: ''
  }

  leaveDetails:LeaveApplication|undefined;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private leaveService:LeavesService
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params)=>{
    //   this.leaveId=Number(params.get('id'));
        console.log(this.applicationId);
    this.leaveService.getEmployeeLeavesDetails(this.applicationId).subscribe((res)=>{
      console.log(res);
      this.leaveDetails=res;
       })
    //   }
    // );
  }

  onApproved(id:number){
    // this.updateStatus.status="sanctioned";
    // this.leaveService.updateLeaveApplication(id,this.updateStatus.status).subscribe((res)=>{
    //   console.log(res);
    // });
  }

  onReject(id:number){
    // this.updateStatus.status="notsanctioned";
    // this.leaveService.updateLeaveApplication(id,this.updateStatus.status).subscribe((res)=>{
    //   console.log(res);
    // });
  }
}
