import { Component} from '@angular/core';
import { BankDetails } from 'src/app/hrmanager/Models/Payroll/BankDetails';
import { PaySlip } from 'src/app/hrmanager/Models/Payroll/PaySlip';
import { Salary } from 'src/app/hrmanager/Models/Payroll/Salary';
import { BankingService } from 'src/app/hrmanager/Services/banking.service';
import { PayrollService } from 'src/app/hrmanager/Services/payroll.service';
import { User } from 'src/app/shared/Entities/UserMgmt/User';
import { MembershipService } from 'src/app/shared/services/Membership/membership.service';

@Component({
  selector: 'salaryprocessing',
  templateUrl: './salaryprocessing.html',
})
export class Salaryprocessing {

constructor(private payrollSvc: PayrollService,
  private memberShipSvc: MembershipService,
  private bankSvc: BankingService){}
  status:boolean= false;

userType: string = 'I';
  pay: PaySlip | undefined;
  employeeId: number = 10;
  month: number = 1;
  year: number = 2024;
  date = new Date().toISOString().slice(0, 10);
  personalDetails: User | undefined;
  bankDetails: BankDetails | undefined;
  salary:Salary={
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

        console.log('hii' + res.consumedPaidLeaves);
        console.log(res);
        this.memberShipSvc.getUser(res.employeeId).subscribe((res) => {
          this.personalDetails = res;
          console.log(this.personalDetails.birthDate);

          this.bankSvc.getAccountDetails(10, this.userType).subscribe((bankres) => {
            console.log( " Bank Details =", JSON.stringify(bankres));
            console.log(bankres);
            this.bankDetails= new BankDetails(bankres.accountNumber,bankres.ifscCode);

          });
        });
      });
  }

// paySalary(employeeId: number,date:string,workingDays:number,deduction:number,tax:number,pf:number,totalAmount:number){
//   this.salary.employeeId=employeeId;
//   this.salary.monthlyWorkingDays=workingDays;
//   this.salary.amount=totalAmount;
//   this.salary.tax=tax;
//   this.salary.pf=pf;
//   this.salary.payDate=date;
//   this.salary.deduction=deduction;

//   console.log(employeeId);
//   this.payrollSvc.AddSalary(this.salary).subscribe((res)=>{
//     console.log(res);
//   })
//  }
}
