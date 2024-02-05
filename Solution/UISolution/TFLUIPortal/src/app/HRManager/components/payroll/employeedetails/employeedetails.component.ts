import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HrService } from 'src/app/shared/services/Staffing/hr.service';
import { EmployeeDetails } from 'src/app/user/Models/EmployeeDetails';


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
