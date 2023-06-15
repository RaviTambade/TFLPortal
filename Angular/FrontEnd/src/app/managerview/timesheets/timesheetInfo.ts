export class TimesheetInfo
{
    constructor(
                public timesheetId:number,
                public taskId:number,
                public projectId:number,
                public empId:number,
                public fromtime:string,
                public totime:string  
                )
                {}
}