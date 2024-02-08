export class RoleLeaveAllocation{
    
    constructor(
        public id:number,
        public sick:number,
        public casual:number,
        public paid:number,
        public unpaid:number,
        public financialYear:number
        ){}
}