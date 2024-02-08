import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from 'src/app/Entities/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-all-employee-leaves',
  templateUrl: './all-employee-leaves.component.html',
})
export class AllEmployeeLeavesComponent implements OnInit{

  leaveApplications:LeaveApplication[]=[];
  appliedLeaves:LeaveApplication[]=[];

  constructor(private leaveService:LeavesService){}

  ngOnInit(): void {
   this.leaveService.getAllLeaveApplications().subscribe((res)=>{
    this.leaveApplications=res;
    this.appliedLeaves=this.leaveApplications.filter(u=>u.status=="applied");
    console.log(res);
   });
  }
}
