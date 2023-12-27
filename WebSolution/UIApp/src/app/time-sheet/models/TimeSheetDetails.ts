
export class TimeSheetDetails{
    constructor(public id:number,
                public employeeWorkId:number,
                public fromTime:string,
                public toTime:string,
                public timesheetId:number,
        ){
    }
}