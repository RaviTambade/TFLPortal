export class Timesheet {
    constructor(
        // public id:number,
        public date:string ,
        public fromTime:string,
        public toTime:string , 
        public description:string,
        public status:string,
        public employeeId:number,
        public taskId:number
        )
        {}
}
