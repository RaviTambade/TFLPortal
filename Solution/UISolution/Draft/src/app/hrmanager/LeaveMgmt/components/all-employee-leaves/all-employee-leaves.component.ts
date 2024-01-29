import { Component, OnInit } from '@angular/core';
import { LeaveApplication } from '../../models/LeaveApplication';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';


@Component({
  selector: 'app-all-employee-leaves',
  templateUrl: './all-employee-leaves.component.html',
  styleUrls: ['./all-employee-leaves.component.css']
})
export class AllEmployeeLeavesComponent implements OnInit{

  employeeLeaves:LeaveApplication[]=[];
  leaveStatus:string="applied";

  constructor(private leaveService:LeavesService){}

  ngOnInit(): void {
   this.leaveService.getLeaveDetails(this.leaveStatus).subscribe((res)=>{
    this.employeeLeaves=res;
    console.log(res);
   });
  }
}
