import { Component, Input } from '@angular/core';
import { LeavesCount } from '../../models/LeavesCount';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';

@Component({
  selector: 'app-employee-pending-leaves',
  templateUrl: './employee-pending-leaves.component.html',
  styleUrls: ['./employee-pending-leaves.component.css']
})
export class EmployeePendingLeavesComponent {

  @Input() employeeId:number=0;
  pendingLeave:LeavesCount |undefined;
  year:number=2024;
 
  constructor(private service:LeavesService){
  }

  ngOnInit(): void {
    this.service.getAnnualAvailableLeaves(this.employeeId,this.year).subscribe((res)=>{
      this.pendingLeave=res;
      console.log(res);
    }) 
 }
}