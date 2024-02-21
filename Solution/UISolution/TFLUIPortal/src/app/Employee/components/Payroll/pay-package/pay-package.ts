import { Component, OnInit } from '@angular/core';
import { PaySlip } from 'src/app/employee/Models/Payroll/PaySlip';
import { SalaryDetails } from 'src/app/employee/Models/Payroll/SalaryDetails';
import { PayrollService } from 'src/app/employee/Services/pay-roll.service';

@Component({
  selector: 'pay-package',
  templateUrl: './pay-package.html',
})

export class PayPackage implements OnInit {

  pay: PaySlip | undefined;
  employeeId: number = 10;
  month:number=1;
  year:number=2024;
  date=new Date().toISOString().slice(0,10);
  
  constructor(private payrollSvc: PayrollService) {}
  
  ngOnInit(): void {
    this.payrollSvc.getEmployeeSalary(this.employeeId,this.month,this.year).subscribe((res) => {
     this.pay=res;
      console.log(res);
    });
  }
}