import { MonthlyLeaves } from "./MonthlyLeaves";

export class AnnualLeaves
{
    constructor(public employeeId:number,
        public monthlyLeaves: MonthlyLeaves[] ){} 
}