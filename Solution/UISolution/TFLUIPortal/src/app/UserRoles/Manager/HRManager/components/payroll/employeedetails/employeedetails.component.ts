import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EmployeeDetails } from 'src/app/shared/Entities/ResourcePool/EmployeeDetails';

import { HrService } from 'src/app/shared/services/Staffing/hr.service';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
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
