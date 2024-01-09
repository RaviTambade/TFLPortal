import { Component, Input } from '@angular/core';
import { PendingLeave } from '../../Models/PendingLeave';
import { LeaveDetails } from '../../Models/LeaveDetails';
import { LeavesService } from '../../Services/leaves.service';

@Component({
  selector: 'app-employee-consumed-leaves',
  templateUrl: './employee-consumed-leaves.component.html',
  styleUrls: ['./employee-consumed-leaves.component.css']
})
export class EmployeeConsumedLeavesComponent {

  @Input() leaveId:number=0;
  pendingLeave:PendingLeave |undefined;
  year:number=2024;
  employeeId:number |undefined;
  leaveDetails:LeaveDetails |undefined;
  constructor(private service:LeavesService){
  }

  ngOnInit(): void {
    this.service.getEmployeeLeavesDetails(this.leaveId).subscribe((res)=>{
      console.log(res);
      this.leaveDetails=res;
      this.employeeId=res.employeeId;
      this.service.getConsumedLeaves(this.employeeId,this.year).subscribe((res)=>{
        this.pendingLeave=res;
        console.log(res);
      }) 
    })
 }
}
