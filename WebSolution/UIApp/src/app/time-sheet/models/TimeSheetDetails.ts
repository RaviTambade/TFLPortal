import { Activity } from "src/app/activity/Models/Activity";

export class TimeSheetDetails{
    constructor(public id:number,
                public work:string,
                public workCategory:string,
                public description:string,
                public fromTime:string,
                public toTime:string,
                public timeSheetId:number,
                public durationInMinutes:number,
                public durationInHours:string){
    }
}