export class SalaryDetails{
    constructor(
      public Id: number,
      public employeeId: number,
      public payDate: string,
      public monthlyWorkingDays: number,
      public deduction: number,
      public tax: number,
      public pf: number,
      public amount: number,
      public firstName: string,
      public lastName: string
    ) {}
  }