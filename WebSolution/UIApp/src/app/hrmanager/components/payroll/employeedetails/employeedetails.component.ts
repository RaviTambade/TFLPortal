import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/activity/Models/Employee';
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
  employee:Employee|undefined;

  ngOnChanges(changes:SimpleChanges): void {
    this.hrSvc.getEmployeeDetails(changes ["employeeId"].currentValue).subscribe((res)=>{
    this.employee=res;
    })
  }
}
