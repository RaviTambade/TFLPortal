export class Timesheet {
    constructor(
        public id:number,
        public date:string ,
        public fromtime:string,
        public totime:string , 
        public description:string,
        public status:string,
        public employeeId:number,
        public taskId:number
        )
        {}
}
