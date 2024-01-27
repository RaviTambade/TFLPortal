import { Component, Input, SimpleChanges } from '@angular/core';
import { MonthSalary } from 'src/app/resource-management/Models/MonthSalary';
import { HrService } from 'src/app/shared/services/hr.service';
import { PayrollService } from 'src/app/shared/services/payroll.service';

@Component({
  selector: 'app-monthlysalarystructure',
  templateUrl: './monthlysalarystructure.component.html',
  styleUrls: ['./monthlysalarystructure.component.css']
})
export class MonthlysalarystructureComponent {

  @Input() employeeId:number|undefined;
  salaryStructure:MonthSalary|undefined;

  constructor(private payRollService:PayrollService){}
  month:number=1;
  year:number=2024;
  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes["employeeId"].currentValue);
    this.payRollService.getEmployeeSalary(changes["employeeId"].currentValue,this.month,this.year).subscribe((res)=>{
      this.salaryStructure=res;
      console.log(res);
      console.log("🚀 ~ this.hrService.getSalaryStructure ~ res:", res);
    })
  }
}
