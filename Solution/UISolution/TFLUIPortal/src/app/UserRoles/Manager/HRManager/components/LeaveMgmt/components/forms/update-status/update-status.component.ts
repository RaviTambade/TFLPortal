import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LeaveStatus } from 'src/app/shared/Entities/Leavemgmt/LeaveStatus';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
})
export class UpdateStatusComponent implements OnInit{

LeaveId:any;
leaveStatus:any=["sanctioned","notsanctioned"];
leaves:any[]=[];

  constructor(private service: LeavesService,private route:ActivatedRoute){}

  leaveForm=new FormGroup({
    status :new FormControl(),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.LeaveId=Number(params.get('id'));
        console.log(this.LeaveId);
    }); 
  }

  onSubmit(){
    let leave:LeaveStatus={
      id:this.LeaveId,
      status:this.leaveForm.get("status")?.value, 
    }
    console.log(leave);
    this.service.updateLeaveApplication(leave.id,leave.status).subscribe((res)=>{
      console.log(res);
    });
  }
}
