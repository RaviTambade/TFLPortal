import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-employee-leaves-by-date',
  templateUrl: './employee-leaves-by-date.component.html',
  styleUrls: ['./employee-leaves-by-date.component.css']
})
export class EmployeeLeavesByDateComponent implements OnInit {

  date:string="2023-06-17"
  leaveDetails:LeaveDetails[]=[];
  constructor(private leaveService:LeavesService){}
  ngOnInit(): void {
    this.leaveService.getLeaveDetailsByDate(this.date).subscribe((res)=>{
      this.leaveDetails=res;
    })
  }

  

}
