export class TimesheetInfo
{
    constructor(
                public timesheetId:number,
                public taskId:number,
                public projectId:number,
                public empId:number,
                public starttime:string,
                public endtime:string  
                )
                {}
}