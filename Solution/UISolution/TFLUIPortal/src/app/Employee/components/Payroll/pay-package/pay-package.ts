import { Component, OnInit } from '@angular/core';
import { BankDetails } from 'src/app/employee/Models/Payroll/BankDetails';
import { PaySlip } from 'src/app/employee/Models/Payroll/PaySlip';
import { BankingService } from 'src/app/employee/Services/banking.service';
import { PayrollService } from 'src/app/employee/Services/pay-roll.service';
import { User } from 'src/app/shared/Entities/UserMgmt/User';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'pay-package',
  templateUrl: './pay-package.html',
})

export class PayPackage implements OnInit {
  userType: string = 'I';
  pay: PaySlip | undefined;
  employeeId: number = 10;
  month: number = 1;
  year: number = 2024;
  date = new Date().toISOString().slice(0, 10);
  personalDetails: User | undefined;
  bankDetails: BankDetails | undefined;
  constructor(
    private payrollSvc: PayrollService,
    private memberShipSvc: MembershipService,
    private bankSvc: BankingService
  ) {}

  ngOnInit(): void {
    this.payrollSvc
      .getEmployeeSalary(this.employeeId, this.month, this.year)
      .subscribe((res) => {
        this.pay = res;
        this.memberShipSvc.getUser(res.employeeId).subscribe((res) => {
          this.personalDetails = res;
          this.bankSvc.getAccountDetails(10, this.userType).subscribe((bankres) => {
            this.bankDetails= new BankDetails(bankres.accountNumber,bankres.ifscCode);
          });
        });
      });
   }
}
