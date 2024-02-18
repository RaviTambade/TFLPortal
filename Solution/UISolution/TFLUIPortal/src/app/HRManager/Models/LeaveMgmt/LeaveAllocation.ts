export class LeaveAllocation{
    
    constructor(
        public id:number,
        public roleId:number,
        public sick:number,
        public casual:number,
        public paid:number,
        public unpaid:number,
        public financialYear:number
        ){}
}