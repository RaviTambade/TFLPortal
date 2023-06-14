export class Timesheet {
    constructor(
                public timesheetId:number,
                public empFirstName:string,
                public empLastName:string,
                public projectTitle:string,
                public taskTitle:string,
                public fromtime:string,
                public totime:string  
                )
                {}
}