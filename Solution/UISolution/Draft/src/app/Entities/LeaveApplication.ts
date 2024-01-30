export class LeaveApplication{
    constructor(
        public id:number,
        public employeeId:number,
        public createdOn:string,
        public fromDate:string,
        public toDate:string,
        public status:string,
        public leaveType:string
        ){}
}
