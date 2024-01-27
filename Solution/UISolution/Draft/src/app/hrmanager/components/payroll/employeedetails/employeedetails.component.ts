import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EmployeeDetails } from 'src/app/activity/Models/EmployeeDetails';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent{

  constructor(private hrSvc:HrService){
  }
  @Input() employeeId:number|undefined;
  employee:EmployeeDetails|undefined;

  ngOnChanges(changes:SimpleChanges): void {
    this.hrSvc.getEmployeeDetails(changes ["employeeId"].currentValue).subscribe((res)=>{
    this.employee=res;
    })
  }
}
