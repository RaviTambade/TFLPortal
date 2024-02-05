import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-all-employee-leaves',
  templateUrl: './all-employee-leaves.component.html',
  styleUrls: ['./all-employee-leaves.component.css']
})
export class AllEmployeeLeavesComponent implements OnInit{

  employeeLeaves:LeaveDetails[]=[];
  leaveStatus:string="applied";

  constructor(private leaveService:LeavesService){}

  ngOnInit(): void {
   this.leaveService.getLeaveDetails(this.leaveStatus).subscribe((res)=>{
    this.employeeLeaves=res;
    console.log(res);
   });
  }
}
