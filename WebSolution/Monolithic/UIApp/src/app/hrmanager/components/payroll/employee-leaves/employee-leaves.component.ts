import { Component, Input, SimpleChanges } from '@angular/core';
import { MonthLeave } from 'src/app/leaves/Models/MonthLeave';
import { LeavesService } from 'src/app/shared/services/leaves.service';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent {

  @Input() employeeId:number|undefined;
  monthLeaves:MonthLeave[]=[];
  month:number=1;
  year:number=2024;

  constructor(private leaveService:LeavesService){
  }
  
  ngOnChanges(changes:SimpleChanges): void {
    this.leaveService.getEmployeeLeaves(changes["employeeId"].currentValue,this.month,this.year).subscribe((res)=>{
    this.monthLeaves=res;
    console.log(res);
    })
  }
}
