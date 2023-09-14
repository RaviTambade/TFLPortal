export class Timesheet {
    constructor(
                public timesheetId:number,
                public date:string ,
                public fromtime:string,
                public totime:string , 
                public employeeId:number,
                public projectId:number,
                public taskId:number
                )
                {}
}