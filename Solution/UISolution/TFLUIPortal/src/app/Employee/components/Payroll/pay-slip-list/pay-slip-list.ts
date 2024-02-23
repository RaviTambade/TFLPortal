import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/employee/Models/Payroll/Salary';
import { PayrollService } from 'src/app/employee/Services/pay-roll.service';

@Component({
  selector: 'pay-slip-list',
  templateUrl: './pay-slip-list.html',
})
export class PaySlipList implements OnInit {

  salaries: Salary[] | undefined;
  employeeId: number = 10;
  
  constructor(private payrollSvc: PayrollService) {}
  
  ngOnInit(): void {
    this.payrollSvc.getAllEmployeeSalaries(this.employeeId).subscribe((res) => {
      this.salaries = res;
    });
  }
}
