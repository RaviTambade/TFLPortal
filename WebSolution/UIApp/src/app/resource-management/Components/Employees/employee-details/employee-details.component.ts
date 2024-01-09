import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/resource-management/Models/User';
import { HrService } from 'src/app/shared/services/hr.service';

@Component({
  selector: 'emp-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  employeeId:number |undefined;
  contactNumber:string='';
  employee:User |undefined;
  @Output() selectedEmployeeId = new EventEmitter<number>();
  constructor(private svc:HrService){}

  ngOnInit(): void {   
  }

  onSearch(contactNumber:string){
    this.svc.getEmployee(contactNumber).subscribe((res)=>{
      console.log(res);
      this.employee=res;
      this.employeeId=this.employee.id;
      this.selectedEmployeeId.emit(this.employeeId);
    })
  }
}
