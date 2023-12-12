export class Leave{
    constructor(
        public id:number,
        public employeeId:number,
        public fromDate:string,
        public toDate:string,
        public status:string,
        public leaveType:string
        ){}
}
