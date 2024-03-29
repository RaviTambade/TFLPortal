import { Component, OnInit } from '@angular/core';
import { MonthLeave } from 'src/app/leaves/Models/MonthLeave';
import { Salary } from 'src/app/resource-management/Models/Salary';
import { HrService } from 'src/app/shared/services/hr.service';
import { LeavesService } from 'src/app/shared/services/leaves.service';
import { PayrollService } from 'src/app/shared/services/payroll.service';

@Component({
  selector: 'app-salaryprocessing',
  templateUrl: './salaryprocessing.component.html',
  styleUrls: ['./salaryprocessing.component.css']
})
export class SalaryprocessingComponent {

constructor(private svc :HrService,private service:PayrollService,private leaveService:LeavesService){}
 
status:boolean= false;
employeeId:number=0;
searchString:number=0;
month:number=1;
year:number=2024;


onSearch(){
  this.employeeId=this.searchString
}

paySalary(employeeId: number){
  console.log(employeeId);
  this.svc.paySalary(this.employeeId,this.month,this.year).subscribe((res)=>{
    this.status =res;
    console.log(res);
  })
}
}
