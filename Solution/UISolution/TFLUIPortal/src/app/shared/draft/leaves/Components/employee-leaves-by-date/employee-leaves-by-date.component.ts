import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-employee-leaves-by-date',
  templateUrl: './employee-leaves-by-date.component.html',
  styleUrls: ['./employee-leaves-by-date.component.css']
})
export class EmployeeLeavesByDateComponent implements OnInit {

  date:string="";
  leaveDetails:LeaveDetails[]=[];
  constructor(private leaveService:LeavesService){}
  
  ngOnInit(): void {  
  }

  onSearch(date:string){
    console.log(date);
    this.leaveService.getLeaveDetailsByDate(date).subscribe((res)=>{
      this.leaveDetails=res;
    });
  }
}
