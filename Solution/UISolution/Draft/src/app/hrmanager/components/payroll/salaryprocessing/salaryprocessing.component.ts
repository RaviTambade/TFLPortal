import { Component, OnInit } from '@angular/core';
import { LeavesService } from 'src/app/shared/services/Leave/leaves.service';
import { PayrollService } from 'src/app/shared/services/Payroll/payroll.service';
import { HrService } from 'src/app/shared/services/Staffing/hr.service';

@Component({
  selector: 'app-salaryprocessing',
  templateUrl: './salaryprocessing.component.html',
  styleUrls: ['./salaryprocessing.component.css']
})
export class SalaryprocessingComponent {

constructor(private service:PayrollService,private leaveService:LeavesService){}
 
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
  this.service.paySalary(this.employeeId,this.month,this.year).subscribe((res)=>{
    this.status =res;
    console.log(res);
  })
}
}
