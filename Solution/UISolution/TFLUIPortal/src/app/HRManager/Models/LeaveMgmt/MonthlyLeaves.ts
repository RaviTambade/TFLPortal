import { LeaveCount } from "./LeaveCount";

export class MonthlyLeaves
{
    constructor(public month:number,
        public leaveCount: LeaveCount[] ){} 
}