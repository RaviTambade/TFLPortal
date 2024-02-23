import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/employee/Models/Payroll/Salary';
import { PayrollService } from 'src/app/employee/Services/pay-roll.service';

@Component({
  selector: 'pay-slip-details',
  templateUrl: './pay-slip-details.html',
})
export class PaySlipDetails implements OnInit {

  salary: Salary | undefined;
  salaryId: number = 1;
  
  constructor(private payrollSvc: PayrollService) {}
  
  ngOnInit(): void {
    this.payrollSvc.getEmployeeSalaryDetails(this.salaryId).subscribe((res) => {
      this.salary = res;
    });
  }
}
