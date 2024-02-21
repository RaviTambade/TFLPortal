export class PaySlip {
    constructor(
      public employeeId: number,
      public monthlyBasicsalary: number,
      public hra: number,
      public da: number,
      public lta: number,
      public variablePay: number,
      public deduction: number,
      public consumedPaidLeaves:number,
      public workingDays:number,
      public pf:number,
      public tax:number,
      public totalAmount:number,
      public ifsc :string,
      public firstName:string,
      public lastName:string,
      public contactNumber:string,
      public birthDate:string,
      public accountNumber:string

    ) {}
  }