export class PayPackage {
    constructor(
      public employeeId: number,
      public basicSalary: number,
      public hra: number,
      public da: number,
      public lta: number,
      public variablePay: number,
    ) {}
  }