export class PendingLeave{
    constructor(
        public id:number,
        public employeeId:number,
        public sickLeave:string,
        public casualLeave:string,
        public paidLeave:string,
        public unpaidLeave:string
        ){}
}