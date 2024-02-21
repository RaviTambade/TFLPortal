import { BankDetails } from './BankDetails';
import {PersonalDetails} from './PersonalDetails';
import { SalaryDetails } from './SalaryDetails';
import { TaxDetails } from './TaxDetails';


export class PaySlip {
    constructor(
      public employeeId: number,
      public  personDetails:PersonalDetails,
      public bankDetails:BankDetails,
      
      public workingDays:number,
      public consumedPaidLeaves:string,
      public month:number,
      public year:number,
   
      public salaryDetails:SalaryDetails,
      public taxDetails:TaxDetails,
      public totalAmount:number,
      ) {}
  }