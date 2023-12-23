export class PendingLeave{
    constructor(
        public id:number,
        public roleId:number,
        public sickLeaves:number,
        public casualLeaves:number,
        public paidLeaves:number,
        public unpaidLeaves:number
        ){}
}