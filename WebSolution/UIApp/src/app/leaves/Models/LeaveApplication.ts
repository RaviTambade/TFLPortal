export class LeaveApplication{
    constructor(
        public id:number,
        public employeeId:number,
        public applicationDate:string,
        public fromDate:string,
        public toDate:string,
        public status:string,
        public year:number,
        public leaveType:string
        ){}
}
