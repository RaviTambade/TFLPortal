import { Component} from '@angular/core';
import { PayrollService } from 'src/app/shared/services/Payroll/payroll.service';

@Component({
  selector: 'app-salaryprocessing',
  templateUrl: './salaryprocessing.html',
})
export class Salaryprocessing {

constructor(private service:PayrollService){}
 
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
