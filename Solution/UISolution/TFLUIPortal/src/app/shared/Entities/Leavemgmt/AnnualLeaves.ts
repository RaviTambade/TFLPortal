import { LeaveCount } from "./LeaveCount";

export class AnnualLeaves
{
    constructor(public employeeId:number,
                public leaves: LeaveCount[]){} 
}
