
export class TimeSheetDetails{
    constructor(public id:number,
                public work:string,
                public workCategory:string,
                public description:string,
                public fromTime:string,
                public toTime:string,
                public timesheetId:number,
                public durationInMinutes:number,
                public durationInHours:string){
    }
}