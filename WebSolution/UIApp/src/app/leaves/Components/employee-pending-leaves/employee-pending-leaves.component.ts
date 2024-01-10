import { Component, Input } from '@angular/core';
import { PendingLeave } from '../../Models/PendingLeave';
import { LeavesService } from '../../Services/leaves.service';
import { LeaveDetails } from '../../Models/LeaveDetails';

@Component({
  selector: 'app-employee-pending-leaves',
  templateUrl: './employee-pending-leaves.component.html',
  styleUrls: ['./employee-pending-leaves.component.css']
})
export class EmployeePendingLeavesComponent {

  @Input() employeeId:number=0;
  pendingLeave:PendingLeave |undefined;
  year:number=2024;
 
  constructor(private service:LeavesService){
  }

  ngOnInit(): void {
    this.service.getPendingLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
 }
}