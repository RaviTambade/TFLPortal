import { Component, Input, SimpleChanges } from '@angular/core';
import { MonthSalary } from 'src/app/hrmanager/Models/Payroll/MonthSalary';
import { PayrollService } from 'src/app/hrmanager/Services/payroll.service';


@Component({
  selector: 'monthlysalarystructure',
  templateUrl: './monthlysalarystructure.html',
})
export class Monthlysalarystructure {

  @Input() employeeId:number|undefined;
  salaryStructure:MonthSalary|undefined;

  constructor(private payRollService:PayrollService){}
  month:number=1;
  year:number=2024;
  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes["employeeId"].currentValue);
    this.payRollService.getEmployeeSalary(changes["employeeId"].currentValue,this.month,this.year).subscribe((res)=>{
      // this.salaryStructure=res;
      console.log(res);
      console.log("🚀 ~ this.hrService.getSalaryStructure ~ res:", res);
    })
  }
}
