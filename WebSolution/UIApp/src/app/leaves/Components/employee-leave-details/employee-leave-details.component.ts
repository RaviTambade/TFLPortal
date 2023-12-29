import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveApplication } from '../../Models/LeaveApplication';

@Component({
  selector: 'app-employee-leave-details',
  templateUrl: './employee-leave-details.component.html',
  styleUrls: ['./employee-leave-details.component.css']
})
export class EmployeeLeaveDetailsComponent implements OnInit{

  LeaveId:number=0;
  leaveDetails:LeaveApplication  |undefined;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private leaveService:LeavesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.LeaveId=Number(params.get('id'));
        console.log(this.LeaveId);
    this.leaveService.getEmployeeLeavesDetails(this.LeaveId).subscribe((res)=>{
      console.log(res);
      this.leaveDetails=res;
       })
      }
    );
  }
}
