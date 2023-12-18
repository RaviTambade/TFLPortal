
export class TimeSheetDetails{
    constructor(public id:number,
                public work:string,
                public workCategory:string,
                public description:string,
                public fromTime:string,
                public toTime:string,
                public timeSheetId:number,
                public projectId:number,
                public projectName:string,
                public durationInMinutes:number,
                public durationInHours:string){
    }
}