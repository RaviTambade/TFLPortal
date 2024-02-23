import { Component } from '@angular/core';
import { BankDetails } from 'src/app/hrmanager/Models/Payroll/BankDetails';
import { PaySlip } from 'src/app/hrmanager/Models/Payroll/PaySlip';
import { PaymentGateway } from 'src/app/hrmanager/Models/Payroll/PaymentGateway';
import { Salary } from 'src/app/hrmanager/Models/Payroll/Salary';
import { TaxDetails } from 'src/app/hrmanager/Models/Payroll/TaxDetails';
import { BankingService } from 'src/app/hrmanager/Services/banking.service';
import { PayrollService } from 'src/app/hrmanager/Services/payroll.service';
import { User } from 'src/app/shared/Entities/UserMgmt/User';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'salaryprocessing',
  templateUrl: './salaryprocessing.html',
})
export class Salaryprocessing {

  constructor(private payrollSvc: PayrollService, private memberShipSvc: MembershipService, private bankSvc: BankingService) { }

  userType: string = 'I';
  pay: PaySlip | undefined;
  employeeId: number = 10;
  month: number = 1;
  date=new Date().toISOString().slice(0,10);
  year: number = 2024;
  personalDetails: User | undefined;
  bankDetails: BankDetails = {
    accountNumber: '',
    ifscCode: ''
  };
  taxDetails:TaxDetails={
    pf: 0,
    deduction: 0,
    tax: 0
  }


  salary: Salary = {
    Id: 0,
    employeeId: 0,
    payDate: '',
    monthlyWorkingDays: 0,
    deduction: 0,
    tax: 0,
    pf: 0,
    amount: 0
  };


  ngOnInit(): void {
    this.payrollSvc.getEmployeeSalary(this.employeeId, this.month, this.year).subscribe((res) => {
      this.pay = res;
      this.memberShipSvc.getUser(res.employeeId).subscribe((res) => {
        this.personalDetails = res;
        this.bankSvc.getAccountDetails(10, this.userType).subscribe((bankres) => {
          this.bankDetails = bankres;
        });
      });
    });
  }

  paySalary(pay:PaySlip) {
    console.log(pay);
    let fundTransfer: PaymentGateway = {
      fromAcct: '39025546601',
      fromIfsc: 'MAHB0000286',
      toAcct: this.bankDetails.accountNumber,
      toIfsc: this.bankDetails.ifscCode,
      transactionType: 'EMI',
      amount: 500
    }

    this.bankSvc.fundTransfer(fundTransfer).subscribe((payTransferRes) => {
      console.log("transactionId", payTransferRes);
    

    this.salary.employeeId = pay.employeeId;
    this.salary.monthlyWorkingDays = pay.workingDays;
    this.salary.amount = pay.totalAmount;
    this.salary.tax = pay.taxDetails.tax;
    this.salary.pf = pay.taxDetails.pf;
    this.salary.payDate = this.date;
    this.salary.deduction = this.taxDetails.deduction;
    
    this.payrollSvc.AddSalary(this.salary).subscribe((res) => {
      console.log(res);
    })
  })
  }
}
